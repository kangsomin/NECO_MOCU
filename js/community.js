// 탭메뉴
$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
      $('.tabcontent > div').hide().filter(this.hash).fadeIn();
      $('.tabnav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();


    $(".f_q li").click(function () {
      $(this).children(".f_q_text").slideToggle()
      $(this).siblings().children(".f_q_text").slideUp();
      $(this).toggleClass("on").siblings().removeClass("on")
    });
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