import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function mapStateToProps(state) {
  return {
      login: state.login,
      username: state.username,
      userid: state.userid,
      invoicenumber: state.invoicenumber,
    };
}

class Orders extends Component {

  state = {
    allview: [],
    dataKu1: [],
    currentPage: 0,
    redirect: false
  }

  componentDidMount() {
    var self = this;
    axios.get('http://localhost:3001/invoice')
      .then((ambilData) => {
        self.setState({ allview: ambilData.data, })
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
    if (event.target.id - 1 > 0) {
      var a = Number(event.target.id - 1) * 5;
    } else {
      var a = Number(event.target.id - 1);
    }
    axios.get('http://localhost:3001/invoice?page= ' + a
    )
    .then((respone) => {
      self.setState({ dataKu1: respone.data, })
      })
  };  


// funsi tombol status
  Tombol(fungsi,index,classn){
 
    axios.post('http://localhost:3001/invoice/update',
    {
        id: index,
        status: fungsi,
        color: classn
    })

  } 

  // funsi for ditel invoice to redux
  Tombolditel(fungsi){

    this.props.dispatch({type:'ditelinvoice', 
    invoice: fungsi,
    value:this.props.login,
    value2:this.props.username,
    userid_number:this.props.userid
    }, 
  );
  } 

  render() {

   // Mengecek apakah passwod sudah dan username uda benar?
  if(this.props.login != 1){
    {this.state.redirect= true}  
    this.props.dispatch({type:'login', value:"Username /Password anda salah"});    
  }

  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }

    // Looping database dimulai
    const data = this.state.dataKu1.map((item, index) => {
      var id = item.id;
      var invoice_number = item.invoice_number;
      var user_customerid = item.user_customerid;
      var delivery = item.delivery;
      var status = item.status;
      var payment = item.payment;
      var total_price = item.total_price;
      var color = item.color;
      return (
        <tr>
          <th key={index}>{invoice_number}</th>
          <th key={index}>{user_customerid}</th>
          <td>22/6/2017</td>
          <td key={index}>$ {total_price}</td>
          <td><span className={color}>{status}</span></td>
          <td>

          <Link onClick={()=>{this.Tombol('Being prepared',id,"badge badge-info");}} className="btn btn-info btn-sm fa fa-archive" to="/homeadmin"></Link> &nbsp;
          <Link onClick={()=>{this.Tombol('Action needed',id,"badge badge-warning");}} className="btn btn-warning btn-sm fa fa-road" to="/homeadmin"></Link> &nbsp;
          <Link onClick={()=>{this.Tombol('Received',id,"badge badge-success");}} className="btn btn-success btn-sm fa fa-hand-grab-o" to="/homeadmin"></Link> &nbsp;
          <Link onClick={()=>{this.Tombol('Cancelled',id,"badge badge-danger");}} className="btn btn-danger btn-sm fa fa-ban" to="/homeadmin"></Link> &nbsp;

          <Link onClick={()=>{this.Tombolditel(invoice_number);}} className="btn btn-primary btn-sm" to="/order_ditel">View</Link>
          </td>
        </tr>
      )
    })


    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.state.allview.length / 5); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button key={number} id={number} onClick={this.handleClick}>
          {number}
        </button>
      );
    });
///////////////////////////////////////////////////////////////////////

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
              <span className="badge badge-info">Being prepared</span>
              <span className="badge badge-warning">Action needed</span>
              <span className="badge badge-success">Received</span>
              <span className="badge badge-danger">Cancelled</span>
              <div className="tile">
                <div className="tile-body">
                  <table className="table table-hover table-responsive-md" id="sampleTable">
                    <thead>
                      <tr>
                        <th>Order</th>
                        <th>Customer id</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data}
                    </tbody>
                  </table>
                  <center>
                  {renderPageNumbers}
                  </center>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    );
  }
}

export default connect(mapStateToProps)(Orders);