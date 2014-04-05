function writeContributor(elementid, contributor) {
  	if (contributor.userid === 0) {
	  	$("#" + elementid).html('Anonyme');
  	} else {
		  $("#" + elementid).html('<a href="http://en.wikipedia.org/wiki/User:' + contributor.user + '" target="_blank">' + contributor.user + '</a>');
  	}
}

function getContributorBefore(pageid, revid, complete) {
	getRevisionsBefore(pageid, revid, function(revisions) {
		complete({
			user: revisions[revisions.length - 1].user,
			userid: revisions[revisions.length - 1].userid
		});
	});
}

function getContributorAfter(pageid, revid, complete) {
	getRevisionsAfter(pageid, revid, function(revisions) {
		complete({
			user: revisions[0].user,
			userid: revisions[0].userid
		});
	});
}


function getFirstContributor(pageid, revid, complete) {
	getRevisionsBefore(pageid, revid, function(revisions) {
		complete({
			user: revisions[0].user,
			userid: revisions[0].userid
		});
	});
}

function getLastContributor(pageid, revid, complete) {
	getRevisionsAfter(pageid, revid, function(revisions) {
		complete({
			user: revisions[revisions.length - 1].user,
			userid: revisions[revisions.length - 1].userid
		});
	});
}
