const express = require('express');
const {
	postFirends,
	getFriends,
	getFriend,
} = require('../controllers/friends.controllers');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
	console.log('ip address:', req.ip)
	next();
})

friendsRouter.post('/', postFirends);
friendsRouter.get('/', getFriends);
friendsRouter.get('/:friendId', getFriend);

module.exports = friendsRouter;