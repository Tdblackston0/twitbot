
var Twit = require('twit'); var config = require('./config')

var T = new Twit(config);
tweetSearch();

setInterval(tweetSearch, 1000*20);

function tweetSearch (){
T.get('search/tweets', { 
  q: '#trumpregrets', count: 1 }, 
  function(err, data, response) {
    var tweets  = data.statuses;
    for (var i = 0; i < tweets.length; i++){
      //console.log(tweets[i].hashtags);




  T.post('statuses/update', {status:tweets[i].text},
    function(err,data,response){
      if (err){
        console.log("Something went wrong");
      }else {
        console.log("It's working")
      }

    })

}
})
}
