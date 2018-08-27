import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

  // expariment
  const $ = require('jquery')
  // end of experiment


class Orders extends Component {

  state = {
    allview: [],
    dataKu1: [],
    status: [],
    redirect: false,
    filterpaging: "",
    filterallpay: "",
    filterpaypaging: "",
    // awal cobaan
    currentPage: 1,
    todosPerPage: 5,
    upperPageBound: 3,
    lowerPageBound: 0,
    isPrevBtnActive: 'disabled',
    isNextBtnActive: '',
    pageBound: 3,
    statusfilter:"",
    filterconfirmation:"",
        // end

  }

  componentDidMount() {
    var self = this;
    axios.get('http://localhost:3001/invoice')
      .then((ambilData) => {
        self.setState({ allview: ambilData.data,
         })
      })
    axios.get('http://localhost:3001/invoice?awal=1')
      .then((ambilData1) => {
        self.setState({ dataKu1: ambilData1.data, })
      })
  }

  // pagging nation
  handleClick = (event) => {
    // console.log(event.target.id)
    var self = this;
    var a;
    if(this.state.filterpaging === "bisa"){

      if (event.target.id - 1 > 0) {
        a = Number(event.target.id - 1) * 5;
      } else {
        a = Number(event.target.id - 1);
      }
      axios.post('http://localhost:3001/invoice/filter?page= ' + a,{
        statusfilter:this.state.statusfilter
      }
      )
      .then((respone) => {
        self.setState({ dataKu1: respone.data, })
        })  
    } else if(this.state.filterallpay === "can"){
      if (event.target.id - 1 > 0) {
         a = Number(event.target.id - 1) * 5;
      } else {
         a = Number(event.target.id - 1);
      }
      axios.post('http://localhost:3001/invoice/filterpay?page= ' + a,{
        filterconfirmation:this.state.filterconfirmation
      })
      .then((respone) => {
        self.setState({ dataKu1: respone.data, })
        })  
    }

    else if(this.state.filterpaypaging === "bisa"){
      if (event.target.id - 1 > 0) {
        a = Number(event.target.id - 1) * 5;
      } else {
        a = Number(event.target.id - 1);
      }
      axios.post('http://localhost:3001/invoice/filterpay&statusfilter?page= ' + a,{
        filterconfirmation:this.state.filterconfirmation,
        statusfilter:this.state.statusfilter
      })
      .then((respone) => {
        self.setState({ dataKu1: respone.data, })
        })  
    }
    else{
    if (event.target.id - 1 > 0) {
      a = Number(event.target.id - 1) * 5;
    } else {
      a = Number(event.target.id - 1);
    }
    axios.get('http://localhost:3001/invoice?page= ' + a
    )
    .then((respone) => {
      self.setState({ dataKu1: respone.data, })
      })
    }
  };  


// funsi tombol status
  Tombol(fungsi,index,classn){
 
    axios.post('http://localhost:3001/invoice/update',
    {
        id: index,
        status: fungsi,
        color: classn
    }).then((respone) => {
      if(respone.data === "berhasil"){
      axios.get('http://localhost:3001/invoice?awal=1')
      .then((ambilData1) => {
        this.setState({ dataKu1: ambilData1.data,
         })
      })
    }
  })
  axios.get('http://localhost:3001/invoice')
  .then((ambilData) => {
    this.setState({ 
      allview: ambilData.data,
      filterpaging: "",
      filterallpay:"",
      filterpaypaging:""
     })
  })
  }

  // tombol untuk filter
  filter(obj){
    
    if(obj.length > 2){
    axios.post('http://localhost:3001/invoice/filter',{
      status : obj
    })
    .then((ambilData) => {
      if(ambilData.data !== undefined){
      this.setState({ allview: ambilData.data,})
      this.setState({ statusfilter: obj,}) 
      }
    })

    axios.post('http://localhost:3001/invoice/filter?awal=1',{
      status : obj
    })
    .then((ambilData1) => {
      if(ambilData1.data !== undefined){
       this.setState({ 
         dataKu1: ambilData1.data,
         filterpaging: "bisa",
         filterallpay:"",
         filterpaypaging:""
        })}
      })
  }else{
      axios.get('http://localhost:3001/invoice')
        .then((ambilData) => {
          if(ambilData.data !== undefined){
          this.setState({
            allview: ambilData.data,
          })
        }
      axios.get('http://localhost:3001/invoice?awal=1')
        .then((ambilData1) => {
          if(ambilData1.data !== undefined){
           this.setState({ 
             dataKu1: ambilData1.data,
             filterpaging: "",
             filterallpay:"",
             filterpaypaging:""
            })
            }
          })    
      })
    }
  }

