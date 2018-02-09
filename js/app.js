
// for scrolling that is smoother than jazz.
$("a").on('click', function(event) { // when an anchor is clicked.

    if (this.hash !== "") { // if it has a hashtag in the href link.
        event.preventDefault();
        var hash = this.hash; // the variable hash is set to the link.

        $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){
            window.location.hash = hash; // the page scrolls to the corresponding id tag smoother than creamy peanut butter.
        });
    }
});

$(document).ready(function(){
      // super sexy nav fade in and out
  $('#nav-close').click(function() {
      $("#nav-overlay").fadeOut(500);
      var scrollTop = parseInt($('html').css('top'));
      $('html').removeClass('noscroll'); //enables verticle scrolling
      $('html,body').scrollTop(-scrollTop);
  });

  $('#nav-open').click(function() {
      $("#nav-overlay").fadeIn(1000);
      var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); //disables verticle scrolling
     $('html').addClass('noscroll').css('top',-scrollTop);
  });

//super sassy back to top button
var windowHeight = $(window).height();

$(document).scroll(function() {
    $('#to-top').toggle($(this).scrollTop() > (windowHeight / 4));
});
});
