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
import Order_detail from './admin_component/Order_detail'; 
import Addproduct_pcr from './admin_component/Addproduct_pcr'; 
import Editproduct_pcr from './admin_component/Editproduct_pcr'; 
import Category from './admin_component/Category'; 
import addcategory from './admin_component/addcategory'; 
import editcategory from './admin_component/editcategory'; 
import pay_detail from './admin_component/pay_detail'; 
import measure from './admin_component/measure'; 
import editmeasure from './admin_component/editmeasure'; 
import addmeasure from './admin_component/addmeasure'; 
import condition from './admin_component/condition'; 
import addcondition from './admin_component/addcondition'; 
import editcondition from './admin_component/editcondition'; 
import pagmailview from './admin_component/pagmailview'; 
import sendmail from './admin_component/sendmail'; 
import sendmailview from './admin_component/sendmailview'; 
import report from './admin_component/report'; 
import fronthome from './admin_component/fronthome'; 


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
      <Route path="/Order_detail" component={Order_detail}/> 
      <Route path="/Addproduct_pcr" component={Addproduct_pcr}/> 
      <Route path="/Editproduct_pcr" component={Editproduct_pcr}/> 
      <Route path="/Category" component={Category}/> 
      <Route path="/addcategory" component={addcategory}/> 
      <Route path="/editcategory" component={editcategory}/> 
      <Route path="/pay_detail" component={pay_detail}/> 
      <Route path="/measure" component={measure}/> 
      <Route path="/editmeasure" component={editmeasure}/> 
      <Route path="/addmeasure" component={addmeasure}/> 
      <Route path="/condition" component={condition}/> 
      <Route path="/addcondition" component={addcondition}/> 
      <Route path="/editcondition" component={editcondition}/> 
      <Route path="/pagmailview" component={pagmailview}/> 
      <Route path="/sendmail" component={sendmail}/> 
      <Route path="/sendmailview" component={sendmailview}/> 
      <Route path="/report" component={report}/> 
      <Route path="/fronthome" component={fronthome}/> 
     </div>
    );
  }
}

export default App;
