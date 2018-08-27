import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class addcondition extends Component {

  state = {
    redirect: false,
    nextpage:"",
    annoucement:"",
  }

  Addmeasure = (obj) => {
    if(obj.nama_condition.value.length >=1){
    axios.post('http://localhost:3001/product/condition',
      {
        nama_condition: obj.nama_condition.value,
        classs: obj.classs.value
      }).then((respone) => {
        if(respone.data === "berhasil"){
          this.setState({nextpage: 1})
          this.setState({ redirect: true })
        }
      })
    } else{
      this.setState({annoucement:"Please make sure your fill out all field"})
    }
  }


  render() {

    // Mengecek apakah passwod sudah dan username uda benar?
    if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
      cookies.set('pesan', "Username /Password anda salah", { path: '/' });
      this.setState({ redirect: true })
    }

    // mengirim pindah page ketikah berhasil
    if (this.state.redirect && this.state.nextpage === 1) {
      return <Redirect to="/condition" />
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    return (
      <div>
        {/* Bagian navbar admin */}
        <Navbaradmin product="active" />


        <main className="app-content">
          <div className="app-title">
            <div>
              <h1><i className="fa fa-coffee"></i> Add Condition</h1><br />
              <Link className="btn btn-secondary btn-sm fa fa-arrow-left" to="/condition"> Back </Link>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item"><Link to="/productall">Product</Link></li>
              <li className="breadcrumb-item"><Link to="/conditon">Condition</Link></li>
              <li className="breadcrumb-item active">Add Condition </li>
            </ul>
          </div>

          <div className="clearix"></div>
          <div className="col-md-12">
            <div className="tile">
              <h3 className="tile-title">Add Product Catagory</h3>
              <div className="tile-body">
                  <div className="form-group col-md-10">
                    <label className="control-label">Condition Name</label>
                    <input ref="nama_condition" className="form-control" type="text" placeholder="Category Name" required /> <br/>
                    <select ref="classs">
                      <option value="ribbon ribbon-info text-uppercase">Aqua</option>
                      <option value="ribbon ribbon-danger text-uppercase">Red</option>
                      <option value="ribbon ribbon-primary text-uppercase">Blue</option>
                      <option value="ribbon ribbon-success text-uppercase">Green</option>
                    </select>
                  </div>

                  <div className="form-group col-md-4 align-self-end">
                  <p style={{color:"red"}}>{this.state.annoucement}</p>
                    <button onClick={() => this.Addmeasure(this.refs)} type="submit" className="btn btn-primary">
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

export default addcondition;