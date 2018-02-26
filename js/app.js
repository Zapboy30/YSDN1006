
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
      var widthNav = $(window).width();

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
    $( ".lg-nav-intro" ).css( "margin", "0" );
  }
  else
  {
    $("nav").removeClass("nav-shrink");
    $("nav").css("transition", "all 0.55s ease-in-out");
    $("nav").css("-webkit-transition", "all 0.55s ease-in-out");
    $("nav").css("-moz-transition", "all 0.55s ease-in-out");
    $( ".container" ).css("transition", "padding 0.5s ease-in-out");
    $( ".container" ).css("-webkit-transition", "padding 0.5s ease-in-out");
    $( ".container" ).css("-moz-transition", "padding 0.5s ease-in-out");
    $( ".container" ).css( "padding-top", "400px" );



	       if ( widthNav < 480 ){
           $( ".lg-nav-intro" ).css( "margin", "175px 0 175px 0" );
           $( ".lg-nav-intro" ).css( "height", "50px" );
	    } if (widthNav < 768 && widthNav > 480){
        $( ".lg-nav-intro" ).css( "margin", "166px 0 166px 0" );
        $( ".lg-nav-intro" ).css( "height", "68px" );
      } if (widthNav < 960 && widthNav > 768){
        $( ".lg-nav-intro" ).css( "margin", "146px 0 146px 0" );
        $( ".lg-nav-intro" ).css( "height", "108px" );
      }	else if (widthNav > 960){
        $( ".lg-nav-intro" ).css( "margin", "131px 0 131px 2%" );
        $( ".lg-nav-intro" ).css( "height", "138px" );
 }


  }
});

$(document).ready(function(){

      // super sexy nav fade in and out
  $('#nav-close').click(function() {
      $("#nav-overlay").fadeOut(200);
  });

  $('#nav-open').click(function() {
      $("#nav-overlay").fadeIn(500);
  });

//super sassy back to top button
var windowHeight = $(window).height();

$(document).scroll(function() {
    $('#to-top').toggle($(this).scrollTop() > 35);
});
});
