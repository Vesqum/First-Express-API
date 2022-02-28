const friends = require('../models/friends.model')

function postFirends(req, res) {
    if (!req.body.name) {
        return req.status(400).json({
            error: "Firend does not exist"
        })
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    }
    friends.push(newFriend)
    res.json(newFriend);
}

function getFriends(req, res) {
    res.json(friends)
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId)
    const firend = friends[friendId]
    if(firend) {
        res.status(200).json(firend)
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        })
    }
}

module.exports = {
    postFirends, 
    getFriends,
    getFriend,
}