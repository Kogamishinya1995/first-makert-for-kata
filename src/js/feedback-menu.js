export default function showFeedback() {
  const feedbackButton = document.querySelector('.service-btn__chat');
  const asideFeedback = document.querySelector('.feedback');
  const feedbackCloseButton = document.querySelector('.feedback-close-button');
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const asideFeedbackButton = document.querySelector('.aside-footer-buttons__feedback');
  const aside = document.querySelector('.aside');
  const body = document.querySelector('body');
  
  
  feedbackButton.addEventListener ('click', () => {
    asideFeedback.classList.toggle('feedback--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
    body.classList.toggle('aside-open');
  });

  feedbackCloseButton.addEventListener('click', () => {
    asideFeedback.classList.toggle('feedback--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
   } )

   asideFeedbackButton.addEventListener('click', () => {
    asideFeedback.classList.toggle('feedback--active');
    aside.classList.toggle('aside--active');

    if (window.matchMedia('(min-width: 1366px)').matches) {
      header.classList.toggle('body--opacity');
      main.classList.toggle('body--opacity');
      body.classList.toggle('aside-open');
    }
   })
};


showFeedback();