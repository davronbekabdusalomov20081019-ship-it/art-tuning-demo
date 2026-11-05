// ===== Booking bots =====
// TODO: replace with the real bot links before launch.
const BOTS = {
  max: 'https://max.ru/',
  telegram: 'https://t.me/',
};

// ===== Content =====
const PRICES = [
  { id: 'salon', label: 'Перетяжка салона', items: [
    ['Перетяжка сидений салона', 'Легковые и грузовые авто любой сложности', 'от 96 000 ₽'],
    ['Перетяжка обшивки дверей', 'Верх, вставка, подлокотник, карман — с двух сторон, экокожа', 'от 24 000 ₽'],
    ['Перетяжка торпедо', 'Верх в экокожу — 80 000 ₽, низ — от 70 000 ₽', 'от 70 000 ₽'],
    ['Потолок в алькантару (джип)', 'Потолок и стойки, оригинал или аналоги, покраска потолочного пластика', 'от 80 000 ₽'],
    ['Перетяжка салона с дизайном', 'Уникальный интерьер по вашему эскизу', 'от 75 000 ₽'],
    ['Отдельные элементы интерьера', 'Подлокотник, стойки, карты дверей — по элементам', 'от 2 500 ₽'],
  ]},
  { id: 'wheel', label: 'Руль и КПП', items: [
    ['Руль «Премиум»', 'Натуральная кожа (Австрия), около 12 часов. Нитка и шов — на выбор', '15 000 ₽'],
    ['Руль «Эконом»', 'Экокожа, без подогрева, около 4 часов', '5 000 ₽'],
    ['Покраска руля', 'Если кожа без порывов — возвращаем цвет и вид', '4 500 ₽'],
    ['Перетяжка ручки КПП', 'Занимает 1–1,5 часа', '2 500 ₽'],
  ]},
  { id: 'seats', label: 'Ремонт сидений', items: [
    ['Авточехлы на заказ', 'Индивидуальный пошив под вашу модель', 'от 18 000 ₽'],
    ['Установка подогрева сидений', 'Монтаж и подключение', 'от 10 000 ₽'],
    ['Покраска кожи сидений', 'Одно кресло, лицевая часть — 14 000 ₽', 'от 9 000 ₽'],
    ['Ремонт автокресла', 'Замена одного элемента: кожа — 5 000 ₽, ткань — 4 500 ₽', 'от 4 500 ₽'],
    ['Поролон боковой поддержки', 'Ремонт поролона 2 500 ₽ + разборка кресла 1 500 ₽', 'от 4 000 ₽'],
  ]},
  { id: 'comfort', label: 'SRS и шумоизоляция', items: [
    ['Шумоизоляция автомобиля', 'Пол, багажник, арки, потолок, двери. Седан — 80 000 ₽, паркетник — 95 000 ₽, джип — 120 000 ₽', 'от 80 000 ₽'],
    ['Восстановление SRS после ДТП', 'Подушки безопасности, перетяжка торпедо, замена крышки руля', 'от 5 000 ₽'],
    ['Скрытая установка видеорегистратора', 'Спрячем провода и подключим', '1 500 ₽'],
  ]},
  { id: 'detail', label: 'Детейлинг', items: [
    ['Оклейка зон риска', 'Антигравийная плёнка от сколов и царапин', 'от 60 000 ₽'],
    ['Химчистка салона', 'Со снятием сидений. Седан — от 12 000 ₽, джип — от 15 000 ₽', 'от 12 000 ₽'],
    ['Детейлинг интерьера', 'Комплексный уход за салоном', 'от 4 000 ₽'],
    ['Покраска кожи салона', 'Убираем потёртости, возвращаем цвет', 'от 3 500 ₽'],
    ['Покраска пластика салона', 'Царапины на панелях и ручках', 'от 2 000 ₽'],
    ['Ремонт вмятин без покраски', 'Аккуратно устраняем дефекты кузова', 'от 1 000 ₽'],
  ]},
  { id: 'special', label: 'Спецтехника и мото', items: [
    ['Кресла спецтехники', 'Тракторы, погрузчики, экскаваторы, грейдеры, автобусы', 'от 19 000 ₽'],
    ['Сиденья мототехники', 'Снегоходы, квадроциклы', 'от 6 000 ₽'],
    ['Тренажёры и спортинвентарь', 'С заменой наполнителя и основания', 'от 5 000 ₽'],
  ]},
];

