$(document).ready(function () {
    "use strict";


    $(".sidebar-toggle").on("click", function () {
        $(".sidebar").toggleClass("toggled").one("transitionend", function () {
            setTimeout(function () {
                window.dispatchEvent(new Event("resize"))
            }, 100);
        });

        if ($(".sidebar").hasClass('toggled')) {
            $(".main").animate({
                marginLeft: '0px'
            }, 400);
        } else {
            $(".main").animate({
                marginLeft: '225px'
            }, 400);

        }



    });

    $(".sidebar-item").on('click', function () {
        $('.collapse').collapse('hide');
    });

    var e = $(".sidebar .active");
    if (e.length && e.parent(".collapse").length) {
        var l = e.parent(".collapse");
        l.prev("a").attr("aria-expanded", !0), l.addClass("show")
    }

    fnScrollbar();
    function fnScrollbar() {

        var wdheight = $(window).height();
        $(".sidebar-content .sidebar-nav").css("height", wdheight + "px");
        $(".sidebar-content .sidebar-nav").perfectScrollbar();
    }


    $(window).resize(function () {
        fnScrollbar();
    });



    feather.replace();

    $(".spnShow").on('click', function () {
        $(this).closest('.showcode').toggleClass("active");
    });


});

$(window).on('load', function () {
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
        var preloader = $('.Preloader-wrapper');
        setTimeout(function () {
            preloader.fadeOut(preloaderFadeOutTime);
        }, 500);
    }
    hidePreloader();
});


