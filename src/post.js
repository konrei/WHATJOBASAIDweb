var Twit = require('twit'); //@import
var Config = require('./config'); //this one too
var T = new Twit(Config); //tokens and keys

tweet();

function tweet() {
  var random = Math.floor(Math.random()*9999);
  var status = { status: 'Test number ' + random };

  function gotData(err, data, response) {
    if (err) console.log("Error: "+err.message);
    else console.log("u goin' great bud!");
  }

  T.post('statuses/update', status, gotData);
}