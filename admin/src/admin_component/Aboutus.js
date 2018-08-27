import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class Aboutus extends Component {

  state ={
    dataKu: [],
    redirect: false,
    next:""
  }

  componentDidMount() {
    var self = this;
    axios.get('http://localhost:3001/Aboutus')
      .then((ambilData) => {
         self.setState({dataKu: ambilData.data,})
      })
  }


  updateaboutus(obj){
    axios.post('http://localhost:3001/Aboutus/update',
    {
        id: obj.id.value,
        how_it_all_began: obj.how_it_all_began.value,
        who_we_are: obj.who_we_are.value,
        we_care: obj.we_care.value,
        fast_delivery: obj.fast_delivery.value, 
        your_security: obj.your_security.value
    }).then((ambilData) => {
      if(ambilData.data === "berhasil"){
        this.setState({next: 1})
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
  
    // pindah ke page yang ditujui
    if (this.state.redirect && this.state.next === 1) {
      return <Redirect to="/homeadmin" />
    }
  

  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }



    const data = this.state.dataKu.map((item, index) => {
      var id = item.id;
      var how_it_all_began = item.how_it_all_began;
      var who_we_are = item.who_we_are; 
      var we_care = item.we_care; 
      var fast_delivery = item.fast_delivery; 
      var your_security = item.your_security; 
      return <div key={index} className="col-md-12">
        <div className="tile">
          <h3 className="tile-title">About us</h3>
          <div className="tile-body">
              <div className="form-group col-md-12">
                <label className="control-label"> How it all began</label>
                <textarea id="electronic" defaultValue={how_it_all_began} ref="how_it_all_began" rows="3" className="form-control">
                </textarea>
              </div>
              <div className="form-group col-md-12">
                <label className="control-label fa fa-user"> Who we are</label>
                <textarea id="electronic" defaultValue={who_we_are} ref="who_we_are" rows="3" className="form-control">
                </textarea>
              </div>
              <div className="form-group col-md-12">
                <label className="control-label fa fa-heart"> We care </label>
                <textarea id="electronic" defaultValue={we_care} ref="we_care" rows="3" className="form-control"
                >
                </textarea>
              </div>
              <div className="form-group col-md-12">
                <label className="control-label fa fa-truck"> Fast delivery</label>
                <textarea id="electronic" defaultValue={fast_delivery} ref="fast_delivery" rows="3" className="form-control">
                </textarea>
              </div>
              <div className="form-group col-md-12">
                <label className="control-label fa fa-shield"> Your security and privacy matters </label>
                <textarea id="electronic" defaultValue={your_security} ref="your_security" rows="3" className="form-control">
                </textarea>
              </div>

              <input hidden ref="id" type="text" defaultValue={id} />

              <div className="form-group col-md-4 align-self-end">
                <button onClick={() => this.updateaboutus(this.refs)} type="submit" className="btn btn-primary"><i className="fa fa-fw fa-lg fa-save"></i>Save change</button>
              </div>
          </div>
        </div>
      </div>
    })

    return (
   <div>
    
    {/* Bagian navbaradmin */}
    <Navbaradmin aboutus="active"/>

       <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="fa fa-desktop"></i> About us</h1>
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">UI Element</li>
          <li className="breadcrumb-item">About us</li>
        </ul>
      </div>
     
      <div className="clearix"></div>
        
        {/* Untuk menampilkan konten aboutus */}
        {data}
      </main>

    </div>
    );
  }
}

export default Aboutus;