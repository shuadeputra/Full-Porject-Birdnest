import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';



// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class editcondition extends Component {

  state = {
    redirect: false,
    nextpage:"",
    dataKu:[],
    show_condition:[],
    name:"",
  }


  componentDidMount() {
    var id = this.props.location.state.id
    var self = this
    axios.post('http://localhost:3001/product/conditionid',
      {
        id: id,
      }).then((respone) => {
        if (respone !== undefined) {
          self.setState({ dataKu: respone.data })
          self.setState({ name: respone.data[0].nama_condition })
        }
      })

    // untuk product condition
    axios.get('http://localhost:3001/product/condition', {
    })
      .then((respone) => {
        if(respone !== undefined){
        this.setState({ show_condition: respone.data })
        }
      })
  }

  editcondition = (obj) => {
    // console.log(obj.nama_category.value)
    // console.log(this.props.id)
    axios.post('http://localhost:3001/product/condition/edit',
      {
        nama_condition: obj.nama_condition.value,
        id: this.props.location.state.id,
        classs: obj.classs.value
      }).then((respone) => {
        if(respone.data === "berhasil"){
          this.setState({nextpage: 1})
          this.setState({ redirect: true })
        }
      })
  }


  render() {

    var nama_condition_sbl = this.state.name

    // Mengecek apakah passwod sudah dan username uda benar?
    if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
      cookies.set('pesan', "Username /Password anda salah", { path: '/' });
      this.setState({ redirect: true })
    }

    // mengirim pindah page ketikah berhasil
    if(this.state.redirect && this.state.nextpage === 1){
      return <Redirect to="/condition"/>
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    // looping dari data di atas
    const data = this.state.dataKu.map((item, index) => {
      var nama_condition = item.nama_condition;
      return <input key={index} ref="nama_condition" className="form-control" type="text" placeholder="condition Name" defaultValue={nama_condition} required  /> 
    })

      // Awal mulainya looping show condition
      const data2 = this.state.show_condition.map((item, index) => {
        var nama_condition = item.nama_condition;
        var classs = item.class;
        var selected;
        if (nama_condition === nama_condition_sbl){
          selected = true;
          return <option key={index} value={classs} selected={selected}>
          {classs === "ribbon ribbon-info text-uppercase" ? "Aqua" : classs === "ribbon ribbon-danger text-uppercase" ? "Red": classs === "ribbon ribbon-primary text-uppercase" ? "Blue" : "Green"}
        </option>         
        }
        else{
          selected = false;
          return <option key={index} value={classs}>
          {classs === "ribbon ribbon-info text-uppercase" ? "Aqua" : classs === "ribbon ribbon-danger text-uppercase" ? "Red": classs === "ribbon ribbon-primary text-uppercase" ? "Blue" : "Green"}
        </option>         
        }
           
        })



    return (
      <div>
        {/* Bagian navbar admin */}
        <Navbaradmin product="active" />

        <main className="app-content">
          <div className="app-title">
            <div>
              <h1><i className="fa fa-cube"></i> Edit Condition</h1><br />
              <Link className="btn btn-secondary btn-sm fa fa-arrow-left" to="/condition"> Back </Link>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item"><Link to="/productall">Product</Link></li>
              <li className="breadcrumb-item"><Link to="/condition">Condition</Link></li>
              <li className="breadcrumb-item active">Edit Condition </li>
            </ul>
          </div>

          <div className="clearix"></div>
          <div className="col-md-12">
            <div className="tile">
              <h3 className="tile-title">Edit Condition</h3>
              <div className="tile-body">
                  <div className="form-group col-md-10">
                    <label className="control-label">Condition Name</label>
                    
                    {/* Awal dari looping */}
                    {data}<br/>
                    <select ref="classs">
                        {data2}
                    </select>
                  </div>

                  <div className="form-group col-md-4 align-self-end">
                    <button onClick={() => this.editcondition(this.refs)} 
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

export default editcondition;