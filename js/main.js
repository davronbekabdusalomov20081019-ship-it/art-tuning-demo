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
    ['Потолок в алькантару (джип)', 'Потолок без люка, 6 стоек, 2 козырька, покраска пластика. С оригинальной Alcantara — 110 000 ₽', 'от 80 000 ₽'],
    ['Перетяжка салона с дизайном', 'Уникальный интерьер по вашему эскизу', 'от 75 000 ₽'],
    ['Отдельные элементы интерьера', 'Подлокотник, стойки, карты дверей — по элементам', 'от 2 500 ₽'],
  ]},
  { id: 'wheel', label: 'Руль и КПП', items: [
    ['Руль «Премиум»', 'Натуральная кожа (Австрия), около 12 часов. Нитка и шов — на выбор', '15 000 ₽'],
    ['Руль «Комфорт»', 'Экокожа, руль с подогревом, 5–10 часов', '7 000 ₽'],
    ['Руль «Эконом»', 'Экокожа, без подогрева, около 4 часов', '5 000 ₽'],
    ['Покраска руля', 'Если кожа без порывов — возвращаем цвет и вид', '4 500 ₽'],
    ['Перетяжка ручки КПП', 'Занимает 1–1,5 часа', '2 500 ₽'],
  ]},
  { id: 'seats', label: 'Ремонт сидений', items: [
    ['Авточехлы на заказ', 'Индивидуальный пошив под вашу модель', 'от 18 000 ₽'],
    ['Установка подогрева сидений', 'Комплект на кресло: 2 мата, провода и кнопка, около 5 часов', 'от 10 000 ₽'],
    ['Покраска кожи сидений', 'Одно кресло, лицевая часть — 14 000 ₽', 'от 9 000 ₽'],
    ['Ремонт автокресла', 'Замена одного элемента: кожа — 5 000 ₽, ткань — 4 500 ₽', 'от 4 500 ₽'],
    ['Поролон боковой поддержки', 'Ремонт поролона 2 500 ₽ + разборка кресла 1 500 ₽', 'от 4 000 ₽'],
  ]},
  { id: 'comfort', label: 'SRS и шумоизоляция', items: [
    ['Шумоизоляция автомобиля', 'Пол, багажник, арки, потолок, двери. Седан — 80 000 ₽, паркетник — 95 000 ₽, джип — 120 000 ₽. Гарантия 5 лет', 'от 80 000 ₽'],
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
  // The first photo is shown big; G-class (w17) is not first because it is already the hero background
  ['w01', 'seats', 'Сиденья в чёрную кожу с ромбом', 'tall'],
  ['w47', 'wheel', 'Infiniti — руль в перфорированную кожу', 'tall'],
  ['w45', 'seats', 'Бордовая кожа, двойная строчка', ''],
  ['w17', 'salon', 'Mercedes G-класс — коньячная кожа', 'wide'],
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
  ['w21', 'other', 'Потолочная панель после перетяжки', 'tall'],
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

// ===== Before / after pairs =====
// To add a pair: put two photos of the SAME size and angle into img/
// (e.g. ba2-before.webp and ba2-after.webp) and copy one block below.
// ai: true shows the "illustration made by AI" note under the slider — remove it for real photos.
const BEFORE_AFTER = [
  {
    before: 'ba1-before.webp',
    after: 'ba1-after.webp',
    title: 'Спортивное кресло',
    details: [
      ['Было', 'Серая кожа: потёртости, заломы, выцветший цвет'],
      ['Материал', 'Чёрная кожа + жёлтые боковины'],
      ['Строчка', 'Ромб с контрастной нитью'],
      ['Детали', 'Вышивка на подголовнике, новый наполнитель'],
    ],
    ai: true,
  },
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
['about', 'services', 'reviews', 'prices', 'calc', 'works', 'book']
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
  const lunch = day !== 0 && h >= 13 && h < 14;
  $$('[data-open-status]').forEach(el => {
    if (open) { el.textContent = 'Открыто до 19:00'; el.classList.add('is-open'); }
    else if (lunch) el.textContent = 'Перерыв до 14:00';
  });
})();

// ===== Booking window: «Записаться» in the header / mobile bar shows bots and contacts =====
const bookDlg = $('#bookDlg');
$$('[data-book]').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  bookDlg.showModal();
}));
$('[data-close]', bookDlg).addEventListener('click', () => bookDlg.close());
// A click on the dimmed backdrop (outside the window box) closes it; Esc closes it natively
bookDlg.addEventListener('click', e => {
  const r = bookDlg.getBoundingClientRect();
  const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
  if (!inside) bookDlg.close();
});

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

