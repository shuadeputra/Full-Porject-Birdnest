import React, { Component } from 'react';
import Footer from './Footer';
// import Similaritems from './Similaritems';
import '../App.css';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
import { LinkContainer } from "react-router-bootstrap";
import { NavItem } from "react-bootstrap";
import Cookies from 'universal-cookie';

// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class Detail extends Component {
  state = {
   allview:[],
   kiriman:"",
   redirect:false,
   hasil:[],
   picture_1:"",
   picture_2:"",
   picture_3:"",
}

  componentDidMount(){
    var id = this.props.location.state.id
    axios.get('http://localhost:3002/productall/getdata/'+id)
    .then((ambilData) => {
    this.setState({allview:ambilData.data});
  })
    axios.get('http://localhost:3002/productall/getdata/picture/'+id)
    .then((ambilData) => {
    this.setState({picture_1:ambilData.data[0].product_images});
    if(ambilData.data.length === 2){
      this.setState({picture_2:ambilData.data[1].product_images});
    }else if(ambilData.data.length > 2){
      this.setState({picture_2:ambilData.data[1].product_images});
      this.setState({picture_3:ambilData.data[2].product_images});
    }
  })
}

  // funsi for ditel invoice to redux
  Tombolditel(obj, id) {

    axios.post('http://localhost:3002/productall/cart', {
      id: id,
      quantity: obj.quantity.value,
      price: obj.price.value,
      total: Number(obj.price.value) * Number(obj.quantity.value),
      id_user: cookies.get("login")
    }).then((respon) => {

      this.setState({ kiriman: respon.data });
      this.setState({ redirect: true });
    })
  }

  onSeriesInputChange = e =>{
    var search = e.target.value
    axios.post('http://localhost:3002/search/productall/' + search)
    .then((ambilData) => {  
      this.setState({
        hasil: ambilData.data,
        })
        // console.log(this.state.hasil)
     })
  
  
  }

  /////// Untuk cari search di navbar/////
  cari(obj) {
    axios.get('http://localhost:3002/productall/getdata/' + obj)
      .then((ambilData) => {
        if (ambilData.data !== undefined) {
          this.setState({ allview: ambilData.data });
        
          axios.get('http://localhost:3002/productall/getdata/picture/' + obj)
          .then((ambilData) => {
            this.setState({ picture_1: ambilData.data[0].product_images });
            if (ambilData.data.length === 2) {
              this.setState({ picture_2: ambilData.data[1].product_images });
            } else if (ambilData.data.length > 2) {
              this.setState({ picture_2: ambilData.data[1].product_images });
              this.setState({ picture_3: ambilData.data[2].product_images });
            }
          })
        }
      })
  }
