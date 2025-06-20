let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove('hidden');
    return;
  }

  if (currentScroll > lastScroll && currentScroll > 100) {
    // Rolando para baixo
    header.classList.add('hidden');
  } else if (currentScroll < lastScroll) {
    // Rolando para cima
    header.classList.remove('hidden');
  }

  lastScroll = currentScroll;
});
