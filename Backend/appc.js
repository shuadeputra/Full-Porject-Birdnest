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
  port: '3306',
  user: 'root',
  password: '',
  database: 'premium_birdnest'
});

db.connect();

///////////////////// Awal dimulai Product Claint Side ////////////////////////////////////////////
app.get('/productall', function (req, res) {

  // // console.log(req.query.page)

  var sql = 'SELECT * FROM `product` JOIN `condition` ON product.condition_id = condition.id JOIN `product_image` ON product.id_product = product_image.product_id JOIN `category` ON product.category_id = category.id GROUP BY product_image.product_id ORDER BY product.id_product DESC';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result)

  });
})

app.get('/productall/getdata/:id', function (req, res) {

  // console.log(req.params.id)
  var id = req.params.id
  var sql = 'SELECT * FROM `product` JOIN `condition` ON product.condition_id = condition.id JOIN `category` ON product.category_id  = category.id WHERE product.id_product=?';
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    // console.log(result)  
    }
  });
})

app.get('/productall/getdata/picture/:id', function (req, res) {

  // console.log(req.params.id)
  var id = req.params.id
  var sql = 'SELECT * FROM `product` JOIN `product_image` ON product.id_product = product_image.product_id WHERE product.id_product=?';
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    // console.log(result)  
    }
  });
})


// untuk tampilah di home
app.get('/productall_home', function (req, res) {

  // // console.log(req.query.page)

  var sql = 'SELECT * FROM `product` JOIN `condition` ON product.condition_id = condition.id JOIN `product_image` ON product.id_product = product_image.product_id JOIN `category` ON product.category_id = category.id WHERE category_id=1 GROUP BY product_image.product_id LIMIT 4 ';
  db.query(sql, (err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    }
  });
})


app.get('/productall_home_2', function (req, res) {

  // // console.log(req.query.page)

  var sql = 'SELECT * FROM `product` JOIN `condition` ON product.condition_id = condition.id JOIN `product_image` ON product.id_product = product_image.product_id JOIN `category` ON product.category_id = category.id WHERE category_id=1 GROUP BY product_image.product_id LIMIT 4,4';
  db.query(sql, (err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    }
  });
})
// End untuk tampilan di home



///////////// untuk ditel

app.post('/productall/getdata/:id', function (req, res) {

  // console.log(req.params.id)
  var id = req.params.id
  var sql = 'SELECT * FROM `product` JOIN `condition` ON product.condition_id = condition.id JOIN `product_image` ON product.id_product = product_image.product_id JOIN `category` ON product.category_id  = category.id WHERE product.id_product=?';
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    res.send(result)
    // console.log(result)  

  });
})



// Insert product dari product ditel ke cart
app.post('/productall/cart', function (req, res) {

  var id_product = req.body.id
  var quantity = req.body.quantity
  var total = req.body.total
  var id_user = req.body.id_user
  var price = req.body.price

  var sql = 'SELECT quantity_cart, total_price FROM `cart` WHERE user_customer_id=? AND product_id=?'

  db.query(sql,[id_user,id_product],(err,result)=>{
    if (err) throw err;
    if(result != ""){
      //////// Jika product di cart sudah ada
     
      ///////// For update quantity //////////////
      var quantitysblm = Number(result[0].quantity_cart)
      var total_quantity = Number(quantity) + quantitysblm

      /////// for update price ///////////////////
      var total_price_sblm = Number(result[0].total_price)
      var total_price_update = Number(total) + total_price_sblm

      var sql = 'UPDATE `cart` SET  quantity_cart=?, total_price=? WHERE user_customer_id=? AND product_id=?'

      db.query(sql,[total_quantity,total_price_update,id_user,id_product],(err,result)=>{
        if (err) throw err;
        if(result != undefined){
      res.send('berhasil')
      }
    })

    } else{
      /////// Jika product di cart blm ada
      var sql = 'INSERT INTO `cart` SET `user_customer_id`=?, `product_id`=?, `quantity_cart`=?, `price`=?, `total_price`=?';
      db.query(sql, [id_user, id_product, quantity, price, total], (err, result) => {
        if (err) throw err;
        if (result != undefined) {
          res.send('berhasil')
        }
      });
    }
  })
})


