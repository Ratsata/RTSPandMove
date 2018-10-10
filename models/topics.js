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

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var topicSchema = new Schema({
  name:     { type: String }
});

module.exports = mongoose.model('Topic', topicSchema);
