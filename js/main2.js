$(document).ready(function () {
    'use strict';
    $('.dropdown').mouseenter(function (){
        $(this).find('.dropdown-menu').fadeIn(200);
    });
    $('.dropdown').mouseleave(function () {
        $(this).find('.dropdown-menu').fadeOut(100);
    });
});