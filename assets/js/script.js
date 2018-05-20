$(document).ready(function(){
  // console.log('connected');
  var shadow = $('.nav-shadow').position();

  $(document).scroll(function(){

    if ( $(document).scrollTop() > 15 ) {
      // console.log('Not at top');
      $('.nav-shadow').css('background', 'rgba(0, 0, 0, 0.25)');
    } else {
      $('.nav-shadow').css('background', 'transparent');
    }

  });
});