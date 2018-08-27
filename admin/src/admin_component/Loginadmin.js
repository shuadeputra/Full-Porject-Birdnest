import React, { Component } from 'react';
import { Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Loginadmin extends Component {
  
  state ={
    redirect: false
  }

  // Importing database from node js
  login(obj) {
    var isi;
    var userid;
    var self = this;
    axios.post('http://localhost:3001/login',
      {
        username: obj.username.value,
        password: obj.password.value

      })
      .then(function (response) {
        // console.log(response.data[0])
        isi = response.data.length
        userid = response.data

        // disini awal membuat cookies
        cookies.set('login', userid, { path: '/' }); // cookies for login
        cookies.set('username', obj.username.value, { path: '/' }); // cookies for username
        /////////////// 

        // console.log(isi)
        if (isi !== "") {
          self.setState({ redirect: true })
        }
      },);
  }

  render() {
  
    if (this.state.redirect) {
      return <Redirect to='/homeadmin'/>
    }

    return (
  <div>
   {/* Dari header */}
          <title>Admin</title>

        <section className="material-half-bg">
          <div className="cover"></div>
        </section>
        <section className="login-content">
          <div className="logo">
            <h1>Admin</h1>
          </div>
          <div className="login-box">
            <div className="login-form">
              <h3 className="login-head"><i className="fa fa-lg fa-fw fa-user"></i>SIGN IN</h3>
              <div className="form-group">
                <label className="control-label">USERNAME</label>
                <input className="form-control" ref="username" type="text" placeholder="Username" autoFocus required />
              </div>
              <div className="form-group">
                <label className="control-label">PASSWORD</label>
                <input className="form-control" ref="password" type="password" placeholder="Password" required />
              </div>
              <div className="form-group">
                <div className="utility">
                  <div className="animated-checkbox">
                    <label>
                      <input type="checkbox" /><span className="label-text">Stay Signed in</span>
                    </label>
                  </div>
                  <p className="semibold-text mb-2"><Link to="/" data-toggle="flip">Forgot Password ?</Link></p>

                </div>
                <p style={{color: 'red'}}>
                {/* {this.props.login} */}
                {cookies.get("pesan")}
                </p>
              </div>
              <div className="form-group btn-container">
                <button onClick={() => this.login(this.refs)} type="submit" className="btn btn-primary btn-block" ><i className="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN </button>
              </div>
            </div>

            <form className="forget-form">
              <h3 className="login-head"><i className="fa fa-lg fa-fw fa-lock"></i>Forgot Password ?</h3>
              <div className="form-group">
                <label className="control-label">EMAIL</label>
                <input className="form-control" type="text" placeholder="Email" />
              </div>

              <div className="form-group btn-container">
                <button className="btn btn-primary btn-block"><i className="fa fa-unlock fa-lg fa-fw"></i>RESET</button>
              </div>
              <div className="form-group mt-3">
                <p className="semibold-text mb-0"><Link to="/" data-toggle="flip"><i className="fa fa-angle-left fa-fw"></i> Back to Login</Link></p>
              </div>
            </form>
          </div>
        </section>


    </div>
    );
  }
}

export default Loginadmin;
