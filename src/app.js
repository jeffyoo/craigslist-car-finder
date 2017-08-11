
var xhttp = new XMLHttpRequest();

var url = "https://losangeles.craigslist.org/search/cta?query=nsx&srchType=T&auto_transmission=1";

function ajaxCall() {
	$.get(url,function(data, status) {
		var parser = new DOMParser();
		var craigslistSearch = parser.parseFromString(data, "text/html");
		var datapidArr = craigslistSearch.querySelectorAll('[data-pid]');
		var filteredArr = [];
		
		datapidArr.forEach(function(e, i) {
			if (i % 2 == 0) {
				filteredArr.push(e);
			}
		})







	});
}

