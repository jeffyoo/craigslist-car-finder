var xhr = new XMLHttpRequest();
var parser = new DOMParser();

var url = "https://geo.craigslist.org/iso/us";
// var result = [];
var allCitiesURL = [];
function getAllCities() {
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			
			var craigslistSearch = parser.parseFromString(xhr.response, "text/html");
			// var datapidArr = craigslistSearch.querySelectorAll('[data-pid]');
			var links = craigslistSearch.querySelectorAll('a');
			// console.log(links)

			for (var i = 1; i < links.length-7; i++) {
				allCitiesURL.push(links[i].attributes[0].nodeValue);
			}
			// console.log(allCitiesURL)
			
			// datapidArr.forEach(function(e, i) {
			// 	if (e.tagName == "LI") {
			// 		array.push(e);
			// 	}
			// })



			

			
		}
	};
	xhr.open("GET", url, true);
	xhr.send(null);
}