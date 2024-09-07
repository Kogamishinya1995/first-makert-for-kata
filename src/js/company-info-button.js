export default function showAllText() {
  const textFieldButton = document.querySelector('.text-field__button');
  const text = document.querySelector('.text-field__text');

  textFieldButton.addEventListener('click', () => {
    if (textFieldButton.textContent === 'скрыть') {
      text.classList.add('text-field__text--hidden');
      textFieldButton.classList.remove('text-field__button--active');
      textFieldButton.textContent = 'Читать далее';
    } else {
      text.classList.remove('text-field__text--hidden');
      textFieldButton.textContent = 'скрыть';
      textFieldButton.classList.add('text-field__button--active');
    }
  });
}

showAllText();