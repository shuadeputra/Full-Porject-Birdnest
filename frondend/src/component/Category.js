import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import Contactform from './Contactform';
import '../App.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
// import Cookies from 'universal-cookie';


  // expariment
  const $ = require('jquery')
  // end of experiment



class Contact extends Component {

  state = {
    redirect: false,
    allview: [],
    viewfilter:[],

    // awal cobaan
    currentPage: 1,
    todosPerPage: 9,
    upperPageBound: 3,
    lowerPageBound: 0,
    isPrevBtnActive: 'disabled',
    isNextBtnActive: '',
    pageBound: 3
    // end
    
  }

  
  componentDidMount() {
    var self = this;
    // console.log(this.props.location.state.Dried)

    if(this.props.location.state !== undefined){
      var Dried = this.props.location.state.Dried
      var Bottled = this.props.location.state.Bottled
      var Gifts = this.props.location.state.Gifts
    }

    if(Dried >= 1){
      axios.post('http://localhost:3002/filter/productall',{
        id_filter: this.props.location.state.Dried
    })
      .then((ambilData) => {
        if(ambilData.data.length >=0){
        this.setState({ allview: ambilData.data, })
        }
      })
    
      axios.get('http://localhost:3002/viewfilter')
      .then((ambilData2) => {
        self.setState({ viewfilter: ambilData2.data })
      })
    
    }
    else if(Bottled >= 1){
      axios.post('http://localhost:3002/filter/productall',{
        id_filter: this.props.location.state.Bottled
    })
      .then((ambilData) => {
        if(ambilData.data.length >=0){
        this.setState({ allview: ambilData.data, })
        }
      })
    
      axios.get('http://localhost:3002/viewfilter')
      .then((ambilData2) => {
        self.setState({ viewfilter: ambilData2.data })
      })
    } 
    else if(Gifts >= 1){
      axios.post('http://localhost:3002/filter/productall',{
        id_filter: this.props.location.state.Gifts
    })
      .then((ambilData) => {
        if(ambilData.data.length >=0){
        this.setState({ allview: ambilData.data, })
        }
      })
    
      axios.get('http://localhost:3002/viewfilter')
      .then((ambilData2) => {
        self.setState({ viewfilter: ambilData2.data })
      })
    } 
    else {

    axios.get('http://localhost:3002/productall')
      .then((ambilData) => {
        self.setState({ allview: ambilData.data, })
        // console.log(this.state.allview)
      })

      axios.get('http://localhost:3002/viewfilter')
      .then((ambilData2) => {
        // console.log(ambilData3)
        self.setState({ viewfilter: ambilData2.data })
        // console.log(this.state.viewfilter)
      })
    }
  }

  filter(obj){
    axios.post('http://localhost:3002/filter/productall',{
        id_filter: obj
    })
      .then((ambilData) => {
        if(ambilData.data.length >=0){
        this.setState({ allview: ambilData.data, })
        }
      })
  }


  all(){
    var self = this;
    axios.get('http://localhost:3002/productall')
      .then((ambilData) => {
        if(ambilData.data.length >= 0){
        self.setState({ allview: ambilData.data, })
        // console.log(this.state.allview)
      }
      })
  }