////// untuk show product buat cart////////////////
app.post('/productall/cart/show', function (req, res) {

  var user_customer_id = req.body.id_user

  var sql = 'SELECT * FROM `cart` JOIN `product` ON cart.product_id=product.id_product JOIN `product_image` ON cart.product_id=product_image.product_id WHERE cart.user_customer_id=? GROUP BY product_image.product_id';
  db.query(sql, user_customer_id, (err, result) => {
    if (err) throw err;
    res.send(result)
    // console.log(result);
    console.log("showcart")
  });

})


////////////////// Untuk update cart poroduct //////////////
app.post('/cart/update', function (req, res) {

  var id_product = req.body.id_product
  var quantity = req.body.quantity_update
  var total = req.body.total_price
  var id_user = req.body.id_user

      var sql = 'UPDATE `cart` SET  quantity_cart=?, total_price=? WHERE user_customer_id=? AND product_id=?'
      db.query(sql, [quantity, total, id_user, id_product], (err, result) => {
        if (err) throw err;
        if (result != undefined) {
          res.send('Berhasil')
        }
      })
})

//////////////////// End of update product cart ///////////////

////////////////////Untuk delete cart product//////////////////////////
app.post('/cart/delete', function (req, res) {

  var id_cart = req.body.id

  // console.log(id_cart)
  var sql = 'DELETE FROM `cart` WHERE id_cart=? ';
  db.query(sql, id_cart, (err, result) => {
    if (err) throw err;
    if (result != undefined) {
      res.send("hapus")
    }
  });

})

/////// untuk menapilkan ada kategory apa saja ////
app.get('/viewfilter', function (req, res) {

  // // console.log(req.query.page)

  var sql = 'SELECT * FROM `category`';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result)

  });
})

/////// Untuk menampilkan filter product all
app.post('/filter/productall', function (req, res) {

  // console.log(req.body.id_filter)
  var id_filter = req.body.id_filter

  var sql = 'SELECT * FROM `product` JOIN `condition` ON product.condition_id = condition.id JOIN `product_image` ON product.id_product = product_image.product_id JOIN `category` ON product.category_id  = category.id WHERE category.id=? GROUP BY product_image.product_id';
  db.query(sql,id_filter, (err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    }
  });
})

///////////////////////////End of Delete product/////////////////////////


//////////////////////////////////// Searchbar/////////////////////////
app.post('/search/productall/:search', function (req, res) {

  // console.log(req.body.id_filter)
  var search = req.params.search

  var sql = `SELECT * FROM product WHERE nama_product LIKE '%${search}%'`;
  
  db.query(sql,search, (err, result) => {
    if (err) throw err;

    if(result !=undefined){
    res.send(result)
    }
  });
})

//////////////////////////////////// End of Searchbar/////////////////////////




///////////////////////////////Start invoice //////////////////////////////

////////////////////show all address///////////////////
app.post('/invoice/address', function (req, res) {

  var id = req.body.id_user
  // console.log(id)

  var sql = 'SELECT * FROM `address_customer` WHERE user_customer_id=?';
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    // console.log(result)  
    }
  });
})


/////////////////update the address
app.post('/invoice/address/update', function (req, res) {

  var user_customer_id = req.body.id;
  var First_Name = req.body.First_Name;
  var Last_Name = req.body.Last_Name;
  var Email_Address = req.body.Email_Address;
  var Street = req.body.Street;
  var City = req.body.City;
  var ZIP = req.body.ZIP;
  var State = req.body.State;
  var Country = req.body.Country;
  var Phone_Number = req.body.Phone_Number;
  var Company = req.body.Company;

  var sql = 'UPDATE `address_customer` SET `First_Name`=?, `Last_Name`=?, `Email_Address`=?, `Street`=?,`City`=?, `ZIP`=?, `State`=?, `Country`=?, `Phone_Number`=?, `Company`=? WHERE `user_customer_id`=?'
  db.query(sql, [First_Name, Last_Name, Email_Address, Street, City, ZIP, State, Country, Phone_Number, Company, user_customer_id], (err, result) => {
    if (err) throw err;

    if (result != undefined) {
      res.send('Sukses')
      // console.log(result)
    }
  });

})

