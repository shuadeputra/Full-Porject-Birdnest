import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbaradmin from './Navbaradmin';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';



// Mengirim funtion yang dapat dari redux
function mapStateToProps(state) {
  return {
    login: state.login,
    username: state.username,
    userid: state.userid,
    };
}



class Productall extends Component {
  state = {
    redirect: false,
    dataKu1: [],
    allview: [],
    currentPage: 1
  }


  componentDidMount() {
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

  ///////// pagging nation//////////////////////////
    handleClick = (event) => {
      // console.log(event.target.id)
      var self = this;
      var target;
      if (event.target.id - 1 > 0) {
        var target = Number(event.target.id - 1) * 5
        this.setState({ currentPage: target });
      } else {
        var target = Number(event.target.id - 1)
        this.setState({
          currentPage: target
        });
      }
      axios.get('http://localhost:3001/product?page= ' + target
      )
      .then((respone) => {
        self.setState({ dataKu1: respone.data, })
        })
    };  

  // Tombol untuk dileted product yang sudah di upload
  delete(id){

    var answer = window.confirm("Are you sure to deleted this data?")
    if(answer){
      var answer2 = window.confirm("Have you delete the image data?")
      if(answer2){
        axios.post('http://localhost:3001/product/delete',
       {
        id: id, })
        .then((respone) => {
          this.setState({redirect:true})})
      }
      else{
          alert("Back");
      }
    }else {
      alert('Back')
    }
      }

// Tombol untuk tambah picture dan buat show ditel picture
      Tombolpicture(fungsi){
        this.props.dispatch({type:'product_picture', 
        id: fungsi,
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
      return <Redirect to='/homeadmin'/>
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
          var description = item.description;
          var Unit_measure = item.name_measure;

          return (
            <tr>
            <td>{nama_product}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{category}</td>
            <td>{condition}</td>
            <td><Link onClick={()=>{this.Tombolpicture(id);}} className="btn btn-warning fa fa-pencil" to="/editproduct"></Link> &nbsp;
              <Link onClick={()=>{this.delete(id);}} className="btn btn-danger fa fa-trash" to='/homeadmin'></Link></td>
            <td><Link onClick={()=>{this.Tombolpicture(id);}} className="btn btn-primary fa fa-file-photo-o"       to="/addproduct_pcr"></Link> &nbsp;
              <Link onClick={()=>{this.Tombolpicture(id);}} className="btn btn-info fa fa-paint-brush" to='/Editproduct_pcr'></Link></td>
          </tr>
          )
        
        })

///////////////// Logic for displaying page numbers//////////////////////////////
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
    <Navbaradmin product="active"/>


    <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="fa fa-product-hunt"></i> Product</h1><br/>
          <Link className={"btn btn-primary btn-sm fa fa-plus"} to="/addproduct"> Add Product</Link> &nbsp;&nbsp;
          <Link className={"btn btn-primary btn-sm fa fa-eye"} to="/category"> Show Category</Link>
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item active"><a href="#">Product</a></li>
        </ul>
      </div>
      <div className="row">
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
              <center>
                  {renderPageNumbers}
              </center>
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


export default connect(mapStateToProps)(Productall);