import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


// Mengirim funtion yang dapat dari redux
function mapStateToProps(state) {
  return {
      login: state.login,
      username: state.username
    };
}

class Aboutus extends Component {

  state ={
    dataKu: [],
    redirect: false
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
    })
  }

  render() {

  // Mengecek apakah passwod sudah dan username uda benar?
  if(this.props.login != 1){
    {this.state.redirect= true}  
    this.props.dispatch({type:'login', value:"Username /Password anda salah"});    
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
      return(
        <div className="col-md-12">
          <div className="tile">
            <h3 className="tile-title">About us</h3>
            <div className="tile-body">
              <form className="row">
                <div className="form-group col-md-12">
                  <label className="control-label"> How it all began</label>
                  <textarea id="electronic" ref="how_it_all_began" rows="3" className="form-control" key={index}>
                        {how_it_all_began}
                  </textarea>
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label fa fa-user"> Who we are</label>
                  <textarea id="electronic" ref="who_we_are" rows="3" className="form-control" key={index}>
                      {who_we_are}
                  </textarea>
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label fa fa-heart"> We care </label>
                  <textarea id="electronic" ref="we_care" rows="3" className="form-control" 
                  key={index}>
                          {we_care}
                  </textarea>
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label fa fa-truck"> Fast delivery</label>
                  <textarea id="electronic" ref="fast_delivery" rows="3" className="form-control" key={index}>
                        {fast_delivery}
                  </textarea>
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label fa fa-shield"> Your security and privacy matters </label>
                  <textarea id="electronic" ref="your_security" rows="3" className="form-control">
                        {your_security}
                  </textarea>
                </div>
                
                <input hidden key={index} ref="id" type="text" value={id}/>

                <div className="form-group col-md-4 align-self-end">
                <Link onClick={() => this.updateaboutus(this.refs)} type="submit" to="/homeadmin" className="btn btn-primary" type="button"><i className="fa fa-fw fa-lg fa-save"></i>Save change</Link>
                
                </div>
              </form>
            </div>
          </div>
        </div>
      )
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

export default connect(mapStateToProps)(Aboutus);