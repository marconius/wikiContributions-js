/*
INF6150
Équipe Aplus
Hiver 2014

Développement des éléments 2b i et ii du carnet de produit.

2b-i: Obtenir le nombre d'intervention  sur un article, AVANT une contribution
2b-ii: Obtenir le nombre d'intervention  sur un article, APRÈS une contribution
*/

function getRevisionsBefore(pageid, revid, complete) {
	getAllRevisions(pageid, function(revisions) {
		var results = [];
		for (var i = 0; i < revisions.length; ++i) {
			if (revisions[i].revid == revid) {
				break;
			}
			results.push(revisions[i]);
		}
		complete(results);
	});
}

function getRevisionsAfter(pageid, revid, complete) {
	getAllRevisions(pageid, function(revisions) {
		var results = [];
		var passed = false;
		for (var i = 0; i < revisions.length; ++i) {
			if (passed) {
				results.push(revisions[i]);
			}

			if (revisions[i].revid == revid) {
				passed = true;
			}
		}
		complete(results);
	});
}

function getAllRevisions(pageid, complete) {
	$.ajax({
		url: getUrlForAllRevisions(pageid),
		dataType: "jsonp",
		type: 'GET',
		success: function(response) {
			complete(response.query.pages[pageid].revisions);
		}
	});
}

function getUrlForAllRevisions(pageid) {
	return "http://en.wikipedia.org/w/api.php?" +
		"format=json&" +
		"action=query&" +
		"pageids=" + escape(pageid) + "&" +
		"prop=revisions&" +
		"rvprop=ids&" +
		"rvlimit=max";
}