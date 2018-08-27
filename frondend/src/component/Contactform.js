import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Contactform extends Component {
 
  state={
    pesan:"",
    redirect:false
  }

  send(obj){
    if (obj.first_name.value.length >1 && obj.last_name.value.length >1 && obj.email.value.length >1 && obj.massage.value.length >1) {
      axios.post('http://localhost:3002/formcontact', {
        first_name:obj.first_name.value,
        last_name:obj.last_name.value,
        email:obj.email.value,
        massage:obj.massage.value,
      }).then((respon)=>{
          if(respon.data === "berhasil"){
            this.setState({redirect:true})
          }
      })
    } else{
      this.setState({pesan:"Please insert all form"})
    }
  }
 
 
  render() {

    if (this.state.redirect) {
      return <Redirect to='/'/>
    }

    return (
    <div>
   
      <section>
        <div className="container">
          <header className="mb-5">
            <h2 className="heading-line">Contact form</h2>
          </header>
          <div className="row">
            <div className="col-md-7">
              {/* <form method="get" id="contact-form" className="custom-form form"> */}
                <div className="controls">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label">Your firstname *</label>
                        <input type="text" ref="first_name" name="name" id="name" placeholder="Enter your firstname" required="required" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label">Your lastname *</label>
                        <input type="text" ref="last_name" name="surname" id="surname" placeholder="Enter your  lastname" required="required" className="form-control"/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your email *</label>
                    <input type="email" ref="email" name="email" id="email" placeholder="Enter your  email" required="required" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your message for us *</label>
                    <textarea rows="4" ref="massage" name="message" id="message" placeholder="Enter your message" required="required" className="form-control"></textarea>
                  </div>
                  <p style={{color:"red"}}>{this.state.pesan}</p>
                  <button type="submit" onClick={()=>{this.send(this.refs)}} className="btn btn-template">Send message</button>
                </div>
              {/* </form> */}
            </div>
            <div className="col-md-5">
              <p>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. </p>
              <p>Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. </p>
              <div className="social">
                <ul className="list-inline">
                  <li className="list-inline-item"><a target="_blank"><i className="fab fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a target="_blank"><i className="fab fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a target="_blank"><i className="fab fa-behance"></i></a></li>
                  <li className="list-inline-item"><a target="_blank"><i className="fab fa-pinterest"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    );
  }
}

export default Contactform;