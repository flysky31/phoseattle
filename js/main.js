$(document).ready(function() {
  // Show default tab content
  $('#tab1').show();

  // Add 'active' class to the default tab
  $('#tab1').addClass('active');

  // Handle tab clicks
  $('.tabs li').click(function() {
    var tabId = $(this).attr('data-tab');

    // Hide all tab content
    $('.tab-content').hide();

    // Remove 'active' class from all tabs
    $('.tabs li').removeClass('active');

    // Add 'active' class to the clicked tab
    $(this).addClass('active');

    // Show the clicked tab content
    $('#' + tabId).show();
  });

  // Handle modal trigger clicks
  $('.modal-trigger').click(function() {
    // Get the content of the clicked modal-trigger's parent li
    var modalContent = $(this).closest('li').html();

    // Set the modal content
    $('.modal-content .modal_box').html(modalContent);

    // Show the modal
    $('#myModal').show();
  });

  // Handle modal close button click
  $('.close').click(function() {
    // Hide the modal
    $('#myModal').hide();
  });

  // Handle clicking outside the modal to close it
  $(window).click(function(event) {
    if (event.target.id === 'myModal') {
      $('#myModal').hide();
    }
  });
  
});


 //썸네일 마우스호버
 $(document).ready(function() {
  // .lt_wr a 요소에 대해 마우스 오버 이벤트 처리
  $("#deps04 .inner .th li").mouseover(function() {
    // this를 사용하여 해당 요소의 하위 요소인 .lt_detail에만 클래스 "on"을 추가합니다.
    $(this).find(".hover").addClass("on");
  });

  // .lt_wr a 요소에 대해 마우스 아웃 이벤트 처리
  $("#deps04 .inner .th li").mouseout(function() {
    // this를 사용하여 해당 요소의 하위 요소인 .lt_detail에만 클래스 "on"을 제거합니다.
    $(this).find(".hover").removeClass("on");
  });
    //mobile menu 
    $('.hamburger-menu').click(function() {
      $(this).toggleClass('active');
    });

    

    // AOS.init({
    //   duration: 500,
    //   easing: 'ease-out-quart',
    //   once: true
    // });



    var swiper = new Swiper(".vdSwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper_arrowvd .swiper-button-next",
        prevEl: ".swiper_arrowvd .swiper-button-prev",
      },
    });
    
});


$(document).ready(function() {



  var swiper = new Swiper('.swiper01',{
    slidesPerView:2,
    centeredSlides: true,
    loop:true,
    navigation: {
      nextEl: '.arrow1.swiper-button-next',
      prevEl: '.arrow1.swiper-button-prev',
    },
    spaceBetween: 50,
    //observer: true,
    observeParents: true,
    breakpoints:{
        1600:{
            slidesPerView:6,
        },
        1024:{
            slidesPerView:4,
        },
        480:{
            slidesPerView:3.5,
            spaceBetween: 20,
        },
        
    }
        
});

var swiper = new Swiper('.swiper02',{
  slidesPerView:2,
  centeredSlides: true,
  loop:true,
  navigation: {
    nextEl: '.arrow2.swiper-button-next',
    prevEl: '.arrow2.swiper-button-prev',
  },
  spaceBetween: 50,
  //observer: true,
  observeParents: true,
  breakpoints:{
        1600:{
            slidesPerView:6,
        },
        1024:{
            slidesPerView:4,
        },
        480:{
          slidesPerView:3.5,
          spaceBetween: 20,
      },
        
  }
      
});


var swiper = new Swiper('.swiper03',{
  slidesPerView:2,
  centeredSlides: true,
  loop:true,
  spaceBetween: 50,
  navigation: {
    nextEl: '.arrow3.swiper-button-next',
    prevEl: '.arrow3.swiper-button-prev',
  },
  //observer: true,
  observeParents: true,
  breakpoints:{
        1600:{
          slidesPerView:6,
      },
      1024:{
          slidesPerView:4,
      },
      480:{
        slidesPerView:3.5,
        spaceBetween: 20,
    },
      
  }
      
});


  // Handle tab button click
  $('.tab-button').on('click', function() {
    // Remove 'active' class from all tabs
    $('.tab-button').removeClass('active');
    $('.tab-content2').hide();
  
    // Add 'active' class to the clicked tab
    $(this).addClass('active');
  
    var tabId = $(this).data('tab');
  
    // Show the selected tab
    $('#' + tabId).show();
  });
});




// Activate the first tab initially
$(document).ready(function() {
  $('.tab-button:first').trigger('click');
});
//




// $(document).ready(function(){
//   // 와이드 화면 설정
//   $('#wrap').addClass('wide');

//   // 비주얼 영역 창 크기
//   visualResize();

//   // 애니메이션 동작
//   aniCtrl();

//   $(window).resize(function(){
//       // 비주얼 영역 창 크기
//       visualResize();
//   });

//   $(window).scroll(function(){
//       // 애니메이션 동작
//       aniCtrl();
//   });
// });



// // 애니메이션 동작
// function aniCtrl(){
//   var _st = $(window).scrollTop();
//   var _wH = $(window).height();
//   $('.ani-item').each(function(){
//       var _this = $(this);
//       if( _this.offset().top <= (_st + _wH) && !_this.hasClass('done') ){
//           _this.addClass('done');
//       }
//   });
// }





// $(document).ready(function () {

//   var swiper1 = new Swiper(".mySwiper1", {
//     loop: true,
//     //spaceBetween: 10,
//     slidesPerView: 1,
//     //freeMode: true,
    
//     watchSlidesProgress: true,
//     breakpoints: {
        
//       1024: {
//         slidesPerView: 2
      
//       },
//       1360: {
//         slidesPerView: 3          
//       },
//     },
//   });
//   var swiper2 = new Swiper(".mySwiper2", {
//     loop: true,
//     //spaceBetween: 10,
//     navigation: {
//       nextEl: ".swiper_arrow .swiper-button-next",
//       prevEl: ".swiper_arrow .swiper-button-prev",
//     },
//     effect:"fade",
//     thumbs: {
//       swiper: swiper1,
//     },
//   });


//   var swiper4 = new Swiper(".mySwiper4", {
//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 3,
//     freeMode: true,
    
//     watchSlidesProgress: true,
//   });
//   var swiper3 = new Swiper(".mySwiper3", {
//     loop: true,
//     spaceBetween: 10,
//     navigation: {
//       nextEl: ".swiper_arrow4 .swiper-button-next",
//       prevEl: ".swiper_arrow4 .swiper-button-prev",
//     },
//     effect:"fade",
//     thumbs: {
//       swiper: swiper4,
//     },
//   });


//   var swiper5 = new Swiper(".mySwiper5", {
//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 3,
//     freeMode: true,
    
//     watchSlidesProgress: true,
//   });
//   var swiper6 = new Swiper(".mySwiper6", {
//     loop: true,
//     spaceBetween: 10,
//     navigation: {
//       nextEl: ".swiper_arrow5 .swiper-button-next",
//       prevEl: ".swiper_arrow5 .swiper-button-prev",
//     },
//     effect:"fade",
//     thumbs: {
//       swiper: swiper5,
//     },
//   });

// });