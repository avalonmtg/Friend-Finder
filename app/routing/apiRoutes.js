var friendList = require("../data/friends.js");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    });


    app.post("/api/friends", function (req, res) {

        var newFriend = {
            name: "",
            photo: "",
            differencePoints: 200,

        }

        var newUserScores = req.body.scores;
        var friendDifference;

        for (var i = 0; i < friendList.length; i++) {
            var currentFriend = friendList[i];
            friendDifference = 0
            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentScore = currentFriend.scores[j];
                var newUserScore = newUserScores[j];

                friendDifference += Math.abs(parseInt(newUserScore) - parseInt(currentScore));


            }
            if (friendDifference <= newFriend.differencePoints) {
                newFriend.name = currentFriend.name
                newFriend.photo = currentFriend.photo
                newFriend.differencePoints = friendDifference
            }
        }

        friendList.push(req.body);
        res.json(newFriend);
    })
}

