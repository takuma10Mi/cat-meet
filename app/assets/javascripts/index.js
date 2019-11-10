$(function() {
  
  //マウスを乗せたら発動
  $('.top-bar__nav__list').hover(function() {

    //マウスを乗せたら色が変わる
    $(this).css('font-size', '50px');


  }, function(){
    $(this).css('font-size', '');
  });
});