window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpointUp, breakpointDown, swiperClass, swiperSettings, flexSettings, callback) => {
    let swiper;

    const breakpointUpMedia = window.matchMedia(breakpointUp);
    const breakpointDownMedia = window.matchMedia(breakpointDown);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const enableFlex = function(className, settings) {
      const flexContainer = document.querySelector(className);
      flexContainer.classList.remove('swiper');
      flexContainer.classList.add('flex-container');
      flexContainer.style.display = 'flex';
      flexContainer.style.flexWrap = 'wrap';
      flexContainer.style.gap = settings.gap || '20px';

      const slides = flexContainer.querySelectorAll('.swiper-slide');
      slides.forEach((slide) => {
        slide.classList.remove('swiper-slide');
        slide.style.flex = `0 0 ${settings.slideWidth || '25%'}`;
      });
    };

    const checker = function() {
      if (breakpointDownMedia.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else if (breakpointUpMedia.matches) {
        if (swiper !== undefined) swiper.destroy(true, true);
        return enableFlex(swiperClass, flexSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpointDownMedia.addEventListener('change', checker);
    breakpointUpMedia.addEventListener('change', checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function(e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(min-width: 768px)',
    '(max-width: 767px)',
    '.slider-1',
    {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    {
      gap: '32px',
      slideWidth: '33.33%',
    },
    someFunc
  );

  resizableSwiper(
    '(min-width: 768px)',
    '(max-width: 767px)',
    '.slider-2',
    {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    {
      gap: '32px',
      slideWidth: '33.33%',
    },
    someFunc
  );

  resizableSwiper(
    '(min-width: 768px)',
    '(max-width: 767px)',
    '.slider-3',
    {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    {
      gap: '32px',
      slideWidth: '33.33%',
    },
    someFunc
  );
});

