import React, { Component } from 'react';
import Navbaradmin from './Navbaradmin';
import Contenthome from './Contenthome';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



// Mengirim funtion yang dapat dari redux
function mapStateToProps(state) {
  return {
      login: state.login,
      username: state.username,
    };
}

class Homeadmin extends Component {
  state = {
    redirect: false
  }

  render() {

    // console.log(this.props.login)
  
  // Mengecek apakah passwod sudah dan username uda benar?
  if(this.props.login != 1){
    {this.state.redirect= true}  
    this.props.dispatch({type:'login', value:"Username /Password anda salah"});    
  }

  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
      
    }



    return (
  <div>
      <Navbaradmin Homeadmin="active"/>
      <Contenthome/>

    </div>
    );
  }
}

export default connect(mapStateToProps)(Homeadmin);