  // experiment 
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnPrevClick = this.btnPrevClick.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
  }
  componentDidUpdate() {
    $("ul li.active").removeClass('active');
    $('ul li#' + this.state.currentPage).addClass('active');
  }
  handleClick(event) {
    let listid = Number(event.target.id);
    this.setState({
      currentPage: listid
    });
    $("ul li.active").removeClass('active');
    $('ul li#' + listid).addClass('active');
    this.setPrevAndNextBtnClass(listid);
  }
  setPrevAndNextBtnClass(listid) {
    let totalPage = Math.ceil(this.state.allview.length / this.state.todosPerPage);
    this.setState({ isNextBtnActive: 'disabled' });
    this.setState({ isPrevBtnActive: 'disabled' });
    if (totalPage === listid && totalPage > 1) {
      this.setState({ isPrevBtnActive: '' });
    }
    else if (listid === 1 && totalPage > 1) {
      this.setState({ isNextBtnActive: '' });
    }
    else if (totalPage > 1) {
      this.setState({ isNextBtnActive: '' });
      this.setState({ isPrevBtnActive: '' });
    }
  }
  btnIncrementClick() {
    this.setState({ upperPageBound: this.state.upperPageBound + this.state.pageBound });
    this.setState({ lowerPageBound: this.state.lowerPageBound + this.state.pageBound });
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnDecrementClick() {
    this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageBound });
    this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageBound });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnPrevClick() {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageBound });
      this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageBound });
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnNextClick() {
    if ((this.state.currentPage + 1) > this.state.upperPageBound) {
      this.setState({ upperPageBound: this.state.upperPageBound + this.state.pageBound });
      this.setState({ lowerPageBound: this.state.lowerPageBound + this.state.pageBound });
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  // end of experiment


  render() {
 
    // experiment
    const { allview, currentPage, todosPerPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = allview.slice(indexOfFirstTodo, indexOfLastTodo);

  // end of experiment

    const showfilter = this.state.viewfilter.map((item, index) => {
      var id = item.id;
      var nama_category = item.nama_category;
      return <li key={index}><a onClick={()=>{this.filter(id);}} className="d-flex justify-content-between align-items-center">
            <span> {nama_category}</span><small>Klik Me</small></a>
          </li>
      }
    )



    // Awal looping dimulai
    const data = currentTodos.map((item, index) => {
      var id = item.id_product;
      var nama_product = item.nama_product;
      var price = item.price;
      // var quantity = item.quantity;
      var condition = item.nama_condition;
      // var description = item.description;
      var product_images = item.product_images;
      var classribon = item.class;
      var nama_category = item.nama_category;

      return <div key={index} className="item col-xl-4 col-md-6">
        <div className="product is-gray">
          <div className="image d-flex align-items-center justify-content-center">
            <div className={classribon}>{condition}</div>
            <img src={`http://localhost:3002/image/${product_images}`} alt="product" className="img-fluid"/>
            <div className="hover-overlay d-flex align-items-center justify-content-center">
              <div className="CTA d-flex align-items-center justify-content-center">
              
              <Link to={{pathname: '/cart', state: {id:id}}} className="add-to-cart"><i className="fa fa-shopping-cart"></i></Link>

                <Link to={{pathname: '/detail', state: {id:id}}} className="visit-product active"><i className="icon-search"></i>View</Link>
                </div>
            </div>
          </div>
          <div className="title"><small className="text-muted">{nama_category}</small><a href="detail.html">
              <h3 className="h6 text-uppercase no-margin-bottom">{nama_product}</h3></a><span className="price text-muted">${price}</span></div>
        </div>
      </div>
    })


    ////////////////////////experiment///////////////////

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allview.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      if (number === 1 && currentPage === 1) {
        return (
          <li key={number} className='page-item' id={number}><span aria-label="Previous" className="page-link active" aria-hidden="true" id={number} onClick={this.handleClick}>{number}</span></li>
        )
      }
      else if ((number < upperPageBound + 1) && number > lowerPageBound) {
        return (
          <li key={number} id={number} className='page-item'><span aria-label="Previous" className="page-link active" aria-hidden="true" id={number} onClick={this.handleClick}>{number}</span></li>
        )
      }else{
        return <div></div>
      }
    });

    // disini untuk menunjukan kapan kapan tombol prev dan next bisa di aktifkan 
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = <li className="page-item"><span aria-label="Previous" className="page-link" aria-hidden="true" onClick={this.btnIncrementClick}> &hellip;</span></li>
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = <li className="page-item"><span aria-label="Previous" className="page-link" aria-hidden="true" onClick={this.btnDecrementClick}> &hellip;</span></li>
    }
    let renderPrevBtn = null;
    if (isPrevBtnActive === 'disabled') {
      renderPrevBtn = <li className={isPrevBtnActive}><span aria-label="Previous" className="page-link" aria-hidden="true"> Prev </span></li>
    }
    else {
      renderPrevBtn = <li className={isPrevBtnActive}><span aria-label="Previous" className="page-link" aria-hidden="true" id="btnPrev" onClick={this.btnPrevClick}> Prev </span></li>
    }
    let renderNextBtn = null;
    if (isNextBtnActive === 'disabled') {
      renderNextBtn = <li className={isNextBtnActive}><span aria-label="Previous" className="page-link" aria-hidden="true"> Next </span></li>
    }
    else {
      renderNextBtn = <li className={isNextBtnActive}><span aria-label="Previous" className="page-link" aria-hidden="true" id="btnNext" onClick={this.btnNextClick}> Next </span></li>
    }
    /////////////////////////// end of experiment //////////////////

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


          {/* <!-- Sidebar--> */}
          <div className="sidebar col-xl-3 col-lg-3 sidebar">
            <div className="block">
              <h6 className="text-uppercase">Product Categories</h6><hr/>
              <ul className="list-unstyled">
                <li><a onClick={()=>{this.all();}} className="d-flex justify-content-between align-items-center">
                <span>All</span><small>Klik Me</small></a>
                </li>
                {/* Awel dari looping filter */}
                {showfilter}
                {/* Akhir dari looping filter */}
              </ul>
            </div>
          </div>
  {/* <!-- /Sidebar end--> */}


   {/* <!-- Grid --> */}
          <div className="products-grid col-xl-9 col-lg-8 sidebar-left">
            <header className="d-flex justify-content-between align-items-start">
            {/* <span className="visible-items">Showing <strong>1-15 </strong>of <strong>158 </strong>results</span> */}
            </header>

      {/* <!-- item--> */}
            <div className="row">

          {/* Data yang di looping */}
              {data}

            </div>
            <nav aria-label="page navigation example" className="d-flex justify-content-center">
              <ul className="pagination pagination-custom">
              {renderPrevBtn}
              {pageDecrementBtn}
              {renderPageNumbers}
              {pageIncrementBtn}
              {renderNextBtn}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </main>

  <Footer/>

    </div>
    );
  }
}

export default Contact;