import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class Contentproduct extends Component {
    state ={
        allview:[],
        allview2:[]
       }

    componentDidMount() {
        var self = this;
        axios.get('http://localhost:3002/productall_home')
          .then((ambilData) => {
            self.setState({ allview: ambilData.data, })
            // console.log(this.state.allview)
          })
          
          axios.get('http://localhost:3002/productall_home_2')
          .then((ambilData) => {
            self.setState({ allview2: ambilData.data, })
            // console.log(this.state.allview)
          })
        }

  render() {

     // Awal looping dimulai (untuk data pertama)
     const data = this.state.allview.map((item, index) => {
        var id = item.id_product;
        var nama_product = item.nama_product;
        var price = item.price;
        var product_images = item.product_images;

        return  <div key={index} className="col-3 float-left item product is-gray">
        <div className="image d-flex align-items-center justify-content-center">
            <img src={`http://localhost:3002/image/${product_images}`} alt="product" className="img-fluid"/>
            <div className="hover-overlay d-flex align-items-center justify-content-center">
              <div className="CTA d-flex align-items-center justify-content-center">
                <Link to={{pathname: '/cart', state: {id:id}}} className="add-to-cart">
                <i className="fas fa-shopping-cart"></i></Link>
                <Link to={{pathname: '/detail', state: {id:id}}} className="visit-product active">
                  <i className="fas fa-search"></i>View</Link>
                </div>
            </div>
          </div>
          <div className="title"><Link to={{pathname: '/detail', state: {id:id}}}>
              <h3 className="h6 text-uppercase no-margin-bottom">{nama_product}</h3></Link><span className="price text-muted">$ {price}</span>    
          </div>
        </div>
     })
    
    //  untuk data selanjutnya
     const data2 = this.state.allview2.map((item, index) => {
        var id = item.id_product;
        var nama_product = item.nama_product;
        var price = item.price;
        var product_images = item.product_images;

        return  <div key={index} className="col-3 float-left item product is-gray">
        <div className="image d-flex align-items-center justify-content-center">
            <img src={`http://localhost:3002/image/${product_images}`} alt="product" className="img-fluid"/>
            <div className="hover-overlay d-flex align-items-center justify-content-center">
              <div className="CTA d-flex align-items-center justify-content-center">
                <Link to={{pathname: '/cart', state: {id:id}}} className="add-to-cart">
                <i className="fas fa-shopping-cart"></i></Link>
                <Link to={{pathname: '/detail', state: {id:id}}} className="visit-product active">
                  <i className="fas fa-search"></i>View</Link>
                </div>
            </div>
          </div>
          <div className="title"><Link to={{pathname: '/detail', state: {id:id}}}>
              <h3 className="h6 text-uppercase no-margin-bottom">{nama_product}</h3></Link><span className="price text-muted">$ {price}</span>    
          </div>
        </div>
     })
    

    return (
      <div>

    {/* <!-- Dried bird's Collection --> */}
    <section className="men-collection gray-bg">
      <div className="container">
        <header className="text-center">
          <h2 className="text-uppercase"><small>The Best Choice</small>Dried brid's nest</h2>
        </header>

        <div className="container text-center my-3">
          <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
              <div className="carousel-inner w-100" role="listbox">
        
        {/* <!--Product Pertama  --> */}
                <div className="carousel-item row no-gutters active">     
                {data}               
              </div>

          <div className="carousel-item row no-gutters">
                    {data2}

                          </div>
                      </div>
              <a className="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </a>
          </div>
      </div>
      </div>
 
    </section>


      </div>

    );
  }
}

export default Contentproduct;
