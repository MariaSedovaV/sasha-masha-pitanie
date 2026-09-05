(function (global) {
  const MACRO_KEYS = ["Ккал", "Белки", "Жиры", "Углеводы"];
  const DEFAULT_USERS = [
    {
      id: "sasha",
      name: "Саша",
      gender: "male",
      targets: { Ккал: [2210, 2487], Белки: [195, 210], Жиры: [48, 56], Углеводы: [285, 305] },
      at: 1,
    },
    {
      id: "masha",
      name: "Маша",
      gender: "female",
      targets: { Ккал: [1640, 1845], Белки: [124, 134], Жиры: [38, 47], Углеводы: [195, 212] },
      at: 1,
    },
  ];

  const COOK_BLOCKS = {
    ПН: { cookDay: "ВС", cookTime: "18:00", cover: "ПН–ВТ", eatPrep: "вечером накануне" },
    ВТ: { cookDay: "ВС", cookTime: "18:00", cover: "ПН–ВТ", eatPrep: "вечером накануне" },
    СР: { cookDay: "ВТ", cookTime: "18:00", cover: "СР–ЧТ", eatPrep: "вечером накануне" },
    ЧТ: { cookDay: "ВТ", cookTime: "18:00", cover: "СР–ЧТ", eatPrep: "вечером накануне" },
    ПТ: { cookDay: "ЧТ", cookTime: "18:00", cover: "ПТ–СБ", eatPrep: "вечером накануне" },
    СБ: { cookDay: "ЧТ", cookTime: "18:00", cover: "ПТ–СБ", eatPrep: "вечером накануне" },
    ВС: { cookDay: "ВС", cookTime: "11:00", cover: "ВС", eatPrep: "в тот же день" },
  };

  const EAT_TIMES = {
    Завтрак: "08:00",
    Обед: "13:00",
    Ужин: "19:00",
    "Перекус 1": "10:30",
    "Перекус 2": "16:00",
    "Перекус 3": "21:00",
  };

  const DAY_LABEL = {
    ПН: "понедельник",
    ВТ: "вторник",
    СР: "среду",
    ЧТ: "четверг",
    ПТ: "пятницу",
    СБ: "субботу",
    ВС: "воскресенье",
  };

  let baseRations = null;
  let editMode = false;
  let listeners = [];

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function clone(v) {
    return JSON.parse(JSON.stringify(v));
  }

  function cloud() {
    return global.SashaCloud ? global.SashaCloud.snapshot() : {};
  }

  function midpoint(range) {
    if (!Array.isArray(range) || range.length < 2) return Number(range) || 0;
    return Math.round((Number(range[0]) + Number(range[1])) / 2);
  }

  function activeUsers() {
    const fromCloud = (cloud().users || []).filter((u) => u && !u.deleted);
    if (!fromCloud.length) return clone(DEFAULT_USERS);
    const byId = new Map(fromCloud.map((u) => [String(u.id), u]));
    DEFAULT_USERS.forEach((u) => {
      if (!byId.has(String(u.id))) byId.set(String(u.id), u);
    });
    return [...byId.values()].sort((a, b) => String(a.name).localeCompare(String(b.name), "ru"));
  }

  function rangesMap() {
    const map = {};
    activeUsers().forEach((u) => {
      map[u.name] = u.targets || {};
    });
    return map;
  }

  function customMeals() {
    return (cloud().customMeals || []).filter((m) => m && !m.deleted);
  }

  function customRations() {
    return (cloud().customRations || []).filter((r) => r && !r.deleted);
  }

  function snackCountForUser(user) {
    const gender = String(user?.gender || "").toLowerCase();
    if (gender === "female" || gender === "ж" || gender === "woman") return 2;
    if (gender === "male" || gender === "м" || gender === "man") return 3;
    // fallback by known names
    if (user?.name === "Маша") return 2;
    if (user?.name === "Саша") return 3;
    return 3;
  }

  function mealSlotsForUser(user) {
    const snacks = snackCountForUser(user);
    const slots = ["Завтрак", "Обед", "Ужин", "Перекус 1", "Перекус 2"];
    if (snacks >= 3) slots.push("Перекус 3");
    return slots;
  }

  function catalogByType() {
    const map = {
      Завтрак: [],
      Обед: [],
      Ужин: [],
      "Перекус 1": [],
      "Перекус 2": [],
      "Перекус 3": [],
    };
    customMeals().forEach((m) => {
      const type = m.mealType || "Обед";
      if (!map[type]) map[type] = [];
      map[type].push(m);
    });
    (ensureBase() || []).forEach((ration) => {
      (ration.days || []).forEach((day) => {
        (day.meals || []).forEach((meal) => {
          const type = meal.id;
          if (!map[type]) return;
          map[type].push(meal);
        });
      });
    });
    // dedupe by title+type
    Object.keys(map).forEach((type) => {
      const seen = new Set();
      map[type] = map[type].filter((m) => {
        const key = `${m.title}|${type}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return Boolean(m.macros);
      });
    });
    return map;
  }

  function inTargetRange(macros, targets) {
    if (!macros || !targets) return false;
    return MACRO_KEYS.every((k) => {
      const range = targets[k];
      if (!Array.isArray(range)) return true;
      const v = Number(macros[k] || 0);
      return v >= Number(range[0]) && v <= Number(range[1]);
    });
  }

  function scoreDay(macros, targets) {
    return MACRO_KEYS.reduce((sum, k) => {
      const mid = midpoint(targets[k]);
      return sum + Math.abs(Number(macros[k] || 0) - mid);
    }, 0);
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickDayMeals(focusUser, catalog) {
    const slots = mealSlotsForUser(focusUser);
    const persons = activeUsers().map((u) => u.name);
    const snackPool = [
      ...(catalog["Перекус 1"] || []),
      ...(catalog["Перекус 2"] || []),
      ...(catalog["Перекус 3"] || []),
    ];
    let best = null;
    for (let attempt = 0; attempt < 1800; attempt += 1) {
      const meals = [];
      let ok = true;
      for (const slot of slots) {
        let pool = catalog[slot] || [];
        if (slot.startsWith("Перекус") && (!pool.length || Math.random() < 0.35)) pool = snackPool;
        if (!pool.length) {
          ok = false;
          break;
        }
        const template = pool[Math.floor(Math.random() * Math.min(pool.length, 48))];
        const meal = clone(template);
        meal.id = slot;
        meal.macros = meal.macros || {};
        persons.forEach((p) => {
          if (!meal.macros[p]) {
            const base = meal.macros[focusUser.name] || Object.values(meal.macros)[0] || { Ккал: 200, Белки: 15, Жиры: 5, Углеводы: 20 };
            const ratio = p === focusUser.name ? 1 : (p === "Маша" ? 0.75 : 0.9);
            meal.macros[p] = {
              Ккал: Math.round(Number(base.Ккал || 0) * ratio),
              Белки: Math.round(Number(base.Белки || 0) * ratio),
              Жиры: Math.round(Number(base.Жиры || 0) * ratio),
              Углеводы: Math.round(Number(base.Углеводы || 0) * ratio),
            };
          }
        });
        meals.push(meal);
      }
      if (!ok) continue;

      const totals = meals.reduce((acc, meal) => {
        const m = meal.macros[focusUser.name] || {};
        MACRO_KEYS.forEach((k) => { acc[k] += Number(m[k] || 0); });
        return acc;
      }, { Ккал: 0, Белки: 0, Жиры: 0, Углеводы: 0 });

      const targetKcal = midpoint(focusUser.targets?.Ккал);
      const scale = targetKcal && totals.Ккал ? targetKcal / totals.Ккал : 1;
      const clamped = Math.min(1.35, Math.max(0.7, scale));
      const scaledMeals = meals.map((meal) => {
        const next = clone(meal);
        persons.forEach((p) => {
          const src = next.macros[p] || {};
          next.macros[p] = {
            Ккал: Math.round(Number(src.Ккал || 0) * clamped),
            Белки: Math.round(Number(src.Белки || 0) * clamped),
            Жиры: Math.round(Number(src.Жиры || 0) * clamped),
            Углеводы: Math.round(Number(src.Углеводы || 0) * clamped),
          };
        });
        next.ingredients = (next.ingredients || []).map((ing) => ({
          ...ing,
          amount: scaleAmount(ing.amount, clamped, ing.unit),
        }));
        return next;
      });

      const scaledTotals = scaledMeals.reduce((acc, meal) => {
        const m = meal.macros[focusUser.name] || {};
        MACRO_KEYS.forEach((k) => { acc[k] += Number(m[k] || 0); });
        return acc;
      }, { Ккал: 0, Белки: 0, Жиры: 0, Углеводы: 0 });

      // soft protein window ±12% if exact range fails after scale
      const softTargets = {};
      MACRO_KEYS.forEach((k) => {
        const range = focusUser.targets?.[k] || [0, 9999];
        const pad = k === "Белки" ? 0.08 : 0.05;
        softTargets[k] = [
          Math.floor(range[0] * (1 - pad)),
          Math.ceil(range[1] * (1 + pad)),
        ];
      });
      if (!inTargetRange(scaledTotals, softTargets)) continue;
      const score = scoreDay(scaledTotals, focusUser.targets);
      if (!best || score < best.score) best = { meals: scaledMeals, totals: scaledTotals, score };
      if (score < 55) break;
    }
    return best;
  }

  function makeHero(color, emoji) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 420"><rect width="720" height="420" rx="42" fill="${color}"/><text x="455" y="285" font-size="142">${emoji}</text></svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  function generateWeeklyRation(focusUserName, title) {
    const users = activeUsers();
    const focusUser = users.find((u) => u.name === focusUserName) || users[0];
    if (!focusUser) throw new Error("no-user");
    const catalog = catalogByType();
    const dayIds = [
      ["ПН", "Понедельник"],
      ["ВТ", "Вторник"],
      ["СР", "Среда"],
      ["ЧТ", "Четверг"],
      ["ПТ", "Пятница"],
      ["СБ", "Суббота"],
      ["ВС", "Воскресенье"],
    ];
    // batch cooking: same lunch/dinner for ПН/ВТ, СР/ЧТ, ПТ/СБ
    const blocks = [
      ["ПН", "ВТ"],
      ["СР", "ЧТ"],
      ["ПТ", "СБ"],
    ];
    const blockMeals = {};
    for (const [d1] of blocks) {
      const picked = pickDayMeals(focusUser, catalog);
      if (!picked) throw new Error("generate-failed");
      blockMeals[d1] = picked;
    }
    const days = dayIds.map(([id, name]) => {
      let sourceDay = id;
      for (const [a, b] of blocks) {
        if (id === b) sourceDay = a;
      }
      let picked = blockMeals[sourceDay];
      if (id === "ВС" || !picked) {
        picked = pickDayMeals(focusUser, catalog);
      }
      if (!picked) throw new Error("generate-failed-day");
      // for pair days keep lunch/dinner/snacks shared, vary breakfast
      let meals = clone(picked.meals);
      if (id !== sourceDay && id !== "ВС") {
        const breakfastPool = catalog.Завтрак || [];
        if (breakfastPool.length) {
          const b = clone(breakfastPool[Math.floor(Math.random() * breakfastPool.length)]);
          b.id = "Завтрак";
          meals = meals.map((m) => (m.id === "Завтрак" ? b : m));
        }
      }
      return { id, name, meals };
    });

    const snacks = snackCountForUser(focusUser);
    const ration = {
      id: `gen-${uid()}`,
      title: title || `Рацион для ${focusUser.name}`,
      subtitle: `Автосборка под КБЖУ · ${focusUser.name} · ${snacks} перекуса`,
      color: "#d8e2dc",
      hero: makeHero("#d8e2dc", "✦"),
      focus: [
        { id: "меню", label: "авто", emoji: "✦" },
        { id: focusUser.name.toLowerCase(), label: focusUser.name, emoji: "👤" },
      ],
      days,
      shopping: [],
      generatedFor: focusUser.name,
      gender: focusUser.gender || (snacks === 2 ? "female" : "male"),
      custom: true,
      at: Date.now(),
      updatedAt: Date.now(),
    };
    ration.shopping = rebuildShopping(ration);
    return ration;
  }

  async function saveGeneratedRation(ration) {
    if (!global.SashaCloud || typeof global.SashaCloud.upsertCustomRation !== "function") {
      return Promise.reject(new Error("cloud-unavailable"));
    }
    await global.SashaCloud.upsertCustomRation(ration);
    refreshRations();
    return ration;
  }

  function ensureBase() {
    if (!baseRations && Array.isArray(global.RATIONS)) {
      baseRations = clone(global.RATIONS);
    }
    return baseRations || [];
  }

  function mealSlotKey(dayId, mealId) {
    return `${dayId}|${mealId}`;
  }

  function applyPatches(rations) {
    const patches = cloud().rationPatches || {};
    return (rations || []).map((ration) => {
      const patch = patches[String(ration.id)];
      if (!patch || patch.deleted) return ration;
      const next = clone(ration);
      const mealMap = patch.meals || {};
      next.days = (next.days || []).map((day) => {
        const meals = [];
        (day.meals || []).forEach((meal) => {
          const key = mealSlotKey(day.id, meal.id);
          const override = mealMap[key];
          if (!override) {
            meals.push(meal);
            return;
          }
          if (override.deleted) return;
          meals.push({ ...meal, ...override.meal, id: meal.id });
        });
        Object.keys(mealMap).forEach((key) => {
          const [dayId, mealId] = key.split("|");
          if (dayId !== day.id) return;
          const override = mealMap[key];
          if (!override || override.deleted || override.replace) return;
          if ((day.meals || []).some((m) => m.id === mealId)) return;
          if (override.meal) meals.push(clone(override.meal));
        });
        day.meals = meals;
        return day;
      });
      if (Array.isArray(patch.added)) {
        patch.added.forEach((item) => {
          if (!item || item.deleted || !item.meal) return;
          const day = next.days.find((d) => d.id === item.dayId);
          if (!day) return;
          if (day.meals.some((m) => m.id === item.meal.id)) return;
          day.meals.push(clone(item.meal));
        });
      }
      next.shopping = rebuildShopping(next);
      return next;
    });
  }

  function rebuildShopping(ration) {
    const counts = new Map();
    (ration.days || []).forEach((day) => {
      (day.meals || []).forEach((meal) => {
        (meal.ingredients || []).forEach((ing) => {
          const key = `${ing.product}|${ing.unit}`;
          const prev = counts.get(key) || { product: ing.product, unit: ing.unit, amount: 0 };
          prev.amount += Number(ing.amount || 0);
          counts.set(key, prev);
        });
      });
    });
    return [...counts.values()]
      .map((i) => ({ ...i, amount: Math.round(i.amount) }))
      .sort((a, b) => String(a.product).localeCompare(String(b.product), "ru"));
  }

  function refreshRations() {
    const base = ensureBase();
    const patched = applyPatches(clone(base));
    const generated = customRations().map((r) => clone(r));
    // keep numeric ids first, then custom generated
    const byKey = new Map();
    patched.forEach((r) => byKey.set(String(r.id), r));
    generated.forEach((r) => byKey.set(String(r.id), r));
    global.RATIONS = [...byKey.values()].sort((a, b) => {
      const an = Number(a.id);
      const bn = Number(b.id);
      if (!Number.isNaN(an) && !Number.isNaN(bn)) return an - bn;
      if (!Number.isNaN(an)) return -1;
      if (!Number.isNaN(bn)) return 1;
      return String(a.title || "").localeCompare(String(b.title || ""), "ru");
    });
    listeners.forEach((fn) => {
      try { fn(); } catch {}
    });
    publishCookingPlan();
    return global.RATIONS;
  }

  let publishingPlan = false;
  function compactPlan(plan) {
    return JSON.stringify({
      rationId: plan?.rationId ?? null,
      title: plan?.title || "",
      items: plan?.items || [],
    });
  }
  function buildCookingPlan() {
    const pinned = cloud().pinned?.id;
    const ration = (global.RATIONS || []).find((r) => String(r.id) === String(pinned));
    if (!ration) {
      return { rationId: null, title: "", items: [], at: Date.now() };
    }
    const items = [];
    const seen = new Set();
    (ration.days || []).forEach((day) => {
      (day.meals || []).forEach((meal) => {
        const s = scheduleFor(ration.id, day.id, meal.id);
        if (!s.cook?.time || s.cook.kind === "none") return;
        const cookDay = s.cook.dayId || day.id;
        const key = [cookDay, s.cook.time, meal.id, meal.title, s.cook.cover || ""].join("|");
        if (seen.has(key)) return;
        seen.add(key);
        items.push({
          weekday: cookDay,
          time: s.cook.time,
          mealType: meal.id,
          title: meal.title,
          cover: s.cook.cover || "",
          kind: s.cook.kind || "same-day",
          eatDay: day.id,
        });
      });
    });
    return { rationId: ration.id, title: ration.title, items, at: Date.now() };
  }
  function publishCookingPlan() {
    if (publishingPlan) return;
    if (!global.SashaCloud || typeof global.SashaCloud.setCookingPlan !== "function") return;
    const plan = buildCookingPlan();
    if (compactPlan(plan) === compactPlan(cloud().cookingPlan)) return;
    publishingPlan = true;
    Promise.resolve(global.SashaCloud.setCookingPlan(plan)).finally(() => {
      publishingPlan = false;
    });
  }

  function sumDayPerson(day, person) {
    return (day?.meals || []).reduce((acc, meal) => {
      const m = meal?.macros?.[person];
      MACRO_KEYS.forEach((k) => { acc[k] += Number(m?.[k] || 0); });
      return acc;
    }, { Ккал: 0, Белки: 0, Жиры: 0, Углеводы: 0 });
  }

  function remainingForPerson(day, person, skipMealId) {
    const ranges = rangesMap()[person];
    const target = {};
    MACRO_KEYS.forEach((k) => { target[k] = midpoint(ranges?.[k] || [0, 0]); });
    const used = (day?.meals || [])
      .filter((m) => m.id !== skipMealId)
      .reduce((acc, meal) => {
        const m = meal?.macros?.[person];
        MACRO_KEYS.forEach((k) => { acc[k] += Number(m?.[k] || 0); });
        return acc;
      }, { Ккал: 0, Белки: 0, Жиры: 0, Углеводы: 0 });
    const rem = {};
    MACRO_KEYS.forEach((k) => { rem[k] = Math.max(0, target[k] - used[k]); });
    return rem;
  }

  function scaleAmount(amount, scale, unit) {
    const n = Number(amount || 0) * scale;
    if (unit === "шт") {
      const rounded = Math.round(n * 2) / 2;
      return rounded < 0.5 ? 0.5 : rounded;
    }
    if (n >= 10) return Math.max(1, Math.round(n));
    return Math.max(0.1, Number(n.toFixed(1)));
  }

  function scaleMealToTarget(template, focusPerson, targetMacros, allPersons) {
    const meal = clone(template);
    const persons = allPersons?.length ? allPersons : Object.keys(meal.macros || {});
    if (!persons.includes(focusPerson)) persons.unshift(focusPerson);

    const base = meal.macros?.[focusPerson] || meal.macros?.[persons[0]] || {};
    const baseKcal = Number(base.Ккал || 0) || 1;
    const targetKcal = Number(targetMacros.Ккал || baseKcal) || baseKcal;
    const scale = targetKcal / baseKcal;

    meal.macros = meal.macros || {};
    persons.forEach((person) => {
      const src = meal.macros[person] || base;
      const next = {};
      MACRO_KEYS.forEach((k) => {
        if (person === focusPerson && targetMacros[k] != null) {
          next[k] = Math.max(0, Math.round(Number(targetMacros[k])));
        } else {
          next[k] = Math.max(0, Math.round(Number(src[k] || 0) * scale));
        }
      });
      meal.macros[person] = next;
    });

    meal.ingredients = (meal.ingredients || []).map((ing) => ({
      ...ing,
      amount: scaleAmount(ing.amount, scale, ing.unit),
    }));

    meal.dish = meal.dish || {};
    persons.forEach((person) => {
      const text = meal.dish[person] || meal.dish[focusPerson] || meal.title || "";
      meal.dish[person] = scaleDishText(text, scale);
    });

    meal.balancedFor = focusPerson;
    meal.balanceScale = Number(scale.toFixed(3));
    return meal;
  }

  function scaleDishText(text, scale) {
    return String(text || "").replace(/(\d+(?:[.,]\d+)?)\s*г/gi, (_, n) => {
      const v = scaleAmount(String(n).replace(",", "."), scale, "г");
      return `${v}г`;
    });
  }

  function defaultSchedule(dayId, mealId) {
    const eatTime = EAT_TIMES[mealId] || "12:00";
    const isMain = mealId === "Обед" || mealId === "Ужин";
    const isBreakfast = mealId === "Завтрак";
    if (isBreakfast) {
      return {
        cook: {
          label: `Готовить в ${DAY_LABEL[dayId] || dayId} · 07:30`,
          time: "07:30",
          dayId,
          kind: "same-day",
        },
        eat: {
          label: `Есть в ${eatTime}`,
          time: eatTime,
          dayId,
        },
      };
    }
    if (isMain) {
      const block = COOK_BLOCKS[dayId] || COOK_BLOCKS.ВС;
      return {
        cook: {
          label: `Готовить в ${DAY_LABEL[block.cookDay] || block.cookDay} · ${block.cookTime} · на ${block.cover}`,
          time: block.cookTime,
          dayId: block.cookDay,
          cover: block.cover,
          kind: "batch",
        },
        eat: {
          label: `Есть в ${eatTime}`,
          time: eatTime,
          dayId,
        },
      };
    }
    return {
      cook: {
        label: "Без готовки · собрать за 5 минут",
        time: null,
        dayId,
        kind: "none",
      },
      eat: {
        label: `Есть в ${eatTime}`,
        time: eatTime,
        dayId,
      },
    };
  }

  function scheduleFor(rationId, dayId, mealId) {
    const key = `r${rationId}|${dayId}|${mealId}`;
    const custom = cloud().schedules?.[key];
    if (custom && !custom.deleted) {
      return {
        cook: custom.cook || defaultSchedule(dayId, mealId).cook,
        eat: custom.eat || defaultSchedule(dayId, mealId).eat,
      };
    }
    return defaultSchedule(dayId, mealId);
  }

  function scheduleMarkersHtml(rationId, dayId, mealId) {
    const s = scheduleFor(rationId, dayId, mealId);
    return `<div class="schedule-markers" aria-label="График готовки и приёма">
      <span class="schedule-pill cook" title="График готовки"><i aria-hidden="true">⏱</i><b>Готовка</b><em>${escapeHtml(s.cook.label)}</em></span>
      <span class="schedule-pill eat" title="График приёма пищи"><i aria-hidden="true">🍽</i><b>Приём</b><em>${escapeHtml(s.eat.label)}</em></span>
    </div>`;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getPatch(rationId) {
    const existing = cloud().rationPatches?.[String(rationId)];
    if (existing && !existing.deleted) return clone(existing);
    return { meals: {}, added: [], at: Date.now() };
  }

  function savePatch(rationId, patch) {
    if (!global.SashaCloud || typeof global.SashaCloud.setRationPatch !== "function") {
      return Promise.reject(new Error("cloud-unavailable"));
    }
    patch = { ...(patch || {}), updatedAt: Date.now(), at: Date.now() };
    return global.SashaCloud.setRationPatch(rationId, patch).then(() => {
      refreshRations();
    });
  }

  function replaceMeal(rationId, dayId, mealId, template, focusPerson) {
    const ration = (global.RATIONS || []).find((r) => r.id === rationId);
    const day = ration?.days?.find((d) => d.id === dayId);
    if (!day) return Promise.reject(new Error("day-missing"));
    const persons = activeUsers().map((u) => u.name);
    const remaining = remainingForPerson(day, focusPerson, mealId);
    if (remaining.Ккал < 80) remaining.Ккал = 120;
    const scaled = scaleMealToTarget(template, focusPerson, remaining, persons);
    scaled.id = mealId;
    const patch = getPatch(rationId);
    patch.meals = patch.meals || {};
    patch.meals[mealSlotKey(dayId, mealId)] = {
      replace: true,
      meal: scaled,
      focusPerson,
      updatedAt: Date.now(),
      at: Date.now(),
    };
    return savePatch(rationId, patch);
  }

  function deleteMeal(rationId, dayId, mealId) {
    const patch = getPatch(rationId);
    patch.meals = patch.meals || {};
    patch.meals[mealSlotKey(dayId, mealId)] = {
      deleted: true,
      updatedAt: Date.now(),
      at: Date.now(),
    };
    return savePatch(rationId, patch);
  }

  function addMealToDay(rationId, dayId, template, focusPerson, mealId) {
    const ration = (global.RATIONS || []).find((r) => r.id === rationId);
    const day = ration?.days?.find((d) => d.id === dayId);
    if (!day) return Promise.reject(new Error("day-missing"));
    const id = mealId || `Дополнение ${day.meals.length + 1}`;
    const persons = activeUsers().map((u) => u.name);
    const remaining = remainingForPerson(day, focusPerson, null);
    if (remaining.Ккал < 80) remaining.Ккал = 150;
    const scaled = scaleMealToTarget(template, focusPerson, remaining, persons);
    scaled.id = id;
    const patch = getPatch(rationId);
    patch.added = Array.isArray(patch.added) ? patch.added : [];
    patch.added.push({
      id: uid(),
      dayId,
      meal: scaled,
      focusPerson,
      at: Date.now(),
      updatedAt: Date.now(),
    });
    return savePatch(rationId, patch);
  }

  function upsertCustomMealFromForm(data) {
    const meal = {
      id: data.id || uid(),
      title: data.title || "Новое блюдо",
      mealType: data.mealType || "Обед",
      dish: data.dish || {},
      ingredients: data.ingredients || [],
      macros: data.macros || {},
      image: data.image || "",
      photoQuery: data.photoQuery || data.title || "healthy meal",
      at: Date.now(),
      updatedAt: Date.now(),
    };
    if (!global.SashaCloud || typeof global.SashaCloud.upsertCustomMeal !== "function") {
      return Promise.reject(new Error("cloud-unavailable"));
    }
    return global.SashaCloud.upsertCustomMeal(meal).then(() => meal);
  }

  function upsertUserFromForm(data) {
    const user = {
      id: data.id || uid(),
      name: String(data.name || "").trim(),
      gender: data.gender || "female",
      targets: data.targets,
      active: data.active !== false,
      at: Date.now(),
      updatedAt: Date.now(),
    };
    if (!user.name) return Promise.reject(new Error("name-required"));
    if (!global.SashaCloud || typeof global.SashaCloud.upsertUser !== "function") {
      return Promise.reject(new Error("cloud-unavailable"));
    }
    return global.SashaCloud.upsertUser(user).then(() => user);
  }

  function balancePreview(day, focusPerson, template) {
    const remaining = remainingForPerson(day, focusPerson, null);
    const persons = activeUsers().map((u) => u.name);
    const scaled = scaleMealToTarget(template, focusPerson, remaining, persons);
    const after = clone(remaining);
    MACRO_KEYS.forEach((k) => {
      after[k] = Math.max(0, remaining[k] - Number(scaled.macros?.[focusPerson]?.[k] || 0));
    });
    return { remaining, scaled, after };
  }

  function setEditMode(on) {
    editMode = !!on;
    document.documentElement.classList.toggle("edit-mode", editMode);
    listeners.forEach((fn) => {
      try { fn(); } catch {}
    });
  }

  function isEditMode() {
    return editMode;
  }

  function subscribe(fn) {
    if (typeof fn === "function") listeners.push(fn);
  }

  function libraryOptions(mealType) {
    const customs = customMeals().filter((m) => !mealType || m.mealType === mealType || !m.mealType);
    const fromRations = [];
    const seen = new Set();
    (ensureBase() || []).forEach((ration) => {
      (ration.days || []).forEach((day) => {
        (day.meals || []).forEach((meal) => {
          if (mealType && meal.id !== mealType && !String(meal.id).startsWith("Перекус")) return;
          const key = `${meal.title}|${meal.id}`;
          if (seen.has(key)) return;
          seen.add(key);
          fromRations.push({
            id: `base:${ration.id}:${day.id}:${meal.id}:${meal.title}`,
            title: meal.title,
            mealType: meal.id,
            dish: meal.dish,
            ingredients: meal.ingredients,
            macros: meal.macros,
            image: meal.image,
            source: `Рацион ${ration.id}`,
          });
        });
      });
    });
    return {
      custom: customs,
      catalog: fromRations.slice(0, 120),
    };
  }

  global.SashaEditor = {
    uid,
    activeUsers,
    rangesMap,
    customMeals,
    refreshRations,
    remainingForPerson,
    scaleMealToTarget,
    replaceMeal,
    deleteMeal,
    addMealToDay,
    upsertCustomMealFromForm,
    upsertUserFromForm,
    balancePreview,
    scheduleFor,
    scheduleMarkersHtml,
    defaultSchedule,
    setEditMode,
    isEditMode,
    subscribe,
    libraryOptions,
    sumDayPerson,
    MACRO_KEYS,
    DEFAULT_USERS,
    snackCountForUser,
    mealSlotsForUser,
    generateWeeklyRation,
    saveGeneratedRation,
    customRations,
    publishCookingPlan,
  };

  // Capture base rations immediately; patches apply on cloud sync / DOM ready.
  if (Array.isArray(global.RATIONS)) {
    baseRations = clone(global.RATIONS);
  }

  function bootEditor() {
    ensureBase();
    refreshRations();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootEditor);
  } else {
    bootEditor();
  }

  if (global.SashaCloud && typeof global.SashaCloud.subscribe === "function") {
    global.SashaCloud.subscribe(() => {
      refreshRations();
    });
  }
})(window);