//////////////////////////// show all delivery 
app.get('/invoice/delivery', function (req, res) {

  var sql = 'SELECT * FROM `delivery_method`';
  db.query(sql, (err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    }
  });
})


//////////// delivery cart update ///////////////////////
app.post('/invoice/delivery/choise', function (req, res) {

  var user_customer_id = req.body.id_login
  var delivery_method = req.body.delivery

  // console.log(user_customer_id)
  // console.log(delivery_method)

  var sql = 'UPDATE `cart` SET `delivery_method`=? WHERE `user_customer_id`=?';
  db.query(sql, [delivery_method, user_customer_id], (err, result) => {
    if (err) throw err;
    // res.send(result)
    if (result != undefined) {
      res.send("berhasil")
      // console.log(result)
    }

  });

})


//////////////////////////// show all delivery 
app.get('/invoice/payment', function (req, res) {

  var sql = 'SELECT * FROM `payment_method`';
  db.query(sql, (err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)

    }
  });
})


//////////// delivery cart update ///////////////////////
app.post('/invoice/payment/choise', function (req, res) {

  var user_customer_id = req.body.id_login
  var payment_method = req.body.payment

  var sql = 'UPDATE `cart` SET `payment_method`=? WHERE `user_customer_id`=?';
  db.query(sql, [payment_method, user_customer_id], (err, result) => {
    if (err) throw err;

    if (result != undefined) {
      res.send("berhasil")
    }

  });

})


///////////////////update to invoice ///////////////////
app.post('/invoice/cart/updateinvoice', function (req, res) {

  // id user yang dipanggil untuk dipakai
  var user_customer_id = req.body.id_user

  // console.log(user_customer_id)

  var sql = 'SELECT invoice_number FROM `invoice` ORDER BY invoice_number DESC';
  db.query(sql, (err, result) => {
    if (err) throw err;
    // res.send(result)

    var tampug = []
    for (i = 0; i < result.length; i++) {
      tampug.push(result[i].invoice_number.slice(-7))
    }

    // Hasil maksimal dari nilai looping
    var besar = Math.max(...tampug);

    var tambah = "0000000"
    var incrementvalue = (+tambah) + besar
    incrementvalue = ("0000000" + incrementvalue).slice(-7);

    if (incrementvalue != undefined) {

      // coerce the previous variable as a number and add 1
      var incrementvalue_new = (+incrementvalue) + 1;
      // insert leading zeroes with a negative slice
      incrementvalue_new = ("0000000" + incrementvalue_new).slice(-7);
      // result from increment value
      final_increement = "INV" + incrementvalue_new

      // console.log(final_increement)
    }

    var sql = 'SELECT * FROM `address_customer` WHERE user_customer_id=?';
    db.query(sql, user_customer_id, (err, result) => {
      if (err) throw err;

      var Street = result[0].Street
      var City = result[0].City
      var ZIP = result[0].ZIP
      var State = result[0].State
      var Country = result[0].Country
      var Phone_Number = result[0].Phone_Number


      // narik data dari cart untuk kirim ke invoice detail
      var sql = 'SELECT * FROM `cart` JOIN `product` ON cart.product_id=product.id_product WHERE user_customer_id=?';
      db.query(sql, user_customer_id, (err, result) => {
        if (err) throw err;

        var delivery_method = result[0].delivery_method
        var payment_method = result[0].payment_method 

        var total = 0
        for (var i = 0; i < result.length; i++) {
          total += result[i].total_price
        }
        var total_price = total + 10

        // console.log(result);
        if (total_price != undefined) {
          // console.log("Berhasil")
          for (i = 0; i < result.length; i++) {
            // insert ke invoice ditel
            var sql = 'INSERT INTO `invoice_detail` SET `invoiceid`=?, `total_price`=?, `product_name`=?, `price`=?, `quantity`=?';
            db.query(sql, [final_increement, result[i].total_price,
              result[i].nama_product, result[i].price, result[i].quantity_cart], (err, result) => {
                if (err) throw err;
              });
          }

      /// di tahap ini adalah tahap untuk mengurangi product qty yang terdapat di tbl
          var quantity_sblm = []
          var quantity_cart = []
          for (var i = 0; i < result.length; i++) {
            quantity_cart.push(result[i].quantity_cart)
            var sql = 'SELECT `quantity` FROM `product` WHERE `id_product`=?'
            db.query(sql, result[i].product_id, (err, hasil) => {
              if (err) throw err;
              quantity_sblm.push(hasil[0].quantity)

              if (quantity_sblm.length == quantity_cart.length) {
                // akan mamasuki kondisi ini ketika kedua array memliki jumlah array yang sama

                for (var i = 0; i < result.length; i++) {
                  var sisah_quantity = quantity_sblm[i] - quantity_cart[i]
                  // console.log(sisah)

                  if (sisah_quantity != undefined) {
                    var sql = 'UPDATE `product` SET `quantity`=? WHERE `id_product`=?'
                    db.query(sql, [sisah_quantity, result[i].product_id],
                      (err, hasil_akhir) => {
                        if (err) throw err;
                        console.log(hasil_akhir)
                      })
                  }
                }
              }
            });
          }

          var sql = 'SELECT * FROM `invoice_detail` WHERE `invoiceid`=?';
          db.query(sql, final_increement, (err, result) => {
            if (err) throw err;

            if (result.length > 0) {

              var status = "Action needed"; // untuk default
              var color = "badge badge-warning"; //untuk default

        // masukin ke invoice secara besar keseluruhan
              var sql = 'INSERT INTO `invoice` SET `invoice_number`=?,`user_customerid`=?,`delivery`=?,`status`=?,`color`=?,`payment`=?,`total_price`=?,`Street`=?,`City`=?,`ZIP`=?,`State`=?,`Contry`=?,`Phone_Number`=?';
              db.query(sql, [final_increement, user_customer_id, delivery_method, status, color, payment_method, total_price, Street, City, ZIP, State, Country, Phone_Number],
                (err, result) => {
                  if (err) throw err;
                 if(result != undefined){
                        // deleted from cart
                        var sql = 'DELETE FROM `cart` WHERE `user_customer_id`=?'
                        db.query(sql, user_customer_id, (err, result) => {
                          if (err) throw err;
                          if(result != undefined){
                          // console.log(result)
                          res.send("clear")
                      }
                    });
                  }
                })
            }
          });
        }
      })
    })
  })
})

