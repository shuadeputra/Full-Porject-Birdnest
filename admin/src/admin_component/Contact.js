import React, { Component } from 'react';
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


// Mengirim funtion yang dapat dari redux
function mapStateToProps(state) {
  return {
      login: state.login,
      username: state.username
    };
}



class Contact extends Component {

  state ={
    dataKu: [],
    redirect: false
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
      var content = item.content;
      var address = item.address; 
      var callcenter = item.callcenter; 
      var electronic_support = item.electronic_support; 
      return( 
        <div className="col-md-12">
        <div className="tile">
          <h3 className="tile-title">Contact</h3>
          <div className="tile-body">
            <form className="row">
              <div className="form-group col-md-12">
                <label className="control-label fa fa-map"> Address</label>
                <textarea rows="1"  className="form-control" ref="address" type="text" key={index}>
                  {address}
                </textarea>
              </div>
              <div className="form-group col-md-12">
                <label className="control-label fa fa-address-book"> Call center</label>
                <textarea rows="1"  className="form-control" ref="callcenter" type="text" key={index}>
                {callcenter}
                </textarea>
              </div>
              <div className="form-group col-md-12">
                <label className="control-label fa fa-envelope"> Electronic support</label>
                <textarea id="electronic" rows="3" ref="elecronic" className="form-control" key={index}>
                  {electronic_support}
              </textarea>
              </div>
  
            <div className="form-group col-md-12">
              <label for="description">description</label>
              <textarea id="description" rows="5" ref="description" className="form-control" key={index}> 
                  {content}
                  </textarea>
              </div>

              <input hidden key={index} ref="id" type="text" value={id}/>

              <div className="form-group col-md-4 align-self-end">
                <Link  onClick={() => this.update(this.refs)} type="submit" to="/homeadmin" className="btn btn-primary" type="button"><i className="fa fa-fw fa-lg fa-save"></i>Save change</Link>
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

export default connect(mapStateToProps)(Contact);