//File: controllers/topics.js
var mongoose = require('mongoose');
var Topics  = mongoose.model('Topics');

//GET - Return all tvshows in the DB
exports.findAllTopics = function(req, res) {
	Topics.find(function(err, topics) {
    if(err) res.send(500, err.message);

    console.log('GET /topics')
		res.status(200).jsonp(tvshows);
	});
};
