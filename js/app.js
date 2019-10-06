

  // window.onload = function () {
  //   document.getElementById("loading").style.display = "none";
  // }

// // Script for menu bar icon
$(document).ready(function () {
  $('.icon').click(function () {
    $('.icon').toggleClass('active');
  });
  $('.icon').click(function () {
    $('nav').toggleClass('toggled');
    $('.dark-overlay').toggleClass('toggled');
    $('body').toggleClass('toggled');
  });
  $('.icon.active').click(function () {
    $('nav').removeClass('toggled');
    $('.dark-overlay').removeClass('toggled');
    $('body').removeClass('toggled');
  });
  $('.dark-overlay').click(function () {
    $('nav').removeClass('toggled');
    $('.dark-overlay').removeClass('toggled');
    $('body').removeClass('toggled');
    $('.icon').removeClass('active');
  });
});



var TIMEOUT = 6000;


var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {

  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios
    .attr('checked', false);


  if (currentIndex >= radiosLength - 1) {

    $radios
      .first()
      .attr('checked', true);

  } else {

    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);

  }

}



$(document).ready(function () {
  $('#nav-icon4').click(function (e) {
    $(this).toggleClass('active');
    $('.menu ul').toggleClass('active');

    e.preventDefault();
  });
});

$(document).ready(function () {
  $('.toggle-nav,#nav-icon4').click(function () {
    $(this).toggleClass('open');
  });
});
var top0 = $('#p_nav').offset().top;
var top1 = $('#p_cloth').offset().top;
var top2 = $('#p_shoe').offset().top;
var top3 = $('#p_belt').offset().top;
var top4 = $('#p_sunglass').offset().top;
var top5 = $('footer').offset().top;


$(document).scroll(function () {
  var scrollPos = $(document).scrollTop();
  if (scrollPos <= top0 && scrollPos < top1) {
    $('.cloth_active').css('background-color', '');
    $('.shoe_active').css('background-color', '');
    $('#belt_active').css('background-color', '');
    $('.sunglass_active').css('background-color', '');
  }
  else if (scrollPos >= top1 && scrollPos < top2){
    $('.cloth_active').css('background-color', 'rgba(173, 238, 43, 0.918)');
    $('.shoe_active').css('background-color', '');
    $('.belt_active').css('background-color', '');
    $('.sunglass_active').css('background-color', '');
  }else if(scrollPos >= top2 && scrollPos < top3){
    $('.shoe_active').css('background-color', 'rgba(173, 238, 43, 0.918)');
    $('.cloth_active').css('background-color', '');
    $('.belt_active').css('background-color', '');
    $('.sunglass_active').css('background-color', '');
  }else if(scrollPos >= top3 && scrollPos < top4 ){
    $('.belt_active').css('background-color', 'rgba(173, 238, 43, 0.918)');
    $('.cloth_active').css('background-color', '');
    $('.shoe_active').css('background-color', '');
    $('.sunglass_active').css('background-color', '');
  } else if (scrollPos >= top4 && scrollPos < top5) {
    $('.sunglass_active').css('background-color', 'rgba(173, 238, 43, 0.918)');
    $('.belt_active').css('background-color', '');
    $('.cloth_active').css('background-color', '');
    $('.shoe_active').css('background-color', '');
  }else if (scrollPos >= top5) {
    $('.sunglass_active').css('background-color', '');
    $('.belt_active').css('background-color', '');
    $('.cloth_active').css('background-color', '');
    $('.shoe_active').css('background-color', '');
  }
  
});


