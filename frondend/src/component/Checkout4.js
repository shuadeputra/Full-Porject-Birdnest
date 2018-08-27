import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Herosectioncheckout from './Herosectioncheckout';
import '../App.css';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies


class Checkout4 extends Component {

  state ={
    viewcart:[],
    redirect:false,
    total_all:"",
    total_all_shiping:"",
    next:'',
  }

  componentDidMount(){
    
    axios.post('http://localhost:3002/productall/cart/show',{
      id_user: cookies.get("login")
    }).then((respon) => {
      this.setState({viewcart:respon.data});
      
      var total = 0
      for (var i = 0; i < respon.data.length; i++) {
          total += respon.data[i].total_price
      }
      // console.log(total)
      this.setState({total_all:total})
      this.setState({total_all_shiping:total+10})
    
    })
  }

  next(){

    axios.post('http://localhost:3002/invoice/cart/updateinvoice',{
      id_user: cookies.get("login")
    }).then((respon) => {
      if(respon.data === "clear"){
        this.setState({next:"1"}) 
        this.setState({redirect:true}) 
      }
    })
  }

  delete(id){

    axios.post('http://localhost:3002/cart/delete',{
      id : id,
    }).then((respon) => {
      if(respon.data === "hapus"){
        axios.post('http://localhost:3002/productall/cart/show',{
          id_user: cookies.get("login")
        }).then((respon) => {
          this.setState({viewcart:respon.data});
          
          var total = 0
          for (var i = 0; i < respon.data.length; i++) {
              total += respon.data[i].total_price
          }
          this.setState({total_all:total})
          this.setState({total_all_shiping:total+10})
        
        })
      }
    })
  }


  updatequantity(obj,id,price){
    var quantity_update = obj.target.value
    var id_product = id
    var total_price = Number(price) * Number(quantity_update)
 
    axios.post('http://localhost:3002/cart/update',{   
     quantity_update:quantity_update,
     id_product:id_product,
     id_user: cookies.get("login"),
     total_price:total_price
   }).then((respon)=>{
     if(respon.data === "Berhasil"){
 
       axios.post('http://localhost:3002/productall/cart/show',{
       id_user: cookies.get("login")
     }).then((respon) => {
       this.setState({viewcart:respon.data});
       // console.log(respon.data)
       var total = 0
       for (var i = 0; i < respon.data.length; i++) {
           total += respon.data[i].total_price
       }
       // console.log(total)
       this.setState({total_all:total})
       this.setState({total_all_shiping:total+10})
     })
     }
   })
  }


  render() {

      // Mengecek apakah passwod sudah dan username uda benar?
      if(cookies.get("login") < 1){
        this.setState({redirect:true}) 
      }

      // Mengirim ke page checkout2
      if (this.state.redirect && this.state.next ==="1") {
        return <Redirect to='/Checkout5'/>
      }

      // Mengirm redirect jika pass dan user bukan dapat value 1
        if (this.state.redirect) {
          return <Redirect to='/customerlogin'/>
        }

         // looping pertama yang tidak menemukan login
         const data = this.state.viewcart.map((item, index) => {
          var id = item.id_cart;
          // var user_customer_id = item.user_customer_id;
          var product_id =  item.product_id;
          var quantity_cart =  item.quantity_cart;
          var price =  item.price;
          var total_price =  item.total_price;
          var nama_product = item.nama_product;
          var product_images = item.product_images;
    
           return <div key={index} className="item row d-flex align-items-center">
            <div className="col-4">
              <div className="d-flex align-items-center">
              <img key={index} src={`http://localhost:3002/image/${product_images}`} alt="product_image" className="img-fluid"/>
                <div className="title"><a href="detail.html">
                    <h6 key={index}>{nama_product} </h6></a></div>
              </div>
            </div>
            <div className="col-2"><span key={index}>${price}</span></div>
            <div className="col-2"><input type="number" min="1" style={{width:"57px"}} onChange={e =>this.updatequantity(e,product_id,price)} defaultValue={quantity_cart} /></div>
            <div className="col-2"><span key={index}>${total_price}</span></div>
            <button onClick={()=>{this.delete(id);}} className=" btn btn-danger col-1 text-center"><i className="delete fa fa-trash fa-lg"></i></button>
          </div>

           })



    return (
    <div>
   
  <Navbar />
  <Herosectioncheckout/>


  {/* <!-- Checout Forms--> */}
    <section className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <ul className="nav nav-pills">
              <li className="nav-item"><a href="checkout1.html" className="nav-link">Address</a></li>
              <li className="nav-item"><a href="checkout2.html" className="nav-link">Delivery Method </a></li>
              <li className="nav-item"><a href="checkout3.html" className="nav-link">Payment Method </a></li>
              <li className="nav-item"><a href="checkout4.html" className="nav-link active">Order Review</a></li>
            </ul>
            <div className="tab-content">
              <div id="order-review" className="tab-block">
                <div className="cart">
                  <div className="cart-holder">
                    <div className="basket-header">
                      <div className="row">
                        <div className="col-4">Product</div>
                        <div className="col-2">Price</div>
                        <div className="col-2">Quantity</div>
                        <div className="col-2">Unit Price</div>
                        <div className="col-2">Remove</div>
                      </div>
                    </div>
                    <div className="basket-body">

              {/* Awal looping dalam data */}
                      {data}
              {/* Akhir dari looping data */}

                    </div>
                  </div>
                  <div className="total row"><span className="col-md-10 col-2">Total</span><span className="col-md-2 col-10 text-primary">${this.state.total_all}</span></div>
                </div>
                <div className="CTAs d-flex justify-content-between flex-column flex-lg-row">
                <Link to="/checkout3" className="btn btn-template-outlined wide prev"><i className="fa fa-angle-left"></i>Back to payment method</Link>

                <button onClick={() => { this.next() }} className="btn btn-template wide next">Place an order<i className="fa fa-angle-right"></i></button></div>
              </div>
            </div>
          </div>

          {/* <!--- Ordersummary---> */}

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
          {/* End of order Ordersummary*/}

        </div>
      </div>
    </section>



  <Footer/>

    </div>
    );
  }
}
export default Checkout4;