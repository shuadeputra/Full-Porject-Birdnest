  var express = require('express');
  var bodyParser = require('body-parser')
  var app = express();
  var url = bodyParser.urlencoded({ extended: false })
  var nodemailer = require('nodemailer'); 

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

  ///////////////////////////untuk login product///////////////////////////////
  app.post('/login', function (req, res) {

    // console.log(req.body.username)

    var sql = 'SELECT name,password,id FROM user_admin ';
    db.query(sql, (err, result) => {
      if (err) throw err;

      var user = [];
      var name = [];
      for (i = 0; i < result.length; i++) {
        if (result[i].name == req.body.username && result[i].password == req.body.password) {
          user.push(result[i].id)
          // break;
        
          if(user.length >= 1 ){
            res.send(user);
            // console.log(user)
            }
        }
        else{
          res.send("gagal")
          // console.log("gagal")
        }
      }
    });

    // db.end();
  })
  /////////////////////////////////////////////////////////////////////////

  //////////////////////////////////Contact//////////////////////////////
  // Untuk menampilkan contact
  app.get('/Contact', function (req, res) {

    var sql = 'SELECT * FROM contact';
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result)
    });
  })

  // untuk update contact
  app.post('/Contact/update', function (req, res) {

    var description = req.body.description;
    var address = req.body.address;
    var callcenter = req.body.callcenter;
    var elecronic = req.body.elecronic;
    var id = req.body.id

    var sql = 'UPDATE contact SET content=?,address=?, callcenter=? ,electronic_support=? WHERE id=?';

    db.query(sql, [description, address, callcenter, elecronic, id], (err, result) => {
      if (err) throw err;
      if(result != undefined){
        res.send("berhasil")
      }
    });
  })
  //////////////////////////////////// End of Contact/////////////////////


  //////////////////////////////About us //////////////////////////
  // Untuk menampilkan Aboutus
  app.get('/Aboutus', function (req, res) {

    var sql = 'SELECT * FROM aboutus';
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result)
    });
  })

  // untuk update About us
  app.post('/Aboutus/update', function (req, res) {

    var how_it_all_began = req.body.how_it_all_began;
    var who_we_are = req.body.who_we_are;
    var we_care = req.body.we_care;
    var fast_delivery = req.body.fast_delivery;
    var your_security = req.body.your_security;
    var id = req.body.id

    var sql = 'UPDATE aboutus SET how_it_all_began=?,who_we_are=?, we_care=? ,fast_delivery=?,your_security=? WHERE id=?';

    db.query(sql, [how_it_all_began, who_we_are, we_care, fast_delivery, your_security, id], (err, result) => {
      if (err) throw err;
      if(result != undefined){
        res.send("berhasil")
      }
    });
  }
  )
  ////////////////////////////////End of About us///////////////////


  ////////////////////////////invoice/////////////////////////////////////
  // Untuk menampilkan invoice
  app.get('/invoice', function (req, res) {
    // console.log(req.query.page)
    if (req.query.awal == 1) {
      var sql = 'SELECT * FROM invoice LIMIT 0,5';
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
      })
    }

    // Pagging nation for invoice
    else if (req.query.page != undefined) {

      var LIMIT = req.query.page
      var sql = `SELECT * FROM invoice LIMIT ` + LIMIT + ",5";
      db.query(sql, LIMIT, (err, result2) => {
        if (err) throw err;
        res.send(result2)
      })
    }
    else {

      var sql = 'SELECT id FROM invoice';
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)

      });
    }
  })

  // Untuk update status invoice
  app.post('/invoice/update', function (req, res) {


    var color = req.body.color;
    var status = req.body.status;
    var id = req.body.id

    var sql = 'UPDATE invoice SET status=?,color=? WHERE id=?';

    db.query(sql, [status, color, id], (err, result) => {
      if (err) throw err;
      if(result != undefined){
        res.send("berhasil")
      }
    });
  })

  // Untuk cage invoice ditel
  app.post('/order_detail', function (req, res) {

    var invoice_number = req.body.invoice_number;
    var sql = 'SELECT * FROM invoice_detail WHERE invoiceid = ?';
    db.query(sql, invoice_number, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  })


  // untuk filter 
  app.post('/invoice/filter', function (req, res) {
    if (req.query.awal == 1) {
      var status = req.body.status
      var sql = 'SELECT * FROM `invoice` WHERE status=? LIMIT 0,5';
      db.query(sql,status,(err, result) => {
        if (err) throw err;
        res.send(result)
      })
    }
    else if (req.query.page != undefined) { 
      var status = req.body.statusfilter
      var LIMIT = req.query.page
      var sql = "SELECT * FROM invoice WHERE status=? "+ `LIMIT ${LIMIT},5`;
      db.query(sql,status,(err, result2) => {
        if (err) throw err;
        if(result2 !=undefined){
        res.send(result2)
        }
      })
    } else {
      var status = req.body.status
      var sql = 'SELECT id FROM invoice WHERE status=?';
      db.query(sql,status,(err, result) => {
        if (err) throw err;
        if(result !=undefined){
        res.send(result)
        } 
      });
    }
  })

  /////// untuk filter pay
  app.post('/invoice/filterpay', function (req, res) {
    if (req.query.awal == 1) {
      var confirmation = req.body.confirmation
      var sql = 'SELECT * FROM `invoice` WHERE confirmation=? LIMIT 0,5';
      db.query(sql,confirmation,(err, result) => {
        if (err) throw err;
        res.send(result)
      })
    }
    else if (req.query.page != undefined) { 
      var confirmation = req.body.filterconfirmation
      var LIMIT = req.query.page

      var sql = "SELECT * FROM invoice WHERE confirmation=? "+ `LIMIT ${LIMIT},5`;
      db.query(sql,confirmation,(err, result2) => {
        if (err) throw err;
        if(result2 !=undefined){
        res.send(result2)
        // console.log(result2)
        }
      })
    } else {
      var confirmation = req.body.confirmation
      var sql = 'SELECT id FROM invoice WHERE confirmation=?';
      db.query(sql,confirmation,(err, result) => {
        if (err) throw err;
        if(result !=undefined){
        res.send(result)
        } 
      });
    }
  })

  ///////////////////// filter with filter pay /////////////////////

  app.post('/invoice/filterpay&statusfilter', function (req, res) {
    if (req.query.awal == 1) {
      var confirmation = req.body.confirmation
      var status = req.body.status
      var sql = 'SELECT * FROM `invoice` WHERE confirmation=? AND status=? LIMIT 0,5';
      db.query(sql,[confirmation,status],(err, result) => {
        if (err) throw err;
        res.send(result)
      })
    }
    else if (req.query.page != undefined) { 
      var confirmation = req.body.filterconfirmation
      var status = req.body.statusfilter
      var LIMIT = req.query.page

      var sql = "SELECT * FROM invoice WHERE confirmation=? AND status=? "+ `LIMIT ${LIMIT},5`;
      db.query(sql,[confirmation,status],(err, result2) => {
        if (err) throw err;
        if(result2 !=undefined){
        res.send(result2)
        // console.log(result2)
        }
      })
    } 
    else {
      var status = req.body.status
      var confirmation = req.body.confirmation

      // console.log(status)
      // console.log(confirmation)

      var sql = 'SELECT id FROM invoice WHERE confirmation=? AND status=?';
      db.query(sql,[confirmation,status],(err, result) => {
        if (err) throw err;
        if(result !=undefined){
        res.send(result)
        } 
      });
    }
  })


  /////////////////////// End of Filter with filter pay //////////////

  /////////////////////////end of invoice //////////////////////////////////


  /////////////////////////////Product////////////////////////////////////

  // untuk show all product
  app.get('/product', function (req, res) {

    // // console.log(req.query.page)

    if (req.query.awal == 1) {
      var sql = 'SELECT * FROM `product` JOIN `category` ON product.category_id = category.id JOIN `condition` ON product.condition_id = condition.id JOIN `measure` ON product.Unit_measure_id = measure.id ORDER BY product.id_product DESC LIMIT 0,5';
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
      })
    }

    // // Pagging nation for invoice
    else if (req.query.page != undefined) {

      var LIMIT = req.query.page
      var sql = 'SELECT * FROM `product` JOIN `category` ON product.category_id = category.id JOIN `condition` ON product.condition_id = condition.id JOIN `measure` ON product.Unit_measure_id = measure.id ORDER BY product.id_product DESC LIMIT ' + LIMIT + ",5";
      db.query(sql, LIMIT, (err, result2) => {
        if (err) throw err;
        res.send(result2)
      })
    }
    else {

      var sql = 'SELECT * FROM `product` JOIN `category` ON product.category_id = category.id JOIN `condition` ON product.condition_id = condition.id JOIN `measure` ON product.Unit_measure_id = measure.id ORDER BY product.id_product DESC';
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)

      });
    }
  })

  // Untuk menampilkan product category di add product dan dll
  app.get('/product/show_category',function(req,res){

    var sql = 'SELECT * FROM `category`';
    db.query(sql,(err, result) => {
      if (err) throw err;
      res.send(result)
    });

  })

  // Untuk menampilkan product measure di add product dan dll
    app.get('/product/measure',function(req,res){

      var sql = 'SELECT * FROM `measure`';
      db.query(sql,(err, result) => {
        if (err) throw err;
        res.send(result)
      });
  
    })

  // Untuk menampilkan product condition di add product dan dll
    app.get('/product/condition',function(req,res){

      var sql = 'SELECT * FROM `condition`';
      db.query(sql,(err, result) => {
        if (err) throw err;
        res.send(result)
      });
  
    })



  // Untuk add product
  app.post('/product/addproduct', function (req, res) {

    var data = {
      nama_product: req.body.nama_product,
      price: req.body.price,
      quantity: req.body.quantity,
      category_id: req.body.category,
      condition_id: req.body.condition,
      description: req.body.description,
      Unit_measure_id: req.body.Unit_measure,
      useradmin_id: req.body.useradmin_id
    };
    var sql = 'INSERT INTO product SET ?';
    db.query(sql, data, (err, result) => {
      if (err) throw err;
      if(result != undefined){
          res.send("berhasil")        
      }
    });
  })

  // Show for ditel product (dalam halaman editproduct)
  app.post('/product/editproduct', function (req, res) {

    var id = req.body.id
    var sql = 'SELECT * FROM `product` WHERE id_product= ?';
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send(result)
    }); 
  })

  // Edit product ditel
  app.post('/product/editproduct/update', function (req, res) {

    // console.log("////////////////////////////////////")
    // console.log(req.body.condition)
    // console.log(req.body.description)
    // console.log("////////////////////////////////////")
    
  var useradmin_id = req.body.useradmin_id;
  var nama_product = req.body.nama_product;
  var price = req.body.price;
  var quantity = req.body.quantity;
  var category_id = req.body.category;
  var Unit_measure_id = req.body.Unit_measure;
  var condition_id = req.body.condition;
  var description = req.body.description;
  var id_product = req.body.id;
      
  var sql = 'UPDATE product SET `condition_id`=?,`description`=?,`nama_product`=?, `price`=?, `quantity`=?, `category_id`=?, `Unit_measure_id`=?,`useradmin_id`=? WHERE `id_product`=?'

    db.query(sql,[condition_id,description,nama_product,price,quantity,category_id,Unit_measure_id,useradmin_id,id_product],(err, result) => {
      if (err) throw err;
      if(result != undefined){
      res.send('berhasil');
      }
    });
  })

  // Untuk add Picture for product
  app.post('/product/addproduct_pcr', function (req, res) {

    var userfile = req.files.file

    // membuat sembuah variable supaya file yang di upload bisa sama namanya
    var namafileuniq = uniqid();

    userfile.mv(__dirname + '/image/' + namafileuniq + '.' + userfile.mimetype.split('/')[1],

      function (err) {
        if (err)
          return res.status(500).send(err);
      }
    );

    // Insert into product image tbl
    var data = {
      product_id: req.body.id,
      product_images: namafileuniq + '.' + userfile.mimetype.split('/')[1]
    };

    var sql = 'INSERT INTO product_image SET ?';
    db.query(sql, data, (err, result) => {
      if (err) throw err;
      if(result != undefined){
        res.send("berhasil")
      }
    });
  })

  // Untuk menghapus product (blm termasuk picture (tar cari yang picture sekalian untuk all))
  app.post('/product/delete', function (req, res) {

    var id = req.body.id
    var sql = 'DELETE from product WHERE id_product=?';
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      if(result != undefined){
        res.send("berhasil")
      }
      // console.log(result);
    });
  })

  // menarik product dari table product
  app.post('/product/img', function (req, res) {

    var id = req.body.id

    var sql = 'SELECT * FROM product_image where product_id= ?';
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      if(result != undefined){
      res.send(result)
      }
    });

  })

  // Hapus img product yang sudah pernah di upload
  app.post('/product/img/delete', function (req, res) {
    var nama = req.body.product_images
    var id = req.body.id
    var sql = 'DELETE from product_image WHERE id=?';
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      console.log(result);
    });

    // untuk update file dan menghapus file sebelumnya
    var fs = require('fs');
    var filePath = __dirname + '/image/' + nama
    fs.unlinkSync(filePath);

  })



    // Untuk menampilkan product Meansure di add product dan dll
    app.get('/product/measure',function(req,res){

      var sql = 'SELECT * FROM `measure`';
      db.query(sql,(err, result) => {
        if (err) throw err;
        if(result != undefined){
          res.send(result)
        }
      });
    })

    /////////// show edit product measure //////////
    app.post('/product/measurebyid', function (req, res) {

      var id = req.body.id    
      var sql = 'SELECT * FROM `measure` WHERE id =?';
      db.query(sql, id, (err, result) => {
        if (err) throw err;
        if(result != undefined){
          res.send(result);
        }
      });
    })

       // Untuk edit product Measure yang dipilih
   app.post('/product/measure/edit', function (req, res) {

    var id = req.body.id;
    var name_measure = req.body.name_measure;

    var sql = 'UPDATE `measure` SET `name_measure`=? WHERE id =?';
    db.query(sql, [name_measure,id], (err, result) => {
      if (err) throw err;
      if(result != undefined){
        res.send("berhasil")
      }
    });
  })

  // Untuk add product measure
  app.post('/product/addmeasure', function (req, res) {

    var data = {
      name_measure: req.body.name_measure
    };

    var sql = 'INSERT INTO `measure` SET ?';
    db.query(sql, data, (err, result) => {
      if (err) throw err;
      if(result != undefined){
        res.send("berhasil")
      }
    });
  })

    // Untuk delete product measure
    app.post('/product/measure/delete', function (req, res) {
      
      var id= req.body.id
      var sql = 'DELETE FROM `measure` WHERE id =?';
      db.query(sql, id, (err, result) => {
        if (err) throw err;
        if(result != undefined){
          res.send("berhasil")
        }
      });
    })


