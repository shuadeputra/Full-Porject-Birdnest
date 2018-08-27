import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import {Link} from 'react-router-dom'
import axios from 'axios';


// expariment
const $ = require('jquery')
  // end of experiment

class Blog extends Component {

  state={
    dataku: [],

    currentPage: 1,
    todosPerPage: 6,
    upperPageBound: 3,
    lowerPageBound: 0,
    isPrevBtnActive: 'disabled',
    isNextBtnActive: '',
    pageBound: 3
  }

  componentDidMount(){
    axios.get("http://localhost:3002/blog")
    .then((response)=>{
      if(response !== undefined){
        this.setState({dataku:response.data})
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
  let totalPage = Math.ceil(this.state.dataku.length / this.state.todosPerPage); // Untuk mengetahui skarang di page ke berapa
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
  // disini untuk mencek apakah tombol dalah kotak (btn increment) di page yang ke berapa
  this.setState({ currentPage: listid });
  this.setPrevAndNextBtnClass(listid);
}
btnDecrementClick() {
  this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageBound });
  this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageBound });
  let listid = this.state.upperPageBound - this.state.pageBound;
   // disini untuk mengecek apakah tombol dalah kotak (btn decrement) di page yang ke berapa
  this.setState({ currentPage: listid });
  this.setPrevAndNextBtnClass(listid);
}
btnPrevClick() {

  if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      // Jika domodulus dengan pagebound ada 0 atau di modulus dengan page yang kita batasi adalah 0 maka dia diakan menuju ke step ini
    this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageBound });
    this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageBound });
  }
  let listid = this.state.currentPage - 1;
  // tombol disini untuk mengecek ketikah tombol prev di cklik maka akan otomatis menguragi satu value
  this.setState({ currentPage: listid });
  this.setPrevAndNextBtnClass(listid);
}
btnNextClick() {
  if ((this.state.currentPage + 1) > this.state.upperPageBound) {
    // Jika domodulus dengan pagebound ada 0 atau di modulus dengan page yang kita batasi adalah 0 maka dia diakan menuju ke step ini
    this.setState({ upperPageBound: this.state.upperPageBound + this.state.pageBound });
    this.setState({ lowerPageBound: this.state.lowerPageBound + this.state.pageBound });
  }
  let listid = this.state.currentPage + 1;
   // tombol disini untuk mengecek ketikah tombol Next di cklik maka akan otomatis menambah satu value
  this.setState({ currentPage: listid });
  this.setPrevAndNextBtnClass(listid);
}

  render() {

        // pagging nation
        const { dataku, currentPage, todosPerPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;

        // Logic for displaying current todos (untuk membuat pembagian page)
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = dataku.slice(indexOfFirstTodo, indexOfLastTodo);
      // end of paggination
   
    const data = currentTodos.map((item,index)=>{
      var id = item.id
      var title = item.title
      var image = item.image
      var meta_dsc = item.meta_dsc
      return <div className="col-lg-6" key={index}>
      <div className="post post-gray d-flex align-items-center flex-md-row flex-column">
        <div className="thumbnail d-flex-align-items-center justify-content-center">
        <img style={{background:"#f5f5f5", width:"400px", height:"400px"}} 
                 src={`http://localhost:3002/image/blog/${image}`} alt="blog_img"/></div>
        <div className="info"> 
          <h4 className="h5"> <Link to={{pathname: '/post', state: {id:id}}} >{title}</Link></h4>
          {/* <span className="date"><i className="fa fa-clock-o"></i>May 10th 2016</span> */}
          <p>{meta_dsc}</p><Link to={{pathname: '/post', state: {id:id}}} className="read-more">Read More<i className="fas fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>

    })

        ////////////////////////Pagination///////////////////

    // Logic for displaying page numbers
    const pageNumbers = [];
    ///// Looping di bawah untuk dapat berapa angka yang akan di munculkan
    for (let i = 1; i <= Math.ceil(dataku.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      //// if pertama akan terbuka ketika currentpage dan number berada di angka 1 
      if (number === 1 && currentPage === 1) {
        return (
          <li key={number} className='page-item' id={number}><span aria-label="Previous " className="page-link active" aria-hidden="true" id={number} onClick={this.handleClick}>{number}</span></li>
        )
      }
      //// Else if ke dua ini kana terjadi kita angka upperpagebound atau angka yang dimunculkan di paging lebih kecil dari number looping maka harus di tambah satu dan number lebih besar dari 0
      else if ((number < upperPageBound + 1) && number > lowerPageBound) {
        return (
          <li key={number} id={number} className='page-item'><span aria-label="Previous" className="page-link active" aria-hidden="true" id={number} onClick={this.handleClick}>{number}</span></li>
        )
      }else{
        return <div key={number}></div>
      }
    });

    //// logic dsini untuk memunculkan <li></li>
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
    //  disini jika pageNumbers jumlahnya lebih besar dari pagebound atau angka yang akan dimuncul ke bawah maka dia akan masuk ke kondisi ini
      pageIncrementBtn = <li className="page-item"><span aria-label="Previous" className="page-link" aria-hidden="true" onClick={this.btnIncrementClick}> &hellip;</span></li>
    }

    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      // disini aka masuk jika lowerpagebound lebih dari satu 
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

    /////////////////////////// end of Pagination //////////////////
   
    return (
    <div>
   
    <Navbar />

     {/* <!-- Hero Section--> */}
  <section className="hero hero-page gray-bg padding-small">
    <div className="container">
      <div className="row d-flex">
        <div className="col-lg-9 order-2 order-lg-1">
          <h1>Blog</h1>
        </div>
        <div className="col-lg-3 text-right order-1 order-lg-2">
          <ul className="breadcrumb justify-content-lg-end">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Blog</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="blog">
    <div className="container">
      <div className="row">

        {/* <!-- post--> */}
              {data}
        {/* <!-- /end post--> */}      
      </div>
      {/* <!-- Pagination --> */}
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
  </section>

  <Footer/>

    </div>
    );
  }
}

export default Blog;