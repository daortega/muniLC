
  //OwlCarousel2
  //carousel
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })