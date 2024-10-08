export default function swiperEnabled() { 
  const screenWidth = window.innerWidth; 
  if (screenWidth < 767) { 
      const swiperInstance = new Swiper('.swiper', { 
          pagination: { 
              el: '.swiper-pagination', 
              clickable: true, 
              dynamicBullets: true, 
          }, 
          spaceBetween: 30, 
          loop: true,  
          width: 200,
          height: 50,
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
