var xhr = new XMLHttpRequest();
var parser = new DOMParser();

var baseUrl = "https://losangeles.craigslist.org";
var url = "https://losangeles.craigslist.org/search/cta?query=nsx&srchType=T&bundleDuplicates=1&auto_transmission=1";

var results = [];

var columnDefs = [
	{headerName: "Title", field: "title"},
	{headerName: "Price", field: "price"},
	{headerName: "City", field: "city"},
	{headerName: "Date", field: "date"},
	{headerName: "Link", field: "link"}
]

var gridOptions = {
	columnDefs: columnDefs,
	rowData: results,
	enableSorting: true,
	enableFilter: true,
	onGridReady: function () {
		gridOptions.api.sizeColumnsToFit();
	}
};

function ajaxCall() {
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var array = [];
			
			var craigslistSearch = parser.parseFromString(xhr.response, "text/html");
			var datapidArr = craigslistSearch.querySelectorAll('[data-pid]');

			datapidArr.forEach(function(e, i) {
				if (e.tagName == "LI") {
					array.push(e);
				}
			})

			array.forEach(function(e, i) {
			// get all the data we need and push to array like results.push({id: id, title: title, etc.})
				console.log(e)
				var id, title, price, date, link; //mileage
				var city = "Los Angeles"; //use what's currently in the for loop when i have a city array, temp just LA
				var imgUrls = [];
				//opt state
				
				if (e.childNodes[1].getAttribute("href").indexOf(".org") == -1) {
					if (e.getAttribute("data-repost-of") !== null) {
						id = e.getAttribute("data-repost-of");
						price = e.getElementsByClassName("result-price")[0].innerText;
						date = e.getElementsByTagName("time")[0].getAttribute("title");
						title = e.getElementsByClassName("result-title hdrlnk")[0].innerText;
						link = baseUrl + e.childNodes[1].getAttribute("href");
					} else {
						//orig id #, same logic
						id = e.getAttribute("data-pid");
						price = e.getElementsByClassName("result-price")[0].innerText;
						date = e.getElementsByTagName("time")[0].getAttribute("title");
						title = e.getElementsByClassName("result-title hdrlnk")[0].innerText;
						link = baseUrl + e.childNodes[1].getAttribute("href");
					}
					pushToResults(id, title, price, city, date, link);
									
				}
			})
			createView(results);
		}
	};
	xhr.open("GET", url, true);
	xhr.send(null);
}

function pushToResults(id, title, price, city, date, link) {
	console.log('pushToResults')
	results.push({id: id, title: title, price: price, city: city, date: date, link: link}) //add more to this
}

function createView(array) {
	var eGridDiv = document.querySelector('#myGrid');
	new agGrid.Grid(eGridDiv, gridOptions);
}