// Untuk menampilkan product Condition di add product dan dll
app.get('/product/condition', function (req, res) {

  var sql = 'SELECT * FROM `condition`';
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result != undefined) {
      res.send(result)
    }
  });
})

  // Untuk add product Condition
  app.post('/product/condition', function (req, res) {

    var data = {
      nama_condition: req.body.nama_condition,
      class: req.body.classs
    };

    var sql = 'INSERT INTO `condition` SET ?';
    db.query(sql, data, (err, result) => {
      if (err) throw err;
      if(result != undefined){
        res.send("berhasil")
      }
    });
  })

      // Untuk delete product measure
      app.post('/product/condition/delete', function (req, res) {
      
        var id= req.body.id
        var sql = 'DELETE FROM `condition` WHERE id =?';
        db.query(sql, id, (err, result) => {
          if (err) throw err;
          if(result != undefined){
            res.send("berhasil")
          }
        });
      })

    /////////// show edit product measure //////////
    app.post('/product/conditionid', function (req, res) {

      // console.log(req.body.id)

      var id = req.body.id    
      var sql = 'SELECT * FROM `condition` WHERE id =?';
      db.query(sql, id, (err, result) => {
        if (err) throw err;
        if(result != undefined){
          res.send(result);
        }
      });
    })

  // Untuk edit product Condition yang dipilih
   app.post('/product/condition/edit', function (req, res) {

    var id = req.body.id;
    var nama_condition = req.body.nama_condition;
    var classs = req.body.classs;

    var sql = 'UPDATE `condition` SET `nama_condition`=?, `class`=? WHERE id =?';
    db.query(sql, [nama_condition,classs,id], (err, result) => {
      if (err) throw err;
      if(result != undefined){
        res.send("berhasil")
      }
    });
  })



  ///////////////////// Product cateogry (all product) ///////////////////////

  app.post('/product/filter', function (req, res) {

    // // console.log(req.query.page)

    if (req.query.awal == 1) {
      var categoryid = req.body.category
      var sql = 'SELECT * FROM `product` JOIN `category` ON product.category_id = category.id JOIN `condition` ON product.condition_id = condition.id JOIN `measure` ON product.Unit_measure_id = measure.id WHERE product.category_id=? ORDER BY product.id_product DESC LIMIT 0,5';
      db.query(sql, categoryid, (err, result) => {
        if (err) throw err;
        res.send(result)
      })
    }
    // // Pagging nation for invoice
    else if (req.query.page != undefined) {
      var categoryid = req.body.filtervalue
      var LIMIT = req.query.page
      var sql = "SELECT * FROM `product` JOIN `category` ON product.category_id = category.id JOIN `condition` ON product.condition_id = condition.id JOIN `measure` ON product.Unit_measure_id = measure.id WHERE product.category_id=? ORDER BY product.id_product DESC " + `LIMIT ${LIMIT},5`;
      db.query(sql, categoryid, (err, result2) => {
        if (err) throw err;
        res.send(result2)
      })
    }
    else {
      var categoryid = req.body.category
      // console.log(categoryid)

      var sql = 'SELECT * FROM `product` JOIN `category` ON product.category_id = category.id JOIN `condition` ON product.condition_id = condition.id JOIN `measure` ON product.Unit_measure_id = measure.id WHERE product.category_id=? ORDER BY product.id_product DESC';
      db.query(sql, categoryid, (err, result) => {
        if (err) throw err;
        if(result != undefined){
        res.send(result)
        }
      });
    }
  })

  ///////////////////// End of product category (all product) ///////////////////////


    ///////////////////// Product condition (all product) ///////////////////////

    app.post('/product/filter/condition', function (req, res) {

      // // console.log(req.query.page)
      if (req.query.awal == 1) {
        var conditionid = req.body.condition
        var sql = 'SELECT * FROM `product` JOIN `category` ON product.category_id = category.id JOIN `condition` ON product.condition_id = condition.id JOIN `measure` ON product.Unit_measure_id = measure.id WHERE product.condition_id=? ORDER BY product.id_product DESC LIMIT 0,5';
        db.query(sql, conditionid, (err, result) => {
          if (err) throw err;
          res.send(result)
        })
      }
      // // Pagging nation for invoice
      else if (req.query.page != undefined) {
        var conditionid = req.body.filterconditionvalue
        var LIMIT = req.query.page
        var sql = "SELECT * FROM `product` JOIN `category` ON product.category_id = category.id JOIN `condition` ON product.condition_id = condition.id JOIN `measure` ON product.Unit_measure_id = measure.id WHERE product.condition_id=? ORDER BY product.id_product DESC " + `LIMIT ${LIMIT},5`;
        db.query(sql, conditionid, (err, result2) => {
          if (err) throw err;
          if(result2 != undefined){
          res.send(result2)
          }
        })
      }
      else {
        var conditionid = req.body.condition
        var sql = 'SELECT * FROM `product` JOIN `category` ON product.category_id = category.id JOIN `condition` ON product.condition_id = condition.id JOIN `measure` ON product.Unit_measure_id = measure.id WHERE product.condition_id=? ORDER BY product.id_product DESC';
        db.query(sql, conditionid, (err, result) => {
          if (err) throw err;
          if(result != undefined){
          res.send(result)
          }
        });
      }
    })
  
    ///////////////////// End of product condition (all product) ///////////////////////
  





  ////////////////////////////End of product///////////////////////////// 


