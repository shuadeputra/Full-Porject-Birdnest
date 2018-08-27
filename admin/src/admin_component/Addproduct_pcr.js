import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies


class Addproduct_pcr extends Component {

  state = {
    redirect: false,
    selectedFile: '',
    id: '',
    dataKu:[],
  }

  componentDidMount(){
    var id = this.props.location.state.id
    // console.log(this.props.id_product)
    axios.post('http://localhost:3001/product/img', {
      id: id
    })
      .then((respone) => {
        // console.log(respone.data)
        this.setState({ dataKu: respone.data })
      })
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
    formData.append('id', this.props.location.state.id);
    var self = this
    axios.post('http://localhost:3001/product/addproduct_pcr', 
    formData
  )
      .then((result) => {
        if(result !== undefined){
          self.setState({redirect:true}) 
        }
      });
  }

  render() {

  // Mengecek apakah passwod sudah dan username uda benar?
  if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
    cookies.set('pesan', "Username /Password anda salah", { path: '/' });
    this.setState({ redirect: true })
  }


  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/productall'/>
    }


    return (
      <div>
        

        {/* Bagian navbar admin */}
        <Navbaradmin product="active" />


        <main className="app-content">
          <div className="app-title">
            <div>
              <h1><i className="fa fa-product-hunt"></i> Add Product picture</h1><br />
              <Link className="btn btn-secondary btn-sm fa fa-arrow-left" to="/productall"> Back </Link>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item"><Link to="/productall">Product</Link></li>
              <li className="breadcrumb-item active">Add Product </li>
            </ul>
          </div>

          <div className="clearix"></div>
          <div className="col-md-12">
            <div className="tile">
              <h3 className="tile-title">Add Product Picture</h3>
              <div className="tile-body">
              {this.state.dataKu.length >= 3 ? <div><h1 style={{color:"red"}}>Your Are Ready Have 3 Picture for this product</h1>
              <p style={{color:"red"}}># if you want to input a new picture please make sure you delete the old picture first</p>
              </div> : <form onSubmit={this.onSubmit} method='post'className="row" encType="multipart/form-data">
                  <div className="form-group col-md-12">
                    <label>Picture Product</label>
                    <input ref="picture" 
                    name="selectedFile" 
                    type="file" 
                    id="file" 
                    accept=".jpg,.png,.jpeg,.bmp,.gif" 
                    className="form-control-file" 
                    onChange={this.onChange} />
                  </div>
                  

                  <div className="form-group col-md-4 align-self-end">

                    <button className="btn btn-primary" type="submit"><i className="fa fa-fw fa-lg fa-save"></i>Save</button>
                  </div>
                </form> }
                
              </div>
            </div>
          </div>
        </main>


      </div>
    );
  }
}

export default Addproduct_pcr;