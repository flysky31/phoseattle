$(function() {
    // 초기화: 768px 이상에서는 내용이 펼쳐진 상태로 시작
    if ($(window).width() <= 768) {
        $(".select_box").slideUp();
    }

    // resize 이벤트 핸들러 추가
    $(window).resize(function() {
        // 윈도우 크기가 768px 이하일 때
        if ($(window).width() <= 768) {
            // 현재 펼쳐진 상태인지 확인하고, 아니라면 닫기
            if (!$("#footer h3").hasClass("on")) {
                $(".select_box").slideUp();
            }
        } else {
            // 윈도우 크기가 768px 초과일 때는 항상 내용을 열어둠
            $(".select_box").slideDown();
        }
    });

    // 클릭 이벤트 핸들러 추가
    $("#footer h3").click(function() {
        if ($(window).width() <= 768) {
            $(this).toggleClass("on");
            $("#footer h3 i").toggleClass("on");
            if ($(this).hasClass("on") === true) {
                $(".select_box").slideDown();
            } else {
                $(".select_box").slideUp();
            }
        } else{
            $(".select_box").slideDown();
        }
    });


    $("#navbarNav .navbar-nav .nav-item > a").click(function(){
        $("#navbarNav").removeClass("show");
        $(".hamburger-menu").removeClass("active");

    });
});
  



    //totop 버튼
    function toggleTotopButton() {
        var totopButton = document.getElementById("totop");
        if (document.documentElement.scrollTop > 300) {
          totopButton.style.opacity = "1";
        } else {
          totopButton.style.opacity = "0";
        }
      }
      
      // 상단으로 스크롤하는 함수
      function scrollToTop() {
        document.documentElement.scrollTop = 0;
      }
      
      // 스크롤 이벤트를 감지하여 "totop" 버튼의 표시/숨김을 처리
      window.onscroll = function() {
        toggleTotopButton();
      };
    



      
// 애니메이션 동작
function aniCtrl(){
    var _st = $(window).scrollTop();
   
    var _wH = $(window).height();
    console.log(_wH);
    $('.ani-item').each(function(){
        var _this = $(this);
        if( _this.offset().top <= (_st + _wH) && !_this.hasClass('done') ){
            _this.addClass('done');
        }
    });
}


$(document).ready(function(){
    // 애니메이션 동작
    aniCtrl();

    $(window).scroll(function(){
        aniCtrl();
    });
});
