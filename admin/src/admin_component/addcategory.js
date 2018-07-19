import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


// Mengirim funtion yang dapat dari redux
function mapStateToProps(state) {
  return {
      login: state.login,
      username: state.username,
      userid: state.userid,
    };
}

class addcategory extends Component {

  state = {
    redirect: false,
    dataKu : []
  }


  Addcategory =(obj) =>{
    axios.post('http://localhost:3001/product/addcategory',
      {
        nama_category: obj.nama_category.value,
      })
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

    return (
      <div>
        {/* Bagian navbar admin */}
        <Navbaradmin product="active" />


        <main class="app-content">
          <div class="app-title">
            <div>
              <h1><i class="fa fa-shopping-basket"></i> Add Product Category</h1><br />
              <Link class="btn btn-secondary btn-sm fa fa-arrow-left" to="/productall"> Back </Link>
            </div>
            <ul class="app-breadcrumb breadcrumb side">
              <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
              <li class="breadcrumb-item">Home</li>
              <li class="breadcrumb-item"><Link to="/productall">Product</Link></li>
              <li class="breadcrumb-item"><Link to="/category">Product Category</Link></li>
              <li class="breadcrumb-item active">Add Category </li>
            </ul>
          </div>

          <div class="clearix"></div>
          <div class="col-md-12">
            <div class="tile">
              <h3 class="tile-title">Add Product Catagory</h3>
              <div class="tile-body">
              <form class="row">
            <div class="form-group col-md-10">
              <label class="control-label">Category Name</label>
              <input ref="nama_category" class="form-control" type="text" placeholder="Category Name" required />
            </div>

            <div class="form-group col-md-4 align-self-end">
              <Link onClick={() => this.Addcategory(this.refs)} type="submit" to="/productall" class="btn btn-primary" type="button">
              <i class="fa fa-fw fa-lg fa-save"></i>Save</Link>

            </div>
          </form>
  
              </div>
            </div>
          </div>
        </main>


      </div>
    );
  }
}

export default connect(mapStateToProps)(addcategory);