////////////////////////// category product////////////////////

  // Untuk add product category
  app.post('/product/addcategory', function (req, res) {

    var data = {
      nama_category: req.body.nama_category
    };

    var sql = 'INSERT INTO category SET ?';
    db.query(sql, data, (err, result) => {
      if (err) throw err;
      if(result != undefined){
          res.send("berhasil")
      }
    });
  })

  // Untuk delete product category
  app.post('/product/category/delete', function (req, res) {

    // console.log(id)
    
    var id= req.body.id
    var sql = 'DELETE FROM `category` WHERE id =?';
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      if(result != undefined){
        res.send("berhasil")
      }
    });
  })

  // Untuk show product category yang dipilih
  app.post('/product/show_categorybyid', function (req, res) {

    var id = req.body.id    
    var sql = 'SELECT * FROM `category` WHERE id =?';
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      if(result != undefined){
        res.send(result);
      }
    });
  })

   // Untuk show product category yang dipilih
   app.post('/product/category/edit', function (req, res) {
    // console.log(req.body.id)
    // console.log(req.body.nama_category)

    var id = req.body.id;
    var nama_category = req.body.nama_category;

    var sql = 'UPDATE `category` SET `nama_category`=? WHERE id =?';
    db.query(sql, [nama_category,id], (err, result) => {
      if (err) throw err;
      if(result != undefined){
        res.send("berhasil")
      }
    });
  })

