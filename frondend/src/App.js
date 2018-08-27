import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'

import Home from './component/Home';
import About from './component/About';
import Category from './component/Category';
import Contact from './component/Contact';
import Blog from './component/Blog';
import Detail from './component/Detail';
import Cart from './component/Cart';
import Checkout1 from './component/Checkout1';
import Checkout2 from './component/Checkout2';
import Checkout3 from './component/Checkout3';
import Checkout4 from './component/Checkout4';
import Checkout5 from './component/Checkout5';
import Customerorder from './component/Customerorder';
import Customerorders from './component/Customerorders';
import Customeraccount from './component/Customeraccount';
import Customeraccountedit from './component/Customeraccountedit';
import Customeraddresses from './component/Customeraddresses';
import Customeraddressesedit from './component/Customeraddressesedit';
import Customerlogin from './component/Customerlogin';
import Post from './component/Post';
import payment from './component/payment';
import Customerregister from './component/Customerregister';




class App extends Component {

  render() {
    return (
      <div> 
      <Route exact path="/" component={Home}/> 
      <Route path="/about" component={About}/>  
      <Route path="/category" component={Category}/>  
      <Route path="/contact" component={Contact}/>  
      <Route path="/blog" component={Blog}/>  
      <Route path="/detail" component={Detail}/>  
      <Route path="/cart" component={Cart}/>  
      <Route path="/checkout1" component={Checkout1}/>  
      <Route path="/checkout2" component={Checkout2}/>  
      <Route path="/checkout3" component={Checkout3}/>  
      <Route path="/checkout4" component={Checkout4}/>  
      <Route path="/checkout5" component={Checkout5}/>  
      <Route path="/customerorder" component={Customerorder}/>  
      <Route path="/customerorders" component={Customerorders}/>  
      <Route path="/customeraccount" component={Customeraccount}/>  
      <Route path="/customeraccountedit" component={Customeraccountedit}/>  
      <Route path="/customeraddresses" component={Customeraddresses}/>  
      <Route path="/customeraddressesedit" component={Customeraddressesedit}/>  
      <Route path="/customerlogin" component={Customerlogin}/>  
      <Route path="/post" component={Post}/>  
      <Route path="/payment" component={payment}/>  
      <Route path="/Customerregister" component={Customerregister}/>  
     </div>
    );
  }
}

export default App;
