import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import Cookies from 'universal-cookie';



// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class sendmailview extends Component {
state = { 
    showpagmail:[],
}


  componentDidMount(){
    var id = this.props.location.state.id
    axios.get('http://localhost:3001/sentmail/'+id)
    .then((ambilData) => {
      if(ambilData !== undefined){
    this.setState({showpagmail:ambilData.data,});
      }
  })
  }

  render() {

  // Mengecek apakah passwod sudah dan username uda benar?
  if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
    cookies.set('pesan', "Username /Password anda salah", { path: '/' });
    this.setState({ redirect: true })
  }

  // untuk pindah page
    if (this.state.redirect && this.state.nextpage === "1") {
      return <Redirect to='/pagemail'/> 
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }


     // Looping database dimulai
     const data = this.state.showpagmail.map((item, index) => {
      var first_name = item.customer_firstname ;
      var replay_massage_before = item.replay_massage_before ;	
      var email = item.to;	
      var massage  = item.massage ;	
      
      return <div key={index}>
          <p> First name : {first_name}</p>
          <p> Email : {email}</p>
          <p> replay before : {replay_massage_before}</p>
          <span> massage : 
            <hr/>
            {/* code dangerouslySetInnerHTML untuk mengubah string html menjadi html */}
            <p dangerouslySetInnerHTML={{__html: massage }} ></p>
         </span>
          <hr/>
        </div>
    })



    return (
   <div>

     {/* Bagian navbar admin */}
    <Navbaradmin pagemail="active"/>


  <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="fa fa-envelope-o"></i> View Sent MailBox</h1><br/>
          <Link className={"btn btn-secondary btn-sm fa fa-arrow-left"} to="/sendmail"> Back </Link>
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item"><Link to="/sendmail">MailBox</Link></li>
          <li className="breadcrumb-item active">View Sent MailBox</li>
        </ul>
      </div>
     
      <div className="clearix"></div>
        <div className="col-md-12">
          <div className="tile">
          <center>
            <h3 className="tile-title"> Sent MailBox</h3>
            </center>
            <hr/>
            <div className="tile-body">

            {/* looping blog */}

                {data}
            {/* End of looping blog */}

            </div>
          </div>
        </div>
    </main>
    

    </div>
    );
  }
}

export default sendmailview;