export default function showAllItems() {
  const repairMenuButton = document.querySelector('.repair-menu__show-all-button');
  const repairMenu = document.querySelector('.repair-menu');

  repairMenuButton.addEventListener('click', () => {
    repairMenu.classList.toggle('repair-menu--hidden');
    repairMenuButton.classList.toggle('show-hidden');
    repairMenuButton.textContent = repairMenu.classList.contains('repair-menu--hidden') ? 'Показать всё' : 'скрыть';
  });
}

showAllItems();