// [file, category, caption, size] — size: '' | 'tall' | 'wide'
const WORKS = [
  ['w17', 'salon', 'Mercedes G-класс — коньячная кожа', 'wide'],
  ['w01', 'seats', 'Сиденья в чёрную кожу с ромбом', 'tall'],
  ['w47', 'wheel', 'Infiniti — руль в перфорированную кожу', 'tall'],
  ['w45', 'seats', 'Бордовая кожа, двойная строчка', ''],
  ['w32', 'salon', 'Коньячный ромб и тоннель', 'tall'],
  ['w10', 'wheel', 'Toyota — руль с контрастной вставкой', 'wide'],
  ['w19', 'seats', 'Спортивные кресла, жёлтый кант', 'tall'],
  ['w48', 'wheel', 'Lexus — руль с деревом', ''],
  ['w15', 'seats', 'Синий + беж, передние кресла', 'tall'],
  ['w33', 'salon', 'Торпедо после перетяжки', ''],
  ['w13', 'seats', 'Задний ряд: бордо + беж', 'tall'],
  ['w30', 'seats', 'Вставки в шотландскую клетку', 'wide'],
  ['w20', 'seats', 'Сиденья с цветной строчкой', 'tall'],
  ['w11', 'salon', 'Карта двери, жёлтая нить', 'tall'],
  ['w27', 'other', 'Салон автодома под ключ', 'tall'],
  ['w03', 'salon', 'Кожаный салон седана', ''],
  ['w29', 'seats', 'Кресла, вставки в клетку', 'tall'],
  ['w28', 'salon', 'Тоннель и ручка КПП', 'tall'],
  ['w04', 'other', 'Сиденье снегохода Ski-Doo', ''],
  ['w12', 'salon', 'Подлокотник в экокожу', ''],
  ['w42', 'other', 'Потолок в алькантару', 'wide'],
  ['w02', 'other', 'УАЗ — тент на заказ', 'tall'],
  ['w40', 'salon', 'Торпедо с цветным кантом', 'tall'],
];

const REVIEWS = [
  ['Николай М.', 'ноябрь 2025', 'Мастер аккуратно снял руль, поставил метки. Девушка-мастер показала образцы кожи и дала советы. Работу выполнили в течение дня. Шов ровный, края заправлены и проклеены.'],
  ['Данил Шатаев', 'ноябрь 2024', 'Заменили обивку сидений на качественную экокожу, сделали перетяжку потолка и руля. Всё аккуратно и в срок. Материалы на выбор от эконом до премиум. Порадовали скидки за объём.'],
  ['Андрей Печенев', 'декабрь 2024', 'Заказал перетяжку руля. Сделали оперативно и качественно. Пока делали руль, установили замену — очень удобно, не надо было оставлять машину возле сервиса.'],
  ['paradev ich', 'март 2025', 'Ребята работают с 2012 года, и это чувствуется. Руль сделали идеально: кожа приятная, шов ровный. Сиденья восстановили — не ожидал, что снова будут как новые.'],
  ['Тимур И.', 'март 2025', 'Нуждался в установке подогрева сидений. Всё сделали быстро, качественно и по приемлемой цене. Персонал очень вежливый, результат отличный.'],
  ['Дмитрий Дмитриев', 'февраль 2024', 'У нескольких машин делал реставрацию салонов: руль, рычаг КПП, перешив боковин сидений, покраска салона. Всё быстро и недорого.'],
  ['Елена', 'январь 2024', 'Нужны были химчистка и небольшой ремонт. Быстро договорились по телефону, сделали в короткие сроки, качественно и аккуратно. Салон как новый.'],
  ['Арина', 'август 2024', 'Порвалось кресло и выглядело так, будто вот-вот оторвётся. Порадовали бесплатная консультация и осмотр. Всё поменяли, провели сварочные работы.'],
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
document.documentElement.classList.add('js');

// ===== Bot links =====
$$('[data-bot]').forEach(a => { a.href = BOTS[a.dataset.bot]; });

// ===== Header: solid on scroll, active section, mobile menu =====
const header = $('#header');
const mbar = $('.mbar');
const onScroll = () => {
  header.classList.toggle('is-solid', scrollY > 40);
  mbar.classList.toggle('is-on', scrollY > innerHeight * 0.7);
  if (scrollY < innerHeight * 0.6) $$('#nav a').forEach(a => a.classList.remove('is-current'));
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

const burger = $('#burger');
const nav = $('#nav');
burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') !== 'true';
  burger.setAttribute('aria-expanded', open);
  nav.classList.toggle('is-open', open);
});
$$('a', nav).forEach(a => a.addEventListener('click', () => {
  burger.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}));

