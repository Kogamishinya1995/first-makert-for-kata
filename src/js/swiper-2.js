export default function swiper3Enabled() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 767) {
      const swiperInstance3 = new Swiper('.swiper-2', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
          type: 'bullets',
        },
        spaceBetween: 30,
        loop: false,
        autoHeight: true,
        width: 200,
        centerInsufficientSlides: true,
        breakpoints: {
          768: {
            enabled: false,
          },
        },
      });
  
      swiper3Enabled.swiperInstance3 = swiperInstance3;
    } else {
      if (swiper3Enabled.swiperInstance3) {
        swiper3Enabled.swiperInstance3.destroy(true, true);
        swiper3Enabled.swiperInstance3 = null;
      }
    }
  }
  
  window.addEventListener("resize", swiper3Enabled);
  swiper3Enabled();