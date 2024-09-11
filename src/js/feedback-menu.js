export default function showFeedback() {
  const feedbackButton = document.querySelector('.service-btn__chat');
  const asideFeedback = document.querySelector('.feedback');
  const feedbackCloseButton = document.querySelector('.feedback-close-button');
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const asideFeedbackButton = document.querySelector('.aside-footer-buttons__feedback');
  const aside = document.querySelector('.aside');
  
  feedbackButton.addEventListener ('click', () => {
    asideFeedback.classList.toggle('feedback--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
  });

  feedbackCloseButton.addEventListener('click', () => {
    asideFeedback.classList.toggle('feedback--active');
    header.classList.toggle('body--opacity');
    main.classList.toggle('body--opacity');
   } )

   asideFeedbackButton.addEventListener('click', () => {
    asideFeedback.classList.toggle('feedback--active');
    aside.classList.toggle('aside--active');
   })
};


showFeedback();