//////////////////////End Of Category Product///////////////////////////



/////////////////////////// Blog //////////////////////////////////////

///// insert ke dalam table blog
app.post('/blog/addblog', function (req, res) {

  var userfile = req.files.file
  // var description = req.body.description
  // var meta_tittle = req.body.meta_tittle
  // var meta_dsc = req.body.meta_dsc
  // var title = req.body.title
  // var useradmin_id = req.body.useradmin_id

  // console.log(userfile)
  // console.log(description)
  // console.log(meta_tittle)
  // console.log(meta_dsc) 
  // console.log(title)
  // console.log(useradmin_id)
  
  // membuat sembuah variable supaya file yang di upload bisa sama namanya
  var namafileuniq = uniqid();

  userfile.mv(__dirname + '/image/blog/' + namafileuniq + '.' + userfile.mimetype.split('/')[1],

    function (err) {
      if (err)
        return res.status(500).send(err);
    }
  );

  // Insert into product image tbl
  var data = {
    useradmin_id: req.body.useradmin_id,
    meta_tittle	: req.body.meta_tittle,
    meta_dsc: req.body.meta_dsc,
    title	: req.body.title,
    description: req.body.description,
    image: namafileuniq + '.' + userfile.mimetype.split('/')[1],
  };
  var sql = 'INSERT INTO blog SET ?';
  db.query(sql, data, (err, result) => {
    if (err) throw err;
      if(result != undefined){
        res.send("berhasil")
      }
  });
})

