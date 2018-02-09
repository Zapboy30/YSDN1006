
// for scrolling that is smoother than jazz.
$("a").on('click', function(event) { // when an anchor is clicked.

    if (this.hash !== "") { // if it has a hashtag in the href link.
        event.preventDefault();
        var hash = this.hash; // the variable hash is set to the link.

        $('html, body').animate({scrollTop: $(hash).offset().top}, 500, function(){
            window.location.hash = hash; // the page scrolls to the corresponding id tag smoother than creamy peanut butter.
        });
    }
});

$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 25){
    $("nav").addClass("nav-shrink");
    $("nav").css("transition", "all 0.45s ease-out");
    $("nav").css("-webkit-transition", "all 0.45s ease-out");
    $("nav").css("-moz-transition", "all 0.45s ease-out");
    $( ".container" ).css("transition", "padding 0.5s ease-in-out");
    $( ".container" ).css("-webkit-transition", "padding 0.5s ease-in-out");
    $( ".container" ).css("-moz-transition", "padding 0.5s ease-in-out");
    $( ".container" ).css( "padding-top", "156px" );
  }
  else
  {
    $("nav").removeClass("nav-shrink");
    $("nav").css("transition", "all 0.5s ease-in-out");
    $("nav").css("-webkit-transition", "all 0.5s ease-out");
    $("nav").css("-moz-transition", "all 0.5s ease-out");
    $( ".container" ).css("transition", "padding 0.55s ease-in-out");
    $( ".container" ).css("-webkit-transition", "padding 0.55s ease-in-out");
    $( ".container" ).css("-moz-transition", "padding 0.55s ease-in-out");
    $( ".container" ).css( "padding-top", "400px" );
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
    $('#to-top').toggle($(this).scrollTop() > 35);
});
});
