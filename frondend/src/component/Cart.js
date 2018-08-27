import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import Cartcomponent from './Cartcomponent';
import Herosectioncheckout from './Herosectioncheckout';
import '../App.css';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class Cart extends Component {

  state ={
    viewcart:[],
    redirect:false,
    total_all:"",
    total_all_shiping:"",
    hapus:'',
    nextpage:""
  }

  componentDidMount(){
    
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

  delete(id) {

    axios.post('http://localhost:3002/cart/delete', {
      id: id,
    }).then((respon) => {
      if (respon.data === "hapus")

        axios.post('http://localhost:3002/productall/cart/show', {
          id_user: cookies.get("login")
        }).then((respon) => {
          this.setState({ viewcart: respon.data });
          // console.log(respon.data)
          var total = 0
          for (var i = 0; i < respon.data.length; i++) {
            total += respon.data[i].total_price
          }
          // console.log(total)
          this.setState({ total_all: total })
          this.setState({ total_all_shiping: total + 10 })
        })
    })
  }

 next(){
    if(this.state.viewcart.length > 0){
      this.setState({nextpage:"1"})
      this.setState({redirect:true})
    }
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
  if(cookies.get("login") === undefined || cookies.get("login") < 1  ){
    this.setState({redirect:true})   
  }

    if (this.state.redirect && this.state.nextpage === "1" ) {
      return <Redirect to="/checkout1"/>
    }

  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/customerlogin'/>
    }


     // looping pertama yang tidak menemukan login
     var data = this.state.viewcart.map((item, index) => {
      var id = item.id_cart;
      // var user_customer_id = item.user_customer_id;
      var product_id =  item.product_id;
      var quantity_cart =  item.quantity_cart;
      var price =  item.price;
      var total_price =  item.total_price;
      var nama_product = item.nama_product;
      var product_images = item.product_images;

       return <div className="item" key={index}>
        <div className="row d-flex align-items-center">
          <div className="col-5">
            <div className="d-flex align-items-center">
            <img key={index} src={`http://localhost:3002/image/${product_images}`} alt="product_image" className="img-fluid"/>
              <div className="title">
                  <h5 key={index}>{nama_product}</h5></div>
            </div>
          </div>
          <div className="col-2"><span key={index}>${price}</span></div>
          <div className="col-2">
            <div className="d-flex align-items-center">
              <div className="quantity d-flex align-items-center">
              <input type="number" min="1" style={{width:"57px"}} onChange={e =>this.updatequantity(e,product_id,price)} defaultValue={quantity_cart} />
              </div>
            </div>
          </div>
          <div className="col-2"><span key={index}>${total_price}</span></div>

          <button onClick={()=>{this.delete(id);}} className=" btn btn-danger col-1 text-center"><i className="delete fa fa-trash"></i></button>
        </div>
      </div>
       })


    return (
    <div>
   
    <Navbar />
    <Herosectioncheckout/>

    {/* <!-- Shopping Cart Section--> */}
    <section className="shopping-cart">
      <div className="container">
        <div className="basket">
          <div className="basket-holder">
            <div className="basket-header">
              <div className="row">
                <div className="col-5">Product</div>
                <div className="col-2">Price</div>
                <div className="col-2">Quantity</div>
                <div className="col-2">Total</div>
                <div className="col-1 text-center">Remove</div>
              </div>
            </div>
            <div className="basket-body">

            {/* Start of looping product cart */}
                {data}
            {/* End of looping product cart */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="CTAs d-flex align-items-center justify-content-center justify-content-md-end flex-column flex-md-row">
        <Link to="/category" className="btn btn-template-outlined wide">Continue Shopping</Link>
        {/* <a href="#" className="btn btn-template wide">Update Cart</a> */}
        </div>
      </div>
    </section>


 {/* <!-- Order Details Section--> */}
 <section className="order-details no-padding-top"> 
      <div className="container">
        <div className="row">    
        <div className="col-lg-6"></div>                     
          {/* <div className="col-lg-6">
            <div className="block">
              <div className="block-header">
                <h6 className="text-uppercase">Coupon Code</h6>
              </div>
              <div className="block-body">
                <p>If you have a coupon code, please enter it in the box below</p>
                <form action="#">
                  <div className="form-group d-flex">
                    <input type="text" name="coupon"/>
                    <button type="submit" className="cart-black-button">Apply coupon</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="block">
              <div className="block-header">
                <h6 className="text-uppercase">Instructions for seller</h6>
              </div>
              <div className="block-body">
                <p>If you have some information for the seller you can leave them in the box below</p>
                <form action="#">
                  <textarea name="instructions"></textarea>
                </form>
              </div>
            </div>
          </div> */}
          <div className="col-lg-6">
            <div className="block">
              <div className="block-header">
                <h6 className="text-uppercase">Order Summary</h6>
              </div>
              <div className="block-body">
                <p>Shipping and additional costs are calculated based on values you have entered.</p>
                <ul className="order-menu list-unstyled">
                  <li className="d-flex justify-content-between"><span>Order Subtotal </span><strong>${this.state.total_all}</strong></li>
                  <li className="d-flex justify-content-between"><span>Shipping and handling</span><strong>$10.00</strong></li>
                  <li className="d-flex justify-content-between"><span>Tax</span><strong>$0.00</strong></li>
                  <li className="d-flex justify-content-between"><span>Total</span><strong className="text-primary price-total">${this.state.total_all_shiping}</strong></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12 text-center CTAs">
          <button onClick={()=>{this.next();}} className="btn btn-template btn-lg wide">Proceed to checkout<i className="fa fa- arrow-right"></i></button></div>
        </div>
      </div>
    </section>

    {/* <Cartcomponent/> */}

  <Footer/>

    </div>
    );
  }
}

export default Cart;