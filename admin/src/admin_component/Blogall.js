import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';

const $ = require('jquery')
$.DataTable = require('datatables.net')

// var dt = require( 'datatables.net' )();

class Blogall extends Component {

  componentDidMount() {

    $('#sampleTable').DataTable();
      // $('#example').DataTable();
  }
 
  render() {
    return (
   <div>
    
    {/* Bagian navbaradmin */}
    <Navbaradmin blog="active"/>

    <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="icon fa fa-book"></i> Our Blog</h1><br/>
          <Link className="btn btn-primary btn-sm fa fa-plus" to="/blogadd"> Add Blog</Link>
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item active"><a href="#">Blog</a></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile table-responsive">
            <div className="tile-body table-responsive">
              <table className="table table-hover table-bordered" id="example">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Tools</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td><Link className="btn btn-warning fa fa-pencil" to="/blogedit"></Link>
                      <a className="btn btn-danger fa fa-trash"></a></td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td><Link className="btn btn-warning fa fa-pencil" to="/blogedit"></Link>
                      <a className="btn btn-danger fa fa-trash"></a></td>
                  </tr>
                  <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td><Link className="btn btn-warning fa fa-pencil" to="/blogedit"></Link>
                      <a className="btn btn-danger fa fa-trash"></a></td>
                  </tr>
                  <tr>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>Edinburgh</td>
                    <td>22</td>
                    <td>2012/03/29</td>
                    <td><Link className="btn btn-warning fa fa-pencil" to="/blogedit"></Link>
                      <a className="btn btn-danger fa fa-trash"></a></td>
                  </tr>
                  <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>2008/11/28</td>
                    <td><Link className="btn btn-warning fa fa-pencil" to="/blogedit"></Link>
                      <a className="btn btn-danger fa fa-trash"></a></td>
                  </tr>
                  <tr>
                    <td>Brielle Williamson</td>
                    <td>Integration Specialist</td>
                    <td>New York</td>
                    <td>61</td>
                    <td>2012/12/02</td>
                    <td><Link className="btn btn-warning fa fa-pencil" to="/blogedit"></Link>
                      <a className="btn btn-danger fa fa-trash"></a></td>
                  </tr>
                  <tr>
                    <td>Herrod Chandler</td>
                    <td>Sales Assistant</td>
                    <td>San Francisco</td>
                    <td>59</td>
                    <td>2012/08/06</td>
                    <td><Link className="btn btn-warning fa fa-pencil" to="/blogedit"></Link>
                      <a className="btn btn-danger fa fa-trash"></a></td>
                  </tr>
                  <tr>
                    <td>Rhona Davidson</td>
                    <td>Integration Specialist</td>
                    <td>Tokyo</td>
                    <td>55</td>
                    <td>2010/10/14</td>
                    <td><Link className="btn btn-warning fa fa-pencil" to="/blogedit"></Link>
                      <a className="btn btn-danger fa fa-trash"></a></td>
                  </tr>
                  <tr>
                    <td>Colleen Hurst</td>
                    <td>Javascript Developer</td>
                    <td>San Francisco</td>
                    <td>39</td>
                    <td>2009/09/15</td>
                    <td><Link className="btn btn-warning fa fa-pencil" to="/blogedit"></Link>
                      <a className="btn btn-danger fa fa-trash"></a></td>
                  </tr>
                  <tr>
                    <td>Sonya Frost</td>
                    <td>Software Engineer</td>
                    <td>Edinburgh</td>
                    <td>23</td>
                    <td>2008/12/13</td>
                    <td><Link className="btn btn-warning fa fa-pencil" to="/blogedit"></Link>
                      <a className="btn btn-danger fa fa-trash"></a></td>
                  </tr>
                  <tr>
                    <td>Jena Gaines</td>
                    <td>Office Manager</td>
                    <td>London</td>
                    <td>30</td>
                    <td>2008/12/19</td>
                    <td><Link className="btn btn-warning fa fa-pencil" to="/blogedit"></Link>
                      <a className="btn btn-danger fa fa-trash"></a></td>
                  </tr>
                  <tr>
                    <td>Michael Bruce</td>
                    <td>Javascript Developer</td>
                    <td>Singapore</td>
                    <td>29</td>
                    <td>2011/06/27</td>
                    <td><Link className="btn btn-warning fa fa-pencil" to="/blogedit"></Link>
                      <a className="btn btn-danger fa fa-trash"></a></td>
                  </tr>
                  <tr>
                    <td>Donna Snider</td>
                    <td>Customer Support</td>
                    <td>New York</td>
                    <td>27</td>
                    <td>2011/01/25</td>
                    <td><Link className="btn btn-warning fa fa-pencil" to="/blogedit"></Link>
                      <a className="btn btn-danger fa fa-trash"></a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
   
    

    </div>
    );
  }
}

export default Blogall;