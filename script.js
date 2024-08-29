new Swiper('.swiper', {
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    spaceBetween: 30,
    loop: true,
    autoHeight: true,
    width: 200,
    centerInsufficientSlides: true,
    breakpoints: {
        768: {
          enabled: false,
        }
      }
});