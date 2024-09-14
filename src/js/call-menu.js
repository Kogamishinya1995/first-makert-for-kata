export default function showCall() {
  const callButton = document.querySelector('.service-btn__call');
  const asideCall = document.querySelector('.call');
  const callCloseButton = document.querySelector('.call-close-button');
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const asideCallButton = document.querySelector('.aside-footer-buttons__call');
  const aside = document.querySelector('.aside');
  const body = document.querySelector('body');
  
  callButton.addEventListener ('click', () => {
    asideCall.classList.toggle('call--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
    body.classList.toggle('aside-open');
  });

  callCloseButton.addEventListener('click', () => {
    asideCall.classList.toggle('call--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
    body.classList.toggle('aside-open');
   } )

   asideCallButton.addEventListener('click', () => {
    asideCall.classList.toggle('call--active');
    aside.classList.toggle('aside--active');

    if (window.matchMedia('(min-width: 1366px)').matches) {
      header.classList.toggle('body--opacity');
      main.classList.toggle('body--opacity');
      body.classList.toggle('aside-open');
    }

   })
};


showCall();