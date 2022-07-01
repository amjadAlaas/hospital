$(document).ready(function () {
    'use strict';
    $('.carousel').carousel();
    $('.dropdown').mouseenter(function () {
        $(this).find('.dropdown-menu').fadeIn(300);
    });
    $('.dropdown').mouseleave(function () {
        $(this).find('.dropdown-menu').fadeOut(300);
    });
    // var scrollNavToTop = $("#scrollNav");
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() >= 100) {
    //         scrollNavToTop.css({backgroundColor: "#479cc1",top:0});
    //     }
    //     else {
    //         scrollNavToTop.css({ backgroundColor: "rgb(255, 255, 255, 0.1)", top: '7%'});
    //     }
    // });
});