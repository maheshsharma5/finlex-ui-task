$(document).ready(function(){    
    $('.hamburger').click(function(){
        $(this).toggleClass('open');
        $(this).next('.dropdown-menu').toggleClass('open')
    });

    
    
    if($(window).width() > 767){
        $('.js_setting_pop').click(function(){
            $(this).parents('.floating-box').toggleClass('open')
        });
    } else {
        $('.js_setting_pop').click(function(){
            $(this).parents('.floating-box').addClass('open')
        });
        $('.js_close').click(function(){
            $(this).parents('.floating-box').removeClass('open')
        });
        
    }
})
