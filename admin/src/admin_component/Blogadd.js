import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';

class Blogadd extends Component {

  render() {
    return (
   <div>

     {/* Bagian navbar admin */}
    <Navbaradmin blog="active"/>


  <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="fa fa-book"></i> Add Blog</h1><br/>
          <Link className={"btn btn-secondary btn-sm fa fa-arrow-left"} to="blogall"> Back </Link>
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item"><Link to="/blogall">Blog</Link></li>
          <li className="breadcrumb-item active">Add blog</li>
        </ul>
      </div>
     
      <div className="clearix"></div>
        <div className="col-md-12">
          <div className="tile">
            <h3 className="tile-title">Add Blog</h3>
            <div className="tile-body">
              <form className="row">
                <div className="form-group col-md-10">
                  <label className="control-label">Title Product</label>
                  <input className="form-control" type="text" placeholder="Title product"/>
                </div>
                <div className="form-group col-md-10">
                  <label className="control-label"> Meta tag tittle </label>
                  <input className="form-control" type="text" placeholder="Meta tag title"/>
                </div>
                <div className="form-group col-md-10">
                  <label className="control-label"> Meta tag Description</label>
                  <input className="form-control" type="text" placeholder="Meta tag description"/>
                </div>
              
              <div className="form-group col-md-12">
              <label for="file">Picture Product</label>
              <input type="file" id="file" className="form-control-file"/>
              <small id="fileHelp" className="form-text text-muted">Max 12mb size</small>
              </div>

              <div className="form-group col-md-12">
                <label for="message">Description</label>
                <textarea id="message" rows="3" className="form-control"></textarea>
            </div>

                <div className="form-group col-md-4 align-self-end">
                  <button className="btn btn-primary" type="button"><i className="fa fa-fw fa-lg fa-save"></i>Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </main>
    

    </div>
    );
  }
}

export default Blogadd;