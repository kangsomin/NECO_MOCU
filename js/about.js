// 컨텐츠 선
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('on');
        }
        else {
            entry.target.classList.remove('on');
        }
    });
});
const boxElList = document.querySelectorAll('.flex_border');
boxElList.forEach((el) => {
    io.observe(el);
});

//   aos
AOS.init({
    duration: 1500 //aos 나타나는 속도
});

// 슬라이드
var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
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