export default function showCall() {
  const callButton = document.querySelector('.service-btn__call');
  const asideCall = document.querySelector('.call');
  const callCloseButton = document.querySelector('.call-close-button');
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const asideCallButton = document.querySelector('.aside-footer-buttons__call');
  const aside = document.querySelector('.aside');
  
  callButton.addEventListener ('click', () => {
    asideCall.classList.toggle('call--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
  });

  callCloseButton.addEventListener('click', () => {
    asideCall.classList.toggle('call--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
   } )

   asideCallButton.addEventListener('click', () => {
    asideCall.classList.toggle('call--active');
    aside.classList.toggle('aside--active');
   })
};


showCall();