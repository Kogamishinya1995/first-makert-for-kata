export default function showAllItems() {
  const repairMenuButton = document.querySelector('.repair-menu__show-all-button');
  const repairMenu = document.querySelector('.repair-menu');

  repairMenuButton.addEventListener('click', () => {
    if (repairMenuButton.textContent === 'скрыть') {
      repairMenu.classList.add('repair-menu--hidden');
      repairMenuButton.classList.remove('show-hidden');
      repairMenuButton.textContent = 'Показать всё';
    } else {
      repairMenu.classList.remove('repair-menu--hidden');
      repairMenuButton.textContent = 'скрыть';
      repairMenuButton.classList.add('show-hidden');
    }
  });
}

showAllItems();