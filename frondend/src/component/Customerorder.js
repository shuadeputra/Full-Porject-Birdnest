import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Customersidebar from './Customersidebar';
import '../App.css';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

class Customerorder extends Component {
  state={
    allview :[],
    invoice_number:"",
    date:"",
    status:"",
    total_all:'',
    total_all_shiping:'',
    Street:"",
    City:"",
    ZIP:"",
    State:"",
    Contry:"",
    Phone_Number:"",
    payment:"",
    number_payment:"",
    redirect:false,
  }

  componentDidMount(){
    var invoice_number = this.props.location.state.invoice_number
    // console.log(invoice_number)
    axios.get('http://localhost:3002/invoice/ditel/getdata/'+invoice_number)
    .then((ambilData) => {
    this.setState({allview:ambilData.data});
    this.setState({invoice_number:ambilData.data[0].invoiceid});
    this.setState({date:ambilData.data[0].date});
    this.setState({status:ambilData.data[0].status});
    this.setState({Street:ambilData.data[0].Street});
    this.setState({City:ambilData.data[0].City});
    this.setState({ZIP:ambilData.data[0].ZIP});
    this.setState({State:ambilData.data[0].State});
    this.setState({Contry:ambilData.data[0].Contry});
    this.setState({Phone_Number:ambilData.data[0].Phone_Number});
    this.setState({payment:ambilData.data[0].payment});
    this.setState({number_payment:ambilData.data[0].number_payment});

    var total = 0
    for (var i = 0; i < ambilData.data.length; i++) {
        total += Number(ambilData.data[i].total_price)
    }
    // console.log(total)
    this.setState({total_all:total})
    this.setState({total_all_shiping:total+10})
  })
}



  render() {

    // Mengecek apakah passwod sudah dan username uda benar?
    if (cookies.get("login") < 1) {
      this.setState({redirect:true})
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/customerlogin' />
    }

     // looping pertama yang tidak menemukan login
     var data = this.state.allview.map((item, index) => {
      // var id = item.id_cart;
      // var user_customer_id = item.user_customer_id;
      // var product_id =  item.product_id;
      var quantity =  item.quantity;
      var price =  item.price;
      var total_price =  item.total_price;
      var nama_product = item.nama_product;
      var product_images = item.product_images;

       return <div className="item" key={index}>
        <div className="row d-flex align-items-center">
          <div className="col-6">
            <div className="d-flex align-items-center">
            <img src={`http://localhost:3002/image/${product_images}`} alt="product_image" className="img-fluid"/>
              <div className="title">
                  <h6>{nama_product}</h6></div>
            </div>
          </div>
          <div className="col-2"><span>${price}</span></div>
          <div className="col-2">{quantity}</div>
          <div className="col-2 text-right"><span>${total_price}</span></div>
        </div>
      </div>
       })


    return (
    <div>
   
  <Navbar />
  
  {/* <!-- Hero Section--> */}
      <section className="hero hero-page gray-bg padding-small">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-9 order-2 order-lg-1">
              <h1>Invoice #{this.state.invoice_number}</h1><p className="lead">Invoice #{this.state.invoice_number} was placed on <small>"{this.state.date}"</small> and is currently <strong>{this.state.status}</strong>.</p><p className="text-muted">If you have any questions, please feel free to <Link to="/contact">contact us</Link>, our customer service center is working for you 24/7.</p>
            </div>
            <div className="col-lg-3 text-right order-1 order-lg-2">
              <ul className="breadcrumb justify-content-lg-end">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="customerorders">Orders</Link></li>
                <li className="breadcrumb-item active">Invoice #{this.state.invoice_number}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="padding-small">
        <div className="container">
          <div className="row">

    {/* <!-- Customer Sidebar--> */}
  
    <Customersidebar customersidebar='active' />

  {/* Akhir dari coustomer sidebar */}
   
        <div className="col-lg-8 col-xl-9 pl-lg-3">
          <div className="basket basket-customer-order">
            <div className="basket-holder">
              <div className="basket-header">
                <div className="row">
                  <div className="col-6">Product</div>
                  <div className="col-2">Price</div>
                  <div className="col-2">Quantity</div>
                  <div className="col-2 text-right">Total</div>
                </div>
              </div>
              <div className="basket-body">

            {/* Awal dari looping */}
                {data}
            {/* Akhir dari looping */}


              </div>
              <div className="basket-footer">
                <div className="item">
                  <div className="row">
                    <div className="offset-md-6 col-4"> <strong>Order subtotal</strong></div>
                    <div className="col-2 text-right"><strong>${this.state.total_all}</strong></div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="offset-md-6 col-4"> <strong>Shipping and handling</strong></div>
                    <div className="col-2 text-right"><strong>$10.00</strong></div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="offset-md-6 col-4"> <strong>Tax</strong></div>
                    <div className="col-2 text-right"><strong>$0.00</strong></div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="offset-md-6 col-4"> <strong>Total</strong></div>
                    <div className="col-2 text-right"><strong>${this.state.total_all_shiping}</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <center>
          <p> Dear customer, Thank you for purchasing in 高兴鸟 premium bridnest, don't forget send your payment to :</p>
          <h3>{this.state.payment} : {this.state.number_payment}</h3>
            </center>

          <div className="row addresses">
            <div className="col-sm-12">
              <div className="block-header">
                <h6 className="text-uppercase">Shipping address</h6>
              </div>
              <div className="block-body">
                Street: &nbsp;
                {this.state.Street} <br/>
                City:  &nbsp;
                {this.state.City}	<br/>	
                Zip: &nbsp;
                {this.state.ZIP}<br/>			
                State: &nbsp;
                {this.state.State}<br/>
                Contry:&nbsp;
                {this.state.Contry}<br/>
                Phone:&nbsp;
               {this.state.Phone_Number}<br/>
              </div>
            </div>
          </div>
    {/* <!-- /.addresses  --> */}
        </div>
      </div>
    </div>
  </section>


  <Footer/>

    </div>
    );
  }
}

export default Customerorder;