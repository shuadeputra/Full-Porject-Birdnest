import React, { Component } from 'react';
import Contentproduct from './Contentproduct';
import {Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class Content extends Component {
  state ={
    Dried: 1,
    Bottled: 2,
    Gifts:3,
    picture_slide:"",
    content_picture_slide:"",
    picture_picks1:"",
    content_picture_picks1:"",
    picture_picks2:"",
    content_picture_picks2:"",
    picture_picks3:"",
    content_picture_picks3:""
  }

  componentDidMount(){
    axios.get("http://localhost:3002/fronthome")
    .then((response)=>{
      if(response.data !== undefined){
        this.setState({dataku:response.data})
        this.setState({picture_slide:response.data[0].picture_slide})
        this.setState({content_picture_slide:response.data[0].content_picture_slide})
        this.setState({picture_picks1:response.data[0].picture_picks1})
        this.setState({content_picture_picks1:response.data[0].content_picture_picks1})
        this.setState({picture_picks2:response.data[0].picture_picks2})
        this.setState({content_picture_picks2:response.data[0].content_picture_picks2})
        this.setState({picture_picks3:response.data[0].picture_picks3})
        this.setState({content_picture_picks3:response.data[0].content_picture_picks3})
      }
    })
  }


  render() {

    var Dried = this.state.Dried
    var Bottled = this.state.Bottled
    var Gifts = this.state.Gifts

    return (
      <div>

{/* <!-- Hero SECTION--> */}
      <section style={{background: `url(http://localhost:3002/image/front_home/${this.state.picture_slide})`}} className="divider">
        <div className="container"> 
          <div className="row">
            <div className="col-lg-6">
              <p>Premium Bridnest</p>
              <h2 className="h1 text-uppercase no-margin">{this.state.content_picture_slide}</h2>
              <p>高兴鸟</p>
              <Link to="/about" className="btn btn-template wide shop-now">About Us
                <i className="fas fa-shopping-bag"></i></Link>
            </div>
          </div>
        </div>
      </section>


    {/* <!-- Categories Section--> */}
    <section className="categories">
      <div className="container">
        <header className="text-center">
          <h2 className="text-uppercase"><small>Top for this month</small>Our Featured Picks</h2>
        </header>
        
    {/* <!-- Banner pertama --> */}
        <div className="row text-left">
          <div className="col-lg-4"><Link to={{pathname: '/category', state: {Dried:Dried}}}> 
              <div style={{ backgroundImage:`url(http://localhost:3002/image/front_home/${this.state.picture_picks1})`}} className="item d-flex align-items-end">
                <div className="content">
                  <h3 className="h5">{this.state.content_picture_picks1}</h3><p>New Collection</p>
                </div>
              </div></Link></div>

    {/* <!-- Banner kedua --> */}
          <div className="col-lg-4"><Link to={{pathname: '/category', state: {Bottled:Bottled}}}>
              <div style={{ backgroundImage:`url(http://localhost:3002/image/front_home/${this.state.picture_picks2})`}} className="item d-flex align-items-end">
                <div className="content">
                  <h3 className="h5">{this.state.content_picture_picks2}</h3><p>New Collection</p>
                </div>
              </div></Link></div>

      {/* <!-- Banner ketiga --> */}
          <div className="col-lg-4"><Link to={{pathname: '/category', state: {Gifts:Gifts}}}>
              <div style={{ backgroundImage:`url(http://localhost:3002/image/front_home/${this.state.picture_picks3})`}} className="item d-flex align-items-end">
                <div className="content">
                  <h3 className="h5">{this.state.content_picture_picks3}</h3><p>New Collection</p>
                </div>
              </div></Link></div>
        </div>
      </div>
    </section>

  <Contentproduct/>

      </div>

    );
  }
}

export default Content;
