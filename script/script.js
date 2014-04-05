
function changeCss(id){ 
  var stl = id;     // sets the css file, according to plusmin

  // change the css file of the tag with id="stl" and rel="stylesheet"
  $('#stl[rel=stylesheet]').attr('href', stl);
}