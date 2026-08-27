import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const menu = (window as any).__REYBAR_MENU__ as { name: string; items: [string, string][] }[];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  gsap.fromTo('.hero-copy > *', { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.85, ease: 'power3.out', delay: 0.2 });
  gsap.fromTo('.dish-frame', { scale: 0.86, rotate: -4, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.35 });
  gsap.to('.ceviche-svg', { yPercent: -8, rotate: 2, scrollTrigger: { trigger: '.scroll-illustration', start: 'top bottom', end: 'bottom top', scrub: 1 } });
  gsap.fromTo('.svg-draw', { strokeDashoffset: 900 }, { strokeDashoffset: 0, stagger: 0.15, scrollTrigger: { trigger: '.scroll-illustration', start: 'top 75%', end: 'top 25%', scrub: 1 } });
  gsap.fromTo('.ingredient', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.15, ease: 'back.out(1.7)', scrollTrigger: { trigger: '.scroll-illustration', start: 'top 65%' } });
}

document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => {
  if (reduceMotion) element.classList.add('is-visible');
  else gsap.fromTo(element, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 86%' } });
});

const dialog = document.querySelector<HTMLDialogElement>('#menu-dialog')!;
const heading = dialog.querySelector('h2')!;
const indexLabel = dialog.querySelector('.dialog-index')!;
const countLabel = dialog.querySelector('.dialog-count')!;
const items = dialog.querySelector('.menu-items')!;
let active = 0;
const dishImages: Record<string, string> = {
  'Leche de tigre': './leche%20de%20tigre.jpeg',
  'Ceviche simple': './ceviche-simple-cutout.png',
  'Chicharrón de pota': './chicharron-pota-cutout.png',
  'Arroz con mariscos': './arroz-mariscos-cutout.png',
  'Chaufa regional': './chaufa%20regional.jpeg',
  'Pescado a la plancha': './pescado%20a%20la%20plancha.jpeg',
  'Saltado de pollo': './Pollo%20saltado.jpeg',
  'Bisteck a lo pobre': './Bistck%20a%20lo%20pobre.jpeg',
  'Alitas acevichadas': './alitas%20acevichadas.jpeg',
  'Con lomo saltado': './tacu%20tacu%20con%20bisteck.jpeg'
};

function renderCategory(next: number) {
  active = (next + menu.length) % menu.length;
  const category = menu[active];
  indexLabel.textContent = `0${active + 1}`;
  heading.textContent = category.name;
  countLabel.textContent = `${category.items.length} opciones`;
  items.innerHTML = category.items.map(([name, price], itemIndex) => `<button class="menu-row${dishImages[name] ? ' has-photo' : ''}" data-dish-name="${name}" data-dish-price="${price}" data-dish-image="${dishImages[name] || ''}" style="--delay:${itemIndex * 45}ms"><span>${name}</span><strong>${price}</strong>${dishImages[name] ? '<b class="row-arrow">↗</b>' : ''}</button>`).join('');
  dialog.querySelector<HTMLButtonElement>('.prev-category')!.textContent = `← ${menu[(active - 1 + menu.length) % menu.length].name}`;
  dialog.querySelector<HTMLButtonElement>('.next-category')!.textContent = `${menu[(active + 1) % menu.length].name} →`;
}

function openCategory(index: number) { renderCategory(index); if (!dialog.open) dialog.showModal(); document.body.classList.add('dialog-open'); }
document.querySelectorAll<HTMLElement>('.category-card').forEach((button) => button.addEventListener('click', () => openCategory(Number(button.dataset.index))));
document.querySelector('[data-open-category="0"]')?.addEventListener('click', () => openCategory(0));
dialog.querySelector('.close-dialog')?.addEventListener('click', () => { dialog.close(); document.body.classList.remove('dialog-open'); });
dialog.querySelector('.prev-category')?.addEventListener('click', () => renderCategory(active - 1));
dialog.querySelector('.next-category')?.addEventListener('click', () => renderCategory(active + 1));
dialog.addEventListener('click', (event) => { if (event.target === dialog) { dialog.close(); document.body.classList.remove('dialog-open'); } });
const dishDialog = document.querySelector<HTMLDialogElement>('#dish-dialog')!;
const dishImage = dishDialog.querySelector('img')!;
const dishTitle = dishDialog.querySelector('h2')!;
const dishPrice = dishDialog.querySelector('strong')!;
items.addEventListener('click', (event) => {
  const row = (event.target as HTMLElement).closest<HTMLButtonElement>('.menu-row.has-photo');
  if (!row) return;
  dishImage.src = row.dataset.dishImage || '';
  dishImage.alt = row.dataset.dishName || '';
  dishTitle.textContent = row.dataset.dishName || '';
  dishPrice.textContent = row.dataset.dishPrice || '';
  dishDialog.showModal();
});
dishDialog.querySelector('.dish-close')?.addEventListener('click', () => dishDialog.close());
dishDialog.addEventListener('click', (event) => { if (event.target === dishDialog) dishDialog.close(); });
document.addEventListener('keydown', (event) => { if (!dialog.open) return; if (event.key === 'Escape') document.body.classList.remove('dialog-open'); if (event.key === 'ArrowLeft') renderCategory(active - 1); if (event.key === 'ArrowRight') renderCategory(active + 1); });
