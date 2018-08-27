import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class Editproduct_pcr extends Component {

  state = {
    redirect: false,
    dataKu: [],
  }


  componentDidMount() {
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

  delete(id,nama){
    axios.post('http://localhost:3001/product/img/delete',
   {
    id: id,
    product_images: nama
   })

   var id_product = this.props.location.state.id
   // console.log(this.props.id_product)
   axios.post('http://localhost:3001/product/img', {
     id: id_product
   })
     .then((respone) => {
       // console.log(respone.data)
       this.setState({ dataKu: respone.data })
     })
  }

  render() {

    // Mengecek apakah passwod sudah dan username uda benar?
    if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
      cookies.set('pesan', "Username /Password anda salah", { path: '/' });
      this.setState({ redirect: true })
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/productall' />
    }

    // Looping dari database di awal dari sini
    const data = this.state.dataKu.map((item, index) => {
      var id = item.id;
      var product_id = item.product_id;
      var product_images = item.product_images;
      return <tr key={index}>
          <th>
            <img alt="product_img" src={`http://localhost:3001/image/${product_images}`} style={{ width: '150px', height: '150px' }} />
          </th>
          <th>{product_id}</th>
          <th>{product_images}</th>
          <th><button onClick={()=>{this.delete(id,product_images);}} className="btn btn-danger fa fa-trash"></button></th>
        </tr>
    })
   


    return (
      <div>


        {/* Bagian navbar admin */}
        <Navbaradmin product="active" />


        <main className="app-content">
          <div className="app-title">
            <div>
              <h1><i className="fa fa-product-hunt"></i> Edit Product picture</h1><br />
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
              <h3 className="tile-title">Edit Product Picture</h3>
              <div className="tile-body">

                <table id="test" className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>img</th>
                      <th>product id</th>
                      <th>img name</th>
                      <th>Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Looping di awali */}
                    {data}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </main>


      </div>
    );
  }
}

export default Editproduct_pcr;