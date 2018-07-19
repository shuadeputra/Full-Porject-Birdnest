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

class Editproduct_pcr extends Component {

  state = {
    redirect: false,
    dataKu: [],
  }


  componentDidMount() {
    console.log(this.props.id_product)
    axios.post('http://localhost:3001/product/img', {
      id: this.props.id_product
    })
      .then((respone) => {
        console.log(respone.data)
        this.setState({ dataKu: respone.data })
      })
  }

  delete(id,nama){
    axios.post('http://localhost:3001/product/img/delete',
   {
    id: id,
    product_images: nama
   })
  }

  render() {

    // Mengecek apakah passwod sudah dan username uda benar?
    if (this.props.login != 1) {
      { this.state.redirect = true }
      this.props.dispatch({ type: 'login', value: "Username /Password anda salah" });
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
      return (
        <tr>
          <th><img key={index} src={'http://localhost:3001/'+ `image/${product_images}`} style={{ width: '150px', height: '150px' }} /></th>
          <th key={index}>{product_id}</th>
          <th key={index}>{product_images}</th>
          <th key={index}><Link onClick={()=>{this.delete(id,product_images);}} className="btn btn-danger fa fa-trash" to='/productall'></Link></th>
        </tr>
      )
    })
   


    return (
      <div>


        {/* Bagian navbar admin */}
        <Navbaradmin product="active" />


        <main class="app-content">
          <div class="app-title">
            <div>
              <h1><i class="fa fa-product-hunt"></i> Edit Product picture</h1><br />
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
              <h3 class="tile-title">Edit Product Picture</h3>
              <div class="tile-body">

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

export default connect(mapStateToProps)(Editproduct_pcr);