////////////////////////////////End of invoice //////////////////////////////



//////////////////////////////// Customer start //////////////////////////////////

// untuk menampilkan customer invoice
app.post('/customer/invoice', function (req, res) {

  var user_customer_id = req.body.id_user

  var sql = 'SELECT * FROM `invoice` WHERE `user_customerid`=?';
  db.query(sql,user_customer_id, (err, result) => {
    if (err) throw err;

    if(result != undefined){
      res.send(result);
    }

  });

})

// untuk menampilkan customer ditel
app.post('/customer/ditel', function (req, res) {

  var user_customer_id = req.body.id_user

  var sql = 'SELECT * FROM `user_customer_ditel` WHERE `id`=?';
  db.query(sql,user_customer_id, (err, result) => {
    if (err) throw err;
    if(result != undefined){
      res.send(result);
      // console.log(result)
    }
  });

})

// untuk menampilkan customer street ditel
app.post('/customer/address_customer', function (req, res) {

  var user_customer_id = req.body.id_user

  var sql = 'SELECT * FROM `address_customer` WHERE `user_customer_id`=?';
  db.query(sql,user_customer_id, (err, result) => {
    if (err) throw err;
    if(result != undefined){
      res.send(result);
    }
  });

})


///// Untuk update customer edit (tampa update password)
app.post('/customer/update', function (req, res) {

  var user_customer_id = req.body.id_user
  var First_Name= req.body.First_Name
  var Last_Name= req.body.Last_Name
  var Email_Address= req.body.Email_Address
  var Phone_Number= req.body.Phone_Number
  
  if(req.files != undefined){
    var foto= req.files.file

    var sql = 'SELECT * FROM `user_customer_ditel` WHERE `id`=?';
    db.query(sql,user_customer_id, (err, result) => {
      if (err) throw err;
      if(result != undefined){
        var nama = result[0].image
      
      if(nama !=undefined){
       // untuk update file dan menghapus file sebelumnya
       var fs = require('fs');
       var filePath = __dirname + '/image/user_customer/' + nama
       fs.unlinkSync(filePath);
      
      //  mulai upload image ke dalam backend
      var namafileuniq = uniqid();

      foto.mv(__dirname + '/image/user_customer/' + namafileuniq + '.' + foto.mimetype.split('/')[1],
      function (err) {
        if (err)
          return res.status(500).send(err); } );
       var nama_foto = namafileuniq + '.' + foto.mimetype.split('/')[1];

       var sql = 'UPDATE `user_customer_ditel` SET `phone`=?,`First_Name`=?,`Last_Name`=?,`Email_Address`=?,`image`=? WHERE `id`=?'; 
      db.query(sql, [Phone_Number,First_Name,Last_Name,Email_Address,nama_foto,user_customer_id], (err, result) => {
        if (err) throw err;
            if(result != undefined){
              res.send("berhasil")
            }
      })

      }
    }
});
  } else{
      var sql = 'UPDATE `user_customer_ditel` SET `phone`=?,`First_Name`=?,`Last_Name`=?,`Email_Address`=? WHERE `id`=?'; 
     db.query(sql, [Phone_Number,First_Name,Last_Name,Email_Address,user_customer_id], (err, result) => {
       if (err) throw err;
           if(result != undefined){
             res.send("berhasil")
            //  console.log(result)
           }
     })
  }
})


