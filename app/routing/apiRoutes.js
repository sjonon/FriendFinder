

var friendsData = require("../data/friends");

module.exports = function(app) {
  // API GET Requests
 

  app.get("/api/friends", function(req, res) {
    return res.json(friendsData);
  });

  // API POST Requests

  app.post("/api/friends", function(req, res) {
      var newFriend = req.body;
      console.log(newFriend);
      friendsData.push(newFriend);
      var bestFriend = findFriend(newFriend);
      res.json(bestFriend);
  })
  };

  function findFriend(newEntry){
    var bestFriendScore = 0;
    var bestFriendIndex = 0;

    for (var i = 0; i <= friendsData.length - 2; i++){
      var matchScore = 0;
      for (var j = 0; j < 10; j++){
        matchScore += Math.abs(friendsData[i].scores[i]-newEntry.scores[j]);
      }
      if(i === 0 || matchScore < bestFriendScore){
        bestFriendScore = matchScore;
        bestFriendIndex = i;
      }
    }
    returnMatch = friendsData[bestFriendIndex];
    
    return returnMatch;
  }

