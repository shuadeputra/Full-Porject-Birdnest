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
      id_product: state.id_product
    };
}

class Addproduct_pcr extends Component {

  state = {
    redirect: false,
    selectedFile: '',
    id: '',
  }

  onChange = (e) => {
    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ selectedFile: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { selectedFile } = this.state;
    let formData = new FormData();

    formData.append('file',selectedFile);
    formData.append('id', this.props.id_product);
    var self = this
    axios.post('http://localhost:3001/product/addproduct_pcr', 
    formData
  )
      .then((result) => {

      });
      self.setState({redirect:true}) 
  }

  render() {

  // Mengecek apakah passwod sudah dan username uda benar?
  if(this.props.login != 1){
    {this.state.redirect= true}  
    this.props.dispatch({type:'login', value:"Username /Password anda salah"});    
  }

  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/productall'/>
    }


    return (
      <div>
        

        {/* Bagian navbar admin */}
        <Navbaradmin product="active" />


        <main class="app-content">
          <div class="app-title">
            <div>
              <h1><i class="fa fa-product-hunt"></i> Add Product picture</h1><br />
              <Link class="btn btn-secondary btn-sm fa fa-arrow-left" to="/productall"> Back </Link>
            </div>
            <ul class="app-breadcrumb breadcrumb side">
              <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
              <li class="breadcrumb-item">Home</li>
              <li class="breadcrumb-item"><Link to="/productall">Product</Link></li>
              <li class="breadcrumb-item active">Add Product </li>
            </ul>
          </div>

          <div class="clearix"></div>
          <div class="col-md-12">
            <div class="tile">
              <h3 class="tile-title">Add Product Picture</h3>
              <div class="tile-body">
                <form onSubmit={this.onSubmit} method='post'class="row" enctype="multipart/form-data">
                  <div class="form-group col-md-12">
                    <label for="file">Picture Product</label>
                    <input ref="picture" 
                    name="selectedFile" 
                    type="file" 
                    id="file" 
                    accept=".jpg,.png,.jpeg,.bmp,.gif" 
                    class="form-control-file" 
                    onChange={this.onChange} />
                  </div>
                  

                  <div class="form-group col-md-4 align-self-end">

                    <button to="/productaall" class="btn btn-primary" type="submit"><i class="fa fa-fw fa-lg fa-save"></i>Save</button>
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

export default connect(mapStateToProps)(Addproduct_pcr);