// ===== Hero: the name fills the screen width =====
const hero = $('.hero');
const heroName = $('.hero__name');
const heroLines = $$('.hero__line', heroName);
function fitHero() {
  // Hero + marquee together take exactly one screen
  document.documentElement.style.setProperty('--mqh', $('.mq').offsetHeight + 'px');
  // Measure the text at 100px, then scale: by width (longest line) and by free height
  heroName.style.fontSize = '100px';
  const widest = Math.max(...heroLines.map(l => l.firstElementChild.getBoundingClientRect().width));
  const cs = getComputedStyle(heroName);
  const room = heroName.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
  const byWidth = 100 * room / widest * 0.97;
  const byHeight = (heroName.clientHeight - 10) / (heroLines.length * 0.86);
  heroName.style.fontSize = Math.floor(Math.min(byWidth, byHeight)) + 'px';
  heroH = hero.offsetHeight;
}
let heroH = hero.offsetHeight;
// Show the name only once the real font is loaded: otherwise it appears in a fallback font
// and visibly jumps to a new size a moment later. The intro animation starts at that moment too.
const showName = () => {
  if (document.documentElement.classList.contains('name-fit')) return;
  fitHero();
  document.documentElement.classList.add('name-fit');
};
fitHero();
document.fonts.ready.then(showName);
setTimeout(showName, 2500); // safety net if the font never arrives
let fitW = innerWidth;
let fitTimer;
addEventListener('resize', () => {
  clearTimeout(fitTimer);
  // Height-only changes (mobile address bar) must not re-fit, or the name jumps while scrolling
  fitTimer = setTimeout(() => { if (innerWidth !== fitW) { fitW = innerWidth; fitHero(); } }, 150);
});

// ===== Hero on scroll: photo parallax, the two lines part left and right =====
const heroImg = $('.hero__bg img');
let heroTick = false;
function heroScroll() {
  heroTick = false;
  const y = Math.min(scrollY, heroH); // past the hero nothing changes, but land exactly on the end
  heroImg.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(1.06)`;
  if (reduceMotion) return;
  const p = y / heroH; // 0 at the top, 1 when the hero is gone
  heroLines[0].style.transform = `translate3d(${-18 * p}%, 0, 0)`;
  heroLines[1].style.transform = `translate3d(${18 * p}%, 0, 0)`;
}
// Scroll events can fire several times per frame: write styles at most once per frame
addEventListener('scroll', () => {
  if (scrollY > heroH && heroScroll.done) return;
  heroScroll.done = scrollY > heroH;
  if (!heroTick) { heroTick = true; requestAnimationFrame(heroScroll); }
}, { passive: true });
heroScroll();

// ===== Marquee: runs constantly, speeds up and leans while the page scrolls =====
(function marquee() {
  const t = $('#mq');
  const words = ['Перетяжка салона', 'Руль и КПП', 'Потолок в алькантару', 'Ремонт сидений', 'Восстановление SRS', 'Шумоизоляция', 'Химчистка салона', 'Спецтехника и мото'];
  // Two identical copies: when the first one has fully left, we jump back by its width — seamless loop
  t.innerHTML = Array(2).fill(words.map(w => `<span>${w}</span>`).join('')).join('');
  if (reduceMotion) return;
  let half = t.scrollWidth / 2; // width of one copy, re-measured on resize (not every frame)
  addEventListener('resize', () => { half = t.scrollWidth / 2; });
  // Touch screens: a plain CSS animation. It runs on the compositor, so it never stutters
  // while a finger is scrolling the page. Same speed as the mouse version (~48 px/s).
  if (!finePointer) {
    t.style.animationDuration = Math.round(half / 48) + 's';
    t.classList.add('mq__t--css');
    return;
  }
  let x = 0, speed = 1, skew = 0, visible = true;
  let lastY = scrollY, lastT = performance.now(), prev = lastT;
  addEventListener('scroll', () => {
    const now = performance.now();
    const v = (scrollY - lastY) / Math.max(16, now - lastT) * 1000; // scroll speed, px per second
    lastY = scrollY; lastT = now;
    speed = Math.max(speed, 1 + Math.min(9, Math.abs(v) / 260));
    skew = Math.max(-9, Math.min(9, -v / 220));
  }, { passive: true });
  new IntersectionObserver(e => { visible = e[0].isIntersecting; }).observe(t.parentElement);
  const loop = now => {
    const k = Math.min(3, (now - prev) / 16.7); // frame-rate independent
    prev = now;
    if (visible) {
      x = (x - speed * 0.8 * k) % half;
      t.style.transform = `translate3d(${x}px, 0, 0) skewX(${skew}deg)`;
    }
    speed += (1 - speed) * 0.05 * k; // calm back down to normal speed
    skew *= Math.pow(0.9, k);
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
})();

// ===== Services: photo follows the cursor over the list (mouse only) =====
(function servicePreview() {
  const list = $('#svc');
  const box = $('.svc__preview');
  if (!finePointer || reduceMotion) return;
  const rows = $$('.svc__row', list);
  $('.svc__preview-in', box).innerHTML = rows.map(r => `<img src="${r.dataset.img}" alt="">`).join('');
  const imgs = $$('img', box);
  let x = 0, y = 0, tx = 0, ty = 0, on = false, raf = 0;
  const tick = () => {
    const dx = tx - x;
    x += dx * 0.15; y += (ty - y) * 0.15; // ease toward the cursor
    const tilt = Math.max(-8, Math.min(8, dx * 0.05)); // tilt by horizontal speed
    box.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${tilt}deg)`;
    raf = on || Math.abs(dx) > 0.5 ? requestAnimationFrame(tick) : 0;
  };
  rows.forEach((r, i) => r.addEventListener('pointerenter', e => {
    tx = e.clientX; ty = e.clientY;
    if (!on) { x = tx; y = ty; }
    on = true;
    imgs.forEach((im, j) => im.classList.toggle('is-on', j === i));
    box.classList.add('is-on');
    if (!raf) raf = requestAnimationFrame(tick);
  }));
  list.addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; });
  list.addEventListener('pointerleave', () => { on = false; box.classList.remove('is-on'); });
})();

