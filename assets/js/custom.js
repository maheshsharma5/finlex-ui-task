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
            $(this).parents('.floating-box').addClass('open');
            $('body').addClass('modal-open');
        });
        $('.js_close').click(function(){
            $(this).parents('.floating-box').removeClass('open');
            $('body').removeClass('modal-open');
        });
        
    }
});

var eleTopPosition = $('.js-bannerposition').position().top + 82;
$(window).on('scroll', function(){
    if($(window).width() < 768){
        var eleScrollTop = $(window).scrollTop();
        if(eleScrollTop > eleTopPosition) {
            $('body').addClass('scroll-element');
        } else {
            $('body').removeClass('scroll-element');
        }
    }
});
