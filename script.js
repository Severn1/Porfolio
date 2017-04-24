$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('header');
   var offset = startchange.offset();
   var height = $('header').height() - 50;
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > (offset.top + height)) {
          $(".nav").css('background-color', '#ff9933');
       } else {
          $('.nav').css('background-color', 'transparent');
       }
   });
    }
});