////// show all blog
app.get('/blog/all',function(req,res){

  var sql = 'SELECT * FROM `blog`';
  db.query(sql,(err, result) => {
    if (err) throw err;
    if(result !=undefined){
      res.send(result)
    }
  });

})

///////// show selected blog
app.get('/blogedit/:id', function (req, res) {

  var id = req.params.id
  var sql = 'SELECT * FROM `blog` WHERE id=?';
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    if (result != undefined) {
      res.send(result)
    }
  });
})

///// insert ke dalam table blog
app.post('/blog/edit', function (req, res) {

  if(req.files != undefined){
  var userfile = req.files.file
  var description = req.body.description
  var meta_tittle = req.body.meta_tittle
  var meta_dsc = req.body.meta_dsc
  var title = req.body.title
  var useradmin_id = req.body.useradmin_id
  var id = req.body.id
  var image = req.body.image
  

    var fs = require('fs');
    var filePath = __dirname + '/image/blog/' + image
    fs.unlinkSync(filePath);

  // membuat sembuah variable supaya file yang di upload bisa sama namanya
  var namafileuniq = uniqid();

  userfile.mv(__dirname + '/image/blog/' + namafileuniq + '.' + userfile.mimetype.split('/')[1],

    function (err) {
      if (err)
        return res.status(500).send(err);
    }
  );

  var image_new = namafileuniq + '.' + userfile.mimetype.split('/')[1],

  sql = 'UPDATE `blog` SET `useradmin_id`=?,`meta_tittle`=?,`meta_dsc`=?,`title`=?,`description`=?,`image`=? WHERE `id`=?';
  db.query(sql, [useradmin_id,meta_tittle,meta_dsc,title,description,image_new,id], (err, result) => {
    if (err) throw err;
    if (result != undefined) {
      res.send("berhasil")
    }
  });

} else{
  var description = req.body.description
  var meta_tittle = req.body.meta_tittle
  var meta_dsc = req.body.meta_dsc
  var title = req.body.title
  var useradmin_id = req.body.useradmin_id
  var id = req.body.id
  var image = req.body.image

  // console.log(useradmin_id)
  // console.log(description)
  // console.log(meta_tittle)
  // console.log(meta_dsc) 
  // console.log(title)
  // console.log(id)
  // console.log(image)

  var sql = 'UPDATE `blog` SET `useradmin_id`=?,`meta_tittle`=?,`meta_dsc`=?,`title`=?,`description`=? WHERE `id`=?';
  db.query(sql, [useradmin_id,meta_tittle,meta_dsc,title,description,id], (err, result) => {
    if (err) throw err;
    if (result != undefined) {
      res.send("berhasil")
      // console.log(result)
    }
  });
}
})


///////// deleted table blog
app.post('/blog/deleted', function (req, res) {

  var id = req.body.id
  var image = req.body.image

  var fs = require('fs');
  var filePath = __dirname + '/image/blog/' + image
  fs.unlinkSync(filePath);

  var sql = 'DELETE FROM `blog` WHERE id=?';
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    res.send("berhasil")
  });
})

//////////////////////////// End of Blog ///////////////////////////////

////////////////////////////// Contac form (massage) ///////////////////

//////////// page mail
app.get('/pagemail', function (req, res) {

  var sql = 'SELECT * FROM `contact_form`';
  db.query(sql, (err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    }
  });
})

//// Ketika di buka di view maka
app.get('/pagemail/:id', function (req, res) {

  var id = req.params.id
  var sql = 'SELECT * FROM `contact_form` WHERE id=?';
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    if (result != undefined) {
      res.send(result)

    var view = 1
    var sql = 'UPDATE `contact_form` SET `view`=? WHERE id=?';
    db.query(sql, [view,id], (err, result2) => {
      if (err) throw err;
      if (result2 != undefined) {
        console.log("berhasil")
      } 
    });
    }
  });
})


app.post('/pagemail/sendingemail', function (req, res) {
  
  var to = req.body.to
  var subject = req.body.subject
  var html = req.body.text
  var replay_massage_before = req.body.replay_massage_before
  var first_name = req.body.first_name

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'BirdnestPremium.indo@gmail.com',
      pass: 'Suciawen0'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  var mailOptions = { 
    from: '<BirdnestPremium.indo@gmail.com>',  
    to: to, 
    subject: subject, 
    html: html,
  }  


  transporter.sendMail(mailOptions, function(error, info){
    if (error) { console.log(error);
    } else {
      console.log('Email sent: ' + info.response);

      var data = {
        to:to,
        subject:subject,
        massage: html,
        replay_massage_before : replay_massage_before,
        customer_firstname : first_name
      }
      var sql = "INSERT INTO `sending_contact_email` SET ?"
      db.query(sql, data, (err, result) => {
        if (err) throw err;
        if (result != undefined) {
          res.send("berhasil")
        }
      });
    }
  }); 
})

app.post('/pagemail_deleted', function(req,res){
  var id = req.body.id
  
  var sql = 'DELETE FROM `contact_form` WHERE id=?'
  db.query(sql,id,(err,result)=>{
    if(err) throw err;
    if(result != undefined){
      res.send("berhasil")
    }
  })
})

