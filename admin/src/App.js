import React, { Component } from 'react';
import './App.css';
import {Route } from 'react-router-dom'
import Loginadmin from './admin_component/Loginadmin';
import Homeadmin from './admin_component/Homeadmin'; 
import Productall from './admin_component/Productall'; 
import Addproduct from './admin_component/Addproduct'; 
import Editproduct from './admin_component/Editproduct'; 
import Blogall from './admin_component/Blogall'; 
import Blogadd from './admin_component/Blogadd'; 
import Blogedit from './admin_component/Blogedit'; 
import Contact from './admin_component/Contact'; 
import Aboutus from './admin_component/Aboutus'; 
import Orders from './admin_component/Orders'; 
import Pagemail from './admin_component/Pagemail'; 
import Pageuser from './admin_component/Pageuser'; 
import Order_ditel from './admin_component/Order_ditel'; 
import Addproduct_pcr from './admin_component/Addproduct_pcr'; 
import Editproduct_pcr from './admin_component/Editproduct_pcr'; 
import Category from './admin_component/Category'; 
import addcategory from './admin_component/addcategory'; 
import editcategory from './admin_component/editcategory'; 


import coba from './admin_component/coba'; 
import coba1 from './admin_component/coba1'; 


class App extends Component {

  render() {

    return (
      <div> 
      <Route exact path="/" component={Loginadmin}/>  
      <Route path="/homeadmin" component={Homeadmin}/> 
      <Route path="/productall" component={Productall}/> 
      <Route path="/addproduct" component={Addproduct}/> 
      <Route path="/editproduct" component={Editproduct}/> 
      <Route path="/blogall" component={Blogall}/> 
      <Route path="/blogadd" component={Blogadd}/> 
      <Route path="/blogedit" component={Blogedit}/> 
      <Route path="/contact" component={Contact}/> 
      <Route path="/aboutus" component={Aboutus}/> 
      <Route path="/orders" component={Orders}/> 
      <Route path="/pagemail" component={Pagemail}/> 
      <Route path="/pageuser" component={Pageuser}/> 
      <Route path="/Order_ditel" component={Order_ditel}/> 
      <Route path="/Addproduct_pcr" component={Addproduct_pcr}/> 
      <Route path="/Editproduct_pcr" component={Editproduct_pcr}/> 
      <Route path="/Category" component={Category}/> 
      <Route path="/addcategory" component={addcategory}/> 
      <Route path="/editcategory" component={editcategory}/> 


      <Route path="/coba" component={coba}/> 
      <Route path="/coba1" component={coba1}/>

     </div>
    );
  }
}

export default App;