// ===== Magnetic buttons (mouse only) =====
if (finePointer && !reduceMotion) {
  $$('.mag').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.12}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

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
// Service rows open the matching price tab
$$('.svc__row[data-tab]').forEach(c => c.addEventListener('click', () => showTab(c.dataset.tab)));

// ===== Price calculator (compact, inside the prices block) =====
// Every number comes from the atelier's price list on Yandex Maps.
// Car class changes a price only where the price list itself gives per-class prices.
const CALC = {
  classes: [
    { id: 'sedan', code: 's', name: 'Седан' },
    { id: 'cross', code: 'c', name: 'Кроссовер' },
    { id: 'suv', code: 'j', name: 'Джип' },
  ],
  materials: [
    { id: 'eco', code: 'e', name: 'Экокожа', m: 1 },
    { id: 'leather', code: 'l', name: 'Нат. кожа', m: 1.45 }, // price list: natural leather +45%
  ],
  items: [
    { id: 'seats', code: 'a', name: 'Сиденья, весь салон', base: 96000, byMat: true },
    { id: 'doors', code: 'b', name: 'Обшивка дверей', base: 24000, byMat: true },
    { id: 'dash', code: 'c', name: 'Торпедо, верх', base: 80000, byMat: true },
    { id: 'ceiling', code: 'd', name: 'Потолок в алькантару', base: 80000, hint: 'цена для джипа' },
    { id: 'wheel', code: 'e', name: 'Руль', byMatPrice: { eco: 5000, leather: 15000 } },
    { id: 'shifter', code: 'f', name: 'Ручка КПП', base: 2500 },
    { id: 'seatfix', code: 'k', name: 'Ремонт элемента кресла', base: 5000 },
    { id: 'foam', code: 'l', name: 'Поролон боковины', base: 4000 },
    { id: 'heat', code: 'g', name: 'Подогрев сиденья', base: 10000, hint: 'за кресло' },
    { id: 'noise', code: 'h', name: 'Шумоизоляция', byClass: { sedan: 80000, cross: 95000, suv: 120000 } },
    { id: 'clean', code: 'i', name: 'Химчистка салона', byClass: { sedan: 12000, cross: 12000, suv: 15000 } },
    { id: 'srs', code: 'j', name: 'Восстановление SRS', base: 5000 },
  ],
};
const calc = { car: 'sedan', mat: 'eco', items: new Set(['wheel']) };
const fmt = n => n.toLocaleString('ru-RU');

function itemPrice(it) {
  const mat = CALC.materials.find(m => m.id === calc.mat);
  let p;
  if (it.byClass) p = it.byClass[calc.car];
  else if (it.byMatPrice) p = it.byMatPrice[calc.mat];
  else p = it.base * (it.byMat ? mat.m : 1);
  return Math.round(p / 500) * 500; // round to 500 ₽
}