////// Untuk robah password di customer edit
app.post('/customer/update/password', function (req, res) {

  var user_customer_id = req.body.id_user
  var oldpass= req.body.oldpass
  var newpass= req.body.newpass
  var retypenewpass= req.body.retypenewpass

  // console.log(user_customer_id)
  // console.log(oldpass)
  // console.log(newpass)
  // console.log(retypenewpass)

  var sql = 'SELECT * FROM `user_customer` WHERE `id`=?'
  db.query(sql,user_customer_id, (err, result) => {
    if (err) throw err;
    
    if(oldpass == result[0].password){

    if(newpass == retypenewpass){
      var sql = 'UPDATE `user_customer` SET `password`=? WHERE `id`=?'
       db.query(sql,[newpass,user_customer_id], (err, result) => {
        if (err) throw err;
        res.send("berhasil")
      })
    }else{
        res.send('Please input the same password in new password and Retype new passwod')
      }
    }else{
        res.send('Your old password is wrong, please checking again')
    }
  
  })
})  


app.get('/invoice/ditel/getdata/:invoice_number', function (req, res) {

  // console.log(req.params.invoice_number)
  var invoice_number = req.params.invoice_number

  var sql = 'SELECT invoice_detail.invoiceid,invoice_detail.date,invoice_detail.total_price,invoice_detail.product_name,invoice_detail.price,invoice_detail.quantity,invoice.delivery,invoice.status,invoice.color,invoice.payment,invoice.Street,invoice.City,invoice.ZIP,invoice.State,invoice.Contry,invoice.Phone_Number,product_image.product_images,product.nama_product, payment_method.number_payment FROM `invoice_detail` JOIN `invoice` ON invoice_detail.invoiceid=invoice.invoice_number JOIN `product` ON invoice_detail.product_name = product.nama_product JOIN `product_image` ON product.id_product=product_image.product_id JOIN `payment_method` ON invoice.payment = payment_method.name_payment WHERE invoice_detail.invoiceid =? GROUP BY product_image.product_id';
  db.query(sql, invoice_number, (err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    // console.log(result)  
    }
  });
})



////////////////////////////////// End of Customer //////////////////////////////


