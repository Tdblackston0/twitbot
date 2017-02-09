//This twitter is currently set up to search #trumpregrets, for more information on twitter api and developing vist dev.twitter.com. Also please be sure when using code to follow twitter rules and conduct. Use node.js to download twit (npm install twit --save) --save is used to install a dependency to the package.json document.

var Twit = require('twit'); var config = require('./config')

//Authintification is under config.js file, you will need to create a twitter developer account in order to gain information required. npm twit will have additional information.
var T = new Twit(config);







// Calls the tweetSearch to post then run interval for next post.
tweetSearch();

//interval currently set to 20 seconds.
setInterval(tweetSearch, 1000*20);

//twitter get searches for #trumpregrets, count is set to 1 to display only one hashtag tweet per the set interval.
function tweetSearch (){
T.get('search/tweets', { 
  q: '#trumpregrets', count: 1 }, 
  function(err, data, response) {
    var tweets  = data.statuses;
    for (var i = 0; i < tweets.length; i++){
      //console.log(tweets[i].hashtags);

//Twitter post is set to post the #hashtag, post is within the tweetsearch function in order to pull the accurate data.
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