function renderCalc() {
  $('#calcCars').innerHTML = CALC.classes.map(c =>
    `<button type="button" role="radio" aria-checked="${c.id === calc.car}" data-car="${c.id}">${c.name}</button>`).join('');
  $('#calcMats').innerHTML = CALC.materials.map(m =>
    `<button type="button" role="radio" aria-checked="${m.id === calc.mat}" data-mat="${m.id}">${m.name}</button>`).join('');
  $('#calcOpts').innerHTML = CALC.items.map(it =>
    `<li><button type="button" aria-pressed="${calc.items.has(it.id)}" data-item="${it.id}">
      <span class="mcalc__box"></span>
      <span class="mcalc__name">${it.name}${it.hint ? `<small>${it.hint}</small>` : ''}</span>
      <span class="mcalc__price">${fmt(itemPrice(it))}</span></button></li>`).join('');
}

let shownTotal = 0;
function animateTotal(to) {
  const el = $('#sumTotal');
  const from = shownTotal;
  shownTotal = to;
  const t0 = performance.now();
  const tick = t => {
    const p = Math.min(1, (t - t0) / 500);
    el.textContent = fmt(Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  // Fallback: rAF is paused in background tabs, so always land on the exact value
  setTimeout(() => { if (shownTotal === to) el.textContent = fmt(to); }, 650);
  const box = $('.mcalc__total');
  box.classList.remove('bump'); void box.offsetWidth; box.classList.add('bump');
}

function renderSummary() {
  const car = CALC.classes.find(c => c.id === calc.car);
  const mat = CALC.materials.find(m => m.id === calc.mat);
  const chosen = CALC.items.filter(it => calc.items.has(it.id));
  animateTotal(chosen.reduce((sum, it) => sum + itemPrice(it), 0));
  // Payload for the bot's /start: only service codes, no personal data (fits Telegram's 64-char limit)
  const payload = `calc-${car.code}${mat.code}-${chosen.map(it => it.code).join('')}`;
  $('#sumMax').href = `${BOTS.max}?start=${payload}`;
  $('#sumTg').href = `${BOTS.telegram}?start=${payload}`;
  $$('.mcalc__btns .btn').forEach(b => b.classList.toggle('is-off', !chosen.length));
}

$('#calc').addEventListener('click', e => {
  const car = e.target.closest('[data-car]');
  const mat = e.target.closest('[data-mat]');
  const item = e.target.closest('[data-item]');
  if (car) calc.car = car.dataset.car;
  if (mat) calc.mat = mat.dataset.mat;
  if (item) {
    const id = item.dataset.item;
    calc.items.has(id) ? calc.items.delete(id) : calc.items.add(id);
  }
  if (car || mat || item) { renderCalc(); renderSummary(); }
});
renderCalc();
renderSummary();

// ===== Works gallery + filter + lightbox =====
const gallery = $('#galleryGrid');
const moreBtn = $('#worksMore');
const PREVIEW = 8; // photos visible before "show all"
const CAT_NAMES = { salon: 'Салон', wheel: 'Руль', seats: 'Сиденья', other: 'Другое' };
let shown = [];
let filter = 'all';
let expanded = false;
// Each photo opens when it scrolls into view
const shotObserver = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('is-in'); shotObserver.unobserve(e.target); }
}), { rootMargin: '0px 0px -8% 0px' });

const plural = n => {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return 'работа';
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return 'работы';
  return 'работ';
};

