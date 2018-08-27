import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class Herosectioncheckout extends Component {

  state={
    total_product_cart:"",
  }

  componentDidMount(){
  axios.post('http://localhost:3002/productall/cart/show',{
      id_user: cookies.get("login")
    }).then((respon) => {
      this.setState({total_product_cart:respon.data.length})
      })
    }


  render() {
    return (
<div>
  
{/* <!-- Hero Section--> */}
  <section className="hero hero-page gray-bg padding-small">
    <div className="container">
      <div className="row d-flex">
        <div className="col-lg-9 order-2 order-lg-1">
          <h1>Checkout</h1><p className="lead">You currently have {this.state.total_product_cart} item(s) in your basket</p>
        </div>
        <div className="col-lg-3 text-right order-1 order-lg-2">
          <ul className="breadcrumb justify-content-lg-end">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Checkout</li>
          </ul>
        </div>
      </div>
    </div>
    </section>

    </div>

    );
  }
}

export default Herosectioncheckout;
