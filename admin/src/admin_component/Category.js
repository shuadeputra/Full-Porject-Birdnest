import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class category extends Component {

  state = {
    redirect: false,
    dataKu: [],
  }


  componentDidMount() {
    axios.get('http://localhost:3001/product/show_category', {
    })
      .then((respone) => {
        this.setState({ dataKu: respone.data })
        // console.log(this.state.dataKu)
      })
  }


  delete(id) {
    // console.log(id)
    var answer = window.confirm("Are you sure to deleted this data?")
    if (answer) {
      axios.post('http://localhost:3001/product/category/delete',
        {
          id: id,
        }).then((respone) => {
          if(respone.data === "berhasil"){
            axios.get('http://localhost:3001/product/show_category', {
            })
              .then((respone) => {
                this.setState({ dataKu: respone.data })
              })
          }
        })
    }
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
      var number = index + 1
      var nama_category = item.nama_category;
      return <tr key={index}>
          <th>{number}</th>
          <th>{nama_category}</th>
          <th>
        <Link to={{pathname: '/editcategory', state: {id:id}}} className="btn btn-warning fa fa-pencil"></Link> &nbsp;
        <button onClick={() => { this.delete(id); }} className="btn btn-danger fa fa-trash"></button>
          </th>
        </tr>
    })



    return (
      <div>


        {/* Bagian navbar admin */}
        <Navbaradmin product="active" />


        <main className="app-content">
          <div className="app-title">
            <div>
              <h1><i className="fa fa-shopping-basket"></i> Product Category</h1><br />
              <Link className="btn btn-secondary btn-sm fa fa-arrow-left" to="/productall"> Back </Link> &nbsp;&nbsp;
              <Link className="btn btn-success btn-sm fa fa-plus" to="/addcategory"> Product Category </Link>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item"><Link to="/productall">Product</Link></li>
              <li className="breadcrumb-item active">Product Category </li>
            </ul>
          </div>

          <div className="clearix"></div>
          <div className="col-md-12">
            <div className="tile">
              <h3 className="tile-title">Category</h3>
              <div className="tile-body">

                <table id="test" className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama category</th>
                      <th>Tools</th>
                    </tr>
                  </thead>
                  <tbody>

                    {/*awal mulainya looping  */}
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

export default category;