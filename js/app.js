$(document).ready(function() {
    /* Pinned menu */
    $('.section-cv').waypoint(function(direction) {
        if (direction == "down") {
          $('nav').addClass('pinned-menu');
        } 
        else {
          $('nav').removeClass('pinned-menu');
        }
    }, {
        offset: '80px;'
    });

    /* Menu/section animate scroll */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1200);
              return false;
            }
          }
        });
      });

    /* Show CV-more info */
    $('.cv-show-div').click(function() {
      $(this).next('.cv-div-more-info').slideToggle().siblings('.cv-div-more-info:visible').slideToggle('slow');
    });
});