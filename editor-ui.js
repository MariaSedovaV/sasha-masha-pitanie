(function () {
  const $ = (id) => document.getElementById(id);

  function openDialog(el) {
    if (!el) return;
    document.documentElement.classList.add("dialog-open");
    try {
      if (typeof el.showModal === "function") el.showModal();
      else el.setAttribute("open", "");
    } catch {
      el.setAttribute("open", "");
    }
  }

  function closeDialog(el) {
    if (!el) return;
    try {
      if (el.open) el.close();
      else el.removeAttribute("open");
    } catch {
      el.removeAttribute("open");
    }
    if (!document.querySelector("dialog[open]")) document.documentElement.classList.remove("dialog-open");
  }

  function toast(message, ok = true) {
    let el = $("editorToast");
    if (!el) {
      el = document.createElement("div");
      el.id = "editorToast";
      el.className = "editor-toast";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.toggle("ok", ok);
    el.classList.toggle("err", !ok);
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 2800);
  }

  function personOptions(selected) {
    return (window.SashaEditor?.activeUsers() || [])
      .map((u) => `<option value="${u.name}" ${u.name === selected ? "selected" : ""}>${u.name}</option>`)
      .join("");
  }

  function parseIngredients(text) {
    return String(text || "")
      .split(/\n|;/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const m = line.match(/^(.+?)[:\-–]\s*([\d.,]+)\s*(г|шт|мл)?$/i);
        if (m) return { product: m[1].trim(), amount: Number(String(m[2]).replace(",", ".")), unit: (m[3] || "г").toLowerCase() };
        return { product: line, amount: 1, unit: "шт" };
      });
  }

  function macroFields(prefix, values = {}) {
    return ["Ккал", "Белки", "Жиры", "Углеводы"].map((k) => `
      <label class="field">
        <span>${k}</span>
        <input type="number" min="0" step="1" name="${prefix}_${k}" value="${values[k] ?? ""}" required />
      </label>`).join("");
  }

  function currentContext() {
    const ration = window.state?.ration;
    const day = ration?.days?.[window.state.dayIndex];
    const meal = day?.meals?.[window.state.mealIndex];
    return { ration, day, meal };
  }

  function renderUsersPanel() {
    const list = $("usersList");
    if (!list) return;
    const users = window.SashaEditor.activeUsers();
    list.innerHTML = users.map((u) => {
      const t = u.targets || {};
      const snacks = window.SashaEditor.snackCountForUser(u);
      return `<article class="studio-card user-card">
        <div>
          <h3>${u.name}</h3>
          <p>${t.Ккал?.[0] || "—"}–${t.Ккал?.[1] || "—"} ккал · Б ${t.Белки?.[0] || "—"}–${t.Белки?.[1] || "—"} · Ж ${t.Жиры?.[0] || "—"}–${t.Жиры?.[1] || "—"} · У ${t.Углеводы?.[0] || "—"}–${t.Углеводы?.[1] || "—"}</p>
          <p>${u.gender === "female" ? "Женский" : u.gender === "male" ? "Мужской" : "Пол не указан"} · ${snacks} перекуса</p>
        </div>
      </article>`;
    }).join("");
  }

  function openUsersDialog() {
    if (!window.SashaEditor) {
      toast("Редактор ещё не загрузился. Обновите страницу.", false);
      return;
    }
    renderUsersPanel();
    openDialog($("usersDialog"));
  }

  function openMealCreateDialog() {
    if (!window.SashaEditor) {
      toast("Редактор ещё не загрузился. Обновите страницу.", false);
      return;
    }
    const users = window.SashaEditor.activeUsers();
    const focus = users[0]?.name || "Саша";
    $("mealCreateBody").innerHTML = `
      <form id="mealCreateForm" class="studio-form">
        <label class="field"><span>Название блюда</span><input name="title" required placeholder="Например, паста с индейкой" /></label>
        <label class="field"><span>Тип приёма</span>
          <select name="mealType">
            <option>Завтрак</option><option selected>Обед</option><option>Ужин</option>
            <option>Перекус 1</option><option>Перекус 2</option><option>Перекус 3</option>
          </select>
        </label>
        <label class="field"><span>Для кого считать эталонную порцию</span>
          <select name="focusPerson">${personOptions(focus)}</select>
        </label>
        <label class="field"><span>Описание порции для выбранного человека</span>
          <textarea name="dish" rows="2" placeholder="165г индейки+70г пасты+томаты"></textarea>
        </label>
        <label class="field"><span>Ингредиенты на двоих / семью (по строке: продукт: 200 г)</span>
          <textarea name="ingredients" rows="4" placeholder="индейка: 285 г&#10;паста: 120 г&#10;помидоры: 270 г"></textarea>
        </label>
        <p class="studio-hint">КБЖУ для эталонной порции выбранного человека — сайт сам пересчитает граммовки при вставке в день.</p>
        <div class="macro-fields">${macroFields("macro")}</div>
        <div class="studio-actions">
          <button type="submit" class="pill">Сохранить в библиотеку</button>
          <button type="button" class="ghost" data-close-meal-create>Отмена</button>
        </div>
      </form>`;
    openDialog($("mealCreateDialog"));
    $("mealCreateForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const focusPerson = String(fd.get("focusPerson"));
      const macros = {};
      macros[focusPerson] = {
        Ккал: Number(fd.get("macro_Ккал")),
        Белки: Number(fd.get("macro_Белки")),
        Жиры: Number(fd.get("macro_Жиры")),
        Углеводы: Number(fd.get("macro_Углеводы")),
      };
      window.SashaEditor.activeUsers().forEach((u) => {
        if (u.name === focusPerson) return;
        const ratio = u.name === "Маша" ? 0.75 : 0.9;
        macros[u.name] = {
          Ккал: Math.round(macros[focusPerson].Ккал * ratio),
          Белки: Math.round(macros[focusPerson].Белки * ratio),
          Жиры: Math.round(macros[focusPerson].Жиры * ratio),
          Углеводы: Math.round(macros[focusPerson].Углеводы * ratio),
        };
      });
      const dish = {};
      dish[focusPerson] = String(fd.get("dish") || "");
      window.SashaEditor.activeUsers().forEach((u) => {
        if (!dish[u.name]) dish[u.name] = dish[focusPerson];
      });
      try {
        await window.SashaEditor.upsertCustomMealFromForm({
          title: String(fd.get("title")),
          mealType: String(fd.get("mealType")),
          dish,
          ingredients: parseIngredients(fd.get("ingredients")),
          macros,
        });
        toast("Блюдо сохранено и доступно на всех устройствах");
        closeDialog($("mealCreateDialog"));
      } catch {
        toast("Не удалось сохранить блюдо", false);
      }
    });
    $("mealCreateBody").querySelector("[data-close-meal-create]")?.addEventListener("click", () => closeDialog($("mealCreateDialog")));
  }

  function openReplaceDialog() {
    const { ration, day, meal } = currentContext();
    if (!ration || !day || !meal) {
      toast("Сначала откройте блюдо в рационе", false);
      return;
    }
    const lib = window.SashaEditor.libraryOptions(meal.id);
    const options = [
      ...lib.custom.map((m) => ({ ...m, group: "Ваши блюда" })),
      ...lib.catalog.map((m) => ({ ...m, group: "Из рационов" })),
    ];
    const focus = window.SashaEditor.activeUsers()[0]?.name || "Саша";
    $("mealReplaceBody").innerHTML = `
      <form id="mealReplaceForm" class="studio-form">
        <p class="studio-lead">Замена для <strong>${meal.title}</strong> · ${day.name}. Выберите человека — порция подстроится под остаток его дневного КБЖУ.</p>
        <label class="field"><span>Считать порцию для</span><select name="focusPerson">${personOptions(focus)}</select></label>
        <label class="field"><span>Новое блюдо</span>
          <select name="mealRef" required>
            <option value="">Выберите блюдо…</option>
            ${options.map((m, i) => `<option value="${i}">${m.group}: ${m.title}</option>`).join("")}
          </select>
        </label>
        <div id="replacePreview" class="balance-preview empty">Выберите блюдо, чтобы увидеть расчёт порции</div>
        <div class="studio-actions">
          <button type="submit" class="pill">Заменить и пересчитать</button>
          <button type="button" class="ghost" data-close-replace>Отмена</button>
        </div>
      </form>`;
    openDialog($("mealReplaceDialog"));

    const form = $("mealReplaceForm");
    const preview = $("replacePreview");
    function updatePreview() {
      const fd = new FormData(form);
      const idx = Number(fd.get("mealRef"));
      const person = String(fd.get("focusPerson"));
      if (!options[idx]) {
        preview.className = "balance-preview empty";
        preview.textContent = "Выберите блюдо, чтобы увидеть расчёт порции";
        return;
      }
      const result = window.SashaEditor.balancePreview(day, person, options[idx]);
      const macros = result.scaled.macros[person];
      preview.className = "balance-preview";
      preview.innerHTML = `
        <div><span>Остаток дня до замены</span><strong>${result.remaining.Ккал} ккал · Б ${result.remaining.Белки}</strong></div>
        <div><span>Новая порция для ${person}</span><strong>${macros.Ккал} ккал · Б ${macros.Белки} · Ж ${macros.Жиры} · У ${macros.Углеводы}</strong></div>
        <div><span>Масштаб граммовок</span><strong>×${result.scaled.balanceScale}</strong></div>`;
    }
    form.addEventListener("change", updatePreview);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const idx = Number(fd.get("mealRef"));
      const person = String(fd.get("focusPerson"));
      if (!options[idx]) return;
      try {
        await window.SashaEditor.replaceMeal(ration.id, day.id, meal.id, options[idx], person);
        toast("Блюдо заменено, порции пересчитаны");
        closeDialog($("mealReplaceDialog"));
        if (typeof window.renderMealDetail === "function") window.renderMealDetail();
        if (typeof window.renderMeals === "function") window.renderMeals();
        if (typeof window.renderDays === "function") window.renderDays();
        if (typeof window.openRation === "function") window.openRation(ration.id, window.state.dayIndex, window.state.mealIndex);
      } catch {
        toast("Не удалось заменить блюдо", false);
      }
    });
    $("mealReplaceBody").querySelector("[data-close-replace]")?.addEventListener("click", () => closeDialog($("mealReplaceDialog")));
  }

  function openAddMealDialog() {
    const { ration, day } = currentContext();
    if (!ration || !day) {
      toast("Сначала откройте рацион", false);
      return;
    }
    const lib = window.SashaEditor.libraryOptions();
    const options = [
      ...lib.custom.map((m) => ({ ...m, group: "Ваши блюда" })),
      ...lib.catalog.slice(0, 80).map((m) => ({ ...m, group: "Из рационов" })),
    ];
    const focus = window.SashaEditor.activeUsers()[0]?.name || "Саша";
    $("mealAddBody").innerHTML = `
      <form id="mealAddForm" class="studio-form">
        <p class="studio-lead">Добавление в <strong>${day.name}</strong>. Порция подстроится под остаток КБЖУ выбранного человека.</p>
        <label class="field"><span>Считать порцию для</span><select name="focusPerson">${personOptions(focus)}</select></label>
        <label class="field"><span>Тип приёма</span>
          <select name="mealType">
            <option>Завтрак</option><option>Обед</option><option>Ужин</option>
            <option>Перекус 1</option><option>Перекус 2</option><option>Перекус 3</option>
            <option>Дополнение</option>
          </select>
        </label>
        <label class="field"><span>Блюдо</span>
          <select name="mealRef" required>
            <option value="">Выберите блюдо…</option>
            ${options.map((m, i) => `<option value="${i}">${m.group}: ${m.title}</option>`).join("")}
          </select>
        </label>
        <div class="studio-actions">
          <button type="submit" class="pill">Добавить с балансом</button>
          <button type="button" class="ghost" data-close-add>Отмена</button>
        </div>
      </form>`;
    openDialog($("mealAddDialog"));
    $("mealAddForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const idx = Number(fd.get("mealRef"));
      const person = String(fd.get("focusPerson"));
      const mealType = String(fd.get("mealType"));
      if (!options[idx]) return;
      try {
        await window.SashaEditor.addMealToDay(ration.id, day.id, options[idx], person, mealType);
        toast("Блюдо добавлено в день");
        closeDialog($("mealAddDialog"));
        if (typeof window.openRation === "function") window.openRation(ration.id, window.state.dayIndex, 0);
      } catch {
        toast("Не удалось добавить блюдо", false);
      }
    });
    $("mealAddBody").querySelector("[data-close-add]")?.addEventListener("click", () => closeDialog($("mealAddDialog")));
  }

  async function deleteCurrentMeal() {
    const { ration, day, meal } = currentContext();
    if (!ration || !day || !meal) return;
    if (!confirm(`Удалить «${meal.title}» из ${day.name}?`)) return;
    try {
      await window.SashaEditor.deleteMeal(ration.id, day.id, meal.id);
      toast("Блюдо удалено");
      if (typeof window.openRation === "function") {
        window.openRation(ration.id, window.state.dayIndex, 0);
      }
    } catch {
      toast("Не удалось удалить", false);
    }
  }

  function openEditStudioDialog() {
    if (!window.SashaEditor) {
      toast("Редактор ещё не загрузился. Обновите страницу.", false);
      return;
    }
    const rations = window.RATIONS || [];
    const pinned = window.state?.pinnedId;
    const current = window.state?.ration?.id;
    const selected = current || pinned || rations[0]?.id;
    $("editStudioBody").innerHTML = `
      <form id="editStudioForm" class="studio-form">
        <p class="studio-lead">Выберите рацион — откроем его с панелью правок: замена, добавление, удаление блюд и график готовки/приёма.</p>
        <label class="field"><span>Рацион</span>
          <select name="rationId" required>
            ${rations.map((r) => `<option value="${r.id}" ${String(r.id) === String(selected) ? "selected" : ""}>Рацион ${r.id}: ${r.title}</option>`).join("")}
          </select>
        </label>
        <div class="studio-actions">
          <button type="submit" class="pill">Открыть редактор</button>
          <button type="button" class="ghost" data-close-edit-studio>Отмена</button>
        </div>
      </form>`;
    openDialog($("editStudioDialog"));
    $("editStudioForm").addEventListener("submit", (e) => {
      e.preventDefault();
      try {
        const fd = new FormData(e.target);
        const id = fd.get("rationId");
        const numeric = Number(id);
        const rationId = Number.isNaN(numeric) ? id : numeric;
        window.SashaEditor.setEditMode(true);
        closeDialog($("editStudioDialog"));
        if (typeof window.openRation === "function") window.openRation(rationId, 0, 0);
        toast("Редактор открыт — в карточке блюда есть кнопки правок");
        const btn = $("toggleEditModeBtn");
        if (btn) {
          btn.classList.add("active");
          btn.innerHTML = "<span>✎</span><strong>Режим правок</strong><small>Включён</small>";
        }
      } catch (err) {
        console.error(err);
        toast("Не удалось открыть редактор", false);
      }
    });
    $("editStudioBody").querySelector("[data-close-edit-studio]")?.addEventListener("click", () => closeDialog($("editStudioDialog")));
  }

  function openGenerateDialog() {
    const users = window.SashaEditor.activeUsers();
    const focus = users.find((u) => u.name === "Саша")?.name || users[0]?.name || "Саша";
    $("generateBody").innerHTML = `
      <form id="generateForm" class="studio-form">
        <p class="studio-lead">Соберём неделю из каталога блюд под нормы выбранного человека. У женщин — 2 перекуса, у мужчин — 3. Обеды и ужины готовятся блоками на два дня.</p>
        <label class="field"><span>Для кого считать КБЖУ</span>
          <select name="focusPerson">${personOptions(focus)}</select>
        </label>
        <label class="field"><span>Название рациона</span>
          <input name="title" placeholder="Например, Автосборка для Саши" />
        </label>
        <div id="generateHint" class="balance-preview"></div>
        <div class="studio-actions">
          <button type="submit" class="pill">Собрать и сохранить</button>
          <button type="button" class="ghost" data-close-generate>Отмена</button>
        </div>
      </form>`;
    openDialog($("generateDialog"));
    const form = $("generateForm");
    const hint = $("generateHint");
    function updateHint() {
      const name = String(new FormData(form).get("focusPerson"));
      const user = window.SashaEditor.activeUsers().find((u) => u.name === name);
      const snacks = window.SashaEditor.snackCountForUser(user);
      const t = user?.targets || {};
      hint.innerHTML = `<div><span>Перекусов</span><strong>${snacks}</strong></div>
        <div><span>Цель ккал</span><strong>${t.Ккал?.[0] || "—"}–${t.Ккал?.[1] || "—"}</strong></div>
        <div><span>Белки</span><strong>${t.Белки?.[0] || "—"}–${t.Белки?.[1] || "—"}</strong></div>`;
    }
    form.addEventListener("change", updateHint);
    updateHint();
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const focusPerson = String(fd.get("focusPerson"));
      const title = String(fd.get("title") || "").trim();
      const submit = form.querySelector('[type="submit"]');
      if (submit) {
        submit.disabled = true;
        submit.textContent = "Собираем…";
      }
      try {
        const ration = window.SashaEditor.generateWeeklyRation(focusPerson, title || undefined);
        await window.SashaEditor.saveGeneratedRation(ration);
        toast("Рацион собран и сохранён для всех устройств");
        closeDialog($("generateDialog"));
        if (typeof window.renderHome === "function") window.renderHome();
        if (typeof window.openRation === "function") window.openRation(ration.id, 0, 0);
      } catch (err) {
        console.error(err);
        toast("Не удалось собрать рацион в заданных нормах. Попробуйте ещё раз.", false);
      } finally {
        if (submit) {
          submit.disabled = false;
          submit.textContent = "Собрать и сохранить";
        }
      }
    });
    $("generateBody").querySelector("[data-close-generate]")?.addEventListener("click", () => closeDialog($("generateDialog")));
  }

  function openScheduleDialog() {
    const { ration, day, meal } = currentContext();
    if (!ration || !day || !meal) return;
    const current = window.SashaEditor.scheduleFor(ration.id, day.id, meal.id);
    $("scheduleBody").innerHTML = `
      <form id="scheduleForm" class="studio-form">
        <p class="studio-lead">График для <strong>${meal.title}</strong> · ${day.name}</p>
        <label class="field"><span>Готовка — подпись</span><input name="cookLabel" value="${current.cook.label.replace(/"/g, "&quot;")}" /></label>
        <label class="field"><span>Время готовки</span><input name="cookTime" type="time" value="${current.cook.time || ""}" /></label>
        <label class="field"><span>Приём пищи — подпись</span><input name="eatLabel" value="${current.eat.label.replace(/"/g, "&quot;")}" /></label>
        <label class="field"><span>Время приёма</span><input name="eatTime" type="time" value="${current.eat.time || ""}" /></label>
        <div class="studio-actions">
          <button type="submit" class="pill">Сохранить график</button>
          <button type="button" class="ghost" data-close-schedule>Отмена</button>
        </div>
      </form>`;
    openDialog($("scheduleDialog"));
    $("scheduleForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const key = `r${ration.id}|${day.id}|${meal.id}`;
      const cookTime = String(fd.get("cookTime") || "");
      const eatTime = String(fd.get("eatTime") || "");
      try {
        await window.SashaCloud.setSchedule(key, {
          cook: {
            label: String(fd.get("cookLabel") || ""),
            time: cookTime || null,
            dayId: day.id,
          },
          eat: {
            label: String(fd.get("eatLabel") || ""),
            time: eatTime || null,
            dayId: day.id,
          },
        });
        toast("График сохранён на всех устройствах");
        closeDialog($("scheduleDialog"));
        if (typeof window.renderMealDetail === "function") window.renderMealDetail();
      } catch {
        toast("Не удалось сохранить график", false);
      }
    });
    $("scheduleBody").querySelector("[data-close-schedule]")?.addEventListener("click", () => closeDialog($("scheduleDialog")));
  }

  function bindUserForm() {
    const form = $("userCreateForm");
    if (!form || form.dataset.bound) return;
    form.dataset.bound = "1";
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const gender = String(fd.get("gender") || "female");
      const targets = {
        Ккал: [Number(fd.get("kcalMin")), Number(fd.get("kcalMax"))],
        Белки: [Number(fd.get("pMin")), Number(fd.get("pMax"))],
        Жиры: [Number(fd.get("fMin")), Number(fd.get("fMax"))],
        Углеводы: [Number(fd.get("cMin")), Number(fd.get("cMax"))],
      };
      try {
        await window.SashaEditor.upsertUserFromForm({ name, gender, targets });
        toast(`Пользователь ${name} сохранён`);
        form.reset();
        renderUsersPanel();
        if (typeof window.sashaPitanieReload === "function") window.sashaPitanieReload();
      } catch {
        toast("Не удалось сохранить пользователя", false);
      }
    });
  }

  function editToolbarHtml() {
    if (!window.SashaEditor?.isEditMode()) return "";
    return `<div class="edit-toolbar">
      <button type="button" class="ghost edit-action" data-edit="replace">Заменить</button>
      <button type="button" class="ghost edit-action" data-edit="add">Добавить</button>
      <button type="button" class="ghost edit-action" data-edit="delete">Удалить</button>
      <button type="button" class="ghost edit-action" data-edit="schedule">График</button>
    </div>`;
  }

  function bindEditToolbar(root) {
    root?.querySelectorAll("[data-edit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.edit;
        if (action === "replace") openReplaceDialog();
        if (action === "add") openAddMealDialog();
        if (action === "delete") deleteCurrentMeal();
        if (action === "schedule") openScheduleDialog();
      });
    });
  }

  function init() {
    $("openUsersBtn")?.addEventListener("click", () => {
      bindUserForm();
      openUsersDialog();
    });
    $("openMealCreateBtn")?.addEventListener("click", openMealCreateDialog);
    $("toggleEditModeBtn")?.addEventListener("click", openEditStudioDialog);
    $("generateRationBtn")?.addEventListener("click", openGenerateDialog);
    $("closeUsers")?.addEventListener("click", () => closeDialog($("usersDialog")));
    $("closeMealCreate")?.addEventListener("click", () => closeDialog($("mealCreateDialog")));
    $("closeMealReplace")?.addEventListener("click", () => closeDialog($("mealReplaceDialog")));
    $("closeMealAdd")?.addEventListener("click", () => closeDialog($("mealAddDialog")));
    $("closeSchedule")?.addEventListener("click", () => closeDialog($("scheduleDialog")));
    $("closeEditStudio")?.addEventListener("click", () => closeDialog($("editStudioDialog")));
    $("closeGenerate")?.addEventListener("click", () => closeDialog($("generateDialog")));
    bindUserForm();
  }

  window.SashaEditorUI = {
    editToolbarHtml,
    bindEditToolbar,
    openReplaceDialog,
    openAddMealDialog,
    openMealCreateDialog,
    openUsersDialog,
    openScheduleDialog,
    openEditStudioDialog,
    openGenerateDialog,
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
