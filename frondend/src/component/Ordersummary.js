import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies


class Ordersummary extends Component {

  state ={
    redirect:false,
    total_all:"",
    total_all_shiping:"",
  }


  componentDidMount(){
    
    axios.post('http://localhost:3002/productall/cart/show',{
      id_user: cookies.get("login")
    }).then((respon) => {

      var total = 0
      for (var i = 0; i < respon.data.length; i++) {
          total += respon.data[i].total_price
      }
      // console.log(total)
      this.setState({total_all:total})
      this.setState({total_all_shiping:total+10})
      })
  }


  render() {
    return (

          <div className="col-lg-4">
            <div className="block-body order-summary">
              <h6 className="text-uppercase">Order Summary</h6>
              <p>Shipping and additional costs are calculated based on values you have entered</p>
              <ul className="order-menu list-unstyled">
                <li className="d-flex justify-content-between"><span>Order Subtotal </span><strong>${this.state.total_all}</strong></li>
                <li className="d-flex justify-content-between"><span>Shipping and handling</span><strong>$10.00</strong></li>
                <li className="d-flex justify-content-between"><span>Tax</span><strong>$0.00</strong></li>
                <li className="d-flex justify-content-between"><span>Total</span><strong className="text-primary price-total">${this.state.total_all_shiping}</strong></li>
              </ul>
            </div>
          </div>

    );
  }
}

export default Ordersummary;