/////////// Untuk cari search yang terdapat di navbar /////////////




  render() {
    
    // Mengirm redirect jika pass dan user bukan dapat 1
    if (this.state.redirect && this.state.kiriman === "berhasil") {
      return <Redirect to='/cart'/>
    }

    
    if(cookies.get("login") >= 1){

    // looping pertama yang tidak menemukan login
    var data = this.state.allview.map((item, index) => {
      var id = item.id_product;
      var nama_product = item.nama_product;
      var price =  item.price;
      var quantity =  item.quantity;
      var condition =  item.nama_condition;
      var description =  item.description;
      // var product_images =  item.product_images;
      var classribon =  item.class;
      var  nama_category =  item.nama_category
       return <div key={index}>
         {/* <!-- Hero Section--> */}
     <section className="hero hero-page gray-bg padding-small">
     <div className="container">
       <div className="row d-flex">
         <div className="col-lg-9 order-2 order-lg-1">
           <h1 key={index}>{nama_product}</h1>
         </div>
         <div className="col-lg-3 text-right order-1 order-lg-2">
           <ul className="breadcrumb justify-content-lg-end">
             <li className="breadcrumb-item"><Link to="/">Home</Link></li>
             <li className="breadcrumb-item"><Link to="/category">Shop</Link></li>
             <li className="breadcrumb-item active" key={index}>{nama_product}</li>
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
           <div className={classribon}>{condition}</div>
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
             <ol className="carousel-indicators">
               <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
             </ol>
             
             <div className="carousel-inner">
               <div className="carousel-item active">
                 <img className="d-block w-80" style={{background:"#f5f5f5", width:"400px", height:"400px"}} 
                 src={`http://localhost:3002/image/${this.state.picture_1}`} alt="First slide"/>
               </div>
               <div className="carousel-item">
                 <img className="d-block w-80" style={{background:"#f5f5f5", width:"400px", height:"400px"}} 
                 src={`http://localhost:3002/image/${this.state.picture_2}`} alt="Second slide"/>
               </div>
               <div className="carousel-item">
                 <img className="d-block w-80" style={{background:"#f5f5f5", width:"400px", height:"400px"}} 
                 src={`http://localhost:3002/image/${this.state.picture_3}`} alt="Third slide"/>
               </div>
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
           <h3> {nama_product} </h3>
           </div>
           <ul className="price list-inline no-margin">
                 <li className="list-inline-item current">Product price = ${price}</li>
                 <input hidden ref="price" type="text" defaultValue={price}/>
                 {/* <li className="list-inline-item original">$88.00</li> */}
             </ul>
           <p> {description}</p>
           <ul className="price list-inline no-margin">
                     <li className="list-inline-item current">Quantity = {quantity}</li>
                   </ul>
           <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
             <div className="quantity d-flex align-items-center">
             <p>Quantity you want to buy: </p> &nbsp;
               <input min="0" max={quantity} ref="quantity" type="number" style={{width:"65px", border:"1px solid black"}} defaultValue="1"/>
             </div>
           </div>
           <ul className="CTAs list-inline">
               <li className="list-inline-item">
               <button onClick={()=>{this.Tombolditel(this.refs,id);}} to="/cart" className="btn btn-template wide"> 
                 <i className="fas fa-shopping-cart"></i>Add to Cart</button></li>
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
             <p> {description} </p>
         </div>
 
   {/* <!-- Penjelasan Materialnya --> */}
         <div id="additional-information" role="tabpanel" className="tab-pane">
           <ul className="list-unstyled additional-information">
             <li className="d-flex justify-content-between"><strong>Condition:</strong><span>{condition}</span></li>
             <li className="d-flex justify-content-between"><strong>Category:</strong><span>{nama_category}</span></li>
           </ul>
         </div>
       </div>
     </div>
 
 {/* <!-- Share Icon --> */}
     <div className="container-fluid">
       <div className="share-product gray-bg d-flex align-items-center justify-content-center flex-column flex-md-row"><strong className="text-uppercase">Share this on</strong>
         <ul className="list-inline text-center">
           <li className="list-inline-item"><a target="_blank" title="twitter">
             <i className="fab fa-twitter"></i></a></li>
           <li className="list-inline-item"><a target="_blank" title="facebook">
             <i className="fab fa-facebook"></i></a></li>
           <li className="list-inline-item"><a target="_blank" title="instagram">
             <i className="fab fa-instagram"></i></a></li>
           <li className="list-inline-item"><a target="_blank" title="pinterest">
             <i className="fab fa-pinterest"></i></a></li>
           <li className="list-inline-item"><a target="_blank" title="vimeo">
             <i className="fab fa-vimeo"></i></a></li>
         </ul>
       </div>
     </div>
   </section>
 
 </div>
       })

    }
    else {
    // looping pertama yang tidak menemukan login
    data = this.state.allview.map((item, index) => {
    //  var id = item.id_product;
     var nama_product = item.nama_product;
     var price =  item.price;
     var quantity =  item.quantity;
     var condition =  item.nama_condition;
     var description =  item.description;
    //  var product_images =  item.product_images;
     var classribon =  item.class;
     var  nama_category =  item.nama_category
      return <div key={index}>
        {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
    <div className="container">
      <div className="row d-flex">
        <div className="col-lg-9 order-2 order-lg-1">
          <h1 key={index}>{nama_product}</h1>
        </div>
        <div className="col-lg-3 text-right order-1 order-lg-2">
          <ul className="breadcrumb justify-content-lg-end">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/category">Shop</Link></li>
            <li className="breadcrumb-item active" key={index}>{nama_product}</li>
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
          <div className={classribon}>{condition}</div>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            
            <div className="carousel-inner">
            <div className="carousel-item active">
                 <img className="d-block w-80" style={{background:"#f5f5f5", width:"400px", height:"400px"}} 
                 src={`http://localhost:3002/image/${this.state.picture_1}`} alt="First slide"/>
               </div>
               <div className="carousel-item">
                 <img className="d-block w-80" style={{background:"#f5f5f5", width:"400px", height:"400px"}} 
                 src={`http://localhost:3002/image/${this.state.picture_2}`} alt="Second slide"/>
               </div>
               <div className="carousel-item">
                 <img className="d-block w-80" style={{background:"#f5f5f5", width:"400px", height:"400px"}} 
                 src={`http://localhost:3002/image/${this.state.picture_3}`} alt="Third slide"/>
               </div>
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
          <h3> {nama_product} </h3>
          </div>
          <ul className="price list-inline no-margin">
                 <li className="list-inline-item current">Product price = ${price}</li>
                 <input hidden ref="price" type="text" defaultValue={price}/>
                 {/* <li className="list-inline-item original">$88.00</li> */}
             </ul>
           <p> {description}</p>
           <ul className="price list-inline no-margin">
                     <li className="list-inline-item current">Quantity = {quantity}</li>
                   </ul>
           <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
             <div className="quantity d-flex align-items-center">
             <p>Quantity you want to buy: </p> &nbsp;
               <input min="0" max={quantity} ref="quantity" type="number" style={{width:"65px", border:"1px solid black"}} defaultValue="1"/>
             </div>
           </div>
          <ul className="CTAs list-inline">
              <li className="list-inline-item"><Link to="/customerlogin" className="btn btn-template wide"> 
                <i className="fas fa-shopping-cart"></i>Add to Cart</Link></li>
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
                <p> {description} </p>
              </div>

  {/* <!-- Penjelasan Materialnya --> */}
        <div id="additional-information" role="tabpanel" className="tab-pane">
          <ul className="list-unstyled additional-information">
            <li className="d-flex justify-content-between"><strong>Condition:</strong><span>{condition}</span></li>
            <li className="d-flex justify-content-between"><strong>Category:</strong><span>{nama_category}</span></li>
          </ul>
        </div>
      </div>
    </div>

{/* <!-- Share Icon --> */}
    <div className="container-fluid">
      <div className="share-product gray-bg d-flex align-items-center justify-content-center flex-column flex-md-row"><strong className="text-uppercase">Share this on</strong>
        <ul className="list-inline text-center">
          <li className="list-inline-item"><a target="_blank" title="twitter">
            <i className="fab fa-twitter"></i></a></li>
          <li className="list-inline-item"><a target="_blank" title="facebook">
            <i className="fab fa-facebook"></i></a></li>
          <li className="list-inline-item"><a target="_blank" title="instagram">
            <i className="fab fa-instagram"></i></a></li>
          <li className="list-inline-item"><a target="_blank" title="pinterest">
            <i className="fab fa-pinterest"></i></a></li>
          <li className="list-inline-item"><a target="_blank" title="vimeo">
            <i className="fab fa-vimeo"></i></a></li>
        </ul>
      </div>
    </div>
  </section>

</div>
      })
  
  }
    


  var data2 = this.state.hasil.map((item, index) => {
    var id = item.id_product;
    var nama_product = item.nama_product;

      return <Link key={index} onClick={()=>{this.cari(id);}} to='/detail' ><i> {nama_product}</i></Link>
  })


    return (
    <div>
     {/* Awal dari navbar */}
        <header className="header">
          <div className="top-bar">
            <div className="container-fluid">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 hidden-lg-down text-col">
                  <ul className="list-inline">
                    <li className="list-inline-item"><i className="fas fa-phone iconcolor"></i>020-800-456-747</li>
                    <li className="list-inline-item">Free shipping on orders over $300</li>
                  </ul>
                </div>
                {/* <!-- Bagian usernya --> */}
                <div className="col-lg-6 d-flex justify-content-end">
                  <ul className="list-inline">
                    <li className="list-inline-item"><Link to="/customerorder"><i className="fa fa-box"></i>shipping</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          {/* <!-- Awal navbar --> */}
          <div className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand home" to="/">
                <img alt="logoImg" src={"img/burunglogo.png"} />
              </Link>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span></button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">

                  <LinkContainer className="nav-item" to="/">
                    <NavItem className="nav-link">HOME</NavItem>
                  </LinkContainer>

                  <LinkContainer className="nav-item" to="/category">
                    <NavItem className="nav-link">SHOP</NavItem>
                  </LinkContainer>

                  <LinkContainer className="nav-item" to="/about">
                    <NavItem className="nav-link">ABOUT</NavItem>
                  </LinkContainer>

                  <LinkContainer className="nav-item" to="/blog">
                    <NavItem className="nav-link">BLOG</NavItem>
                  </LinkContainer>

                  <LinkContainer className="nav-item" to="/contact">
                    <NavItem className="nav-link">CONTACT</NavItem>
                  </LinkContainer>
                </ul>

                &nbsp;<form className="navbar-form navbar-right">
                  <div className="input-group">

                      <input type="text" 
                      className="form-control col-sm-1 col-md-10" 
                      placeholder="input somthing to search"
                      id="searchbar" data-toggle="dropdown" aria-haspopup="true"
                        defaultValue={this.state.masuk}
                        onInput={this.onSeriesInputChange}
                      /> &nbsp;

                      <button className="btn btn-primary" id="searchbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-search"></i>
                      </button>

                  <div aria-labelledby="searchbar" className="dropdown-menu">
                     
                     {/* Awal dari looping */}
                      {data2}
                      {/* Akhir dari looping */}

                 </div>
                  </div>
                </form>
                
                
                <div aria-labelledby="searchbtn" className="dropdown-menu">
                <div className="dropdown-item cart-product">
                
                </div>
                </div>

         
                <div className="right-col d-flex align-items-lg-center flex-column flex-lg-row">
                  {/* <!-- User Not Logged - link to login page--> */}
                  <div className="user col-sm-1 col-md-3">

                    {/* awal logic  */}

                    {cookies.get("login") >= 1 ?
                      <Link id="userdetails" to="/customerorders" className="user-link">
                        <i className="fas fa-user"> </i>
                        <span className="d-md-none text-col"> &nbsp; {cookies.get('username')}</span>
                      </Link> :
                      <Link id="userdetails" to="/customerlogin" className="user-link">
                        <i className="fas fa-user"> </i>
                      </Link>}

                  </div>
                  {/* <!-- Cart Dropdown--> */}
                  <Link  className="col-md-8" id="cartdetails" to="/cart">
                      <i className="fa fa-shopping-cart"></i>
                    </Link>
                </div>
              </div>
            </div>
          </div>
          <div />
        </header>
   {/* akhir dari navbar */}
    {data}

  {/* Di comment dl tar di bikin lebih lengkap */}
  {/* <Similaritems/> */}

  <Footer/>

    </div>
    );
  }
}

export default Detail;