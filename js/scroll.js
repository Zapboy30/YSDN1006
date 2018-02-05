// scroll.js
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

// makes a sassy back to top appear in the bottom right corner
$(document).ready(function() {
  var windowHeight = $(window).height();

  $(document).scroll(function() {
      $('#totop').toggle($(this).scrollTop() > (windowHeight / 2));
  });

});
