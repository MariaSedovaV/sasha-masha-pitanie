
function isMobileView(){
  return document.documentElement.classList.contains('is-mobile')
    || window.matchMedia('(max-width: 768px)').matches;
}
function openAppDialog(el){
  if(!el) return;
  document.documentElement.classList.add('dialog-open');
  try {
    if(typeof el.showModal === 'function') el.showModal();
    else el.setAttribute('open', '');
  } catch {
    el.setAttribute('open', '');
  }
}
function closeAppDialog(el){
  if(!el) return;
  try {
    if(el.open) el.close();
    else el.removeAttribute('open');
  } catch {
    el.removeAttribute('open');
  }
  if(!document.querySelector('dialog[open]')) document.documentElement.classList.remove('dialog-open');
}

const STORAGE_KEY = 'sasha-masha-weekly-ration';
const FAVORITES_KEY = 'sasha-masha-favorite-recipes';
const DAILY_RANGES = {
  'Саша': { Ккал: [2210, 2487], Белки: [195, 210], Жиры: [48, 56], Углеводы: [285, 305] },
  'Маша': { Ккал: [1640, 1845], Белки: [124, 134], Жиры: [38, 47], Углеводы: [195, 212] }
};
const state = {
  ration: null,
  dayIndex: 0,
  mealIndex: 0,
  pinnedId: (() => {
    try { return Number(localStorage.getItem(STORAGE_KEY)) || null; }
    catch { return null; }
  })(),
  favorites: loadFavorites(),
  dailyPlan: null,
  dailyView: 'overview',
  dailyMealKey: null,
  dailyPersonFilter: 'both',
  recipeSearchQuery: ''
};
const $ = (id) => document.getElementById(id);
const homeView = $('homeView');
const rationView = $('rationView');
const backBtn = $('backBtn');
const shoppingBtn = $('shoppingBtn');
const dialog = $('shoppingDialog');

function formatAmount(item){ return `${item.amount} ${item.unit}`; }
function personIngredientScale(meal, person){
  const s = meal?.macros?.Саша;
  const m = meal?.macros?.Маша;
  if(!s || !m) return 0.5;
  const keys = ['Ккал', 'Белки', 'Жиры', 'Углеводы'];
  const ratios = keys.map(k => {
    const total = Number(s[k] || 0) + Number(m[k] || 0);
    if(!total) return 0.5;
    return Number(person === 'Саша' ? s[k] : m[k]) / total;
  });
  return ratios.reduce((acc, n) => acc + n, 0) / ratios.length;
}
function normalizeScaledAmount(amount, unit){
  if(unit === 'шт'){
    const rounded = Math.round(amount * 2) / 2;
    return Number.isInteger(rounded) ? rounded : rounded;
  }
  if(amount >= 100) return Math.round(amount);
  if(amount >= 10) return Math.round(amount);
  return Number(amount.toFixed(1));
}
function scaleIngredient(ing, scale){
  return { ...ing, amount: normalizeScaledAmount(Number(ing.amount || 0) * scale, ing.unit) };
}
function mealIngredientsForPerson(meal, personFilter){
  if(!meal?.ingredients?.length) return [];
  if(personFilter === 'both') return meal.ingredients.map(ing => ({ ...ing }));
  const scale = personIngredientScale(meal, personFilter);
  return meal.ingredients.map(ing => scaleIngredient(ing, scale)).filter(ing => ing.amount > 0);
}
function dailyIngredientsTitle(personFilter){
  if(personFilter === 'both') return 'Ингредиенты на двоих';
  return `Ингредиенты для ${personFilter}`;
}
function dailyShoppingTitle(personFilter){
  if(personFilter === 'both') return 'Список продуктов на двоих';
  return `Список продуктов для ${personFilter}`;
}

