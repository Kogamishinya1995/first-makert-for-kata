export default function showAll() {
  const showAllButton = document.querySelector('.brand-menu__show-all-button');
  const menu = document.querySelector('.brand-menu');

  showAllButton.addEventListener('click', () => {
    if (showAllButton.textContent === 'скрыть') {
      menu.classList.add('brand-menu--hidden');
      showAllButton.classList.remove('show-hidden');
      showAllButton.textContent = 'Показать всё';
    } else {
      menu.classList.remove('brand-menu--hidden');
      showAllButton.textContent = 'скрыть';
      showAllButton.classList.add('show-hidden');
    }
  });
}

showAll();