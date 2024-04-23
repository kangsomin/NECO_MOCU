$(function () {
    $(".footer_btn").click(function () {
      $(".footer_bottom_box").stop().slideToggle();
      $('body, html').animate({
        scrollTop: $('body, html')[0].scrollHeight
      }, 400);
    });

  });

  AOS.init({
    duration: 1200 //aos 나타나는 속도
  });
  