function loadFavorites(){
  try { return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]'); }
  catch { return []; }
}
function saveFavorites(){
  try { localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites)); }
  catch {}
  updateFavoritesCount();
  if (window.SashaCloud && typeof window.SashaCloud.setFavoritesArray === "function") {
    window.SashaCloud.setFavoritesArray(state.favorites);
  }
}
function mealKey(rationId, dayId, mealId){ return `r${rationId}|${dayId}|${mealId}`; }
function currentMeal(){ return state.ration.days[state.dayIndex].meals[state.mealIndex]; }
function currentDay(){ return state.ration.days[state.dayIndex]; }
function isFavorite(key){ return state.favorites.includes(key); }
function favoriteLabel(mealId){ return mealId.startsWith('Перекус') ? 'перекус' : mealId.toLowerCase(); }
function mealTypeBadge(mealId){
  if(mealId === 'Завтрак') return { label: 'завтрак', type: 'breakfast' };
  if(mealId === 'Обед') return { label: 'обед', type: 'lunch' };
  if(mealId === 'Ужин') return { label: 'ужин', type: 'dinner' };
  return { label: 'перекус', type: 'snack' };
}
function normalizeSearch(value){ return String(value || '').toLowerCase().trim().replace(/\s+/g, ' '); }
const INGREDIENT_SEARCH_MIN = 2;
const RECIPE_SEARCH_SUGGEST_LIMIT = 8;
const RECIPE_SEARCH_HIDE_DELAY = 3000;
let recipeSearchHideTimer = null;
function clearRecipeSearchHideTimer(){
  if(recipeSearchHideTimer){
    clearTimeout(recipeSearchHideTimer);
    recipeSearchHideTimer = null;
  }
}
function scheduleRecipeSearchHide(){
  clearRecipeSearchHideTimer();
  if(isMobileView()) return;
  const wrap = $('recipeSearchWrap');
  if(!wrap || wrap.classList.contains('is-open')) return;
  if(wrap.contains(document.activeElement)) return;
  recipeSearchHideTimer = setTimeout(() => {
    wrap.classList.remove('is-revealed');
    recipeSearchHideTimer = null;
  }, RECIPE_SEARCH_HIDE_DELAY);
}
function revealRecipeSearchPanel(){
  if(isMobileView()) return;
  clearRecipeSearchHideTimer();
  $('recipeSearchWrap')?.classList.add('is-revealed');
}
function hideRecipeSearchPanel(){
  clearRecipeSearchHideTimer();
  $('recipeSearchWrap')?.classList.remove('is-revealed');
}
function bindRecipeSearchHover(){
  const wrap = $('recipeSearchWrap');
  if(!wrap) return;
  wrap.addEventListener('mouseenter', () => {
    if(!isMobileView()) revealRecipeSearchPanel();
  });
  wrap.addEventListener('mouseleave', () => {
    if(!isMobileView()) scheduleRecipeSearchHide();
  });
  wrap.addEventListener('focusin', () => {
    if(!isMobileView()){
      clearRecipeSearchHideTimer();
      wrap.classList.add('is-revealed');
    }
  });
  wrap.addEventListener('focusout', (e) => {
    if(isMobileView() || wrap.contains(e.relatedTarget)) return;
    scheduleRecipeSearchHide();
  });
}
function matchingIngredients(meal, query){
  const q = normalizeSearch(query);
  if(!q) return [];
  return (meal.ingredients || [])
    .map(i => i.product)
    .filter(Boolean)
    .filter(product => normalizeSearch(product).includes(q));
}
function mealSearchText(meal){
  return [
    meal?.title, meal?.id,
    meal?.dish?.Саша, meal?.dish?.Маша,
    ...(meal?.ingredients || []).map(i => i.product)
  ].filter(Boolean).join(' ');
}
function matchingFields(meal, query){
  const q = normalizeSearch(query);
  const hits = [];
  if(normalizeSearch(meal.title).includes(q)) hits.push(meal.title);
  const dish = `${meal.dish?.Саша || ''} ${meal.dish?.Маша || ''}`;
  if(normalizeSearch(dish).includes(q)) hits.push('в названии блюда');
  matchingIngredients(meal, q).forEach(product => {
    if(!hits.includes(product)) hits.push(product);
  });
  return hits;
}
function searchMeals(query){
  const q = normalizeSearch(query);
  if(q.length < INGREDIENT_SEARCH_MIN) return [];
  return allMealRefs()
    .map(ref => ({ ref, matches: matchingFields(ref.meal, q) }))
    .filter(item => normalizeSearch(mealSearchText(item.ref.meal)).includes(q));
}
function searchMealsByIngredient(query){
  return searchMeals(query);
}
function ingredientCountLabel(count){
  if(count === 1) return '1 приём пищи';
  if(count < 5) return `${count} приёма пищи`;
  return `${count} приёмов пищи`;
}
function clearRecipeSearchSuggestions(){
  const panel = $('recipeSearchSuggestions');
  const input = $('recipeSearch');
  if(panel){
    panel.classList.add('hidden');
    panel.innerHTML = '';
  }
  input?.setAttribute('aria-expanded', 'false');
}
function clearRecipeSearch(){
  state.recipeSearchQuery = '';
  const input = $('recipeSearch');
  if(input) input.value = '';
  clearRecipeSearchSuggestions();
  closeAppDialog($('ingredientSearchDialog'));
}
function setRecipeSearchOpen(open){
  const wrap = $('recipeSearchWrap');
  const toggle = $('recipeSearchToggle');
  if(!wrap) return;
  wrap.classList.toggle('is-open', open);
  toggle?.setAttribute('aria-expanded', String(open));
  if(open) setTimeout(() => $('recipeSearch')?.focus(), 60);
}
function closeRecipeSearch(){
  clearRecipeSearch();
  setRecipeSearchOpen(false);
  hideRecipeSearchPanel();
}
function submitIngredientSearch(){
  const input = $('recipeSearch');
  state.recipeSearchQuery = input?.value || '';
  renderIngredientSearchDialog();
}
function renderRecipeSearchSuggestions(){
  const panel = $('recipeSearchSuggestions');
  const input = $('recipeSearch');
  if(!panel || !input) return;
  const query = normalizeSearch(input.value);
  state.recipeSearchQuery = input.value;
  if(query.length < INGREDIENT_SEARCH_MIN){
    clearRecipeSearchSuggestions();
    return;
  }
  const results = searchMealsByIngredient(query);
  if(!results.length){
    panel.classList.remove('hidden');
    input.setAttribute('aria-expanded', 'true');
    panel.innerHTML = '<div class="search-suggest-empty">Ничего не найдено</div>';
    return;
  }
  const visible = results.slice(0, RECIPE_SEARCH_SUGGEST_LIMIT);
  const more = results.length - visible.length;
  panel.classList.remove('hidden');
  input.setAttribute('aria-expanded', 'true');
  panel.innerHTML = `
    <p class="search-suggest-meta">${ingredientCountLabel(results.length)}</p>
    ${visible.map(({ ref, matches }) => {
      const type = mealTypeBadge(ref.meal.id);
      return `<button type="button" class="search-suggest-item" data-key="${ref.key}" role="option">
        <img src="${photoUrl(ref.meal)}" alt="">
        <div>
          <span class="meal-type-badge type-${type.type}">${type.label}</span>
          <strong>${ref.meal.title}</strong>
          <span class="search-suggest-meta-line">Рацион ${ref.ration.id} · ${ref.day.name}</span>
          <span class="ingredient-match">${matches.join(', ')}</span>
        </div>
      </button>`;
    }).join('')}
    ${more > 0 ? `<p class="search-suggest-more">Ещё ${more} · «Найти» покажет все</p>` : ''}`;
  panel.querySelectorAll('.search-suggest-item').forEach(btn => btn.addEventListener('click', () => {
    const ref = findMealRef(btn.dataset.key);
    if(ref) openMealRef(ref);
  }));
}
function renderIngredientSearchDialog(){
  const dialogEl = $('ingredientSearchDialog');
  const list = $('ingredientSearchList');
  const title = $('ingredientSearchTitle');
  if(!dialogEl || !list || !title) return;
  const query = normalizeSearch(state.recipeSearchQuery);
  const queryLabel = state.recipeSearchQuery.trim();
  if(!queryLabel){
    title.textContent = 'Результаты';
    list.innerHTML = `<div class="empty-state"><h3>Введите запрос</h3><p>Можно искать по блюду или продукту — например «сырники», «лосось» или «киноа».</p></div>`;
    if(!dialogEl.open) openAppDialog(dialogEl);
    return;
  }
  if(query.length < INGREDIENT_SEARCH_MIN){
    title.textContent = `«${queryLabel}»`;
    list.innerHTML = `<div class="empty-state"><h3>Слишком короткий запрос</h3><p>Введите минимум ${INGREDIENT_SEARCH_MIN} символа — например «рис» или «яйцо».</p></div>`;
    if(!dialogEl.open) openAppDialog(dialogEl);
    return;
  }
  const results = searchMealsByIngredient(query);
  title.textContent = `«${queryLabel}»`;
  if(!results.length){
    list.innerHTML = `<div class="empty-state"><h3>Ничего не найдено</h3><p>Попробуйте название блюда или продукт — «овсяноблин», «курица», «авокадо».</p></div>`;
  } else {
    list.innerHTML = `
      <p class="search-meta">${ingredientCountLabel(results.length)} по запросу «${queryLabel}»</p>
      <div class="daily-meals ingredient-search-meals">${results.map(({ ref, matches }) => {
        const type = mealTypeBadge(ref.meal.id);
        return `<button type="button" class="daily-meal" data-key="${ref.key}" aria-label="Открыть: ${ref.meal.title}, рацион ${ref.ration.id}">
          <img src="${photoUrl(ref.meal)}" alt="">
          <div>
            <span class="meal-type-badge type-${type.type}">${type.label}</span>
            <h4>${ref.meal.title}</h4>
            <p>Рацион ${ref.ration.id} · ${ref.day.name}</p>
            <span class="ingredient-match">Содержит: ${matches.join(', ')}</span>
            <span class="daily-meal-hint">Открыть рецепт →</span>
          </div>
        </button>`;
      }).join('')}</div>`;
    list.querySelectorAll('.daily-meal[data-key]').forEach(btn => btn.addEventListener('click', () => {
      const ref = findMealRef(btn.dataset.key);
      if(ref) openMealRef(ref);
    }));
  }
  if(!dialogEl.open) openAppDialog(dialogEl);
  list.scrollTop = 0;
}
function openMealRef(ref){
  const dayIndex = ref.ration.days.findIndex(d => d.id === ref.day.id);
  const mealIndex = ref.day.meals.findIndex(m => m.id === ref.meal.id);
  closeRecipeSearch();
  setRecipeSearchOpen(false);
  openRation(ref.ration.id, dayIndex, mealIndex);
}
function updateFavoritesCount(){
  const el = $('favoritesCount');
  if(!el) return;
  const n = state.favorites.length;
  el.textContent = `${n} ${n === 1 ? 'рецепт' : (n > 1 && n < 5 ? 'рецепта' : 'рецептов')}`;
}
function hasCompleteMacros(meal){ return Boolean(meal?.macros?.Саша && meal?.macros?.Маша); }
function allMealRefs(){
  const refs = [];
  window.RATIONS.forEach(ration => ration.days.forEach(day => day.meals.forEach(meal => {
    if(hasCompleteMacros(meal)) refs.push({ key: mealKey(ration.id, day.id, meal.id), ration, day, meal });
  })));
  return refs;
}
function findMealRef(key){ return allMealRefs().find(ref => ref.key === key); }
function toggleFavorite(key){
  if(isFavorite(key)) state.favorites = state.favorites.filter(item => item !== key);
  else state.favorites = [...state.favorites, key];
  saveFavorites();
}
function sumMacros(meals, person){
  return meals.reduce((acc, item) => {
    const m = item.meal.macros[person];
    ['Ккал','Белки','Жиры','Углеводы'].forEach(k => acc[k] += Number(m?.[k] || 0));
    return acc;
  }, { Ккал: 0, Белки: 0, Жиры: 0, Углеводы: 0 });
}
function sumDayMacros(day, person){
  return (day?.meals || []).reduce((acc, meal) => {
    const m = meal?.macros?.[person];
    ['Ккал','Белки','Жиры','Углеводы'].forEach(k => acc[k] += Number(m?.[k] || 0));
    return acc;
  }, { Ккал: 0, Белки: 0, Жиры: 0, Углеводы: 0 });
}
function dayMacroCardsHtml(day){
  const s = sumDayMacros(day, 'Саша');
  const m = sumDayMacros(day, 'Маша');
  return `<div class="day-macros">
    <p class="eyebrow">КБЖУ за день</p>
    <div class="dish-columns dish-columns-2">${macroCard('Саша', s)}${macroCard('Маша', m)}</div>
  </div>`;
}
function averageDailyMacros(ration, person){
  const days = ration?.days || [];
  const blank = { Ккал: 0, Белки: 0, Жиры: 0, Углеводы: 0 };
  if(!days.length) return blank;
  const sum = days.reduce((acc, day) => {
    const total = sumDayMacros(day, person);
    ['Ккал','Белки','Жиры','Углеводы'].forEach(k => acc[k] += total[k]);
    return acc;
  }, { ...blank });
  ['Ккал','Белки','Жиры','Углеводы'].forEach(k => { sum[k] = Math.round(sum[k] / days.length); });
  return sum;
}
function focusItems(ration){
  return ration?.focus?.length ? ration.focus : [
    { id: 'меню', label: 'меню', emoji: '🍽️' }
  ];
}
function focusBoardHtml(ration){
  return `<div class="focus-board">${focusItems(ration).map(item => `<div class="focus-cell"><span>${item.emoji}</span><b>${item.label}</b></div>`).join('')}</div>`;
}
function miniMacroRow(person, data){
  return `<div class="mini-macros"><span class="mini-macros-name">${person}</span><span>${data.Ккал} ккал</span><span>Б ${data.Белки}</span><span>Ж ${data.Жиры}</span><span>У ${data.Углеводы}</span></div>`;
}
function inRange(total, person){
  return Object.entries(DAILY_RANGES[person]).every(([k,[min,max]]) => total[k] >= min && total[k] <= max);
}
function combinedShopping(meals, personFilter = 'both'){
  const map = new Map();
  meals.forEach(item => mealIngredientsForPerson(item.meal, personFilter).forEach(ing => {
    const key = `${ing.product}|${ing.unit}`;
    const prev = map.get(key) || { product: ing.product, unit: ing.unit, amount: 0 };
    prev.amount += Number(ing.amount || 0);
    map.set(key, prev);
  }));
  return [...map.values()].sort((a,b) => a.product.localeCompare(b.product, 'ru')).map(i => ({...i, amount: normalizeScaledAmount(i.amount, i.unit)}));
}
function shuffle(items){
  const arr = [...items];
  for(let i = arr.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
  return arr;
}


const FOOD_PICTURES = [
  { test: /омлет|яйц|egg|omelette/i, emoji: '🍳', label: 'Омлет и яйца', colors: ['#2a2420', '#3a2c2c'] },
  { test: /каша|завтрак|овсян|киноа|полб|breakfast|bowl/i, emoji: '🥣', label: 'Завтрак-боул', colors: ['#1e2421', '#2a3328'] },
  { test: /слабосолен|красн|лосос|salmon/i, emoji: '🍣', label: 'Красная рыба', colors: ['#2a1f1f', '#3a2a22'] },
  { test: /рыб|fish/i, emoji: '🐟', label: 'Рыбное блюдо', colors: ['#1c2428', '#243038'] },
  { test: /куриц|chicken/i, emoji: '🍗', label: 'Курица', colors: ['#2a261c', '#2e3324'] },
  { test: /индейк|turkey/i, emoji: '🥙', label: 'Индейка', colors: ['#22281f', '#2c3324'] },
  { test: /говяд|теля|котлет|тефтел|фарш|meat|meatballs/i, emoji: '🍽️', label: 'Мясное блюдо', colors: ['#2a201c', '#332822'] },
  { test: /фунчоз|лапш|noodle|glass noodles/i, emoji: '🍜', label: 'Фунчоза', colors: ['#1f2428', '#2a2e24'] },
  { test: /лаваш|тост|джем|wrap|toast/i, emoji: '🥪', label: 'Лаваш и тосты', colors: ['#2a241c', '#332c22'] },
  { test: /картоф|potato/i, emoji: '🥔', label: 'Картофель', colors: ['#26221c', '#2e2a22'] },
  { test: /перекус|кефир|йогурт|сорбет|зефир|фрукт|fruit|yogurt|snack/i, emoji: '🍓', label: 'Лёгкий перекус', colors: ['#241f24', '#2a2820'] },
  { test: /салат|овощ|брокколи|тыкв|баклаж|salad|vegetable/i, emoji: '🥗', label: 'Овощное блюдо', colors: ['#1c261f', '#243024'] },
  { test: /.*/i, emoji: '🍽️', label: 'Домашнее блюдо', colors: ['#1e2421', '#2a2428'] }
];

function escapeSvgText(value){
  return String(value || '').replace(/[&<>]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[ch]));
}

