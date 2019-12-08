$(function() {
  
  //マウスを乗せたら発動
  $('.top-bar__nav__list').hover(function() {

    //マウスを乗せたら色が変わる
    $(this).css('font-size', '50px');

  }, function(){
    $(this).css('font-size', '');
  });

  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var headerHight = 100;
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
  $(document).on('turbolinks:load', function(){
    $('.slick').slick({
      autoplay:true,
      dots:true,
    });
  });
  $('#btn btn-primary btn-xl text-uppercase').on('submit', function(e){
    e.preventDefault();
    $('.html').animate({scrollTop: $('.html')[0].scrollHeight}, 'fast');
    $('.contents__btn__form__box__submit').removeAttr('data-disable-with');
});
});