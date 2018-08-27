import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import Cookies from 'universal-cookie';

const $ = require('jquery')
$.DataTable = require('datatables.net')

// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class Blogall extends Component {

  state={
    allblog:[],
    isi:"",
  }

  componentDidMount() {
    axios.get('http://localhost:3001/blog/all')
      .then((ambilData) => {
        this.setState({ allblog: ambilData.data })
        $('#example').DataTable();
      }
      )
  }
 
  deleted(id, image) {
    var answer = window.confirm("Are you sure to deleted this data?")
    if (answer) {
      axios.post('http://localhost:3001/blog/deleted', {
        id: id,
        image: image,
      })
        .then((ambilData) => {
          this.setState({ isi: ambilData.data })

          if (this.state.isi === "berhasil") {
            axios.get('http://localhost:3001/blog/all')
              .then((ambilData) => {
                this.setState({ allblog: ambilData.data })
                $('#example').DataTable();
              })
            }
        })}
  }


  render() {

      // Mengecek apakah passwod sudah dan username uda benar?
    if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
      cookies.set('pesan', "Username /Password anda salah", { path: '/' });
      this.setState({ redirect: true })
    }

  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }


      // Looping database dimulai
      const data = this.state.allblog.map((item, index) => {
        var id = item.id;
        var meta_tittle = item.meta_tittle
        var meta_dsc = item.meta_dsc
        var title = item.title
        // var description = item.description
        var image = item.image
        return <tr key={index}>
            <td>{title}</td>
            <td>{meta_tittle}</td>
            <td>{meta_dsc}</td>
            <td><Link className="btn btn-warning fa fa-pencil" to={{pathname: '/blogedit', state: {id:id}}} ></Link> &nbsp;
            <button onClick={()=>{this.deleted(id,image);}} className="btn btn-danger fa fa-trash"></button>
            </td>
          </tr>
      })


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
          <li className="breadcrumb-item"><Link to="/homeadmin">Home</Link></li>
          <li className="breadcrumb-item active">Blog</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile table-responsive">
            <div className="tile-body table-responsive">
              <table className="table table-hover table-bordered" id="example" >
                <thead>
                  <tr>
                    <th>Title Blog</th>
                    <th>meta_tittle</th>
                    <th>meta_dsc</th>
                    <th>Tools</th>
                  </tr>
                </thead>
                <tbody>
                  {data}
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