/////////////// bagian Sent 
app.get('/sent', function (req, res) {

  var sql = 'SELECT * FROM `sending_contact_email`';
  db.query(sql, (err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    }
  });
})

app.get('/sentmail/:id', function (req, res) {

  var id = req.params.id
  var sql = 'SELECT * FROM `sending_contact_email` WHERE id=?';
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    if (result != undefined) {
      res.send(result)
    }
  })
}) 


app.post('/sentmail_deleted', function(req,res){
 
  var id = req.body.id
  
  var sql = 'DELETE FROM `sending_contact_email` WHERE id=?'
  db.query(sql,id,(err,result)=>{
    if(err) throw err;
    if(result != undefined){
      res.send("berhasil")
    }
  })
})



app.post('/pagemail/notiv', function (req, res) {

  var view = ""

  var sql = 'SELECT * FROM `contact_form` WHERE view=?';
  db.query(sql,view,(err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    }
  });
})

///////////////////////////// End of contac form (massage) /////////////



/////////////////////////////// Profile //////////////////////////////////

app.post('/showprofile', function (req,res){

  var id = (req.body.id).toString()

  var sql = 'SELECT * FROM `user_admin` JOIN user_admin_ditel ON user_admin.id=user_admin_ditel.useradmin_id WHERE user_admin_ditel.useradmin_id=?'

  db.query(sql, id,(err, result) => {
    if(err) throw err
    if(result != undefined){
      res.send(result)
    }
  })
})

////////// Edit profile
app.post('/editprofile', function (req,res){

  var id = (req.body.id).toString()
  var gender = req.body.gender
  var username = req.body.username
  var full_name = req.body.fullname
  var email = req.body.email
  var mobile_number = req.body.mobile_number
  var address = req.body.address
  var skils = req.body.skils
  

  if(req.files != undefined){
    var userfile = req.files.file

    var sql = 'SELECT image_profile  FROM `user_admin` WHERE id=?';
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      if (result != undefined) {
        var nama = result[0].image_profile

        if (nama.length > 1) {
          // untuk update file dan menghapus file sebelumnya
          var fs = require('fs');
          var filePath = __dirname + '/image/user_admin/' + nama
          fs.unlinkSync(filePath);
         }
        //  membuat sembuah variable supaya file yang di upload bisa sama namanya
        var namafileuniq = uniqid();

        userfile.mv(__dirname + '/image/user_admin/' + namafileuniq + '.' + userfile.mimetype.split('/')[1],function (err) {if (err)
              return res.status(500).send(err);})

      // Insert into user_admin image tbl
        var image_profile = namafileuniq + '.' + userfile.mimetype.split('/')[1]

        var sql = 'UPDATE `user_admin` SET image_profile=?, name=? WHERE id=?';
        db.query(sql, [image_profile, username, id], (err, result) => {
          if (err) throw err;
          if (result != undefined) {

          ///// disini akan melakukan update dalam user_admin_ditel
         var sql = 'UPDATE `user_admin_ditel` SET `full_name`=?,`email`=?,`phone`=?,`gender`=?,`address`=?,`skils`=? WHERE `useradmin_id`=?';
           db.query(sql, [full_name,email,mobile_number,gender,address,skils,id], (err, result) => {
            if (err) throw err;
              if(result != undefined){
                res.send("Berhasil")
              }})
          }
        });
      }
    })
  } else{
    ///// disini akan melakukan update dalam user_admin_ditel
    var sql = 'UPDATE `user_admin_ditel` SET `full_name`=?,`email`=?,`phone`=?,`gender`=?,`address`=?,`skils`=? WHERE `useradmin_id`=?';
    db.query(sql, [full_name, email, mobile_number, gender, address, skils, id], (err, result) => {
      if (err) throw err;
      if (result != undefined) {
        res.send("Berhasil")
      }
    })
  }
})

app.post('/changepass',function(req,res){
  var newpass = req.body.newpass
  var oldpass = req.body.oldpass
  var id = req.body.id
  
  var sql= 'SELECT password FROM `user_admin` WHERE id=?'

  db.query(sql,id,(err,result)=>{
    if (err) throw err;
    if(result != undefined){

      var password = result[0].password
      // mengecek apakah passwod lama benar apa salah 
      if(password === oldpass){

        var sql = "UPDATE `user_admin` SET password=? WHERE id=?"
        db.query(sql,[newpass,id],(err,result)=>{
          if(err) throw err
          if(result != undefined){
            res.send("Berhasil")
          }
        })
      } else{
          res.send("salah")
      }
    }
  })
})


/////////////////////////////// End of profile ////////////////////////////////



////////////////////////// Search ////////////////////////////////////////

/////// seacrh yang terdapat di page lain selain di productall
app.post('/search/productall/:search', function (req, res) {

  var search = req.params.search
  var sql = `SELECT * FROM product WHERE nama_product LIKE '%${search}%'`;
  db.query(sql,search, (err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    }
  });
})



  // untuk show all product
  app.post('/search/product', function (req, res) {
      var id = req.body.id
      var sql = 'SELECT * FROM `product` JOIN `category` ON product.category_id = category.id JOIN `condition` ON product.condition_id = condition.id JOIN `measure` ON product.Unit_measure_id = measure.id WHERE product.id_product=?';
      db.query(sql,id, (err, result) => {
        if (err) throw err;
        res.send(result)
      });
  })

  //// search yang terdapat di page allproduct
  app.post('/search/productallpage/:search', function (req, res) {

    var search = req.params.search
   var sql = "SELECT * FROM `product` JOIN `category` ON `product`.category_id = `category`.id JOIN `condition` ON `product`.condition_id = `condition`.id " + `WHERE product.nama_product LIKE '%${search}%'`;

    db.query(sql,search, (err, result) => {
      if (err) throw err;
      if(result != undefined){
      res.send(result)
      }
    });
  })



