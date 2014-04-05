/*
INF6150
�quipe Aplus
Hiver 2014

D�veloppement des �l�ments 2a i et ii du carnet de produit.

2a-i: calcul du nombre de jour depuis la derni�re intervention de l'auteur sur un article donn�
2a-ii: calcul du nombre de jour depuis la derni�re intervention (peu importe le contributeur) sur un article donn�
*/

function getArticleLastAuthorContribution(urlWiki, pageid, user, complete) {
  
  var url = urlWiki + "/w/api.php?format=json&action=query&pageids=" + pageid + "&prop=revisions&rvprop=timestamp|user|userid&rvuser=" + user;
  
  $.ajax({
      url: url,
      dataType: "jsonp",
      type: 'GET',
      success: function (response) {
        revisionDateGMT0 = new Date(response.query.pages[pageid].revisions[0].timestamp);
        currentDateGMTLocal = new Date();
        millisecondsBetweenGMT0 = currentDateGMTLocal.getTimezoneOffset() * 60 * 1000;
        currentDateGMT0 = new Date();
        currentDateGMT0.setTime(currentDateGMTLocal.getTime() + millisecondsBetweenGMT0);
        
        complete(daysBetween(revisionDateGMT0, currentDateGMT0));
      }
  });
}

function getArticleLastContribution(urlWiki, pageid) {
  
  
}


function daysBetween(date1, date2) {
  var time2 = date2.getTime();
  var time1 = date1.getTime();

  return parseInt((time2 - time1) / (24 * 3600 * 1000));
};


function testCallback2a() {
  alert("test de test");
}