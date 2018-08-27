import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Customersidebar from './Customersidebar';
import '../App.css';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Customeraccountedit extends Component {
  state={
    Email_Address:"",
    First_Name:"",
    Last_Name:"",
    image:"isi",
    phone:"",
    foto: '',
    confim:'',
    announcement:"",
    ambildata:[]
  }
  componentDidMount(){
    axios.post('http://localhost:3002/customer/ditel',{
      id_user: cookies.get("login")
    }).then((respon) => {
      if(respon.data.length === 1 ){
        this.setState({ambildata:respon.data});
        this.setState({image:respon.data[0].image});
        this.setState({First_Name:respon.data[0].First_Name});
        this.setState({Last_Name:respon.data[0].Last_Name});
        this.setState({Email_Address:respon.data[0].Email_Address});
        this.setState({phone:respon.data[0].phone});
        }
    })
      
  }


  onchange = (e) => {
    switch(e.target.name){
        case 'foto':
            this.setState({
                foto: e.target.files[0],
            });
            break;
    default :
          this.setState({
            foto: "",});
    }
  }


value = (e) => {
    this.setState({
      First_Name:e.First_Name.value,
      Last_Name:e.Last_Name.value,
      Email_Address:e.Email_Address.value,
      Phone_Number:e.Phone_Number.value,
    })
  }

  update = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('file', this.state.foto);
    formData.append('First_Name', this.state.First_Name);
    formData.append('Last_Name', this.state.Last_Name);
    formData.append('Email_Address', this.state.Email_Address);
    formData.append('Phone_Number', this.state.Phone_Number);
    formData.append('id_user', cookies.get("login"));

    axios.post('http://localhost:3002/customer/update/', formData)
    .then((respon) => {
      if(respon.data === "berhasil"){
      this.setState({ confim: respon.data });
      this.setState({ redirect: true });
      }
    });
  }

  robahpass(obj){
   
    axios.post('http://localhost:3002/customer/update/password',{
      id_user: cookies.get("login"),
      oldpass: obj.oldpass.value,
      newpass: obj.newpass.value,
      retypenewpass: obj.newpass2.value,
    }).then((respon) => {

      this.setState({ announcement: respon.data });
      if(respon.data === "berhasil"){
        this.setState({ confim: respon.data });
        this.setState({ redirect: true });
        }
    });
  }


  render() {

    // Mengecek apakah passwod sudah dan username uda benar?
    if (cookies.get("login") < 1) {
      this.setState({redirect:true})
    }
        
    // Mengirim ke page checkout2
    if (this.state.redirect && this.state.confim === "berhasil") {
      return <Redirect to='/customeraccount' />
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/customerlogin' />
    }


    // Awal looping dimulai
    const data = this.state.ambildata.map((item, index) => {
      var image = item.image;
      var First_Name = item.First_Name;
      var Last_Name = item.Last_Name;
      var Email_Address = item.Email_Address;
      var phone = item.phone;

      return <form key={index} className="content-block" method="get" onSubmit={this.update}>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label className="form-label">Firstname</label>
            <input id="firstname" ref="First_Name" type="text" className="form-control" defaultValue={First_Name}/>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="form-label">Lastname</label>
            <input id="lastname" ref="Last_Name" type="text" className="form-control" defaultValue={Last_Name}/>
          </div>
        </div>
      </div>

{/* <!-- /.row--> */}
        <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label className="form-label">Telephone</label>
            <input id="phone" ref="Phone_Number" type="text" className="form-control" defaultValue={phone}/>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input id="email" ref="Email_Address" type="text" className="form-control" defaultValue={Email_Address}/>
          </div>
        </div>
        <div className="col-sm-6">
        <label className="form-label"> Old Image </label> :
        <img style={{width:"160px",height:"160px",marginLeft:"20px",border:"1px solid black"}} alt="user_customer" src={`http://localhost:3002/image/user_customer/${image}`}/>
        </div>
        <div className="form-group col-sm-6">
          <label className="form-label">Change image</label>
          <input ref="foto" name="foto" onChange={this.onchange} type="file" className="form-control"  />
        </div>

        <div className="col-sm-12 text-center">
          <button style={{marginTop:"20px"}} type="submit" 
          onClick={() => this.value(this.refs)}
          className="btn btn-primary"><i className="fa fa-save"></i>Save changes</button>
        </div>
        </div>
    </form>
    })
    


    return (
    <div>
   
  <Navbar />
  
  {/* <!-- Hero Section--> */}
    <section className="hero hero-page gray-bg padding-small">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>Your addresses</h1>
          </div>
          <div className="col-lg-3 text-right order-1 order-lg-2">
            <ul className="breadcrumb justify-content-lg-end">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Your addresses</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="padding-small">
      <div className="container">
        <div className="row">
  {/* <!-- Customer Sidebar--> */}

    <Customersidebar Customeraccount='active'/>

  {/* <!-- End Customer Sidebar--> */}
        
  <div className="col-lg-8 col-xl-9 pl-lg-3">

        {/* Awal dar personal ditel */}
            <div className="block-header mb-5">
              <h5>Personal details</h5>
            </div>

            {/* looping awal di mulai */}
            {data}
            {/* akhir dari looping */}

        {/* Akhir dari change personal ditel */}


          {/* Awal dari change password */}
            <div className="block-header mb-5">
              <h5>Change password</h5>
            </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label">Old password</label>
                    <input ref="oldpass" id="password_old" type="password" className="form-control"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label">New password</label>
                    <input ref="newpass" id="password_1" type="password" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label">Retype new password</label>
                    <input ref="newpass2" id="password_2" type="password" className="form-control"/>
                  </div>
                </div>
              </div> 
      {/* <!-- /.row--> */}
              <div className="text-center" >
                <button onClick={() => this.robahpass(this.refs)} className="btn btn-primary"><i className="fa fa-save"></i>Change password</button>
              </div>
      {/* End of password  */}
                <center>
                <p style={{color:"red"}}>{this.state.announcement}</p>
                </center>
          </div>
        </div>
      </div>
    </section>

    

  <Footer/>

    </div>
    );
  }
}
export default Customeraccountedit;