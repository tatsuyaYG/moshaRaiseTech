'use strict';


$(function(){
    $('.first-nav').each(function(){
        $(this).hover(
            function(){
                $(this).children('.sub-menu').slideDown(300);
            },
            function(){
                $(this).children('.sub-menu').hide()
            }
    );
    });
});