///////////////////////////// End of Search ///////////////////////////////


///////////////////////////// Untuk Home admin ///////////////////////////

//// Untuk ambil jumlah customer
app.get('/home/usercustomer', function (req, res) {

  var sql = "SELECT count(id) AS jumlah FROM `user_customer`"
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result != undefined) {
      res.send(result)
    }
  });
})

/////// Untuk mengambil jumlah blog
app.get('/home/blog', function (req, res) {

  var sql = "SELECT count(id) AS jumlah FROM `blog`"
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result != undefined) {
      res.send(result)
    }
  });

})

/////// Untuk mengambil jumlah product
app.get('/home/product', function (req, res) {

  var sql = "SELECT count(id_product) AS jumlah FROM `product`"
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result != undefined) {
      res.send(result)
    }
  });

})

/////// Untuk mengambil jumlah Email yang blm di baca
app.get('/home/email', function (req, res) {

  var view = ""
  var sql = "SELECT count(id) AS jumlah FROM `contact_form` WHERE view=?"
  db.query(sql,view,(err, result) => {
    if (err) throw err;
    if (result != undefined) {
      res.send(result)
    }
  });

})


////////////////////////////// End of Home admin ////////////////////////


////////////////////////////// Front Home //////////////////////////////

app.get('/fronthome', function (req, res) {

  var sql = "SELECT * FROM `front_home`"
  db.query(sql,(err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    }
  });

})

//////////// Untuk update atau change picture dan content picture_slide
app.post('/fronthome/slideedit', function (req, res) {

  var useradmin_id = req.body.useradmin_id
  var content_picture_slide = req.body.content_picture_slide
  var id = 1

  if(req.files != undefined){
    var userfile = req.files.file

    var sql = 'SELECT picture_slide  FROM `front_home` WHERE id=?';
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      if (result != undefined) {
        var nama = result[0].picture_slide

        if (nama.length > 1) {
          // untuk update file dan menghapus file sebelumnya
          var fs = require('fs');
          var filePath = __dirname + '/image/front_home/' + nama
          fs.unlinkSync(filePath);
         }
        //  membuat sembuah variable supaya file yang di upload bisa sama namanya
        var namafileuniq = uniqid();

        userfile.mv(__dirname + '/image/front_home/' + namafileuniq + '.' + userfile.mimetype.split('/')[1],function (err) {if (err)
              return res.status(500).send(err);})

      // Insert into user_admin image tbl
        var picture_slide = namafileuniq + '.' + userfile.mimetype.split('/')[1]

        var sql = 'UPDATE `front_home` SET picture_slide=?, content_picture_slide=?,useradmin_id=? WHERE id=?';
        db.query(sql, [picture_slide, content_picture_slide, useradmin_id, id], (err, result) => {
          if (err) throw err;
          if (result != undefined) {
            res.send("Berhasil")
          }
        });
      }
    })
  } else{
    ///// disini akan melakukan update dalam user_admin_ditel
    var sql = 'UPDATE `front_home` SET content_picture_slide=?,useradmin_id=? WHERE id=?';
    db.query(sql, [content_picture_slide, useradmin_id, id], (err, result) => {
      if (err) throw err;
      if (result != undefined) {
        res.send("Berhasil")
      }
    })
  }

})
///////////////////// End from content picture_slide/////////////////


//////////// Untuk update atau change picture dan content Picks1
app.post('/fronthome/pick1edit', function (req, res) {

  var useradmin_id = req.body.useradmin_id
  var content_picture_picks1 = req.body.content_picture_picks1
  var id = 1

  if(req.files != undefined){
    var userfile = req.files.file

    var sql = 'SELECT picture_picks1  FROM `front_home` WHERE id=?';
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      if (result != undefined) {
        var nama = result[0].picture_picks1

        if (nama.length > 1) {
          // untuk update file dan menghapus file sebelumnya
          var fs = require('fs');
          var filePath = __dirname + '/image/front_home/' + nama
          fs.unlinkSync(filePath);
         }
        //  membuat sembuah variable supaya file yang di upload bisa sama namanya
        var namafileuniq = uniqid();

        userfile.mv(__dirname + '/image/front_home/' + namafileuniq + '.' + userfile.mimetype.split('/')[1],function (err) {if (err)
              return res.status(500).send(err);})

      // Insert into user_admin image tbl
        var picture_picks1 = namafileuniq + '.' + userfile.mimetype.split('/')[1]

        var sql = 'UPDATE `front_home` SET picture_picks1=?, content_picture_picks1=?,useradmin_id=? WHERE id=?';
        db.query(sql, [picture_picks1, content_picture_picks1, useradmin_id, id], (err, result) => {
          if (err) throw err;
          if (result != undefined) {
            res.send("Berhasil")
          }
        });
      }
    })
  } else{
    ///// disini akan melakukan update dalam user_admin_ditel
    var sql = 'UPDATE `front_home` SET content_picture_picks1=?,useradmin_id=? WHERE id=?';
    db.query(sql, [content_picture_picks1, useradmin_id, id], (err, result) => {
      if (err) throw err;
      if (result != undefined) {
        res.send("Berhasil")
      }
    })
  }

})
///////////////////// End from content Picks1/////////////////

