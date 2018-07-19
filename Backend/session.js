// Penjelasan session

var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var url = bodyParser.urlencoded({ extended: false })


var session = require('express-session');
app.use(session({secret:'shhh'}));
var sess;


app.set('view engine', 'ejs');
app.get('/satu', function(req, res){
  var contoh= 'asd';
  sess=req.session;
  sess.contoh = contoh;
  console.log(sess.contoh)
  res.end();
})

app.get('/dua', function(req, res){
  sess=req.session;

  if(sess.contoh ==undefined){
    res.redirect('/satu') // melempar ke arah mana
  }

  console.log(sess.contoh)
  res.end();
})

app.listen(3000);
