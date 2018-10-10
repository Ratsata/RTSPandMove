/*
Archivo:         topics.js
Programa:        restApi
Proyecto:        Siva
Autor:           Sebastian Vega

===========================================
Fecha      |  Programador        | Detalles
===========================================
10-09-18      Sebastian Vega       Creacion
*/

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
