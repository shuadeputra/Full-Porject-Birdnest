import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class editcategory extends Component {

  state = {
    redirect: false,
    dataKu:[],
    nextpage:""
  }


  componentDidMount() {
    var id = this.props.location.state.id
    var self = this
    axios.post('http://localhost:3001/product/show_categorybyid',
      {
        id: id,
      }).then((respone) => {
        if(respone !== undefined){
          self.setState({dataKu:respone.data})
          }
      })

  }

  Addcategory = (obj) => {
    // console.log(obj.nama_category.value)
    // console.log(this.props.id)
    axios.post('http://localhost:3001/product/category/edit',
      {
        nama_category: obj.nama_category.value,
        id: this.props.location.state.id
      }).then((respone) => {
        if(respone.data === "berhasil"){
          this.setState({nextpage: 1})
          this.setState({ redirect: true })
        }
      })
  }


  render() {

    // Mengecek apakah passwod sudah dan username uda benar?
    if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
      cookies.set('pesan', "Username /Password anda salah", { path: '/' });
      this.setState({ redirect: true })
    }

    // mengirim pindah page ketikah berhasil
    if(this.state.redirect && this.state.nextpage === 1){
      return <Redirect to="/category"/>
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    // looping dari data di atas
    const data = this.state.dataKu.map((item, index) => {
      var nama_category = item.nama_category;
      return <input key={index} ref="nama_category" className="form-control" type="text" placeholder="Category Name" defaultValue={nama_category} required />
    })

    return (
      <div>
        {/* Bagian navbar admin */}
        <Navbaradmin product="active" />

        <main className="app-content">
          <div className="app-title">
            <div>
              <h1><i className="fa fa-shopping-basket"></i> Add Product Category</h1><br />
              <Link className="btn btn-secondary btn-sm fa fa-arrow-left" to="/category"> Back </Link>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item"><Link to="/productall">Product</Link></li>
              <li className="breadcrumb-item"><Link to="/category">Product Category</Link></li>
              <li className="breadcrumb-item active">Add Category </li>
            </ul>
          </div>

          <div className="clearix"></div>
          <div className="col-md-12">
            <div className="tile">
              <h3 className="tile-title">Edit Product Catagory</h3>
              <div className="tile-body">
                  <div className="form-group col-md-10">
                    <label className="control-label">Category Name</label>
                  {/* looping data */}
                    {data}
                  </div>

                  <div className="form-group col-md-4 align-self-end">
                    <button onClick={() => this.Addcategory(this.refs)} 
                     className="btn btn-primary">
                      <i className="fa fa-fw fa-lg fa-save"></i>Save</button>

                  </div>
              </div>
            </div>
          </div>
        </main>


      </div>
    );
  }
}

export default editcategory;