'use strict';
document.documentElement.classList.add('js');

// Conteúdo da bio fornecida. Confirmar com Kamila antes de publicar.
// Na versão pública, alterar preview para false e confirmar o dado.
const formation = { studentCount: 189, studentCountConfirmed: false, preview: true };
const count = document.querySelector('#student-count');
if (formation.studentCountConfirmed || formation.preview) {
  const strong = document.createElement('strong');
  strong.textContent = `Mais de ${formation.studentCount} alunas`;
  count.append(strong);
  if (!formation.studentCountConfirmed) {
    const note = document.createElement('small');
    note.textContent = 'Dado da bio fornecida • em confirmação para publicação';
    count.append(note);
  }
  count.hidden = false;
}

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  menu.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(expanded));
  menu.classList.toggle('is-open', expanded);
});
menu.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || !window.matchMedia('(max-width: 800px)').matches) return;
  closeMenu();
  const destination = document.querySelector(link.getAttribute('href'));
  if (destination) {
    destination.setAttribute('tabindex', '-1');
    destination.focus({ preventScroll: true });
    destination.addEventListener('blur', () => destination.removeAttribute('tabindex'), { once: true });
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
