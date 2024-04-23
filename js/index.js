$(function () {
    $(".footer_btn").click(function () {
      $(".footer_bottom_box").stop().slideToggle();
      $('body, html').animate({
        scrollTop: $('body, html')[0].scrollHeight
      }, 400);
    });

  });

  AOS.init({
    duration: 1300 //aos 나타나는 속도
  });

  // Initialize Swiper 
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });