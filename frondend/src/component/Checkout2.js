import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Ordersummary from './Ordersummary';
import Herosectioncheckout from './Herosectioncheckout';
import '../App.css';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class Checkout2 extends Component {

  state={
    viewdelivery:[],
    redirect:false,
    nextto:'',
    delivery:"",
  }

  componentDidMount() {
    axios.get('http://localhost:3002/invoice/delivery')
      .then((respon) => {
        this.setState({ viewdelivery: respon.data });
        // console.log(respon.data)
      })
  }

  choise(obj){

    axios.post('http://localhost:3002/invoice/delivery/choise', {
      id_login : cookies.get("login"),
      delivery : obj
    }).then((respon) => {

      if(respon.data === "berhasil"){
        this.setState({nextto:"1"})
      }
    })

    
  }

  next(){

    // console.log(this.state.nextto)

    if(this.state.nextto ==="1"){
        this.setState({delivery:"1"}) 
        this.setState({redirect:true}) 
      }
  
  }



  render() {



      // Mengecek apakah passwod sudah dan username uda benar?
        if(cookies.get("login") < 1){
          this.setState({redirect:true})   
        }

          // Mengirim ke page checkout2
          if (this.state.redirect && this.state.delivery ==="1") {
            return <Redirect to='/Checkout3'/>
          }

        // Mengirm redirect jika pass dan user bukan dapat value 1
        if (this.state.redirect) {
          return <Redirect to='/customerlogin'/>
        }

     // looping untuk viewaddress
     var data = this.state.viewdelivery.map((item, index) => {
      var id = item.id;
      var delivery = item.delivery;
      var desc = item.desc;

      return <div key={index}>
            {/* <form action="#" className="shipping-form"> */}
          <div className="row">
            <div className="form-group col-md-6">
              <input hidden type="text" ref="id" defaultValue={id} />
              <input onClick={() => { this.choise(delivery) }} ref="delivery" type="radio" name="shippping" id={delivery} className="radio-template" />
              <label htmlFor={delivery}><strong>{delivery}</strong><br />
              <span className="label-description">{desc}</span></label>
            </div>
          </div>

                {/* </form> */}
          </div>
      })



    return (
    <div>
   
  <Navbar />
  <Herosectioncheckout/>


     {/* <!-- Checkout Forms--> */}
    <section className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <ul className="nav nav-pills">
              <li className="nav-item"><a className="nav-link">Address</a></li>
              <li className="nav-item"><a className="nav-link active">Delivery Method </a></li>
              <li className="nav-item"><a className="nav-link disabled">Payment Method </a></li>
              <li className="nav-item"><a className="nav-link disabled">Order Review</a></li>
            </ul>
            <div className="tab-content">
              <div id="delivery-method" className="tab-block">

              {data}

                <div className="CTAs d-flex justify-content-between flex-column flex-lg-row">
                <Link to="/checkout1" className="btn btn-template-outlined wide prev"><i className="fa fa-angle-left"></i>Back to Address</Link>
                
                <button onClick={() => { this.next() }} className="btn btn-template wide next">Choose payment method<i className="fa fa-angle-right"></i></button>
                </div>
              </div>
            </div>
          </div>

          {/* <!--- Ordersummary---> */}
          <Ordersummary/>

        </div>
      </div>
    </section>



  <Footer/>

    </div>
    );
  }
}

export default Checkout2;