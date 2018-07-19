import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import {Link} from 'react-router-dom'

class Blog extends Component {
  render() {
    return (
    <div>
   
    <Navbar />

     {/* <!-- Hero Section--> */}
  <section className="hero hero-page gray-bg padding-small">
    <div className="container">
      <div className="row d-flex">
        <div className="col-lg-9 order-2 order-lg-1">
          <h1>Blog</h1>
        </div>
        <div className="col-lg-3 text-right order-1 order-lg-2">
          <ul className="breadcrumb justify-content-lg-end">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Blog</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="blog">
    <div className="container">
      <div className="row">

        {/* <!-- post--> */}
        <div className="col-lg-6">
          <div className="post post-gray d-flex align-items-center flex-md-row flex-column">
            <div className="thumbnail d-flex-align-items-center justify-content-center">
            <img src={"https://d19m59y37dris4.cloudfront.net/hub/1-3-1/img/blog-1.jpg"} alt="..."/></div>
            <div className="info"> 
              <h4 className="h5"> <Link to="/post">Newest photo apps</Link></h4><span className="date"><i className="fa fa-clock-o"></i>May 10th 2016</span>
              <p>ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Aenean ultricies mi vitae est. </p><Link to="/post" className="read-more">Read More<i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        {/* <!-- /end post--> */}
        
        {/* <!-- post--> */}
        <div className="col-lg-6">
          <div className="post post-gray d-flex align-items-center flex-md-row flex-column">
            <div className="thumbnail d-flex-align-items-center justify-content-center">
            <img src={"https://d19m59y37dris4.cloudfront.net/hub/1-3-1/img/blog-2.jpg"} alt="..."/></div>
            <div className="info"> 
            <h4 className="h5"> <Link to="/post">Newest photo apps</Link></h4><span className="date"><i className="fa fa-clock-o"></i>May 10th 2016</span>
              <p>ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Aenean ultricies mi vitae est. </p><Link to="/post" className="read-more">Read More<i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        {/* <!-- /end post--> */}
        
        {/* <!-- post--> */}
        <div className="col-lg-6">
          <div className="post post-gray d-flex align-items-center flex-md-row flex-column">
            <div className="thumbnail d-flex-align-items-center justify-content-center">
            <img src={"https://d19m59y37dris4.cloudfront.net/hub/1-3-1/img/blog2.jpg"} alt="..."/></div>
            <div className="info"> 
            <h4 className="h5"> <Link to="/post">Newest photo apps</Link></h4><span className="date"><i className="fa fa-clock-o"></i>May 10th 2016</span>
              <p>ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Aenean ultricies mi vitae est. </p><Link to="/post" className="read-more">Read More<i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        {/* <!-- /end post--> */}
        
        {/* <!-- post--> */}
        <div className="col-lg-6">
          <div className="post post-gray d-flex align-items-center flex-md-row flex-column">
            <div className="thumbnail d-flex-align-items-center justify-content-center">
            <img src={"https://d19m59y37dris4.cloudfront.net/hub/1-3-1/img/blog1.jpg"} alt="..."/></div>
            <div className="info"> 
            <h4 className="h5"> <Link to="/post">Newest photo apps</Link></h4><span className="date"><i className="fa fa-clock-o"></i>May 10th 2016</span>
              <p>ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Aenean ultricies mi vitae est. </p><Link to="/post" className="read-more">Read More<i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        {/* <!-- /end post--> */}
        
        {/* <!-- post--> */}
        <div className="col-lg-6">
          <div className="post post-gray d-flex align-items-center flex-md-row flex-column">
            <div className="thumbnail d-flex-align-items-center justify-content-center">
            <img src={"https://d19m59y37dris4.cloudfront.net/hub/1-3-1/img/blog-1.jpg"} alt="..."/></div>
            <div className="info"> 
            <h4 className="h5"> <Link to="/post">Newest photo apps</Link></h4><span className="date"><i className="fa fa-clock-o"></i>May 10th 2016</span>
              <p>ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Aenean ultricies mi vitae est. </p><Link to="/post" className="read-more">Read More<i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        {/* <!-- /end post--> */}
        
        {/* <!-- post--> */}
        <div className="col-lg-6">
          <div className="post post-gray d-flex align-items-center flex-md-row flex-column">
            <div className="thumbnail d-flex-align-items-center justify-content-center">
            <img src={"https://d19m59y37dris4.cloudfront.net/hub/1-3-1/img/blog-2.jpg"} alt="..."/></div>
            <div className="info"> 
            <h4 className="h5"> <Link to="/post">Newest photo apps</Link></h4><span className="date"><i className="fa fa-clock-o"></i>May 10th 2016</span>
              <p>ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Aenean ultricies mi vitae est. </p><Link to="/post" className="read-more">Read More<i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        {/* <!-- /end post--> */}
        
      </div>
      {/* <!-- Pagination --> */}
      <nav aria-label="..." className="d-block w-100">
        <ul className="pagination pagination-custom d-flex justify-content-between d-block w-100">
          <li className="page-item"><a href="#" className="page-link">&lt; Older posts</a></li>
          <li className="page-item disabled"><a href="#" tabindex="-1" className="page-link">Newer posts  &gt; </a></li>
        </ul>
      </nav>
    </div>
  </section>

  <Footer/>

    </div>
    );
  }
}

export default Blog;