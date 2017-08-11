var request = require('request');
var bodyParser = require('body-parser');

var domify = require('domify');

var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const cheerio = require('cheerio')

var DOMParser = require('xmldom').DOMParser;
var parser = new DOMParser();

var mapDom = require("map-dom");

var htmlToJson = require('html-to-json')

var url = "https://losangeles.craigslist.org/search/cta?query=nsx&srchType=T&auto_transmission=1";
var testUrl = "https://jsonplaceholder.typicode.com/posts"
//<li class="result-row" data-pid="6250956028" data-repost-of="6165135493">



















//-----------------------------------------------First Try-----------------------------------------
// request(url, function (error, response, body) {
//   if (error) {
//     console.log("Error: ", error);
//   } else {
//     // var div = body.splice(0,50)
//     // console.log(div)
//     // console.log('the response:', JSON.parse(body))
//     // var html = domify(response);
//     // console.log('the html:', html)
//     // var html = parser.parseFromString(body, "text/xml");
//     // console.log('el:', el.childNodes["1"])
//     // console.log(html.documentElement.getElementsByTagName("li"));
//     // console.log(html.documentElement.querySelectorAll("[data-pid]"));

//     // const dom = new JSDOM(body);
//     // console.log(dom.window.document.location);

//     // const html = cheerio.load(body);
//     // // console.log(html.html)
//     // console.log(html._root.children[0].children)
//     // console.log(mapDom)
//     // var initElement = "<div><span>text</span>Text2</div>";
//     // var json = mapDOM(initElement, true);
//     // console.log(json);
    
//     var promise = htmlToJson.parse(body, {
//       'wda': function ($doc) {
//         return $doc.find('[data-pid]');
//       }
//     }, function (err, result) {
//       console.log(result.wda[0])
//       //this kinda works. moving on to using the DOM for now. 
//     });
    
//     // promise.done(function (result) {
//     //   //Works as well 
//     //   console.log('finished')
//     // });
//   }
// });
//-----------------------------------------------First Try-----------------------------------------