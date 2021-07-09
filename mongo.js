var express = require('express');
var router = express.Router();
const connection = require('./modules/connection')
const User = require('./modules/user')
const Sentry = require('@sentry/node');

router.post('/mongoSaveData', (req, res) => {

  Sentry.init({ dsn: 'Sentry DSN URL' });

  // ** Save Records *************//

  var newUser = User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    admin: req.body.admin,
    id: req.body.id
  });


  newUser.save(function (err) {
    if (err) throw err;
    return res.send('record insterted');
  });

});



router.get('/mongogetDataByID/:id', (req, res) => {
  
  var obj = null ;

  if(!obj){
    console.log('hello')
  }
  const {id} = req.params;

  console.log('id',id)

  Sentry.init({ dsn: 'https://31b2061000d64e25959a4de8fb5695f7@o429698.ingest.sentry.io/5376795' });


  // ** Save Records *************//

  User.findById(id, {}, function (err, result) {

    if (err) {
      console.log(err, 'errorr');
      return res.send(err);
    } else {
      return res.send(result);
    }
  });


});


router.get('/mongoFetchData', (req, res) => {

  Sentry.init({ dsn: 'https://31b2061000d64e25959a4de8fb5695f7@o429698.ingest.sentry.io/5376795' });

  //** Fetch Data From Mongo DB  *************//

  res.redirect('http://www.google.com')

  User.find({}, function (err, result) {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ status: 'success', message: result });
    }
  });

  //** Fetch Data By ID From Mongo DB  *************//

});




module.exports = router;
