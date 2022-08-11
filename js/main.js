'use strict';

// ヘッダーメニュー
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

// ハンバーガーボタン
$(function(){
    var ac = $('#ac-menu')
    var btn = $('#btn')
    $('.nav_btn').click(function(){
        if(ac.hasClass('close')){
            $('.nav-menu').slideDown(300);
            ac.removeClass('close');
            ac.addClass('open');
            btn.addClass('open');
            $('.nav_btn').addClass('open');
            console.log(ac.attr('class'));
        }
        else{
            $('.nav-menu').slideUp(300);
            ac.removeClass('open');
            ac.addClass('close');
            btn.removeClass('open');
            $('.nav_btn').removeClass('open');
            console.log(ac.attr('class'));
        };
    });
});

// サブメニューが開いたときの＋ボタン
$(function(){
    $('.plus').hover(function(){
        $(this).toggleClass('open');
    })
})

$(function(){
    $(window).resize(function(){
        if(window.matchMedia('(max-width:1200px)').matches){
            $('.nav-menu').css('display','none');
        }else{
            $('.nav-menu').css('display','block');
        };
    });
});