const navLinks = $$('a', nav);
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('is-current', a.hash === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
['about', 'services', 'prices', 'works', 'reviews', 'contacts']
  .forEach(id => sectionObserver.observe(document.getElementById(id)));

// ===== Open / closed status (Krasnoyarsk time, UTC+7) =====
function krasNow() {
  const d = new Date();
  return new Date(d.getTime() + d.getTimezoneOffset() * 60000 + 7 * 3600000);
}
(function openStatus() {
  const now = krasNow();
  const day = now.getDay();
  const h = now.getHours() + now.getMinutes() / 60;
  const start = day === 6 ? 10 : 9;
  const open = day !== 0 && h >= start && h < 19 && !(h >= 13 && h < 14);
  const el = $('[data-open-status]');
  if (open) { el.textContent = 'Открыто до 19:00'; el.classList.add('is-open'); }
  const row = $(`#hours tr[data-d="${day}"]`);
  if (row) row.classList.add('is-today');
})();

// ===== Hero slider =====
const slides = $$('.hero__slide');
const dots = $$('.hero__dots button');
const bars = $$('.hero__dots i');
const cap = $('.hero__caption');
const SLIDE_MS = 6000;
let cur = 0;
let timer;
function goSlide(n) {
  if (n === cur) return;
  const prev = slides[cur];
  prev.classList.remove('is-active');
  prev.classList.add('is-leaving');
  setTimeout(() => prev.classList.remove('is-leaving'), 1300);
  cur = n;
  slides[cur].classList.add('is-active');
  dots.forEach((d, i) => d.classList.toggle('is-active', i === cur));
  $('[data-cap-title]').textContent = slides[cur].dataset.title;
  $('[data-cap-sub]').textContent = slides[cur].dataset.sub;
  cap.classList.remove('swap'); void cap.offsetWidth; cap.classList.add('swap');
  runBar();
}
function runBar() {
  bars.forEach(b => b.classList.remove('is-run'));
  const bar = bars[cur];
  if (bar) { void bar.offsetWidth; bar.style.setProperty('--slide-ms', SLIDE_MS + 'ms'); bar.classList.add('is-run'); }
  clearTimeout(timer);
  timer = setTimeout(() => goSlide((cur + 1) % slides.length), SLIDE_MS);
}
dots.forEach((d, i) => d.addEventListener('click', () => goSlide(i)));
runBar();

// ===== Prices: tabs =====
const tabsEl = $('#tabs');
const listEl = $('#priceList');
function showTab(id) {
  const cat = PRICES.find(c => c.id === id) || PRICES[0];
  $$('button', tabsEl).forEach(b => b.classList.toggle('is-active', b.dataset.id === cat.id));
  listEl.innerHTML = cat.items.map(([name, desc, price], i) =>
    `<div class="price-row" style="animation-delay:${i * 60}ms"><h3>${name}</h3><p>${desc}</p><b>${price}</b></div>`).join('');
}
tabsEl.innerHTML = PRICES.map(c => `<button data-id="${c.id}" role="tab">${c.label}<small>${c.items.length}</small></button>`).join('');
tabsEl.addEventListener('click', e => { const b = e.target.closest('button'); if (b) showTab(b.dataset.id); });
showTab('salon');
// Service cards open the matching price tab
$$('.card[data-tab]').forEach(c => c.addEventListener('click', () => showTab(c.dataset.tab)));

// ===== Works gallery + filter + lightbox =====
const gallery = $('#gallery');
let shown = [];
function renderGallery(filter) {
  shown = WORKS.filter(w => filter === 'all' || w[1] === filter);
  gallery.innerHTML = shown.map(([f, , capText, size], i) =>
    `<figure class="shot ${size}" data-i="${i}" style="animation-delay:${Math.min(i, 12) * 40}ms">
      <img src="img/${f}.webp" alt="${capText}" loading="lazy"><figcaption>${capText}</figcaption></figure>`).join('');
}
$('#chips').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  $$('#chips button').forEach(x => x.classList.toggle('is-active', x === b));
  renderGallery(b.dataset.f);
});
renderGallery('all');

