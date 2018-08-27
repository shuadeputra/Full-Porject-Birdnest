import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Post extends Component {
  
  state={
    dataku:[],
  }

  componentDidMount(){
   var blog_id =  this.props.location.state.id
   axios.post("http://localhost:3002/blog/view",{
     blog_id:blog_id
   })
   .then((response)=>{
     if(response !== undefined){
       this.setState({dataku:response.data})
     }
   })
  }
  
  
  render() {
    

    const data = this.state.dataku.map((item,index)=>{
      // var id = item.id
      // var title = item.title
      // var image = item.image
      // var meta_dsc = item.meta_dsc
      var description = item.description
      return <div key={index} dangerouslySetInnerHTML={{__html: description }} ></div>
    })

    
    const mettatag = this.state.dataku.map((item,index)=>{
      var meta_tittle = item.meta_tittle
      var meta_dsc = item.meta_dsc
      var image = item.image
      var title = item.title

      return <header key={index}>
      <meta name="description" content={meta_tittle}/>
      <meta name="keywords" content={meta_dsc}/>
      <center>
      <h1 style={{color:"rgb(213, 190, 14)"}}>{title}</h1> <hr/>

      <p><img style={{background:"#f5f5f5",width:"750px", height:"459px"}} src={`http://localhost:3002/image/blog/${image}`} alt="blog_img" className="img-fluid"/></p>
      </center>
      </header>
    })
    
  


    return (
    <div>
   
    <Navbar />

{/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>Post</h1>
          </div>
          <div className="col-lg-3 text-right order-1 order-lg-2">
            <ul className="breadcrumb justify-content-lg-end">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
              <li className="breadcrumb-item active">Post</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="padding-small ">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-10">        
            {/* untuk meta tag dsc dan title */}
                  {mettatag}
            {/* end for meta tag */}

          {/* For content  */}
          
            {data}
          {/* End for content */}

          </div>
        </div>
      </div>
    </section>



    <Footer/>

    </div>
    );
  }
}

export default Post;