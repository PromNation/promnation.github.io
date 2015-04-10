/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    $('.icon-menu').click(function () {
        $('.menu').animate({
            left: '0px'
        }, 200);
        $('body').animate({
            left: '285px'
        }, 200);
    });
    $('.icon-close').click(function () {
        $('.menu').animate({
            left: '-285px'
        }, 200);
        $('body').animate({
            left: '0px'
        }, 200);
    });
});
