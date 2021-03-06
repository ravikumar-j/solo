/*===============================
| |  |  |    |preloader
=================================*/


$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/*===============================
| |  |  |    |Owl Carcouel
=================================*/

$(document).ready(function(){
  $("#team-members").owlCarousel({
    items:2,
    autoplay:true,
    smartSpeed:700,
    autoplayHoverPause:true,
    nav:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
});

/*===============================
| |  |  |    |Progress Bar
=================================*/

$(function() {

  $("#progress-elements").waypoint(function(){

    $(".progress-bar").each(function(){

      $(this).animate({
         width: $(this).attr("aria-valuenow") + "%"
      }, 1000);
      
    });

    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });
  
});

