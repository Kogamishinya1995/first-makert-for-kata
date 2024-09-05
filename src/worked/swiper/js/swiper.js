function swiperEnabled() { 
  const screenWidth = window.innerWidth; 
  if (screenWidth < 767) { 
      const swiperInstance = new Swiper('.swiper', { 
          pagination: { 
              el: '.swiper-pagination', 
              clickable: true, 
              dynamicBullets: true, 
          }, 
          spaceBetween: 30, 
          loop: false, 
          autoHeight: true, 
          width: 200, 
          centerInsufficientSlides: true, 
          breakpoints: { 
              768: { 
                  enabled: false, 
              } 
          } 
      }); 

      swiperEnabled.swiperInstance = swiperInstance; 
  } else { 
      if (swiperEnabled.swiperInstance) { 
          swiperEnabled.swiperInstance.destroy(true, true); 
          swiperEnabled.swiperInstance = null; 
      } 
  } 
} 

window.addEventListener("resize", swiperEnabled);  
swiperEnabled(); 