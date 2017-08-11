var request = require('request');
var bodyParser = require('body-parser');

var url = "https://losangeles.craigslist.org/search/cta?query=nsx&srchType=T&auto_transmission=1";
//<li class="result-row" data-pid="6250956028" data-repost-of="6165135493">

var result = [];

request(url, function (error, response, body) {
  if (error) {
    console.log("Error: ", error);
  } else {
    // var div = body.splice(0,50)
    // console.log(div)
    console.log(body.indexOf("data-pid"))
    

  }
});