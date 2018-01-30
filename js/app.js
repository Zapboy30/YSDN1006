//bouncy subheader text
$(function(){

  var subtitle = ["As seen on TV!", "99.9% Vegan!", "Now In Stunning 240p!", "Lorem Ipsum", "Now 80% Off!"];

  $("#subheader").html($("#subheader").html().replace("placeholder", subtitle[Math.floor(Math.random()*subtitle.length)]));
});
