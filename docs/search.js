import Twit from 'twit'; //@import
import Config from './config'; //this one too
var T = new Twit(Config); //tokens and keys

var params = { q: '#DeathTo', count: 10 }; // q is keyword, count is count u dumbass

function gotData(err, data, response) {
  var tweets = data.statuses;
  for(var i = 0; i < tweets.length; i++)
  {
  	console.log(tweets[i].text);
  }
};

T.get('search/tweets', params, gotData);