import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';

class Pagemail extends Component {

  render() {
    return (
   <div>
    
    {/* Bagian navbaradmin */}
    <Navbaradmin pagemail="active"/>

    <main className="app-content">
      <div className="row user">
        <div className="col-md-12">
          <div className="profile">
            <div className="info">
            <img className="user-img" src={"vendor/img/avatar/avatar1.jpg"} style={{width:"128px", height:"128px"}}/>

              <h4>John Doe</h4>
              <p>FrontEnd Developer</p>
            </div>
            <div className="cover-image"></div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="tile p-0">
            <ul className="nav flex-column nav-tabs user-tabs">
              <li className="nav-item"><a className="nav-link active" href="#user-timeline" data-toggle="tab">Timeline</a></li>
              <li className="nav-item"><a className="nav-link" href="#user-settings" data-toggle="tab">Settings</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <div className="tab-content">
            <div className="tab-pane active" id="user-timeline">
              <div className="timeline-post">
                <div className="post-media"><a href="#">
                <img src={"vendor/img/avatar/avatar1.jpg"} style={{width:"48px", height:"48px"}}/></a>
                  <div className="content">
                    <h5><a href="#">John Doe</a></h5>
                    <p className="text-muted"><small>2 January at 9:30</small></p>
                  </div>
                </div>
                <div className="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,	quis tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <ul className="post-utility">
                  <li className="likes"><a href="#"><i className="fa fa-fw fa-lg fa-thumbs-o-up"></i>Like</a></li>
                  <li className="shares"><a href="#"><i className="fa fa-fw fa-lg fa-share"></i>Share</a></li>
                  <li className="comments"><i className="fa fa-fw fa-lg fa-comment-o"></i> 5 Comments</li>
                </ul>
              </div>
              <div className="timeline-post">
                <div className="post-media"><a href="#">
                <img src={"vendor/img/avatar/avatar1.jpg"} style={{width:"48px", height:"48px"}}/></a>
                  <div className="content">
                    <h5><a href="#">John Doe</a></h5>
                    <p className="text-muted"><small>2 January at 9:30</small></p>
                  </div>
                </div>
                <div className="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,	quis tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <ul className="post-utility">
                  <li className="likes"><a href="#"><i className="fa fa-fw fa-lg fa-thumbs-o-up"></i>Like</a></li>
                  <li className="shares"><a href="#"><i className="fa fa-fw fa-lg fa-share"></i>Share</a></li>
                  <li className="comments"><i className="fa fa-fw fa-lg fa-comment-o"></i> 5 Comments</li>
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="user-settings">
              <div className="tile user-settings">
                <h4 className="line-head">Settings</h4>
                <form>
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <label>First Name</label>
                      <input className="form-control" type="text"/>
                    </div>
                    <div className="col-md-4">
                      <label>Last Name</label>
                      <input className="form-control" type="text"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 mb-4">
                      <label>Email</label>
                      <input className="form-control" type="text"/>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-md-8 mb-4">
                      <label>Mobile No</label>
                      <input className="form-control" type="text"/>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-md-8 mb-4">
                      <label>Office Phone</label>
                      <input className="form-control" type="text"/>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-md-8 mb-4">
                      <label>Home Phone</label>
                      <input className="form-control" type="text"/>
                    </div>
                  </div>
                  <div className="row mb-10">
                    <div className="col-md-12">
                      <button className="btn btn-primary" type="button"><i className="fa fa-fw fa-lg fa-check-circle"></i> Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    </div>
    );
  }
}

export default Pagemail;