function photoUrl(meal){
  const image = String(meal?.image || '');
  if (/images\/photo-/.test(image)) return image;
  const text = `${meal.id || ''} ${meal.title || ''} ${meal.photoQuery || ''} ${meal.dish?.Саша || ''} ${meal.dish?.Маша || ''}`;
  const pic = FOOD_PICTURES.find(item => item.test.test(text));
  const title = escapeSvgText(meal.title || pic.label);
  const mealName = escapeSvgText(meal.id || 'Приём пищи');
  const [a, b] = pic.colors;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 650">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${a}"/>
          <stop offset="1" stop-color="${b}"/>
        </linearGradient>
      </defs>
      <rect width="1100" height="650" rx="44" fill="url(#bg)"/>
      <text x="550" y="300" text-anchor="middle" font-size="138">${pic.emoji}</text>
      <text x="550" y="378" text-anchor="middle" font-size="42" font-family="Arial, sans-serif" font-weight="700" fill="#efeae2">${mealName}</text>
      <text x="550" y="430" text-anchor="middle" font-size="34" font-family="Arial, sans-serif" fill="#c6a56a">${title}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderHome(){
  document.body.classList.add('on-home');
  $('pageTitle').textContent = 'Рационы для Маши и Саши';
  backBtn.classList.add('hidden'); shoppingBtn.classList.add('hidden');
  homeView.classList.remove('hidden'); rationView.classList.add('hidden');
  if(state.pinnedId && !window.RATIONS.some(r => r.id === state.pinnedId)){
    state.pinnedId = null;
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }
  renderWeeklyFilter();
  updateFavoritesCount();
  const visibleRations = state.pinnedId ? window.RATIONS.filter(r => r.id === state.pinnedId) : window.RATIONS;
  $('rationGrid').innerHTML = visibleRations.map(r => {
    const s = averageDailyMacros(r, 'Саша');
    const m = averageDailyMacros(r, 'Маша');
    return `
    <button class="ration-card ${state.pinnedId === r.id ? 'pinned' : ''}" data-id="${r.id}">
      ${focusBoardHtml(r)}
      <div class="ration-card-body">${state.pinnedId === r.id ? '<span class="pin-badge">✓ Рацион недели</span>' : ''}<p class="eyebrow">Рацион ${r.id}</p><h3>${r.title}</h3><p>${r.subtitle}</p>
        <div class="card-macros">${miniMacroRow('Саша', s)}${miniMacroRow('Маша', m)}</div>
      </div>
    </button>`;
  }).join('');
  document.querySelectorAll('.ration-card').forEach(btn => btn.addEventListener('click', () => openRation(Number(btn.dataset.id))));
}

function renderWeeklyFilter(){
  const select = $('weeklySelect');
  select.innerHTML = window.RATIONS.map(r => `<option value="${r.id}">Рацион ${r.id}: ${r.title}</option>`).join('');
  select.value = String(state.pinnedId || window.RATIONS[0].id);
  if(state.pinnedId){
    const ration = window.RATIONS.find(r => r.id === state.pinnedId);
    $('filterTitle').textContent = `Закреплён: ${ration.title}`;
    $('filterText').textContent = 'На стартовом экране показан выбранный рацион недели. Можно открыть его или сбросить фильтр.';
    $('resetFilterBtn').disabled = false;
  } else {
    $('filterTitle').textContent = 'Можно закрепить один рацион';
    $('filterText').textContent = 'Выбранный рацион сохранится в браузере и останется на стартовом экране при следующих открытиях сайта.';
    $('resetFilterBtn').disabled = true;
  }
}

function pinSelectedRation(){
  state.pinnedId = Number($('weeklySelect').value);
  try { localStorage.setItem(STORAGE_KEY, String(state.pinnedId)); } catch {}
  if (window.SashaCloud && typeof window.SashaCloud.setPinned === "function") {
    window.SashaCloud.setPinned(state.pinnedId);
  }
  renderHome();
}

function resetWeeklyFilter(){
  state.pinnedId = null;
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
  if (window.SashaCloud && typeof window.SashaCloud.setPinned === "function") {
    window.SashaCloud.setPinned(null);
  }
  renderHome();
}

function openRation(id, dayIndex = 0, mealIndex = 0){
  document.body.classList.remove('on-home');
  state.ration = window.RATIONS.find(r => r.id === id); state.dayIndex = dayIndex; state.mealIndex = mealIndex;
  homeView.classList.add('hidden'); rationView.classList.remove('hidden');
  backBtn.classList.remove('hidden'); shoppingBtn.classList.remove('hidden');
  $('pageTitle').textContent = state.ration.title;
  $('rationNumber').textContent = `Рацион ${state.ration.id}`;
  $('rationTitle').textContent = state.ration.title;
  $('rationSubtitle').textContent = state.ration.subtitle;
  const focus = $('rationFocus');
  if(focus) focus.innerHTML = focusItems(state.ration).map(item => `<span class="focus-pill"><span>${item.emoji}</span>${item.label}</span>`).join('');
  renderDays(); renderMeals(); renderMealDetail();
  window.scrollTo({top:0, behavior:'smooth'});
}

function scrollActiveDayTab(){
  if(!isMobileView()) return;
  const active = document.querySelector('.day-tab.active');
  active?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}
function renderDays(){
  $('dayTabs').innerHTML = state.ration.days.map((d,i)=>`<button class="day-tab ${i===state.dayIndex?'active':''}" data-i="${i}"><span class="day-tab-short">${d.id}</span><span class="day-tab-full">${d.name}</span></button>`).join('');
  document.querySelectorAll('.day-tab').forEach(btn => btn.addEventListener('click',()=>{state.dayIndex=Number(btn.dataset.i); state.mealIndex=0; renderDays(); renderMeals(); renderMealDetail();}));
  scrollActiveDayTab();
}
function scrollActiveMealBtn(){
  if(!isMobileView()) return;
  const active = document.querySelector('.meal-btn.active');
  active?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}
function renderMeals(){
  const day = state.ration.days[state.dayIndex];
  $('selectedDayTitle').textContent = day.name;
  $('mealButtons').innerHTML = day.meals.map((m,i) => {
    const macros = m.macros?.Саша || {};
    return `<button class="meal-btn ${i===state.mealIndex?'active':''}" data-i="${i}">
      <img src="${photoUrl(m)}" alt="">
      <span class="meal-btn-copy"><strong>${m.id}</strong><span>${m.title}</span><small>${macros.Ккал || '—'} ккал · Б ${macros.Белки || '—'}</small></span>
    </button>`;
  }).join('');
  document.querySelectorAll('.meal-btn').forEach(btn => btn.addEventListener('click',()=>{state.mealIndex=Number(btn.dataset.i); renderMeals(); renderMealDetail();}));
  const totals = $('dayMacros');
  if(totals) totals.innerHTML = dayMacroCardsHtml(day);
  scrollActiveMealBtn();
}
function macroDistance(mealA, mealB, person){
  const weights = { Ккал: 1, Белки: 3, Жиры: 2, Углеводы: 1 };
  const a = mealA.macros[person];
  const b = mealB.macros[person];
  return Object.entries(weights).reduce((sum, [k, w]) => sum + w * Math.abs(Number(a?.[k] || 0) - Number(b?.[k] || 0)), 0);
}
function mealMacroDistance(refA, refB){
  return macroDistance(refA.meal, refB.meal, 'Саша') + macroDistance(refA.meal, refB.meal, 'Маша');
}
function dailyMealIndex(key){ return state.dailyPlan?.meals.findIndex(item => item.key === key) ?? -1; }
function replacementCandidates(mealKey){
  const plan = state.dailyPlan;
  const idx = dailyMealIndex(mealKey);
  if(idx === -1 || !plan) return [];
  const current = plan.meals[idx];
  return allMealRefs()
    .filter(ref => ref.meal.id === current.meal.id && ref.key !== mealKey)
    .filter(ref => {
      const testMeals = [...plan.meals];
      testMeals[idx] = ref;
      return inRange(sumMacros(testMeals, 'Саша'), 'Саша') && inRange(sumMacros(testMeals, 'Маша'), 'Маша');
    })
    .sort((a, b) => mealMacroDistance(current, a) - mealMacroDistance(current, b));
}
function pickReplacement(mealKey){
  const valid = replacementCandidates(mealKey);
  if(!valid.length) return null;
  const current = state.dailyPlan.meals[dailyMealIndex(mealKey)];
  const best = mealMacroDistance(current, valid[0]);
  const close = valid.filter(ref => mealMacroDistance(current, ref) <= best + 18);
  return close[Math.floor(Math.random() * close.length)];
}
function replaceDailyMeal(mealKey){
  const replacement = pickReplacement(mealKey);
  if(!replacement) return false;
  const idx = dailyMealIndex(mealKey);
  state.dailyPlan.meals[idx] = replacement;
  state.dailyPlan.s = sumMacros(state.dailyPlan.meals, 'Саша');
  state.dailyPlan.m = sumMacros(state.dailyPlan.meals, 'Маша');
  state.dailyPlan.source = 'С изменениями';
  state.dailyMealKey = replacement.key;
  renderDailyDialog();
  return true;
}
function dailyPersons(){
  return state.dailyPersonFilter === 'both' ? ['Саша', 'Маша'] : [state.dailyPersonFilter];
}
function macroCard(person, data){
  if(!data) return '';
  return `<div class="dish-card"><h4>${person}</h4><div class="macro-grid">
    <div class="macro"><b>${data.Ккал}</b><span>ккал</span></div>
    <div class="macro"><b>${data.Белки}</b><span>белки</span></div>
    <div class="macro"><b>${data.Жиры}</b><span>жиры</span></div>
    <div class="macro"><b>${data.Углеводы}</b><span>углеводы</span></div>
  </div></div>`;
}
function mealDetailHtml(ref, options = {}){
  const { meal, day, ration } = ref;
  const { personFilter = 'both', showReplace = false, replaceCount = 0, showDayTotals = true } = options;
  const persons = personFilter === 'both' ? ['Саша', 'Маша'] : [personFilter];
  const key = mealKey(ration.id, day.id, meal.id);
  const img = photoUrl(meal);
  const liked = isFavorite(key);
  const ingredients = mealIngredientsForPerson(meal, personFilter);
  const ingredientsTitle = dailyIngredientsTitle(personFilter);
  const replaceBlock = showReplace ? `
      <div class="daily-replace-row">
        <button type="button" class="pill daily-replace-btn" data-replace-meal ${replaceCount ? '' : 'disabled'}>Заменить на другое блюдо</button>
        <p class="daily-replace-hint">${replaceCount ? `Подберём другой «${meal.id.toLowerCase()}» с похожим БЖУ · ${replaceCount} вариантов` : 'Нет замены с сохранением нормы БЖУ на день'}</p>
      </div>` : '';
  return {
    key,
    html: `
    <div class="meal-photo"><div class="fallback">🍽️</div><img src="${img}" alt="${meal.title}" loading="lazy" onerror="this.style.display='none'"></div>
    <div class="meal-body">
      <div class="meal-heading-row">
        <div><p class="eyebrow">${day.name} · ${meal.id}</p><h2>${meal.title}</h2><p class="meal-meta">Рацион ${ration.id}</p></div>
        <button class="heart-btn ${liked ? 'active' : ''}" data-favorite-btn aria-label="${liked ? 'Убрать из избранного' : 'Добавить в избранное'}">${liked ? '♥' : '♡'}</button>
      </div>
      ${replaceBlock}
      <h3>${ingredientsTitle}</h3>
      <div class="ingredients">${ingredients.map(i=>`<span class="chip">${i.product}: ${formatAmount(i)}</span>`).join('') || '<span class="chip">Ингредиенты указаны в описании блюда</span>'}</div>
      <div class="dish-columns dish-columns-${persons.length}">${persons.map(p => `<div class="dish-card"><h4>${p}</h4><p>${meal.dish[p] || '—'}</p></div>`).join('')}</div>
      <h3>Справочно БЖУ и калории</h3>
      <div class="dish-columns dish-columns-${persons.length}">${persons.map(p => macroCard(p, meal.macros[p])).join('')}</div>
    </div>`
  };
}
function bindFavoriteBtn(container, key, rerender){
  container.querySelector('[data-favorite-btn]')?.addEventListener('click', () => {
    toggleFavorite(key);
    rerender();
  });
}
function renderMealDetail(){
  const meal = currentMeal();
  const day = currentDay();
  const ref = { meal, day, ration: state.ration };
  const { key, html } = mealDetailHtml(ref);
  $('mealDetail').innerHTML = html;
  bindFavoriteBtn($('mealDetail'), key, renderMealDetail);
}
function openShopping(){
  const r = state.ration;
  $('shoppingTitle').textContent = `${r.title}: список покупок`;
  $('shoppingList').innerHTML = r.shopping.map(i => `<div class="shop-row"><strong>${i.product}</strong><span>${formatAmount(i)}</span></div>`).join('');
  openAppDialog(dialog);
}


function renderFavorites(){
  const refs = state.favorites.map(findMealRef).filter(Boolean);
  if(!refs.length){
    $('favoritesList').innerHTML = '<div class="empty-state"><h3>Пока нет избранных рецептов</h3><p>Открой любой рацион и нажми сердечко у понравившегося приёма пищи.</p></div>';
    return;
  }
  $('favoritesList').innerHTML = refs.map(ref => `
    <article class="favorite-card">
      <img src="${photoUrl(ref.meal)}" alt="${ref.meal.title}">
      <div><span class="meal-marker">${favoriteLabel(ref.meal.id)}</span><h3>${ref.meal.title}</h3><p>Рацион ${ref.ration.id} · ${ref.day.name}</p>
      <button class="ghost remove-favorite" data-key="${ref.key}">Убрать</button></div>
    </article>`).join('');
  document.querySelectorAll('.remove-favorite').forEach(btn => btn.addEventListener('click', () => { state.favorites = state.favorites.filter(k => k !== btn.dataset.key); saveFavorites(); renderFavorites(); }));
}
function openFavorites(){ renderFavorites(); openAppDialog($('favoritesDialog')); }
function candidateDayFromExisting(){
  const days = [];
  window.RATIONS.forEach(ration => ration.days.forEach(day => {
    const meals = ['Завтрак','Обед','Ужин','Перекус 1','Перекус 2','Перекус 3'].map(id => day.meals.find(m => m.id === id)).filter(meal => meal && hasCompleteMacros(meal)).map(meal => ({ration, day, meal, key: mealKey(ration.id, day.id, meal.id)}));
    if(meals.length === 6) days.push(meals);
  }));
  const fav = new Set(state.favorites);
  return shuffle(days).sort((a,b) => b.filter(x => fav.has(x.key)).length - a.filter(x => fav.has(x.key)).length)[0];
}
function generateDailyPlan(){
  const mealIds = ['Завтрак','Обед','Ужин','Перекус 1','Перекус 2','Перекус 3'];
  const refs = allMealRefs();
  const favorites = refs.filter(ref => state.favorites.includes(ref.key));
  const byMeal = id => refs.filter(ref => ref.meal.id === id);
  const favByMeal = id => favorites.filter(ref => ref.meal.id === id);
  let best = null;
  for(let attempt = 0; attempt < 6000; attempt++){
    const chosen = mealIds.map(id => {
      const favPool = favByMeal(id);
      const pool = favPool.length && Math.random() < 0.7 ? favPool : byMeal(id);
      return pool[Math.floor(Math.random() * pool.length)];
    });
    const s = sumMacros(chosen, 'Саша');
    const m = sumMacros(chosen, 'Маша');
    const favCount = chosen.filter(item => state.favorites.includes(item.key)).length;
    const score = favCount * 1000 - Math.abs(2340 - s.Ккал) - Math.abs(1740 - m.Ккал);
    if(inRange(s, 'Саша') && inRange(m, 'Маша') && (!best || score > best.score)) best = {meals: chosen, s, m, score, source: favCount ? 'На основе избранного' : 'Случайная подборка'};
  }
  if(!best){
    const meals = candidateDayFromExisting();
    best = { meals, s: sumMacros(meals, 'Саша'), m: sumMacros(meals, 'Маша'), source: state.favorites.length ? 'Ближайший валидный день из рационов' : 'Случайный валидный день' };
  }
  return best;
}
function macroSummary(title, total){
  return `<div class="daily-total"><h4>${title}</h4><div class="macro-grid"><div class="macro"><b>${total.Ккал}</b><span>ккал</span></div><div class="macro"><b>${total.Белки}</b><span>белки</span></div><div class="macro"><b>${total.Жиры}</b><span>жиры</span></div><div class="macro"><b>${total.Углеводы}</b><span>углеводы</span></div></div></div>`;
}
function dailyPersonFilterHtml(){
  const options = [
    { id: 'both', label: 'Маша и Саша' },
    { id: 'Саша', label: 'Саша' },
    { id: 'Маша', label: 'Маша' }
  ];
  return `<div class="daily-person-filter" role="tablist" aria-label="Показать рацион для">
    ${options.map(o => `<button type="button" class="person-filter-btn ${state.dailyPersonFilter === o.id ? 'active' : ''}" data-person="${o.id}" role="tab" aria-selected="${state.dailyPersonFilter === o.id}">${o.label}</button>`).join('')}
  </div>`;
}
function renderDailyPersonFilter(){
  const el = $('dailyPersonFilter');
  if(!el) return;
  el.innerHTML = dailyPersonFilterHtml();
  el.querySelectorAll('.person-filter-btn').forEach(btn => btn.addEventListener('click', () => {
    state.dailyPersonFilter = btn.dataset.person;
    renderDailyDialog();
  }));
}
function dailyMacroBlock(plan){
  if(state.dailyPersonFilter === 'both') return `${macroSummary('Саша', plan.s)}${macroSummary('Маша', plan.m)}`;
  const person = state.dailyPersonFilter;
  return macroSummary(person, person === 'Саша' ? plan.s : plan.m);
}
function dailyMealMacroSnippet(item){
  if(state.dailyPersonFilter === 'both') return '';
  const m = item.meal.macros[state.dailyPersonFilter];
  return `<span class="daily-meal-macro">${m.Ккал} ккал · Б ${m.Белки} · Ж ${m.Жиры} · У ${m.Углеводы}</span>`;
}
function updateDailyDialogHead(){
  const inMeal = state.dailyView === 'meal';
  $('dailyDialogTitle').textContent = inMeal ? 'Рецепт' : 'Предложение дневного рациона';
  $('dailyDialogEyebrow').textContent = inMeal ? 'Рацион дня' : 'На основе избранного';
  $('dailyBackBtn').classList.toggle('hidden', !inMeal);
  $('regenerateDaily').classList.toggle('hidden', inMeal);
}
function renderDailyOverview(){
  const plan = state.dailyPlan;
  if(!plan) return;
  const shopping = combinedShopping(plan.meals, state.dailyPersonFilter);
  const shoppingTitle = dailyShoppingTitle(state.dailyPersonFilter);
  $('dailyPlan').innerHTML = `
    <div class="daily-status"><span>${plan.source}</span><span>БЖУ и калории в норме</span></div>
    <div class="dish-columns dish-columns-${dailyPersons().length}">${dailyMacroBlock(plan)}</div>
    ${state.dailyPersonFilter !== 'both' ? `<p class="daily-scale-note">Граммовка продуктов пересчитана пропорционально порции ${state.dailyPersonFilter} по БЖУ блюда.</p>` : ''}
    <h3>Меню на день</h3>
    <div class="daily-meals">${plan.meals.map(item => `
      <button type="button" class="daily-meal" data-key="${item.key}" aria-label="Открыть рецепт: ${item.meal.title}">
        <img src="${photoUrl(item.meal)}" alt="">
        <div>
          <span class="meal-marker">${favoriteLabel(item.meal.id)}</span>
          <h4>${item.meal.title}</h4>
          <p>Рацион ${item.ration.id} · ${item.day.name}</p>
          ${dailyMealMacroSnippet(item)}
          <span class="daily-meal-hint">Подробнее →</span>
        </div>
      </button>`).join('')}</div>
    <h3>${shoppingTitle}</h3>
    <div class="shopping-list compact">${shopping.map(i => `<div class="shop-row"><strong>${i.product}</strong><span>${formatAmount(i)}</span></div>`).join('')}</div>`;
  document.querySelectorAll('.daily-meal[data-key]').forEach(btn => btn.addEventListener('click', () => openDailyMeal(btn.dataset.key)));
}
function renderDailyMealDetail(){
  const ref = findMealRef(state.dailyMealKey);
  if(!ref){ backToDailyOverview(); return; }
  const replaceCount = replacementCandidates(state.dailyMealKey).length;
  const { key, html } = mealDetailHtml(ref, {
    personFilter: state.dailyPersonFilter,
    showReplace: true,
    replaceCount,
    showDayTotals: false
  });
  $('dailyPlan').innerHTML = `<article class="meal-detail daily-meal-detail">${html}</article>`;
  bindFavoriteBtn($('dailyPlan'), key, renderDailyMealDetail);
  $('dailyPlan').querySelector('[data-replace-meal]')?.addEventListener('click', () => replaceDailyMeal(state.dailyMealKey));
}
function renderDailyDialog(){
  renderDailyPersonFilter();
  if(state.dailyView === 'meal') renderDailyMealDetail();
  else renderDailyOverview();
  updateDailyDialogHead();
}
function openDailyMeal(key){
  state.dailyView = 'meal';
  state.dailyMealKey = key;
  renderDailyDialog();
  $('dailyPlan').scrollTop = 0;
}
function backToDailyOverview(){
  state.dailyView = 'overview';
  state.dailyMealKey = null;
  renderDailyDialog();
}
function regenerateDailyPlan(){
  state.dailyPlan = generateDailyPlan();
  state.dailyView = 'overview';
  state.dailyMealKey = null;
  renderDailyDialog();
  $('dailyPlan').scrollTop = 0;
}
function openDailyPlan(){
  if(!state.dailyPlan) regenerateDailyPlan();
  else {
    state.dailyView = 'overview';
    state.dailyMealKey = null;
    renderDailyDialog();
  }
  openAppDialog($('dailyDialog'));
}

backBtn.addEventListener('click', renderHome);
$('recipeSearchToggle')?.addEventListener('click', (e) => {
  e.stopPropagation();
  const wrap = $('recipeSearchWrap');
  if(isMobileView()){
    const open = !wrap?.classList.contains('is-open');
    setRecipeSearchOpen(open);
    if(open) setTimeout(() => $('recipeSearch')?.focus(), 60);
  } else {
    revealRecipeSearchPanel();
    $('recipeSearch')?.focus();
  }
});
document.addEventListener('click', (e) => {
  const wrap = $('recipeSearchWrap');
  if(!wrap || homeView.classList.contains('hidden')) return;
  if(isMobileView() && wrap.classList.contains('is-open') && !wrap.contains(e.target)) setRecipeSearchOpen(false);
});
$('recipeSearchForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  submitIngredientSearch();
});
$('recipeSearch')?.addEventListener('input', () => {
  renderRecipeSearchSuggestions();
});
$('recipeSearch')?.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeRecipeSearch();
});
$('closeIngredientSearch')?.addEventListener('click', () => closeAppDialog($('ingredientSearchDialog')));
shoppingBtn.addEventListener('click', openShopping);
$('closeShopping').addEventListener('click', () => closeAppDialog(dialog));
$('pinRationBtn').addEventListener('click', pinSelectedRation);
$('resetFilterBtn').addEventListener('click', resetWeeklyFilter);
$('favoritesBtn').addEventListener('click', openFavorites);
$('dailyPlanBtn').addEventListener('click', openDailyPlan);
$('closeFavorites').addEventListener('click', () => closeAppDialog($('favoritesDialog')));
$('closeDaily').addEventListener('click', () => closeAppDialog($('dailyDialog')));
$('regenerateDaily').addEventListener('click', regenerateDailyPlan);
$('dailyBackBtn').addEventListener('click', backToDailyOverview);
bindRecipeSearchHover();
function currentTheme(){
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}
function applyTheme(theme){
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('sasha-theme', theme);
  const btn = $('theme-toggle');
  if(btn) btn.textContent = theme === 'light' ? 'Тёмная' : 'Светлая';
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute('content', theme === 'light' ? '#f3eee4' : '#0b0c10');
}

function boot(){
  if(!window.RATIONS?.length){
    $('bootError')?.classList.remove('hidden');
    return;
  }
  applyTheme(currentTheme());
  $('theme-toggle')?.addEventListener('click', () => {
    applyTheme(currentTheme() === 'light' ? 'dark' : 'light');
  });
  renderHome();
}

window.sashaPitanieReload = function(){
  try { state.favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]'); }
  catch { state.favorites = []; }
  if(!Array.isArray(state.favorites)) state.favorites = [];
  try {
    const pin = localStorage.getItem(STORAGE_KEY);
    state.pinnedId = pin ? Number(pin) : null;
  } catch { state.pinnedId = null; }
  updateFavoritesCount();
  if(document.body.classList.contains('on-home')) renderHome();
};

boot();
