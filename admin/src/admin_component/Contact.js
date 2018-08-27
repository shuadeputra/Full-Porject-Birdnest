import React, { Component } from 'react';
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class Contact extends Component {

  state ={
    dataKu: [],
    redirect: false,
    next:""
  }

  componentDidMount() {
    var self = this;
    axios.get('http://localhost:3001/Contact')
      .then((ambilData) => {
         self.setState({dataKu: ambilData.data,})
      })
  }

  update(obj){
    axios.post('http://localhost:3001/Contact/update',
      {
        id: obj.id.value,
        elecronic: obj.elecronic.value,
        description: obj.description.value,
        callcenter: obj.callcenter.value,
        address: obj.address.value
        
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
  if(this.state.redirect && this.state.next === 1){
    return <Redirect to="/homeadmin"/>
  }

  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }




    const data = this.state.dataKu.map((item, index) => {
      var id = item.id;
      var content = item.content;
      var address = item.address; 
      var callcenter = item.callcenter; 
      var electronic_support = item.electronic_support; 
      return <div key={index} className="col-md-12">
        <div className="tile">
          <h3 className="tile-title">Contact</h3>
          <div className="tile-body">
              <div className="form-group col-md-12">
                <label className="control-label fa fa-map"> Address</label>
                <textarea rows="1" defaultValue={address} className="form-control" ref="address" type="text">
                </textarea>
              </div>
              <div className="form-group col-md-12">
                <label className="control-label fa fa-address-book"> Call center</label>
                <textarea rows="1" defaultValue={callcenter} className="form-control" ref="callcenter" type="text">
              </textarea>
              </div>
              <div className="form-group col-md-12">
                <label className="control-label fa fa-envelope"> Electronic support</label>
                <textarea id="electronic" defaultValue={electronic_support} rows="3" ref="elecronic" className="form-control">
              </textarea>
              </div>
  
            <div className="form-group col-md-12">
              <label>description</label>
              <textarea id="description" defaultValue={content} rows="5" ref="description" className="form-control"> 
                  </textarea>
              </div>

              <input hidden ref="id" type="text" defaultValue={id}/>

              <div className="form-group col-md-4 align-self-end">
                <button onClick={() => this.update(this.refs)} type="submit" className="btn btn-primary"><i className="fa fa-fw fa-lg fa-save"></i>Save change</button>
              </div>
          </div>
        </div>
      </div>
      })


    return (
   <div>
    


    {/* Bagian navbaradmin */}
    <Navbaradmin contact="active"/>

       <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="fa fa-phone"></i> Contact</h1>
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">Homet</li>
          <li className="breadcrumb-item active">Contact</li>
        </ul>
      </div>
     
      <div className="clearix"></div>
        {/* Tempat buat naruk looping dari data yang didapat dari atas */}
        {data}
    </main>
   
    

    </div>
    );
  }
}

export default Contact;