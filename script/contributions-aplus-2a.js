/*
INF6150
Équipe Aplus
Hiver 2014

Développement des éléments 2a i et ii du carnet de produit.

2a-i: calcul du nombre de jour depuis la dernière intervention de l'utilisateur donné sur un article donné
2a-ii: calcul du nombre de jour depuis la dernière intervention (peu importe le contributeur) sur un article donné
*/

function getArticleLastUserContribution(urlWiki, pageid, user, complete) {
  
  var url = urlWiki + "/w/api.php?format=json&action=query&pageids=" + pageid + "&prop=revisions&rvprop=timestamp|user|userid&rvuser=" + user;
  
  getLastContributionFromWiki(url, pageid, complete);
}


function getArticleLastContribution(urlWiki, pageid, complete) {
  
  var url = urlWiki + "/w/api.php?format=json&action=query&pageids=" + pageid + "&prop=revisions&rvprop=timestamp|user|userid";
  
  getLastContributionFromWiki(url, pageid, complete);
}


function getLastContributionFromWiki(url, pageid, complete) {
  
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


function daysBetween(date1, date2) {
  var time2 = date2.getTime();
  var time1 = date1.getTime();

  return parseInt((time2 - time1) / (24 * 3600 * 1000));
};