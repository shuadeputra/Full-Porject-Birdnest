import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbaradmin from './Navbaradmin';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

// expariment
const $ = require('jquery')
  // end of experiment

class Productall extends Component {
  state = {
    redirect: false,
    dataKu1: [],
    allview: [],
    show_category: [],
    show_condition:[],
    filtercategory:"",
    filtervalue:"",
    filtercondition:'',
    filterconditionvalue:"",
    pagingsearch:false,
    // awal cobaan
    currentPage: 1,
    todosPerPage: 5,
    upperPageBound: 3,
    lowerPageBound: 0,
    isPrevBtnActive: 'disabled',
    isNextBtnActive: '',
    pageBound: 3,
    statusfilter: "",
    filterconfirmation: "",
            // end
  }


  componentDidMount() {
    var self = this;
    if(this.props.location.state !== undefined){

        var id = this.props.location.state.id
        
        axios.post('http://localhost:3001/search/product',{
          id:id
        })
        .then((ambilData) => {
          if(ambilData !== undefined){
          self.setState({ allview: ambilData.data, })
          self.setState({ pagingsearch: true })
          self.setState({ dataKu1: ambilData.data, })
          }
        })

    } else{

    axios.get('http://localhost:3001/product')
      .then((ambilData) => {
        if(ambilData !== undefined){
        self.setState({ allview: ambilData.data, })
        }
      })
    axios.get('http://localhost:3001/product?awal=1')
      .then((ambilData1) => {
        if(ambilData1 !== undefined){
        self.setState({ dataKu1: ambilData1.data, })
        }
      })
  }
    // untuk show all product category 
    axios.get('http://localhost:3001/product/show_category', {
    })
      .then((respone) => {
        if(respone !== undefined){
        this.setState({ show_category: respone.data })
        }
      })

      // untuk product condition
      axios.get('http://localhost:3001/product/condition', {
      })
        .then((respone) => {
          if(respone.data !== undefined){
          this.setState({ show_condition: respone.data })
          // console.log(this.state.show_condition)
        }
        })

  }

  ///////// pagging nation//////////////////////////
  handleClick = (event) => {
    // console.log(event.target.id)
    var self = this;
    var target;
    if (this.state.filtercondition === "bisa") {
      if (event.target.id - 1 > 0) {
        target = Number(event.target.id - 1) * 5
        this.setState({ currentPage: target });
      } else {
        target = Number(event.target.id - 1)
        this.setState({
          currentPage: target
        });
      }
      axios.post('http://localhost:3001/product/filter/condition?page= ' + target, {
        filterconditionvalue: this.state.filterconditionvalue
      }
      )
        .then((respone) => {
          if (respone !== undefined) {
            self.setState({ dataKu1: respone.data, })
          }
        })
      } else {
      if (event.target.id - 1 > 0) {
        target = Number(event.target.id - 1) * 5
        this.setState({ currentPage: target });
      } else {
        target = Number(event.target.id - 1)
        this.setState({
          currentPage: target
        });
      }
      axios.get('http://localhost:3001/product?page= ' + target
      )
        .then((respone) => {
          if (respone !== undefined) {
            self.setState({ dataKu1: respone.data, })
          }
        })
    }
  };  
//////////////////// End of pagination ///////////////////////////////


