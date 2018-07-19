import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import {Link} from 'react-router-dom'

class Post extends Component {
  render() {
    return (
    <div>
   
    <Navbar />

{/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>Post</h1><p className="author-date-top">By <a href="#">John Slim</a> |  January 16, 2016</p>
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
            <header>
              <p className="lead">
                As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am
                he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.    
              </p>
            </header>
            <div className="text-content"> 
              <p><img src={"img/blog/blog1.1.jpg"} alt="Example blog post alt" className="img-fluid"/></p>
              <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
              <h2>Header Level 2</h2>
              <ol>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
              </ol>
              <blockquote className="blockquote blockquote-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</blockquote>
              <h3>Header Level 3</h3>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
              </ul>
              <p><img src={"img/blog/blog1.2.jpg"} alt="Example blog post alt" className="img-fluid"/></p>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus                   </p>
            </div>
          </div>
        </div>
        <div className="comments">
          <div className="row">
            <div className="col-xl-8 col-lg-10">                     
              <h4 className="h5 comments-heading">2 comments</h4>
              <div className="row comment">
                <div className="col-3 col-md-2 text-center-xs">
                  <p><img src={"img/user/blog-avatar2.jpg"} alt="" className="img-fluid rounded-circle"/></p>
                </div>
                <div className="col-9 col-md-10">
                  <h5>Julie Alma</h5>
                  <p className="posted"><i className="fa fa-clock-o"></i> September 23, 2011 at 12:00 am</p>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                  <p className="reply"><a href="#" className="btn btn-template-outlined"><i className="fa fa-reply"></i> Reply</a></p>
                </div>
              </div>
              
      {/* <!-- /.comment--> */}
              <div className="row comment last">
                <div className="col-3 col-md-2 text-center-xs">
                  <p><img src={"img/user/blog-avatar.jpg"} alt="" className="img-fluid rounded-circle"/></p>
                </div>
                <div className="col-9 col-md-10">
                  <h5>Louise Armero</h5>
                  <p className="posted"><i className="fa fa-clock-o"></i> September 23, 2012 at 12:00 am</p>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                  <p className="reply"><a href="#" className="btn btn-template-outlined"><i className="fa fa-reply"></i> Reply</a></p>
                </div>
              </div>
      {/* <!-- /.comment--> */}
            </div>
      {/* <!-- /.comments--> */}
          </div>
        </div>
        <div className="comment-form">
          <div className="row">
            <div className="col-xl-12 col-lg-10">                 
              <h4>Leave a comment</h4>
              <form id="comment-form" method="post" action="#" className="custom-form form">
                <div className="row">
                  <div className="col-md-6">                           
                    <div className="form-group">
                      <label for="name">Name <span className="required">*</span></label>
                      <input id="name" type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6">                                              
                    <div className="form-group">
                      <label for="email">Email <span className="required">*</span></label>
                      <input id="email" type="text" className="form-control"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="comment">Comment <span className="required">*</span></label>
                  <textarea id="comment" rows="4" className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-template"><i className="fa fa-comment"></i> Comment </button>
              </form>
            </div>
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