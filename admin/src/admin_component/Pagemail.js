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
      <div className="app-title">
        <div>
          <h1><i className="fa fa-envelope-o"></i> Mailbox</h1>
          <p>A Mailbox page sample</p>
        </div>
        <ul className="app-breadcrumb breadcrumb">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item"><a href="#">Mailbox</a></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-3"><a className="mb-2 btn btn-primary btn-block" href="">Compose Mail</a>
          <div className="tile p-0">
            <h4 className="tile-title folder-head">Folders</h4>
            <div className="tile-body">
              <ul className="nav nav-pills flex-column mail-nav">
                <li className="nav-item active"><a className="nav-link" href="#"><i className="fa fa-inbox fa-fw"></i> Inbox<span className="badge badge-pill badge-primary float-right">12</span></a></li>
                <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-envelope-o fa-fw"></i> Sent</a></li>
                <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-file-text-o fa-fw"></i> Drafts</a></li>
                <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-filter fa-fw"></i> Junk <span className="badge badge-pill badge-primary float-right">8</span></a></li>
                <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-trash-o fa-fw"></i> Trash</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="tile">
            <div className="mailbox-controls">
              <div className="animated-checkbox">
                <label>
                  <input type="checkbox"/><span className="label-text"></span>
                </label>
              </div>
              <div className="btn-group">
                <button className="btn btn-primary btn-sm" type="button"><i className="fa fa-trash-o"></i></button>
                <button className="btn btn-primary btn-sm" type="button"><i className="fa fa-reply"></i></button>
                <button className="btn btn-primary btn-sm" type="button"><i className="fa fa-share"></i></button>
                <button className="btn btn-primary btn-sm" type="button"><i className="fa fa-refresh"></i></button>
              </div>
            </div>
            <div className="table-responsive mailbox-messages">
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <td>
                      <div className="animated-checkbox">
                        <label>
                          <input type="checkbox"/><span className="label-text"> </span>
                        </label>
                      </div>
                    </td>
                    <td><a href="#"><i className="fa fa-star-o"></i></a></td>
                    <td><a href="read-mail.html">John Doe</a></td>
                    <td className="mail-subject"><b>A report on project almanac</b> - Lorem ipsum dolor sit amet adipisicing elit...</td>
                    <td><i className="fa fa-paperclip"></i></td>
                    <td>8 mins ago</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="animated-checkbox">
                        <label>
                          <input type="checkbox"/><span className="label-text"> </span>
                        </label>
                      </div>
                    </td>
                    <td><a href="#"><i className="fa fa-star"></i></a></td>
                    <td><a href="read-mail.html">John Doe</a></td>
                    <td><b>A report on some good project</b> - Lorem ipsum dolor sit amet adipisicing elit...</td>
                    <td></td>
                    <td>15 mins ago</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="animated-checkbox">
                        <label>
                          <input type="checkbox"/><span className="label-text"> </span>
                        </label>
                      </div>
                    </td>
                    <td><a href="#"><i className="fa fa-star-o"></i></a></td>
                    <td><a href="read-mail.html">John Doe</a></td>
                    <td className="mail-subject"><b>A report on project almanac</b> - Lorem ipsum dolor sit amet adipisicing elit...</td>
                    <td><i className="fa fa-paperclip"></i></td>
                    <td>30 mins ago</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="animated-checkbox">
                        <label>
                          <input type="checkbox"/><span className="label-text"> </span>
                        </label>
                      </div>
                    </td>
                    <td><a href="#"><i className="fa fa-star"></i></a></td>
                    <td><a href="read-mail.html">John Doe</a></td>
                    <td className="mail-subject"><b>A report on project almanac</b> - Lorem ipsum dolor sit amet adipisicing elit...</td>
                    <td></td>
                    <td>25 December</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="animated-checkbox">
                        <label>
                          <input type="checkbox"/><span className="label-text"> </span>
                        </label>
                      </div>
                    </td>
                    <td><a href="#"><i className="fa fa-star-o"></i></a></td>
                    <td><a href="read-mail.html">John Doe</a></td>
                    <td className="mail-subject"><b>A report on project almanac</b> - Lorem ipsum dolor sit amet adipisicing elit...</td>
                    <td><i className="fa fa-paperclip"></i></td>
                    <td>20 December</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="animated-checkbox">
                        <label>
                          <input type="checkbox"/><span className="label-text"> </span>
                        </label>
                      </div>
                    </td>
                    <td><a href="#"><i className="fa fa-star"></i></a></td>
                    <td><a href="read-mail.html">John Doe</a></td>
                    <td className="mail-subject"><b>A report on project almanac</b> - Lorem ipsum dolor sit amet adipisicing elit...</td>
                    <td></td>
                    <td>20 December</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="animated-checkbox">
                        <label>
                          <input type="checkbox"/><span className="label-text"> </span>
                        </label>
                      </div>
                    </td>
                    <td><a href="#"><i className="fa fa-star"></i></a></td>
                    <td><a href="read-mail.html">John Doe</a></td>
                    <td className="mail-subject"><b>A report on project almanac</b> - Lorem ipsum dolor sit amet adipisicing elit...</td>
                    <td><i className="fa fa-paperclip"></i></td>
                    <td>20 December</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="animated-checkbox">
                        <label>
                          <input type="checkbox"/><span className="label-text"> </span>
                        </label>
                      </div>
                    </td>
                    <td><a href="#"><i className="fa fa-star-o"></i></a></td>
                    <td><a href="read-mail.html">John Doe</a></td>
                    <td className="mail-subject"><b>A report on project almanac</b> - Lorem ipsum dolor sit amet adipisicing elit...</td>
                    <td></td>
                    <td>20 December</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-right"><span className="text-muted mr-2">Showing 1-15 out of 60</span>
              <div className="btn-group">
                <button className="btn btn-primary btn-sm" type="button"><i className="fa fa-chevron-left"></i></button>
                <button className="btn btn-primary btn-sm" type="button"><i className="fa fa-chevron-right"></i></button>
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