////////////////// Sigup///////////////
app.post('/register', function (req, res) {

  var username = req.body.username
  var password = req.body.password
  var gander = req.body.gander
  var First_Name = req.body.First_Name
  var Last_Name = req.body.Last_Name
  var Email_Address = req.body.Email_Address
  var Street = req.body.Street
  var City = req.body.City
  var ZIP = req.body.ZIP
  var State = req.body.State
  var Country = req.body.Country
  var Phone_Number = req.body.Phone_Number
  var Company = req.body.Company
  var foto = req.files.file

  // pertama kita akan mengecek dl apakah username sudah ada atau belum
  var sql = 'SELECT name FROM `user_customer`';
  db.query(sql, (err, result) => {
    if (err) throw err;
    if(result != undefined)

    var tampung = []
    for(i=0; i<result.length; i++){
      if(username == result[i].name){
        tampung.push(result[i].name)
        break;
      }
    }

    // Jika sudah terdapat username yang sama
    if(tampung.length == 1){
      res.send("This username already used please change other username")
    }else{
      // Jika blm terdapat udername yang sama
      var namafileuniq = uniqid();

      foto.mv(__dirname + '/image/user_customer/' + namafileuniq + '.' + foto.mimetype.split('/')[1],

        function (err) {
          if (err)
            return res.status(500).send(err);
        }
      );
      var nama_foto = namafileuniq + '.' + foto.mimetype.split('/')[1];

      // insert to customer ditel
      var sql = 'INSERT INTO `user_customer` SET `name`=?,`password`=?';
      db.query(sql, [username, password], (err, result) => {
        if (err) throw err;

        // jika sudah berhasil insert ke dalam customer ditel maka
        if (result != undefined) {

          var sql = 'INSERT INTO `user_customer_ditel` SET `sex`=?,`phone`=?,`First_Name`=?,`Last_Name`=?,`Email_Address`=?,`image`=?';
          db.query(sql, [gander, Phone_Number, First_Name, Last_Name, Email_Address, nama_foto], (err, result2) => {
            if (err) throw err;

            // Setelah masuk ke customer ditel maka
            if (result2 != undefined) {

              // untuk mengambil id yang paling gede
              var sql = 'SELECT * FROM `user_customer`'
              db.query(sql, (err, result3) => {
                if (err) throw err;

                var tampug = []
                for (i = 0; i < result3.length; i++) {
                  tampug.push(result3[i].id)
                }

                // Hasil maksimal dari nilai looping
                var new_userid = Math.max(...tampug);

                if (new_userid != undefined) {

                  // insert ke dalam address_customer
                  var sql = 'INSERT INTO `address_customer` SET `user_customer_id`=?,`First_Name`=?,`Last_Name`=?,`Email_Address`=?,`Street`=?,`City`=?,`ZIP`=?,`State`=?,`Country`=?,`Phone_Number`=?,`Company`=?'
                  db.query(sql, [new_userid, First_Name, Last_Name, Email_Address, Street, City, ZIP, State, Country, Phone_Number, Company], (err, result4) => {
                    if (err) throw err;

                    if (result4 != undefined) {
                      res.send("berhasil")
                    }
                  })
                }
              })
            }
          });
        }
      })
    }
  })
})
///////////////// End of Sigup///////////////

/////////////////////// View All About //////////////////////
app.get('/about', function (req, res) {


  var sql = 'SELECT * FROM `aboutus`'
  db.query(sql, (err, result) => {
    if (err) throw err;

    if(result != undefined ){
      res.send(result)
    }
  })
})
////////////////////////// End of View About ///////////////////


/////////////////////////// View All Contact ///////////////////

app.get('/Contact', function (req, res) {


  var sql = 'SELECT * FROM `contact`'
  db.query(sql, (err, result) => {
    if (err) throw err;

    if(result != undefined ){
      res.send(result)
    }
  })
})

app.post('/formcontact', function (req, res) {

  var first_name = req.body.first_name
  var last_name = req.body.last_name
  var email = req.body.email
  var massage = req.body.massage

  var sql = 'INSERT INTO `contact_form` SET first_name=?, last_name=?, email=?, massage=?'
  db.query(sql,[first_name,last_name,email,massage],(err, result) => {
    if (err) throw err;
    if(result != undefined ){
      res.send("berhasil")
    }
  })
})




///////////////////////// End of Contact //////////////////////



