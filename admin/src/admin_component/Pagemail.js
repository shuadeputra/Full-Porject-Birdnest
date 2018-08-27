import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import Cookies from 'universal-cookie';


const $ = require('jquery')
$.DataTable = require('datatables.net')

// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies


class Pagemail extends Component {

  state={
    allpagmail:[],
    isi:"",
    read:"",
  }

  componentDidMount() {

    // Jika menerima parameter props yg di lempar di navbar notiv di atas
    if(this.props.location.state !== undefined){
      var view = this.props.location.state.view;
      axios.post('http://localhost:3001/pagemail/notiv',{
        view:view
      })
      .then((ambilData) => {
        if (ambilData !== undefined) {
          this.setState({ allpagmail: ambilData.data })

          var hasilblmread = 0
          for (var i = 0; i < this.state.allpagmail.length; i++) {
            if (ambilData.data[i].view === "") {
              hasilblmread++
            }
          }
          this.setState({ read: hasilblmread })
          $('#example').DataTable();
        }})
    }else{
      // Jika tidak menerima parameter di atas
    axios.get('http://localhost:3001/pagemail')
      .then((ambilData) => {
        if (ambilData !== undefined) {
          this.setState({ allpagmail: ambilData.data })

          var hasilblmread = 0
          for (var i = 0; i < this.state.allpagmail.length; i++) {
            if (ambilData.data[i].view === "") {
              hasilblmread++
            }
          }
          this.setState({ read: hasilblmread })
          $('#example').DataTable();
        }})
      }
  }

  deleted(obj){
    var answer = window.confirm("Are you sure to deleted this data?")
    if (answer) {
      axios.post('http://localhost:3001/pagemail_deleted',{
          id:obj
      })
      .then((ambilData) => {
        if (ambilData.data === "berhasil") {
          axios.get('http://localhost:3001/pagemail')
          .then((ambilData) => {
            if (ambilData !== undefined) {
              this.setState({ allpagmail: ambilData.data })
    
              var hasilblmread = 0
              for (var i = 0; i < this.state.allpagmail.length; i++) {
                if (ambilData.data[i].view === "") {
                  hasilblmread++
                }
              }
              this.setState({ read: hasilblmread })
              $('#example').DataTable();
            }})

        }})
    }
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
          const data = this.state.allpagmail.map((item, index) => {
            var id = item.id;
            var first_name = item.first_name
            var email = item.email
            var time = item.time
            var view = item.view
            return <tr key={index}>
                <td>{view.length >=1 ? <span></span> : <span style={{color:"Red"}}>NEW</span>} &nbsp; {first_name}</td>
                <td>{email}</td>
                <td>{time}</td>
                <td><Link className="btn btn-success fa fa-envelope-open-o" to={{pathname: '/pagmailview', state: {id:id}}} ></Link> &nbsp;
                <button onClick={()=>{this.deleted(id);}} className="btn btn-danger fa fa-trash"></button>
                </td>
              </tr>
          })
    


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
          <li className="breadcrumb-item"><span >Mailbox</span></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-3"><span className="mb-2 btn btn-primary btn-block">Compose Mail</span>
          <div className="tile p-0">
            <h4 className="tile-title folder-head">Folders</h4>
            <div className="tile-body">
              <ul className="nav nav-pills flex-column mail-nav">
                <li className="nav-item active"><Link className="nav-link" to="/pagemail"><i className="fa fa-inbox fa-fw"></i> Inbox<span className="badge badge-pill badge-primary float-right">{this.state.read}</span></Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sendmail"><i className="fa fa-envelope-o fa-fw"></i> Sent</Link></li>
                {/* <li className="nav-item"><Link className="nav-link" to="/homeadmin"><i className="fa fa-file-text-o fa-fw"></i> Drafts</Link></li> */}
                {/* <li className="nav-item"><Link className="nav-link" to="/homeadmin"><i className="fa fa-filter fa-fw"></i> Junk <span className="badge badge-pill badge-primary float-right">8</span></Link></li> */}
                {/* <li className="nav-item"><Link className="nav-link" to="/homeadmin"><i className="fa fa-trash-o fa-fw"></i> Trash</Link></li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="tile">
            <div className="mailbox-controls">
            </div>
            <div className="table-responsive mailbox-messages">
                  <center><h1><i className="fa fa-inbox"></i> Inbox</h1></center>
            <table className="table table-hover table-bordered" id="example" >
                <thead>
                  <tr>
                    <th>First name</th>
                    <th>Email</th>
                    <th>Time</th>
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

export default Pagemail;