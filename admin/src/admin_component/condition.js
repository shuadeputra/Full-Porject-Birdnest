import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class condition extends Component {

  state = {
    redirect: false,
    dataKu: [],
  }


  componentDidMount() {
    axios.get('http://localhost:3001/product/condition', {
    })
      .then((respone) => {
        if(respone !== undefined){
        this.setState({ dataKu: respone.data })
        // console.log(this.state.dataKu)
        }
      })
  }


  delete(id) {
    var answer = window.confirm("Are you sure to deleted this data?")
    if (answer) {
      axios.post('http://localhost:3001/product/condition/delete',
        {
          id: id,
        }).then((respone) => {
          if(respone.data === "berhasil"){
            axios.get('http://localhost:3001/product/condition', {
            })
              .then((respone) => {
                if(respone !== undefined){
                this.setState({ dataKu: respone.data })
                }
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
      var nama_condition = item.nama_condition;
      var classs = item.class;
      return <tr key={index}>
          <th>{number}</th>
          <th>{nama_condition}</th>
          <th>{classs === "ribbon ribbon-info text-uppercase" ?<p> Aqua </p> : classs === "ribbon ribbon-danger text-uppercase" ? <p> Red </p> : classs === "ribbon ribbon-primary text-uppercase" ? <p> Blue </p> : <p> Green </p> }</th>
          <th>
        <Link  to={{pathname: '/editcondition', state: {id:id}}} className="btn btn-warning fa fa-pencil"></Link> &nbsp;
        <button onClick={() => { this.delete(id); }} className="btn btn-danger fa fa-trash" to='/productall'></button>
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
              <h1><i className="fa fa-coffee"></i> Condition</h1><br />
              <Link className="btn btn-secondary btn-sm fa fa-arrow-left" to="/productall"> Back </Link> &nbsp;&nbsp;
              <Link className="btn btn-success btn-sm fa fa-plus" to="/addcondition"> Add Condition </Link>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item"><Link to="/productall">Product</Link></li>
              <li className="breadcrumb-item active">Condition</li>
            </ul>
          </div>

          <div className="clearix"></div>
          <div className="col-md-12">
            <div className="tile">
              <h3 className="tile-title">Condition</h3>
              <div className="tile-body">

                <table id="test" className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama Condition</th>
                      <th>Color</th>
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

export default condition;