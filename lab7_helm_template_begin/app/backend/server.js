var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var mongodb = require('mongodb');

var MONGODB_URI = process.env["MONGODB_URI"];

var mongoClient = mongodb.MongoClient;


var collection;
var db = mongoClient.connect(MONGODB_URI, {
  autoReconnect: true,
  reconnectInterval: 10000,
  reconnectTries: Number.MAX_VALUE,
  useNewUrlParser: true
}, function (err, db) {
  if (err)
    throw err;
  console.log("connected to the mongoDB !");
  collection = db.db('guestbook').collection('greeetings');
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log('use cors')
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.get('/guestbook', function (req, res) {
  console.log('Guestbook API GET')
  collection.find().sort({ _id: -1 }).toArray((err, guestbook) => {
    res.send(guestbook);
  })
});

app.post('/guestbook', function (req, res) {
  if (!req.body) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }
  var newGreeting = req.body;
  collection.insert(newGreeting, (err, greeting) => {
    if (err) console.log(err);
    res.send(greeting);
  })
});

app.listen(3000, function () {
  // console.log("MONGODB_URI:"+MONGODB_URI)
  console.log('Guestbook API listening on port 3000!')
});
