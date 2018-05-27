$(document).ready(function(){
  
  var expanded = false;
  var shadow = $('.nav-shadow').position();

  // Shadow scroll
  if (!expanded) {
    $(document).scroll(function(){

      if ( $(document).scrollTop() > 15 ) {
        // console.log('Not at top');
        $('.nav-shadow').css('background', 'rgba(0, 0, 0, 0.25)');
      } else {
        $('.nav-shadow').css('background', 'transparent');
      }
  
    });
  }

  $('.mobile-btn').click(function(){
    $('.menu-bar').css({
      'transition': '.5s'
    });
    if ($('.mobile-btn p').text() === 'MENU') {
      $('.menu-bar').css({
        'left': '0px'
      });
      $('.mobile-btn p').text('CLOSE');
    } else {
      $('.menu-bar').css('left', '-250px');
      $('.mobile-btn p').text('MENU');
    }
  });

  // Window Resize Listener...
  $(window).resize(function() {
    if ($(window).width() > 1200) {
      $('.menu-bar').css({
        'left': '0',
        'transition': 'none'
      });
    } else {
      $('.menu-bar').css({
        'left': '-250px'
      });
    }
  });

});