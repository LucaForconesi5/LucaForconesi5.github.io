// JavaScript Document
/*hamburguesa*/
$(document).ready(function(){
    $("#test").click(function(){
        $(".dropdown").toggle()
    })
})

/*swiper*/
const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,
	autoplay: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

