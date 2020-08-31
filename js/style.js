$(document).ready(function() {

   /*-- NAVIGRATION --*/
   $("#hamburger").click(function() {
      $(this).toggleClass("active");
   })

   $(".nav-link").click(function(){
      $(".navbar-collapse").collapse("hide");
      $("#hamburger").removeClass("active");
   });

   $(".nav-item > a").click(function() {
      $(".nav-item > a").removeClass("active");
      $(this).addClass("active");
   });

   /*-- HOME SECTION CAROUSEL PLUGIN --*/
   $('#homeSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:1
         }
      }
   });

   /*-- PORTFOLIO SECTION --*/
   var mixer = mixitup('#portfolio');

   $(".selector > span").click(function() {
      $(".selector > span").removeClass("active");
      $(this).addClass("active");
   });


   /*-- SKILL SECTION PROGRESS BAR PLUGIN --*/
   (function($) {
       'use strict';
       $('.html').rProgressbar({
           percentage: 55,
           fillBackgroundColor: '#8ec448'
       });
       $('.css').rProgressbar({
           percentage: 70,
           fillBackgroundColor: '#8ec448'
       });
       $('.jquery').rProgressbar({
           percentage: 95,
           fillBackgroundColor: '#8ec448'
       });
       $('.bootstrap').rProgressbar({
           percentage: 70,
           fillBackgroundColor: '#8ec448'
       });
       $('.psd').rProgressbar({
           percentage: 55,
           fillBackgroundColor: '#8ec448'
       });
   })(jQuery);

   /*-- TESTIMONIAL SECTION CAROUSEL PLUGIN --*/
   $('#testimonialSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:1
         },
         992: {
            items:2
         }
      }
   });

   /*-- BLOG SECTION CAROUSEL PLUGIN --*/
   $('#blogSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:1
         },
         992: {
            items:2
         }
      }
   });

   /*-- PARTNER SECTION CAROUSEL PLUGIN --*/
   $('#partnerSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:1
         },
         552: {
            items:2
         },
         768: {
            items:3
         },
         1200: {
            items:5
         }
      }
   });

   /*-- SCROLL UP --*/
   $(".scroll-up").fadeOut();
   $(window).scroll(function() {
      if ( $(this).scrollTop()>100 ) {
         $(".scroll-up").fadeIn();
      } else {
         $(".scroll-up").fadeOut();
      };
   });

   $(".scroll-up").click(function() {
      $("html").animate({scrollTop: 0}, 1000);
      return false;
   });

   /*-- AOS SCROLL ANIAMATION PLUGIN --*/
   AOS.init({
     duration: 1200,
     offset: "50px"
   })



})
