$('.header__burger').click(function(){
    $('.header__nav').addClass('open');
});

$('.nav__krest').click(function(){
    $('.header__nav').removeClass('open');
});

$(window).scroll(function(){
    let scrolled = $(window).scrollTop();

    if(scrolled > 700) {
        $('.main__banner').addClass('absolute');
        $('.main__comments').addClass('absolute');
    } else if(scrolled < 700){
        $('.main__banner').removeClass('absolute');
        $('.main__comments').removeClass('absolute');
    }
})