///////////////////////////////// Payment ////////////////////////////////
app.post('/customer/payment', function (req, res) {

  // console.log(req.body.id_user);
  // console.log(req.body.invoice_number);

  var id_user = req.body.id_user
  var invoice_number = req.body.invoice_number

  var sql = 'SELECT payment,total_price,invoice_number,user_customerid,confirmation_image,confirmation_name FROM `invoice` WHERE user_customerid=? AND invoice_number=?'
  db.query(sql,[id_user,invoice_number],(err, result) => {
    if (err) throw err;
      if(result != undefined){
          res.send(result)
          // console.log(result)
      }
  });
})

app.post('/customer/payment/update', function (req, res) {

  var user_customer_id = req.body.id_user
  var confirmation_name= req.body.confirmation_name
  var payment= req.body.payment
  var invoice_number= req.body.invoice_number
 
  if (req.files != undefined) {
    var foto = req.files.file

    var sql = 'SELECT confirmation_image FROM `invoice` WHERE user_customerid=? AND invoice_number=?';
    db.query(sql, [user_customer_id,invoice_number], (err, result) => {
      if (err) throw err;
      if (result != undefined) {
        var nama = result[0].confirmation_image

        if (nama.length > 1) {
          // untuk update file dan menghapus file sebelumnya
          var fs = require('fs');
          var filePath = __dirname + '/image/payment/' + nama
          fs.unlinkSync(filePath);
        }
        //  mulai upload image ke dalam backend
        var namafileuniq = uniqid();

        foto.mv(__dirname + '/image/payment/' + namafileuniq + '.' + foto.mimetype.split('/')[1],
          function (err) {
            if (err)
              return res.status(500).send(err);
          });

        var confirmation_image = namafileuniq + '.' + foto.mimetype.split('/')[1];
        var confirmation = "Pay"

        var sql = 'UPDATE `invoice` SET `payment`=?,`confirmation`=?,`confirmation_image`=?,`confirmation_name`=? WHERE `invoice_number`=? AND`user_customerid`=?';
        db.query(sql, [payment, confirmation, confirmation_image, confirmation_name, invoice_number, user_customer_id], (err, result) => {
          if (err) throw err;
          if (result != undefined) {
            res.send("berhasil")
          }
        })
      }
    });
  }
  else {
    var confirmation = "Pay"
    var sql = 'UPDATE `invoice` SET `payment`=?,`confirmation`=?,`confirmation_name`=? WHERE `invoice_number`=? AND`user_customerid`=?';
    db.query(sql, [payment, confirmation, confirmation_name, invoice_number, user_customer_id], (err, result) => {
      if (err) throw err;
      if (result != undefined) {
        res.send("berhasil")
        // console.log(result)
      }
    })
  }
})



////////////////////////////////// End of Payment ///////////////////////////////////

//////////////////////////////// Blog //////////////////////////////////////////////

/////////////// Untuk tampilkan semua blog 
app.get('/blog', function (req, res) {

  var sql = "SELECT * FROM `blog` "
  db.query(sql,(err,result)=>{
    if(err) throw err
    if(result != undefined){
      res.send(result)
    }
  })
})


/////////// Untuk view ditel blog
app.post('/blog/view', function(req,res){

  var id = req.body.blog_id
  var sql = "SELECT * FROM `blog` WHERE id=?"

  db.query(sql,id, (err,result)=>{
    if(err) throw err
    if(result != undefined){
      res.send(result)
    }
  })
})


/////////////////////////////// End Of Blog ///////////////////////////////////////



////////////////////////////// Start for front home /////////////////////////////


app.get('/fronthome', function (req, res) {

  var sql = "SELECT * FROM `front_home`"
  db.query(sql,(err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    }
  });

})


/////////////////////////////////// End of front home //////////////////////////////


/////////////////////Login start////////////////////////////////////////
app.post('/login', function (req, res) {

  var name = req.body.name
  var password = req.body.password

  var sql = 'SELECT * FROM `user_customer`'
  db.query(sql, (err, result) => {
    if (err) throw err;
    var hasil = [];
    for (i = 0; i < result.length; i++) {
      if (name == result[i].name && password == result[i].password) {
        hasil.push(result[i].id)
        break;
      }

    }
      // console.log(hasil)
    if(hasil.length >= 1){
        res.json(hasil);
    } else{
      res.send("0")
    }
  });
})

//////////////////////////////////////////End of Product///////////////////////////////////////////

app.listen(3002);

