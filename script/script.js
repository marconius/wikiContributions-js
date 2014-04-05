function verifieTexte(valeur, id){
  if ($(id).val() == valeur){
    $(id).val("");
  }
}

function perteFocus(id, valeur){
  if($(id).val() == ""){
    $(id).val(valeur);
  }
}

function changeCss(id){ 
  // change the css file of the tag with id="stl" and rel="stylesheet"
  $('#stl[rel=stylesheet]').attr('href', id);
}
