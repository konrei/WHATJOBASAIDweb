var Twit = require('twit'); //@import
var Config = require('./config'); //this one too
var T = new Twit(Config); //tokens and keys

var params = {
  user_id: '1110315240',
  count: 10
}; // screen_name: 'JOBAISREAL' works too, but id is a constant value, name is not.

function gotData(err, data, response) {
  /*for (var i = 0; i < data.length; i++) {
    console.log(data[i].text);
  }*/
  console.log(data[0].text);
  document.querySelector(".tweet").innerHTML = data[0].text;
};

T.get('statuses/user_timeline', params, gotData);