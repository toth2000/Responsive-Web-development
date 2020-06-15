$(document).ready(function(){
            
/*sticky navi*/
$('.features').waypoint(function(direction){
    if(direction == "down"){
        $('nav').addClass('sticky');
    }
    else{
        $('nav').removeClass('sticky');
    }
});    
    

                  


/* Button config */

$('.js-i-am-hungry-button').click(function(){
    $('html, body').animate({scrollTop: $('.js-section-plan').offset().top}, 1000);
});
    
$('.js-show-me-more-button').click(function(){
    $('html, body').animate({scrollTop: $('.js-feature-section').offset().top}, 1000);
});

/* Smooth Scroll*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    
/* Animation Onscroll */
$('.js-feature-animation').waypoint(function(direction){
const element = document.querySelector('.js-feature-animation');
element.classList.add('animate__animated', 'animate__fadeIn');
},{
    offset: '50%'
});

$('.js-app-photo').waypoint(function(direction){
const element = document.querySelector('.js-app-photo');
element.classList.add('animate__animated', 'animate__fadeInUp');
},{
    offset: '50%'
});
    
$('.js-city-animation').waypoint(function(direction){
const element = document.querySelector('.js-city-animation');
element.classList.add('animate__animated', 'animate__zoomIn');
},{
    offset: '50%'
});
   
$('.js-plan-animation').waypoint(function(direction){
const element = document.querySelector('.js-plan-animation');
element.classList.add('animate__animated', 'animate__pulse');
},{
    offset: '50%'
});
    
/* Mobile Navigation */

$('.js-nav-icon').click(function(){
    var nav = $('.js-main-nav');
    nav.slideToggle(200);   
});

$('.mobile-nav-icon').click(function(){
    $('.mobile-nav-icon').css("display", "none");
    $('.js-cross-icon').css("display", "block");
});
    
$('.js-cross-icon').click(function(){
    $('.mobile-nav-icon').css("display", "block");
    $('.js-cross-icon').css("display", "none");
});
    

    
var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
  }
})
});