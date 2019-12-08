$(function() {

$('.multiple').not('.slick-initialized').slick({
  autoplay: true, //自動再生
  autoplaySpeed:3000,
  infinite: true, //スライドのループ有効化
  dots: true, //ドットのナビゲーションを表示
  slidesToShow: 3, //表示するスライドの数
  slidesToScroll: 3, //スクロールで切り替わるスライドの数
  responsive: [{
    breakpoint: 768, //ブレークポイントが768px
    settings: {
      slidesToShow: 3, //表示するスライドの数
      slidesToScroll: 3, //スクロールで切り替わるスライドの数
    }
  }, {
    breakpoint: 480, //ブレークポイントが480px
    settings: {
      slidesToShow: 3, //表示するスライドの数
      slidesToScroll: 1, //スクロールで切り替わるスライドの数
    }
  }]
});
});