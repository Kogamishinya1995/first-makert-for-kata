export default function swiper2Enabled() { 
  const screenWidth = window.innerWidth; 
  if (screenWidth < 767) { 
      const swiperInstance2 = new Swiper('.swiper-2', { 
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
              } 
          } 
      }); 
      
      

      swiper2Enabled.swiperInstance2 = swiperInstance2; 
  } else { 
      if (swiper2Enabled.swiperInstance2) { 
          swiper2Enabled.swiperInstance2.destroy(true, true); 
          swiper2Enabled.swiperInstance2 = null; 
      } 
  } 
} 

window.addEventListener("resize", swiper2Enabled);  
swiper2Enabled(); 