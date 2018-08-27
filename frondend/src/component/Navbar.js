import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import { LinkContainer } from "react-router-bootstrap";
import {  NavItem } from "react-bootstrap";
import axios from 'axios';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class Navbar extends Component {

  state = {
    input:null,
    hasil:[],
    content_phone:"",
    content_shipping:""
  }

onSeriesInputChange = e =>{
  var search = e.target.value
  axios.post('http://localhost:3002/search/productall/' + search)
  .then((ambilData) => {  
    if(ambilData.data !== undefined){
    this.setState({hasil: ambilData.data,})
      // console.log(this.state.hasil)
    }
  })
}

componentDidMount(){
  axios.get("http://localhost:3002/fronthome")
  .then((response)=>{
    if(response.data !== undefined){
      this.setState({content_phone:response.data[0].content_phone})
      this.setState({content_shipping:response.data[0].content_shipping})
    }
  })
}

  render() {

    var data = this.state.hasil.map((item, index) => {
      var id = item.id_product;
      var nama_product = item.nama_product;

        return <Link key={index} to={{ pathname: '/detail', state: { id: id } }}><i> {nama_product}</i></Link>
        
    })

      

    return (
      <div className="App">
        <header className="header">
          <div className="top-bar">
            <div className="container-fluid">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 hidden-lg-down text-col">
                  <ul className="list-inline">
                    <li className="list-inline-item"><i className="fas fa-phone iconcolor"></i>{this.state.content_phone}</li>
                    <li className="list-inline-item">{this.state.content_shipping}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          {/* <!-- Awal navbar --> */}
          <div className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand home" to="/">
                <img alt="logo" src={"img/burunglogo.png"} />
              </Link>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span></button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">

                  <LinkContainer className="nav-item" to="/">
                    <NavItem className="nav-link">HOME</NavItem>
                  </LinkContainer>

                  <LinkContainer className="nav-item" to="/category">
                    <NavItem className="nav-link">SHOP</NavItem>
                  </LinkContainer>

                  <LinkContainer className="nav-item" to="/about">
                    <NavItem className="nav-link">ABOUT</NavItem>
                  </LinkContainer>

                  <LinkContainer className="nav-item" to="/blog">
                    <NavItem className="nav-link">BLOG</NavItem>
                  </LinkContainer>

                  <LinkContainer className="nav-item" to="/contact">
                    <NavItem className="nav-link">CONTACT</NavItem>
                  </LinkContainer>
                </ul>

                {/* Experiment */}
                &nbsp;<form className="navbar-form navbar-right">
                  <div className="input-group">

                      <input type="text" 
                      className="form-control col-sm-1 col-md-10" 
                      placeholder="input something to search"
                      id="searchbar" data-toggle="dropdown" aria-haspopup="true"
                        value={this.state.masuk}
                        onInput={this.onSeriesInputChange}
                      /> &nbsp;

                      <button  className="btn btn-primary" id="searchbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-search"></i>
                      </button>

                  <div aria-labelledby="searchbar" className="dropdown-menu">
                     
                     {/* Awal dari looping */}
                      {data}
                      {/* Akhir dari looping */}

                    </div>
                  </div>
                </form>
                <div aria-labelledby="searchbtn" className="dropdown-menu">
                  <div className="dropdown-item cart-product">
                  </div>
                </div>

                {/* End of experiment */}

         
                <div className="right-col d-flex align-items-lg-center flex-column flex-lg-row">
                  {/* <!-- User Not Logged - link to login page--> */}
                  <div className="user col-sm-1 col-md-3">

                    {/* awal logic  */}

                    {cookies.get("login") >= 1 ?
                      <Link id="userdetails" to="/customerorders" className="user-link">
                        <i className="fas fa-user"> </i>
                        <span className="d-md-none text-col"> &nbsp; {cookies.get("username")}</span>
                      </Link> :
                      <Link id="userdetails" to="/customerlogin" className="user-link">
                        <i className="fas fa-user"> </i>
                      </Link>}


                    {/* <Link id="userdetails" to="/customerlogin" className="user-link">
                      <i className="fas fa-user"> </i>
                      <a className="d-md-none text-col"> &nbsp; Ade Putra</a>
                    </Link> */}


                  </div>
                  {/* <!-- Cart Dropdown--> */}
                    <Link  className="col-md-8" id="cartdetails" to="/cart">
                      <i className="fa fa-shopping-cart"></i>
                    </Link>

                </div>
              </div>
            </div>
          </div>
          <div />
        </header>
      </div>

    );
  }
}

export default Navbar;
