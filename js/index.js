$("document").ready(function() {
   
   var $timelineBlock = $(".cd-timeline-block");

   $(window).on('scroll', function() {
      $timelineBlock.each(function() {
         if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.5 && $(this).find('.cd-timeline-point').hasClass('is-hidden')) {
            $(this).find('.cd-timeline-point, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
         }
      });
   });

      var readMore = "Read more";
      var readLess = "Read less";
   
    $(".more-less-button").click(function() {
      if ($(this).hasClass("less")) {
         $(this).removeClass("less");
         $(this).parent().find(".more").toggle();
         $(this).html("Read less");
      } else {
         $(this).addClass("less");
         $(this).parent().find(".more").toggle();
         $(this).html(readMore);
         
      }
       
      return false;
  });


});