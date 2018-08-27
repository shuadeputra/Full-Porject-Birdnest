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


class Checkout3 extends Component {
  
  state={
    viewpayment:[],
    redirect:false,
    payment:"",
    nextto:"",
  }


  componentDidMount() {
    axios.get('http://localhost:3002/invoice/payment')
      .then((respon) => {
        this.setState({ viewpayment: respon.data });
        // console.log(respon.data)
      })
  }
  
  choise(obj){
    // console.log(obj)
    axios.post('http://localhost:3002/invoice/payment/choise', {
      id_login : cookies.get("login"),
      payment : obj
    }).then((respon) => {

      if(respon.data === "berhasil"){
        this.setState({nextto:"1"})
      }
    })
  }


  next(){

    // console.log(this.state.nextto)

    if(this.state.nextto ==="1"){
        this.setState({payment:"1"}) 
        this.setState({redirect:true}) 
      }
  
  }


  render() {

  // Mengecek apakah passwod sudah dan username uda benar?
  if(cookies.get("login") < 1){
    this.setState({redirect:true})   
  }

    // Mengirim ke page checkout2
    if (this.state.redirect && this.state.payment ==="1") {
      return <Redirect to='/Checkout4'/>
    }

  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/customerlogin'/>
    }


    
         // looping untuk viewaddress
         var data = this.state.viewpayment.map((item, index) => {
          var id = item.id;
          var name_payment = item.name_payment;
          var number_payment = item.number_payment;
    
          return <div key={index}>
                {/* <form action="#" className="shipping-form"> */}
              <div className="row">
                <div className="form-group col-md-6">
                  <input hidden type="text" ref="id" defaultValue={id} />
                  <input onClick={() => { this.choise(name_payment) }} ref="payment" type="radio" name="shippping" id={name_payment} className="radio-template" />
                  <label htmlFor={name_payment}><strong>{name_payment}</strong><br />
                  <span className="label-description">{number_payment}</span></label>
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
              <li className="nav-item"><a className="nav-link">Delivery Method </a></li>
              <li className="nav-item"><a className="nav-link active">Payment Method </a></li>
              <li className="nav-item"><a className="nav-link disabled">Order Review</a></li>
            </ul>
            
            {data}

                <div className="CTAs d-flex justify-content-between flex-column flex-lg-row">
                
                <Link to="/checkout2" className="btn btn-template-outlined wide prev"><i className="fa fa-angle-left"></i>Back to delivery method</Link>
                
                <button onClick={() => { this.next() }} className="btn btn-template wide next">Continue to order review<i className="fa fa-angle-right"></i></button></div> 

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

export default Checkout3;