const lb = $('#lb');
let lbi = 0;
function openLb(i) {
  lbi = (i + shown.length) % shown.length;
  const [f, , capText] = shown[lbi];
  $('img', lb).src = `img/${f}.webp`;
  $('img', lb).alt = capText;
  $('figcaption', lb).textContent = capText;
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeLb() { lb.hidden = true; document.body.style.overflow = ''; }
gallery.addEventListener('click', e => { const s = e.target.closest('.shot'); if (s) openLb(+s.dataset.i); });
$('.lb__close').addEventListener('click', closeLb);
$('.lb__prev').addEventListener('click', () => openLb(lbi - 1));
$('.lb__next').addEventListener('click', () => openLb(lbi + 1));
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') openLb(lbi - 1);
  if (e.key === 'ArrowRight') openLb(lbi + 1);
});

// ===== Reviews slider =====
const track = $('#revTrack');
track.innerHTML = REVIEWS.map(([name, date, text]) =>
  `<article class="rev"><span class="rev__q">“</span><span class="rating__stars">★★★★★</span><p>${text}</p><b>${name}</b><small>${date} · Яндекс Карты</small></article>`).join('');
let revPos = 0;
const perView = () => (matchMedia('(max-width: 960px)').matches ? 1 : 3);
function moveRev(step) {
  const max = REVIEWS.length - perView();
  revPos = Math.max(0, Math.min(max, revPos + step));
  track.style.transform = `translateX(${-revPos * (100 / perView())}%)`;
}
$('#revPrev').addEventListener('click', () => moveRev(-1));
$('#revNext').addEventListener('click', () => {
  if (revPos >= REVIEWS.length - perView()) { revPos = 0; moveRev(0); } else moveRev(1);
});
addEventListener('resize', () => moveRev(0));
// Swipe on touch screens
let tx = null;
track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
track.addEventListener('touchend', e => {
  if (tx === null) return;
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) > 40) moveRev(dx < 0 ? 1 : -1);
  tx = null;
});

// ===== Reveal on scroll + counters =====
function countUp(el) {
  const target = +el.dataset.count;
  const t0 = performance.now();
  const tick = t => {
    const p = Math.min(1, (t - t0) / 1400);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-in');
    $$('[data-count]', e.target).forEach(countUp);
    revealObserver.unobserve(e.target);
  });
}, { rootMargin: '0px 0px -10% 0px' });

// Stagger siblings that reveal together
$$('.reveal, .reveal-img').forEach(el => {
  const sibs = [...el.parentElement.children].filter(c => c.matches('.reveal, .reveal-img'));
  const idx = sibs.indexOf(el);
  if (idx > 0 && el.parentElement.children.length > 2) el.style.setProperty('--d', Math.min(idx, 6) * 0.08 + 's');
  revealObserver.observe(el);
});
