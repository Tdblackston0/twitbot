//This twitter is currently set up to search #trumpregrets.

var Twit = require('twit'); var config = require('./config')

//Authintification is under config.js file.
var T = new Twit(config);







// Calls the tweetSearch
tweetSearch();

//interval currently set to 20 seconds.
setInterval(tweetSearch, 1000*20);

//twitter get searches for #trumpregrets, count is set to 1 to display only one hashtag tweet per interval.
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
