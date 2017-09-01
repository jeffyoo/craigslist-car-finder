
var xhr = new XMLHttpRequest();
var parser = new DOMParser();

var url = "https://losangeles.craigslist.org/search/cta?query=nsx&srchType=T&auto_transmission=1";

var results = [];

function ajaxCall() {
	var id, title, price;

	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var array = [];
			
			var craigslistSearch = parser.parseFromString(xhr.response, "text/html");
			var datapidArr = craigslistSearch.querySelectorAll('[data-pid]');

			datapidArr.forEach(function(e, i) {
				// console.log(e.getAttribute("data-pid"))
				// var test = e.getAttribute("data-repost-of");
				// if (test !== undefined) {
				// 	console.log(test)
				// }
				if (e.tagName == "LI") {
					array.push(e);
				}
			})

			


			array.forEach(function(e, i) {
			// get all the data we need and push to array like results.push({id: id, title: title, etc.})
			
			
				console.log(e)
				console.log(e.getAttribute("data-repost-of"))
				if (e.getAttribute("data-repost-of") !== null) {

				}
			})
		}
	};
	xhr.open("GET", url, true);
	xhr.send(null);

	pushToResults(id, title, price);
	createView(results);
}

function pushToResults(id, title, price) {
	results.push({id: id, title: title, price: price}) //add more to this
}

function createView(array) {
	//iterate through results and create the view
}