//////////// Untuk update atau change picture dan content Picks2
app.post('/fronthome/pick2edit', function (req, res) {

  var useradmin_id = req.body.useradmin_id
  var content_picture_picks2 = req.body.content_picture_picks2
  var id = 1

  if(req.files != undefined){
    var userfile = req.files.file

    var sql = 'SELECT picture_picks2  FROM `front_home` WHERE id=?';
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      if (result != undefined) {
        var nama = result[0].picture_picks2

        if (nama.length > 1) {
          // untuk update file dan menghapus file sebelumnya
          var fs = require('fs');
          var filePath = __dirname + '/image/front_home/' + nama
          fs.unlinkSync(filePath);
         }
        //  membuat sembuah variable supaya file yang di upload bisa sama namanya
        var namafileuniq = uniqid();

        userfile.mv(__dirname + '/image/front_home/' + namafileuniq + '.' + userfile.mimetype.split('/')[1],function (err) {if (err)
              return res.status(500).send(err);})

      // Insert into user_admin image tbl
        var picture_picks2 = namafileuniq + '.' + userfile.mimetype.split('/')[1]

        var sql = 'UPDATE `front_home` SET picture_picks2=?, content_picture_picks2=?,useradmin_id=? WHERE id=?';
        db.query(sql, [picture_picks2, content_picture_picks2, useradmin_id, id], (err, result) => {
          if (err) throw err;
          if (result != undefined) {
            res.send("Berhasil")
          }
        });
      }
    })
  } else{
    ///// disini akan melakukan update dalam user_admin_ditel
    var sql = 'UPDATE `front_home` SET content_picture_picks2=?,useradmin_id=? WHERE id=?';
    db.query(sql, [content_picture_picks2, useradmin_id, id], (err, result) => {
      if (err) throw err;
      if (result != undefined) {
        res.send("Berhasil")
      }
    })
  }

})
///////////////////// End from content Picks2/////////////////

//////////// Untuk update atau change picture dan content Picks2
app.post('/fronthome/pick3edit', function (req, res) {

  var useradmin_id = req.body.useradmin_id
  var content_picture_picks3 = req.body.content_picture_picks3
  var id = 1

  if(req.files != undefined){
    var userfile = req.files.file

    var sql = 'SELECT picture_picks3  FROM `front_home` WHERE id=?';
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      if (result != undefined) {
        var nama = result[0].picture_picks3

        if (nama.length > 1) {
          // untuk update file dan menghapus file sebelumnya
          var fs = require('fs');
          var filePath = __dirname + '/image/front_home/' + nama
          fs.unlinkSync(filePath);
         }
        //  membuat sembuah variable supaya file yang di upload bisa sama namanya
        var namafileuniq = uniqid();

        userfile.mv(__dirname + '/image/front_home/' + namafileuniq + '.' + userfile.mimetype.split('/')[1],function (err) {if (err)
              return res.status(500).send(err);})

      // Insert into user_admin image tbl
        var picture_picks3 = namafileuniq + '.' + userfile.mimetype.split('/')[1]

        var sql = 'UPDATE `front_home` SET picture_picks3=?, content_picture_picks3=?,useradmin_id=? WHERE id=?';
        db.query(sql, [picture_picks3, content_picture_picks3, useradmin_id, id], (err, result) => {
          if (err) throw err;
          if (result != undefined) {
            res.send("Berhasil")
          }
        });
      }
    })
  } else{
    ///// disini akan melakukan update dalam user_admin_ditel
    var sql = 'UPDATE `front_home` SET content_picture_picks3=?,useradmin_id=? WHERE id=?';
    db.query(sql, [content_picture_picks3, useradmin_id, id], (err, result) => {
      if (err) throw err;
      if (result != undefined) {
        res.send("Berhasil")
      }
    })
  }

})
///////////////////// End from content Picks2/////////////////

///////////////// Update footercontent (front home)

app.post("/fronthome/footercontentedit", function(req,res){
    var content_shipping= req.body.content_shipping
    var content_money= req.body.content_money
    var content_phone= req.body.content_phone 
    var useradmin_id= req.body.useradmin_id 
    var id = 1

    var sql = 'UPDATE `front_home` SET content_shipping=?, content_money=?, content_phone=?, useradmin_id=? WHERE id=?';
    db.query(sql, [content_shipping, content_money, content_phone, useradmin_id, id], (err, result) => {
      if (err) throw err;
      if (result != undefined) {
        res.send("Berhasil")
      }
    })
})


///////////////// End of footercontent


////////////////////////////////// End of front Home /////////////////////


////////////////////////////////// Report ///////////////////////////////

app.post("/report",function (req,res){
  var date_to = req.body.date_to
  var datefrom = req.body.datefrom
  var type_report = req.body.type_report

  if(type_report === "selling"){
    var confirmation =""
    var sql = `SELECT * FROM invoice WHERE date BETWEEN '${datefrom}' AND '${date_to}' AND confirmation=?`
    db.query(sql, confirmation, (err, result) => {
      if (err) throw err;
      if(result.length >= 1){
      res.send(result)
      }
    });

  }else{
    var confirmation ="Pay"
    var sql = `SELECT * FROM invoice WHERE date BETWEEN '${datefrom}' AND '${date_to}' AND confirmation=?`
    db.query(sql, confirmation, (err, result) => {
      if (err) throw err;
      if(result.length >= 1){
      res.send(result)
      }
    })
  }
})

////////////////////////////////////// End of Report ////////////////////


////////////////////////////// Pay invoice /////////////////////////////

app.post('/pay_detail', function (req, res) {

  var invoice_number = req.body.invoice_number

  var sql = 'SELECT * FROM `invoice` WHERE invoice_number=?';
  db.query(sql, invoice_number, (err, result) => {
    if (err) throw err;
    if(result != undefined){
    res.send(result)
    }
  });
})

////////////////////////////// END Pay invoice /////////////////////////////

  app.listen(3001);