  // Tombol untuk dileted product yang sudah di upload
  delete(id){
    axios.post('http://localhost:3001/product/img', {
      id: id,
    }).then((respone) => {
      if (respone.data.length !== 1) {
        var answer = window.confirm("Are you sure to deleted this data?")
        if (answer) {
            axios.post('http://localhost:3001/product/delete',
              {
                id: id,
              }).then((respone) => {
                if (respone.data === "berhasil") {
                  var self = this;
                  axios.get('http://localhost:3001/product')
                    .then((ambilData) => {
                      self.setState({ allview: ambilData.data, })
                    })
                  axios.get('http://localhost:3001/product?awal=1')
                    .then((ambilData1) => {
                      self.setState({ dataKu1: ambilData1.data, })
                    })
                }
              })
          }
      } else {
        alert("Make sure your delete the image")
      }
    })
}


////////////// Kategory filter /////////////
kategoryfilter(obj){
  // console.log(obj.category.value)
  if(obj.category.value >= 1){
  axios.post('http://localhost:3001/product/filter',{
      category : obj.category.value,
  })
  .then((ambilData) => {
    if(ambilData.data !== undefined){
    this.setState({ allview: ambilData.data,}) 
    this.setState({ filtercategory: "bisa",}) 
    this.setState({ filtervalue: obj.category.value,}) 
    this.setState({ filtercondition: "",})
    }
  })

  axios.post('http://localhost:3001/product/filter?awal=1',{
    category : obj.category.value,
  })
  .then((ambilData1) => {
    if(ambilData1 !== undefined){
    this.setState({ dataKu1: ambilData1.data, })
    }
  })  

  }else{
    axios.get('http://localhost:3001/product')
      .then((ambilData) => {
        if(ambilData !== undefined){
        this.setState({ allview: ambilData.data, })
        }
      })
    axios.get('http://localhost:3001/product?awal=1')
      .then((ambilData1) => {
        if(ambilData1 !== undefined){
        this.setState({ dataKu1: ambilData1.data, })
        this.setState({ filtercategory: "",})
        this.setState({ filtercondition: "",})
        }
      })
  }
}
/////////////////////// End of filtercategory //////////////////////


///////////////////////////// Condition ///////////////////////////
conditionfilter(obj){
  // console.log(obj.condition.value)
  if(obj.condition.value >= 1){
  axios.post('http://localhost:3001/product/filter/condition', {
    condition: obj.condition.value,
  })
    .then((ambilData) => {
      if (ambilData.data !== undefined) {
        this.setState({ allview: ambilData.data, })
        this.setState({ filtercondition: "bisa", })
        this.setState({ filtercategory: "",})
        this.setState({ filterconditionvalue: obj.condition.value, })
      }
    })
    axios.post('http://localhost:3001/product/filter/condition?awal=1', {
      condition: obj.condition.value,
  })
    .then((ambilData1) => {
      if (ambilData1 !== undefined) {
        this.setState({ dataKu1: ambilData1.data, })
      }
    })  
  }else{
    axios.get('http://localhost:3001/product')
    .then((ambilData) => {
      if(ambilData !== undefined){
      this.setState({ allview: ambilData.data, })
      }
    })
  axios.get('http://localhost:3001/product?awal=1')
    .then((ambilData1) => {
      if(ambilData1 !== undefined){
      this.setState({ dataKu1: ambilData1.data, })
      this.setState({ filtercategory: "",})
      this.setState({ filtercondition: "",})
      }
    }) 
  }
}

// fungsi search
onSeriesInputChange = e =>{
  var search = e.target.value
  axios.post('http://localhost:3001/search/productallpage/' + search)
  .then((ambilData) => {  
    if(ambilData.data !== undefined){
      this.setState({ allview: ambilData.data, })
      this.setState({ pagingsearch: true })
      this.setState({ dataKu1: ambilData.data, })
    }
  })
}


/////////////////////////////// End of Condition //////////////////

       // experiment 
   constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
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
  // end of experiment



