// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
  // slidesPerView: "2",
  slidesPerView: "auto",
  autoplay: true,
  loop: true,
  centeredSlides: true,
});

// aos 나타나는 속도
AOS.init({
  duration: 2000
});

// 탑버튼 스크롤시
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.top').fadeIn();
  } else {
    $('.top').fadeOut();
  }
});
// 탑버튼 클릭시
$('.top').click(function () {
  $('html, body').animate({ scrollTop: 700 }, 400);
  return false;
});

// 푸터
$(function () {
  $(".footer_btn").click(function () {
    $(".footer_bottom_box").stop().slideToggle();
    $('body, html').animate({
      scrollTop: $('body, html')[0].scrollHeight
    }, 400);
  });

});
