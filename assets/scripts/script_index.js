var effectsEnd = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";

$(document).ready(function(){
   /*Hover animations for nav-links*/
   $(".nav-link").mouseover(function(){
      $(this).addClass("animated pulse").one(effectsEnd, function(){
         $(this).removeClass("animated pulse");
      });
   });
});