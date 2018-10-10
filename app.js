/*
Archivo:         app.js
Programa:        restApi
Proyecto:        Siva
Autor:           Sebastian Vega

===========================================
Fecha      |  Programador        | Detalles
===========================================
10-09-18      Sebastian Vega       Creacion
*/

var express  = require("express"),
    app      = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    http     = require("http"),
    Md5 = require('md5'),
    util = require('util'),
    request = require('request'),
    server   = http.createServer(app);
    Stream = require('node-rtsp-stream');
    //mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("SivaAPI");
});

app.use(router);
app.get('/callPTZ', function(req, res){
  var url = 'http://192.168.1.108';
  url += req.query.url !== undefined ? req.query.url : "";
  var user = req.query.user !== undefined ? req.query.user : "admin";
  var pass = req.query.pass !== undefined ? req.query.pass : "cleanvoltage2018";
  request.get(url, {
    'auth': {
      'user': user,
      'pass': pass,
      'sendImmediately': false
    }
  }, function (err,data,body) {
    if(err){
      response = "NOK";
    }else{
      response = res.statusCode == 200 ? "SUCCESS" : "FAIL";
    }
    console.log(response);
    res.send(response);
  });
});

stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://admin:cleanvoltage2018@192.168.1.108:554/cam/realmonitor?channel=1&subtype=1',
  wsPort: 9999
});

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
