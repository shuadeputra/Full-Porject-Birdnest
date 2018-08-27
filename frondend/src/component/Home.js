import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';


class Home extends Component {

  render() {

    return (
  <div>
        <Navbar />
        <Content />
        <Footer />

    </div>
    );
  }
}

export default Home;