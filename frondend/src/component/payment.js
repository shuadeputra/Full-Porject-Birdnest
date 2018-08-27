import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Customersidebar from './Customersidebar';
import '../App.css';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class payment extends Component {
  state={
    confirmation_image:"",
    confirmation_name:"",
    foto:'',
    total_price: '',
    invoice_number: '',
    payment: '',
    confim:"",
    ambildata:[],
  }
  componentDidMount(){
    var invoice_number = this.props.location.state.invoice_number
    axios.post('http://localhost:3002/customer/payment',{
      id_user: cookies.get("login"),
      invoice_number: invoice_number
    })
    .then((respon) => {
      if(respon.data !== undefined){
        this.setState({ambildata:respon.data})
        this.setState({confirmation_name:respon.data[0].confirmation_name});
        this.setState({confirmation_image:respon.data[0].confirmation_image});
        this.setState({total_price:respon.data[0].total_price});
        this.setState({invoice_number:respon.data[0].invoice_number});
        this.setState({payment:respon.data[0].payment});
        }
    })
      
  }


  onchange = (e) => {
    switch(e.target.name){
        case 'foto':
            this.setState({
                foto: e.target.files[0],
            });
            break;
    default :
          this.setState({
            foto: "",});
    }
  }


value = (e) => {
    this.setState({
      confirmation_name:e.confirmation_name.value,
      payment:e.payment.value,
    })
    // console.log(this.state.confirmation_name)
  }

  update = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('file', this.state.foto);
    formData.append('confirmation_name', this.state.confirmation_name);
    formData.append('payment', this.state.payment);
    formData.append('invoice_number', this.props.location.state.invoice_number);
    formData.append('id_user', cookies.get("login"));

    axios.post('http://localhost:3002/customer/payment/update/', formData)
    .then((respon) => {
      if(respon.data === "berhasil"){
      this.setState({ confim: respon.data });
      this.setState({ redirect: true });
      }
    });
  }


  render() {

    // Mengecek apakah passwod sudah dan username uda benar?
    if (cookies.get("login") < 1) {
      this.setState({redirect:true})
    }
        
    // Mengirim ke page checkout2
    if (this.state.redirect && this.state.confim === "berhasil") {
      return <Redirect to='/customerorders' />
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/customerlogin' />
    }
 

      // Awal looping dimulai
      const data = this.state.ambildata.map((item, index) => {
        var confirmation_name = item.confirmation_name;
        var confirmation_image = item.confirmation_image;
        var total_price = item.total_price;
        var payment = item.payment;
    
        return  <form key={index} className="content-block" method="get" onSubmit={this.update}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Confirmation Name</label>
              <input id="Confirmation" ref="confirmation_name" type="text" className="form-control"   
             defaultValue={confirmation_name}
             />
            </div>
          </div>
        </div>

{/* <!-- /.row--> */}
          <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">BANK Payment</label>
              <input id="payment" ref="payment" type="text" className="form-control" 
              defaultValue={payment}/>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Total Price :</label>
              <span>&nbsp;&nbsp;$. <b style={{color:"red"}}>{total_price}</b></span>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-sm-6">
          <label className="form-label">Change image</label>
            <input ref="foto" name="foto" onChange={this.onchange} type="file" className="form-control"/>
          </div>

          {/* logic untuk image old yang sudah ada atau belum */}
              {this.state.confirmation_image.length > 1 ?
                <div className="row">
                  <div className="form-group col-sm-6">
                    <label className="form-label">Old Payment</label> :
          <img alt="pay_image" style={{ width: "160px", height: "160px", marginLeft: "20px", border: "1px solid black" }} src={`http://localhost:3002/image/payment/${confirmation_image}`} />
                  </div>
                </div> :
                <div>
                </div>
              }
        
          <div className="col-sm-12 text-center">
            <button style={{marginTop:"20px"}} type="submit" 
            onClick={() => this.value(this.refs)}
            className="btn btn-primary"><i className="fa fa-save"></i>Save changes</button>
          </div>
          </div>
      </form>
    })
  

    return (
    <div>
   
  <Navbar />
  
  {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>Your addresses</h1>
          </div>
          <div className="col-lg-3 text-right order-1 order-lg-2">
            <ul className="breadcrumb justify-content-lg-end">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Your addresses</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="padding-small">
      <div className="container">
        <div className="row">
  {/* <!-- Customer Sidebar--> */}

    <Customersidebar customersidebar='active'/>

  {/* <!-- End Customer Sidebar--> */}
        
  <div className="col-lg-8 col-xl-9 pl-lg-3">

        {/* Awal dar personal ditel */}
            <div className="block-header mb-5">
              <h5>Payment</h5>
            </div>
            
            {/* awal dari looping */}
            {data}
            {/* Akhir dari looping */}

        {/* Akhir dari change personal ditel */}
          </div>
        </div>
      </div>
    </section>

    

  <Footer/>

    </div>
    );
  }
}
export default payment;