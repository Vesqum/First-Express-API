const path = require('path');

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..','public', 'img', 'woman.jpg'));
}

function postMessage(req, res) {
    console.log('Updating ');
}


module.exports = {
    getMessages,
    postMessage
}