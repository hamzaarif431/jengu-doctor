 $(document).ready(function(){

 $('.Slider_Sec').slick({
         dots: false,
         infinite: true,
         arrows:true,
         speed: 300,
         slidesToShow: 1,
         slidesToScroll: 1,
         responsive: [
         {
         breakpoint: 1024,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true
         }
         },
         {
         breakpoint: 600,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1
         }
         },
         {
         breakpoint: 480,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1
         }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
         ]
         });


 $('.Service_slider').slick({
        dots: true,
         infinite: true,
         arrows:false,
         speed: 300,
         slidesToShow: 3,
         slidesToScroll: 1,
         responsive: [
         {
         breakpoint: 1024,
         settings: {
         slidesToShow: 3,
         slidesToScroll: 1,
         infinite: true,
         dots: true
         }
         },
         {
         breakpoint: 600,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1
         }
         },
         {
         breakpoint: 480,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1
         }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
         ]
         });

   });


