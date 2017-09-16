$(function() {
    'use strict';

    $('.sp__menu').on('click', function() {
        $(this).toggleClass('opneMenu');
        $('.side__menu').slideToggle();
        var mainMargin = $('main').css('margin-top');
        if (mainMargin === '0px') {
            $('main').animate({
                'marginTop': 176
            });
        } else {
            $('main').animate({
                'marginTop': 0
            });
        }
    });

    $(window).on('scroll', function() {
        $('.sp__entry').css('display', 'none').delay(500).fadeIn();
    });

});