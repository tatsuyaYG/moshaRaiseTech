'use strict';


$(function(){
    $('.first-nav').each(function(){
        $(this).hover(
            function(){
                console.log('open');
                $(this).children('.sub-menu').slideDown(300);
            },
            function(){
                $(this).children('.sub-menu').hide()
                console.log('hide')
            }
    );
    });
});