  render() {

  // Mengecek apakah passwod sudah dan username uda benar?
  if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
    cookies.set('pesan', "Username /Password anda salah", { path: '/' });
    this.setState({ redirect: true })
  }
  
  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }



    // Looping dari table product
        // Looping database dimulai
        const data = this.state.dataKu1.map((item, index) => {
          var id = item.id_product;
          var nama_product = item.nama_product;
          var price = item.price;
          var quantity = item.quantity;
          var category = item.nama_category;
          var condition = item.nama_condition;
          // var description = item.description;
          // var Unit_measure = item.name_measure;

          return <tr key={index}>
            <td>{nama_product}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{category}</td>
            <td>{condition}</td>
            <td><Link to={{pathname: '/editproduct', state: {id:id}}} className="btn btn-warning fa fa-pencil" ></Link> &nbsp;
              <button onClick={()=>{this.delete(id);}} className="btn btn-danger fa fa-trash"></button></td>
            <td><Link to={{pathname: '/addproduct_pcr', state: {id:id}}} className="btn btn-primary fa fa-file-photo-o"></Link> &nbsp;
              <Link to={{pathname: '/Editproduct_pcr', state: {id:id}}} className="btn btn-info fa fa-paint-brush" ></Link></td>
          </tr>
          
        })

  
    // Looping dari get product show category
    const data2 = this.state.show_category.map((item, index) => {
      var id = item.id
      var category_name = item.nama_category;
      return <option key={index} value={id}>{category_name}</option>
    })

    const data3 = this.state.show_condition.map((item, index) => {
      var id = item.id
      var nama_condition = item.nama_condition;
      return <option key={index} value={id}>{nama_condition}</option>
    })



     // experiment
     const { allview, currentPage, todosPerPage, upperPageBound, lowerPageBound, } = this.state;
   // end of experiment


 ////////////////////////experiment///////////////////

    // Logic for displaying page numbers
    var pageNumbers = []
    for (let i = 1; i <= Math.ceil(allview.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number, index) => {
     
      if (number === 1 && currentPage === 1) {
        return <li key={index} className='active' id={number}><span aria-label="Previous" className="page-link" id={number} onClick={this.handleClick}>{number}</span></li>
      }
      else if ((number < upperPageBound + 1) && number > lowerPageBound) {
        return <li key={index} id={number}><span aria-label="Previous" className="page-link" id={number} onClick={this.handleClick}>{number}</span></li>
      } 
      else{
        return <div key={index}></div>
      }
    });

    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = <li className="page-item"><span aria-label="Previous" className="page-link" aria-hidden="true" onClick={this.btnIncrementClick}> &hellip;</span></li>
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = <li className="page-item"><span aria-label="Previous" className="page-link terang" aria-hidden="true" onClick={this.btnDecrementClick}> &hellip;</span></li>
    }

    /////////////////////////// end of experiment //////////////////




    return (
   <div>
    
    {/* Bagian navbaradmin */}
    <Navbaradmin product="active" productall="active"/>


    <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="fa fa-product-hunt"></i> Product</h1><br/>
          <Link className={"btn btn-primary btn-sm fa fa-plus"} to="/addproduct"> Add Product</Link> &nbsp;&nbsp;
          <Link className={"btn btn-primary btn-sm fa fa-eye"} to="/category"> Show Category</Link> &nbsp;&nbsp;
          <Link className={"btn btn-primary btn-sm fa fa-cube"} to="/measure"> Unit of Measure </Link> &nbsp;&nbsp;
          <Link className={"btn btn-primary btn-sm fa fa-coffee"} to="/condition"> Condition </Link> &nbsp;&nbsp;
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item active">Product</li>
        </ul>
      </div>
      <div className="row">
          <div className="form-group col-md-2 col-6">

                    <label>Categori </label>
                    <select ref="category" onChange={()=>{this.kategoryfilter(this.refs);}} id="category" className="form-control">
                      {/* Loopingnya di categori */}
                      <option value="all">All</option>
                      {data2}
                      {/* End looping categori */}
                    </select>
                  </div>
                  <div className="form-group col-md-2 col-6">
                    <label>Condition </label>
                    <select ref="condition" onChange={()=>{this.conditionfilter(this.refs);}} id="condition" className="form-control">
                    <option value="all">All</option>
                    {/* awal dari looping */}
                    {data3}
                    {/* akhir dari looping */}
                    </select>
                  </div>

            <ul className="app-nav">
              <li className="app-search">
                <input type="text"
                  className="app-search__input"
                  placeholder="input something to search"
                  id="searchbar" data-toggle="dropdown" aria-haspopup="true"
                  value={this.state.masuk}
                  onInput={this.onSeriesInputChange}
                /> &nbsp;

          <button className="app-search__button"><i className="fa fa-search"></i></button>
              </li>
            </ul>


        <div className="col-md-12">
          <div className="tile table-responsive">
                <div className="tile-body">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>category</th>
                    <th>condition</th>
                    <th>Tools</th>
                    <th>Tools picture</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Untuk memunculkan looping product */}
                {data}
                </tbody>
              </table>
              {/* Membuat pagging */}
                  {this.state.pagingsearch ? "" :
                    <div className="container">
                      <ul className={"pagination"}>
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}
                      </ul>
                    </div>
                  }
              
              {/* Akhir dari pagging */}
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
    );
  }
}


export default Productall;