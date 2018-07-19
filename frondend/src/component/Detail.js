import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Similaritems from './Similaritems';
import '../App.css';
import {Link} from 'react-router-dom'
import axios from 'axios';

class Detail extends Component {
  state = {
   allview:[],
   id :"",
   nama_product :"",
   price :"",
   quantity :"",
   condition :"",
   description :"",
   product_images :"",
   classribon :"",
   nama_category :""
}

  componentDidMount(){
    var id = this.props.location.state.id
    axios.get('http://localhost:3002/productall/getdata/'+id)
    .then((ambilData) => {
      // console.log(hasilAmbil.data);
      this.setState({
        id :ambilData.data[0].id_product,
        nama_product :ambilData.data[0].nama_product,
        price : ambilData.data[0].price,
        quantity : ambilData.data[0].quantity,
        condition : ambilData.data[0].nama_condition,
        description : ambilData.data[0].description,
        product_images : ambilData.data[0].product_images,
        classribon : ambilData.data[0].class,
        nama_category : ambilData.data[0].nama_category
    });
  })
}

  render() {


    return (
    <div>
   
    <Navbar />

   {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>{this.state.nama_product}</h1>
          </div>
          <div className="col-lg-3 text-right order-1 order-lg-2">
            <ul className="breadcrumb justify-content-lg-end">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/category">Shop</Link></li>
              <li className="breadcrumb-item active">{this.state.nama_product}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
{/* <!-- End bagian atas --> */}

    <section className="product-details">
      <div className="container">
        <div className="row">
          <div className="product-images col-lg-6">
            <div className="ribbon-info text-uppercase">{this.state.nama_condition}</div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-80" style={{background:"#f5f5f5", width:"400px", height:"400px"}} 
                  src={'http://localhost:3002/'+ `image/${this.state.product_images}`} alt="First slide"/>
                </div>
                {/* <div className="carousel-item">
                  <img className="d-block w-80" style={{background:"#f5f5f5"}} src={"img/product/viewproduk1.2.png"} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-80" style={{background:"#f5f5f5"}} src={"img/product/viewproduk1.3.png"} alt="Third slide"/>
                </div> */}
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

          </div>
          <div className="details col-lg-6">
            <div className="d-flex align-items-center justify-content-between flex-column flex-sm-row">
            <h3> {this.state.nama_product} </h3>
            </div>
            <ul className="price list-inline no-margin">
                  <li className="list-inline-item current">${this.state.price}</li>
                  {/* <li className="list-inline-item original">$88.00</li> */}
              </ul>
            <p> {this.state.description}</p>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <div className="quantity d-flex align-items-center">
                <div className="dec-btn">-</div>
                <input type="text" value="1" className="quantity-no"/>
                <div className="inc-btn">+</div>
              </div>
            </div>
            <ul className="CTAs list-inline">
                <li className="list-inline-item"><a href="#" className="btn btn-template wide"> 
                  <i className="fas fa-shopping-cart"></i>Add to Cart</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="product-description no-padding">
      
      
{/* <!-- Penjelasan Dari description  --> */}
    <div className="container">
        <ul role="tablist" className="nav nav-tabs">
          <li className="nav-item"><a data-toggle="tab" href="#description" role="tab" className="nav-link active">Description</a></li>
          <li className="nav-item"><a data-toggle="tab" href="#additional-information" role="tab" className="nav-link">Additional Information</a></li>
        </ul>
        <div className="tab-content">
          <div id="description" role="tabpanel" className="tab-pane active">
              <p> {this.state.description} </p>
          </div>

    {/* <!-- Penjelasan Materialnya --> */}
          <div id="additional-information" role="tabpanel" className="tab-pane">
            <ul className="list-unstyled additional-information">
              <li className="d-flex justify-content-between"><strong>Condition:</strong><span>{this.state.condition}</span></li>
              <li className="d-flex justify-content-between"><strong>Category:</strong><span>{this.state.nama_category}</span></li>
            </ul>
          </div>
        </div>
      </div>

{/* <!-- Share Icon --> */}
      <div className="container-fluid">
        <div className="share-product gray-bg d-flex align-items-center justify-content-center flex-column flex-md-row"><strong className="text-uppercase">Share this on</strong>
          <ul className="list-inline text-center">
            <li className="list-inline-item"><a href="#" target="_blank" title="twitter">
              <i className="fab fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="facebook">
              <i className="fab fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="instagram">
              <i className="fab fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest">
              <i className="fab fa-pinterest"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="vimeo">
              <i className="fab fa-vimeo"></i></a></li>
          </ul>
        </div>
      </div>
    </section>

  {/* Di comment dl tar di bikin lebih lengkap */}
  {/* <Similaritems/> */}

  <Footer/>

    </div>
    );
  }
}

export default Detail;