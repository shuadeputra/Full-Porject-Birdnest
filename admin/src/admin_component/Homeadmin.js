import React, { Component } from 'react';
import Navbaradmin from './Navbaradmin';
import Contenthome from './Contenthome';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class Homeadmin extends Component {
  state = {
    redirect: false
  }

  render() {

    if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
      cookies.set('pesan', "Username /Password anda salah", { path: '/' });
      this.setState({ redirect: true })
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <Navbaradmin Homeadmin="active" />
        <Contenthome />

      </div>
    );
  }
}

export default Homeadmin;
