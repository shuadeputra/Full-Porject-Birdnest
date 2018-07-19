import React, { Component } from 'react';
import '../App.css';

class Contactform extends Component {
  render() {
    return (
    <div>
   
      <section>
        <div className="container">
          <header className="mb-5">
            <h2 className="heading-line">Contact form</h2>
          </header>
          <div className="row">
            <div className="col-md-7">
              <form id="contact-form" method="post" action="contact.php" className="custom-form form">
                <div className="controls">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label for="name" className="form-label">Your firstname *</label>
                        <input type="text" name="name" id="name" placeholder="Enter your firstname" required="required" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label for="surname" className="form-label">Your lastname *</label>
                        <input type="text" name="surname" id="surname" placeholder="Enter your  lastname" required="required" className="form-control"/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="email" className="form-label">Your email *</label>
                    <input type="email" name="email" id="email" placeholder="Enter your  email" required="required" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label for="message" className="form-label">Your message for us *</label>
                    <textarea rows="4" name="message" id="message" placeholder="Enter your message" required="required" className="form-control"></textarea>
                  </div>
                  <button type="submit" className="btn btn-template">Send message</button>
                </div>
              </form>
            </div>
            <div className="col-md-5">
              <p>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. </p>
              <p>Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. </p>
              <div className="social">
                <ul className="list-inline">
                  <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-behance"></i></a></li>
                  <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-pinterest"></i></a></li>
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