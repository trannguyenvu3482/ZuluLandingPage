const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerToggleMenu = function () {
  const menuToggleBtn = $('.menu-toggle');
  const menuExitBtn = $('.header-exit');
  const headerMenu = $('.header-menu');

  // Menu toggle button handler
  menuToggleBtn.addEventListener('click', (e) => {
    headerMenu.classList.add('is-active');
  });

  // Exit menu button handler
  menuExitBtn.addEventListener('click', (e) => {
    headerMenu.classList.remove('is-active');
  });

  // Exit menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      headerMenu.classList.contains('is-active') &&
      !e.target.classList.contains('header-menu') &&
      !e.target.classList.contains('menu-toggle')
    ) {
      headerMenu.classList.remove('is-active');
    }
  });
};

headerToggleMenu();