function renderGallery() {
  shown = WORKS.filter(w => filter === 'all' || w[1] === filter);
  const preview = !expanded && shown.length > PREVIEW;
  const visible = preview ? shown.slice(0, PREVIEW) : shown;
  // Preview = a tidy mosaic: 1 big + 1 wide + 6 small fill exactly 3 rows of 4 (6 rows of 2 on a phone).
  // Full list uses each photo's own shape; the first one is always big.
  const sizeOf = (size, i) => {
    if (i === 0 && visible.length >= 6) return 'big';
    if (preview) return i === 5 ? 'wide' : '';
    return size;
  };
  gallery.innerHTML = visible.map(([f, cat, capText, size], i) =>
    `<figure class="shot ${sizeOf(size, i)}" data-i="${i}" style="--d:${(i % 4) * 0.08}s">
      <img src="img/${f}.webp" alt="${capText}" loading="lazy">
      <span class="shot__zoom" aria-hidden="true">+</span>
      <figcaption><span class="shot__n">${String(i + 1).padStart(2, '0')} · ${CAT_NAMES[cat]}</span><b>${capText}</b></figcaption></figure>`).join('');
  $$('.shot', gallery).forEach(s => shotObserver.observe(s));
  $('.works__count').innerHTML = `<b>${shown.length}</b> ${plural(shown.length)} — каждый шов вблизи`;
  moreBtn.parentElement.hidden = expanded || shown.length <= PREVIEW;
  moreBtn.textContent = `Показать все ${shown.length}`;
}
$('#chips').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  $$('#chips button').forEach(x => x.classList.toggle('is-active', x === b));
  // «До / после» swaps the photo grid for the comparison slider
  const ba = b.dataset.f === 'ba';
  $('#baPanel').hidden = !ba;
  gallery.hidden = ba;
  if (ba) {
    moreBtn.parentElement.hidden = true;
    $('.works__count').innerHTML = `<b>${BEFORE_AFTER.length}</b> ${BEFORE_AFTER.length === 1 ? 'пара' : 'пары'} «до и после»`;
    return;
  }
  filter = b.dataset.f;
  expanded = false;
  renderGallery();
});
moreBtn.addEventListener('click', () => { expanded = true; renderGallery(); });
renderGallery();

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
let tx = null, ty = 0;
track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
track.addEventListener('touchend', e => {
  if (tx === null) return;
  const dx = e.changedTouches[0].clientX - tx;
  const dy = e.changedTouches[0].clientY - ty;
  // Only a clearly sideways swipe turns the page: a vertical scroll that drifts sideways must not
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) moveRev(dx < 0 ? 1 : -1);
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

// ===== Before / after comparison =====
(function compareSlider() {
  const box = $('#compare');
  if (!box) return;
  const range = $('.compare__range', box);
  const imgBefore = $('.compare__before', box);
  const imgAfter = $('.compare__after', box);
  const thumbs = $('#baThumbs');
  let touched = false;
  let cur = 0;
  const setPos = v => { box.style.setProperty('--pos', v + '%'); range.value = v; };

  function showPair(n) {
    cur = (n + BEFORE_AFTER.length) % BEFORE_AFTER.length;
    const p = BEFORE_AFTER[cur];
    box.classList.add('is-switching');
    // Swap photos once the new "after" image is loaded, so the frame never flashes empty
    const pre = new Image();
    pre.onload = pre.onerror = () => {
      imgAfter.src = 'img/' + p.after;
      imgBefore.src = 'img/' + p.before;
      imgAfter.alt = 'После: ' + p.title.toLowerCase();
      imgBefore.alt = 'До: ' + p.title.toLowerCase();
      box.style.aspectRatio = pre.naturalWidth ? `${pre.naturalWidth} / ${pre.naturalHeight}` : '';
      setPos(50);
      requestAnimationFrame(() => box.classList.remove('is-switching'));
    };
    pre.src = 'img/' + p.after;
    $('#baNum').textContent = `${String(cur + 1).padStart(2, '0')} / ${String(BEFORE_AFTER.length).padStart(2, '0')}`;
    $('#baTitle').textContent = p.title;
    $('#baList').innerHTML = p.details.map(([k, v]) => `<li><b>${k}</b><span>${v}</span></li>`).join('');
    $('#baNote').hidden = !p.ai;
    $$('button', thumbs).forEach((t, i) => t.setAttribute('aria-selected', i === cur));
    const pair = $('.ba__pair');
    pair.classList.remove('swap'); void pair.offsetWidth; pair.classList.add('swap');
  }

  // Thumbnails + arrows appear only when there is more than one pair
  if (BEFORE_AFTER.length > 1) {
    $('#baNav').hidden = false;
    thumbs.innerHTML = BEFORE_AFTER.map((p, i) =>
      `<button role="tab" aria-label="${p.title}" style="background-image:url(img/${p.after})" data-i="${i}"></button>`).join('');
    thumbs.addEventListener('click', e => { const b = e.target.closest('button'); if (b) showPair(+b.dataset.i); });
    $('#baPrev').addEventListener('click', () => showPair(cur - 1));
    $('#baNext').addEventListener('click', () => showPair(cur + 1));
  }
  showPair(0);

  range.addEventListener('input', () => { touched = true; setPos(+range.value); });
  range.addEventListener('pointerdown', () => { touched = true; box.classList.add('is-drag'); });
  addEventListener('pointerup', () => box.classList.remove('is-drag'));

  // One-time hint: the divider sweeps left and right when the block first appears
  const hint = () => {
    const keys = [50, 22, 78, 50];
    const seg = 650;
    const t0 = performance.now();
    const ease = x => x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    const tick = t => {
      if (touched) return;
      const k = Math.min((t - t0) / seg, keys.length - 1);
      const i = Math.min(Math.floor(k), keys.length - 2);
      setPos(Math.round(keys[i] + (keys[i + 1] - keys[i]) * ease(k - i)));
      if (k < keys.length - 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) { obs.disconnect(); setTimeout(hint, 600); }
  }, { threshold: 0.5 }).observe(box);
})();
