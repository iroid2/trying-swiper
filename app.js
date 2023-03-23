const swiper = new Swiper(' .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:'true'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev', 
    },
  
    // And if we need scrollbar
   
  });
const sponsored = new Swiper('#sponsored', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,    
    spaceBetween:20, 
  
    // Navigation arrows
    navigation: {
      nextEl: '#sponsored',
      prevEl: '#sponsored', 
    },
    // And if we need scrollbar
  });