export default function showAside() {
  const burgerButton = document.querySelector('.burger-button');
  const aside = document.querySelector('.aside');
  const asideBurgerButton = document.querySelector('.aside-header-buttons__burger');
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const body = document.querySelector('body');

  burgerButton.addEventListener('click', () => {
    aside.classList.toggle('aside--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
    body.classList.toggle('aside-open');
  });

  asideBurgerButton.addEventListener('click', () => {
    aside.classList.toggle('aside--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
    body.classList.toggle('aside-open');
  });
}

showAside();