const effectsEnd = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";

$(document).ready(function () {

    /*Give browser 20ms to get the DOM ready, then scroll to the top of the webpage*/
    setTimeout(function(){
        $(document).scrollTop(0);
    }, 20);

    /*When the continueDown button is clicked, get rid of the preload screen and allow scrolling*/
    $("#continueDown").click(function(){
        $(".navbar").removeClass("invisible");
        $(".navbar").addClass("animated slideInDown");
        $("#preloadBG").slideUp(750, function(){
            $('body').css("overflow", "auto");
            $(this).remove();
        });
    });

    /*When in mobile mode: Menu must go dark when at top of the page and hamburger is clicked*/
    $(".navbar-toggler").click(function(){
        if($(document).scrollTop() < $(".navbar").height())
        {
            $(".navbar").toggleClass("bg-dark");
        }
    });

    /*Pulsing animation for nav-items*/
    $(".nav-link").mouseover(function(){
        $(this).addClass("animated pulse").one(effectsEnd, function(){
            $(this).removeClass("animated pulse");
        });
    });

    /*Make the navbar dark on scrolling*/
    $(document).scroll(function(){

        $(".navbar").toggleClass("bg-dark", $(this).scrollTop() > $(".navbar").height());

    });

    /*Use the mini arrow on the jumbotron to scroll down to the cards*/
    $("#downScroll").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#downScroll").offset().top
        }, 1000);
    });

    /*Add a boxShadow to the cards when they are hovered over*/
    $(".card").mouseenter(function(){
        $(this).css({
            boxShadow: "10px 5px 5px rgba(0, 0, 0, 0.5)",
            transition: "500ms box-shadow"
        });
    });
    $(".card").mouseleave(function(){
        $(this).css({
            boxShadow: "10px 5px 5px rgba(0, 0, 0, 0)",
            transition: "500ms box-shadow"
        });
    });

});