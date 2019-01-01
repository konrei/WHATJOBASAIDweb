var Twit = require('twit'); //@import
var Config = require('./config'); //this one too
var T = new Twit(Config); //tokens and keys

var params = { q: 'joba', count: 10 };

function gotData(err, data, response) {
  var tweets = data.statuses;
  for(var i = 0; i < tweets.length; i++)
  {
  	console.log(tweets[i].text);
  }
};

T.get('search/tweets', params, gotData);