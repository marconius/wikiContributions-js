/*$(document).ready(function() {
	test();
});*/

function test() {
  getRevisionsBefore("25227114", "602185304", function(revisions) {
	  alert("Nb contributions avant : " + revisions.length);
  });

  getRevisionsAfter("25227114", "602185304", function(revisions) {
	  alert("Nb contributions apres : " + revisions.length);
  });
}

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