  /////////// untuk filter pay all invoice /////////////
  filterpay(obj){
    axios.post('http://localhost:3001/invoice/filterpay',{
      confirmation : obj
    })
    .then((ambilData) => {
      if(ambilData.data !== undefined){
      this.setState({ allview: ambilData.data,})
      this.setState({ filterconfirmation: obj,}) 
      }
    })
    axios.post('http://localhost:3001/invoice/filterpay?awal=1',{
      confirmation : obj
    })
    .then((ambilData1) => {
      if(ambilData1.data !== undefined){
       this.setState({ 
         dataKu1: ambilData1.data,
         filterallpay: "can",
         filterpaging: "",
         filterpaypaging:""
        })}
      })
  }
//////////////////////// End of filter pay ////////////////////////////

filterpaystatus(obj){
  axios.post('http://localhost:3001/invoice/filterpay&statusfilter',{
      confirmation : obj,
      status: this.state.statusfilter
    })
    .then((ambilData) => {
      if(ambilData.data !== undefined){
      this.setState({ allview: ambilData.data,})
      this.setState({ filterconfirmation: obj,}) 
      }
    })
    axios.post('http://localhost:3001/invoice/filterpay&statusfilter?awal=1',{
      confirmation : obj,
      status: this.state.statusfilter
    })
    .then((ambilData1) => {
      if(ambilData1.data !== undefined){
       this.setState({ 
         dataKu1: ambilData1.data,
         filterallpay: "",
         filterpaging: "",
         filterpaypaging:"bisa",
        })}
      })
}


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


     // experiment
     const { allview, currentPage, todosPerPage, upperPageBound, lowerPageBound, } = this.state;
   // end of experiment

   



    // Looping database dimulai
    const data = this.state.dataKu1.map((item, index) => {
      var id = item.id;
      var invoice_number = item.invoice_number;
      var user_customerid = item.user_customerid;
      // var delivery = item.delivery;
      var status = item.status;
      // var payment = item.payment;
      var total_price = item.total_price;
      var color = item.color;
      var date = item.date;
      var confirmation =  item.confirmation;
      return <tr key={index}>
          <th>{invoice_number}</th>
          <th>{user_customerid}</th>
          <td>{date}</td>
          <td>$ {total_price}</td>
          <td><span className={color}>{status}</span></td>
          <td>{confirmation} &nbsp; {confirmation ==="Pay" ?<Link className="btn btn-primary btn-sm"  to={{pathname: '/pay_detail', state: {invoice_number:invoice_number}}}>View</Link>:<div></div>} </td>
          <td>

          <button onClick={()=>{this.Tombol('Being prepared',id,"badge badge-info");}} className="btn btn-info btn-sm fa fa-archive"></button> &nbsp;
          <button onClick={()=>{this.Tombol('Action needed',id,"badge badge-warning");}} className="btn btn-warning btn-sm fa fa-road"></button> &nbsp;
          <button onClick={()=>{this.Tombol('Received',id,"badge badge-success");}} className="btn btn-success btn-sm fa fa-hand-grab-o"></button> &nbsp;
          <button onClick={()=>{this.Tombol('Cancelled',id,"badge badge-danger");}} className="btn btn-danger btn-sm fa fa-ban"></button> &nbsp;

          <Link to={{pathname: '/Order_detail', state: {invoice_number:invoice_number}}} className="btn btn-primary btn-sm">View</Link>
          </td>
        </tr>
    })



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
        <Navbaradmin orders="active" />

        <main className="app-content">
          <div className="app-title responsive-table">
            <div>
              <h1><i className="fa fa-table"></i> Orders</h1>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
              <li className="breadcrumb-item">Orders</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-12">
              <span className="badge badge-info" onClick={()=>{this.filter('Being prepared');}}>Being prepared</span>
              <span className="badge badge-warning" onClick={()=>{this.filter('Action needed');}}>Action needed</span>
              <span className="badge badge-success" onClick={()=>{this.filter('Received');}}>Received</span>
              <span className="badge badge-danger" onClick={()=>{this.filter('Cancelled');}}>Cancelled</span>
              <span className="badge badge-primary" onClick={()=>{this.filter('');}}>All view</span>
              <div className="tile">
                <div className="tile-body">
                  
                  { this.state.filterpaging ? <button className="btn btn-warning" onClick={() => { this.filterpaystatus('Pay'); }}>Pay Status</button> :
                    <button className="btn btn-warning" onClick={() => { this.filterpay('Pay'); }}>Pay</button>
                  }

                  <table className="table table-hover table-responsive-md" id="example">
                    <thead>
                      <tr>
                        <th>Order</th>
                        <th>Customer id</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Confirmation</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data}
                    </tbody>
                  </table>
                  <div className="container">
                    <ul className={"pagination"}>
                      {pageDecrementBtn}
                      {renderPageNumbers}
                      {pageIncrementBtn}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    );
  }
}

export default Orders;