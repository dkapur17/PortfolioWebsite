const effectsEnd = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";

function googleColor(){
    $("#p1").css("fill", "#FFC107");
    $("#p2").css("fill", "#FF3D00");
    $("#p3").css("fill", "#4CAF50");
    $("#p4").css("fill", "#1976D2");
    console.log($(this));
}

function googleDiscolor(){
    $("#p1").css("fill", "white");
    $("#p2").css("fill", "white");
    $("#p3").css("fill", "white");
    $("#p4").css("fill", "white");
}

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
        $("#linksRow").addClass("animated flipInX delay-1s")
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

    $("svg").mouseover(googleColor);
    $("svg").mouseleave(googleDiscolor);
    $(".email a").mouseover(googleColor);
    $(".email a").mouseleave(googleDiscolor);
});