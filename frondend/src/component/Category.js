import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Contactform from './Contactform';
import Categorysidebar from './Categorysidebar';
import '../App.css';
import {Link} from 'react-router-dom'
import axios from 'axios';


class Contact extends Component {

  state = {
    redirect: false,
    allview: [],
  }

  componentDidMount() {
    var self = this;
    axios.get('http://localhost:3002/productall')
      .then((ambilData) => {
        self.setState({ allview: ambilData.data, })
        console.log(this.state.allview)
      })
    }

  render() {

    // Awal looping dimulai
    const data = this.state.allview.map((item, index) => {
      var id = item.id_product;
      var nama_product = item.nama_product;
      var price = item.price;
      var quantity = item.quantity;
      var condition = item.nama_condition;
      var description = item.description;
      var product_images = item.product_images;
      var classribon = item.class;
      var nama_category = item.nama_category;

      return (
        <div className="item col-xl-4 col-md-6">
        <div className="product is-gray">
          <div className="image d-flex align-items-center justify-content-center">
            <div className={classribon}>{condition}</div>
            <img src={'http://localhost:3002/'+ `image/${product_images}`} alt="product" className="img-fluid"/>
            <div className="hover-overlay d-flex align-items-center justify-content-center">
              <div className="CTA d-flex align-items-center justify-content-center">
              <a href="#" className="add-to-cart"><i className="fa fa-shopping-cart"></i></a>

                <Link to={{pathname: '/detail', state: {id:id}}} className="visit-product active"><i className="icon-search"></i>View</Link>
                </div>
            </div>
          </div>
          <div className="title"><small className="text-muted">{nama_category}</small><a href="detail.html">
              <h3 className="h6 text-uppercase no-margin-bottom">{nama_product}</h3></a><span className="price text-muted">${price}</span></div>
        </div>
      </div>
      )
    
    })

    return (
    <div>
   
    <Navbar />

      {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>Shop</h1><p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className="col-lg-3 text-right order-1 order-lg-2">
            <ul className="breadcrumb justify-content-lg-end">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Shop</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <main>
      <div className="container">
        <div className="row">

<Categorysidebar/>

   {/* <!-- Grid --> */}
          <div className="products-grid col-xl-9 col-lg-8 sidebar-left">
            <header className="d-flex justify-content-between align-items-start">
            <span className="visible-items">Showing <strong>1-15 </strong>of <strong>158 </strong>results</span>
              <select id="sorting" className="bs-select">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="lowest-price">Low Price</option>
                <option value="heigh-price">High Price</option>
              </select>
            </header>



      {/* <!-- item--> */}
            <div className="row">

          {/* Data yang di looping */}
              {data}

            </div>
            <nav aria-label="page navigation example" className="d-flex justify-content-center">
              <ul className="pagination pagination-custom">
                <li className="page-item"><a href="#" aria-label="Previous" className="page-link"><span aria-hidden="true">Prev</span><span className="sr-only">Previous</span></a></li>
                <li className="page-item"><a href="#" className="page-link active">1</a></li>
                <li className="page-item"><a href="#" className="page-link">2</a></li>
                <li className="page-item"><a href="#" className="page-link">3</a></li>
                <li className="page-item"><a href="#" className="page-link">4</a></li>
                <li className="page-item"><a href="#" className="page-link">5 </a></li>
                <li className="page-item"><a href="#" aria-label="Next" className="page-link"><span aria-hidden="true">Next</span><span className="sr-only">Next     </span></a></li>
              </ul>
            </nav>
          </div>

   {/* <!-- / Grid End--> */}
        </div>
      </div>
    </main>

  <Footer/>

    </div>
    );
  }
}

export default Contact;