var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var url = bodyParser.urlencoded({ extended: false })

const mysql = require('mysql');
const crypto = require('crypto');
const secret = 'abcdefg';

const fileUpload = require('express-fileupload');
app.use(fileUpload());

// include ini untuk bisa menampilkan semua file foto di public
app.use(express.static(__dirname));
///////////////////////////////////////////////////////////////

// Untuk membuat unic id (permili second)
var uniqid = require('uniqid');
/////////////////////////////////////////////


// untuk include cors (semua orang bisa akses)
var cors = require('cors')
app.use(cors());

// boddy parser yang kita terima berbentuk jason dari react jadi harus di include
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: 'localhost',
  port: '3307',
  user: 'root',
  password: 'usbw',
  database: 'premium_birdnest'
});

db.connect();

///////////////////// Awal dimulai Product Claint Side ////////////////////////////////////////////
app.get('/productall', function (req, res) {

  // // console.log(req.query.page)

    var sql = 'SELECT * FROM `product` JOIN `condition` ON product.condition_id = condition.id JOIN `product_image` ON product.id_product = product_image.product_id JOIN `category` ON product.category_id  = category.id ORDER BY product.id_product DESC';
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result)

    });
})

app.get('/productall/getdata/:id', function (req, res) {

  // console.log(req.params.id)
  var id = req.params.id
    var sql = 'SELECT * FROM `product` JOIN `condition` ON product.condition_id = condition.id JOIN `product_image` ON product.id_product = product_image.product_id JOIN `category` ON product.category_id  = category.id WHERE product.id_product=?';
    db.query(sql,id, (err, result) => {
      if (err) throw err;
      res.send(result)
      // console.log(result)  

    });
})

// Login form

app.post('/login', function (req, res) {

  // console.log(req.body.name)
  // console.log(req.body.password)
  var name = req.body.name
  var password = req.body.password

  var sql = 'SELECT * FROM `user_customer`'
    db.query(sql,(err, result) => {
      if (err) throw err;
      var hasil = [];
      for(i=0 ; i<result.length; i++){
          if(name == result[i].name && password == result[i].password){
              hasil.push(result[i].id)
              break;
            }
         
      }        
      console.log(hasil)
      res.json(hasil);
    });
})


//////////////////////////////////////////End of Product///////////////////////////////////////////

app.listen(3002);

