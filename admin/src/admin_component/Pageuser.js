import React, { Component } from 'react';
import Navbaradmin from './Navbaradmin';
import {Redirect} from "react-router-dom"
import axios from 'axios';
import Cookies from 'universal-cookie';

// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class Pagemail extends Component {

  state={
    editdata:[],
    username:"",
    fullname:"",
    email:"",
    mobile:"",
    address:"",
    gender:"",
    selectedFile: '',
    gender_send:"",
    username_send:"",
    fullname_send:"",
    email_send:"",
    mobile_number_send:"",
    address_send:"" ,
    skils_send:"",
    skils:"",
    next:"",
    redirect:false,
    massage:""
  }

  componentDidMount(){
    axios.post('http://localhost:3001/showprofile',{
      id: cookies.get("login")
    }).then((response)=>{
      if(response !== undefined){
        // ini untuk bagian view profile
        this.setState({username:response.data[0].name})
        this.setState({fullname:response.data[0].full_name})
        this.setState({email:response.data[0].email})
        this.setState({mobile:response.data[0].phone})
        this.setState({gender:response.data[0].gender})
        this.setState({address:response.data[0].address})
        this.setState({address:response.data[0].address})
        this.setState({skils:response.data[0].skils})
        this.setState({image_profile:response.data[0].image_profile})
        // akhir dari bagian view profile
        this.setState({editdata:response.data})
      }
    })
  }

  onChange = (e) => {
    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ selectedFile: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  edit(obj){
    this.setState({gender_send:obj.gender.value})
    this.setState({username_send:obj.username.value})
    this.setState({fullname_send:obj.fullname.value})
    this.setState({email_send:obj.email.value})
    this.setState({mobile_number_send:obj.mobile_number.value})
    this.setState({address_send:obj.address.value})
    this.setState({skils_send:obj.skils.value})
  }


  onSubmit = (e) => {
    e.preventDefault();
    const { selectedFile } = this.state;
    let formData = new FormData();

    formData.append('file',selectedFile);
    formData.append('id',cookies.get("login") );
    formData.append('gender',this.state.gender_send );
    formData.append('username',this.state.username_send );
    formData.append('fullname',this.state.fullname_send );
    formData.append('email',this.state.email_send );
    formData.append('mobile_number',this.state.mobile_number_send );
    formData.append('address',this.state.address_send );
    formData.append('skils',this.state.skils_send );
    axios.post('http://localhost:3001/editprofile', 
    formData
  )
      .then((result) => {
        if(result.data === "Berhasil"){
          this.setState({next:1})
          this.setState({redirect:true})
        }
      });
  }

  changepass(obj){

    var re_enternew = obj.re_enternew.value;
    var newpass = obj.newpass.value;
    var oldpass = obj.oldpass.value;
    ////// Mengecek dl apakah password baru yang di input sudah sama? /////
    if( re_enternew === newpass){
    axios.post('http://localhost:3001/changepass',{
      newpass:newpass,
      oldpass:oldpass,
      id: cookies.get("login")
    }).then((response)=>{
      if(response.data === "Berhasil"){
          this.setState({next:1})
          this.setState({redirect:true})
      }else{
        this.setState({massage:"Your old password is wrong"})
      }
    })
    } else{
      this.setState({massage:"Plase Make Sure Your New Password and Confirm New Password Is Same"})
    }
  }

  render() {

       // Mengecek apakah passwod sudah dan username uda benar?
   if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
    cookies.set('pesan', "Username /Password anda salah", { path: '/' });
    this.setState({ redirect: true })
  }

  // pindah page setelah berhasil
   if(this.state.redirect && this.state.next === 1){
    return <Redirect to='/homeadmin'/>
   }

  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }


    ///////////// Looping dari untuk edit profile /////////////
    const data = this.state.editdata.map((item,index)=>{

      var username = item.name
      var fullname = item.full_name
      var email = item.email
      var mobile = item.phone
      var address = item.address
      var skils = item.skils

      return <form onSubmit={this.onSubmit} method='post' encType="multipart/form-data" key={index}>
      <div className="row mb-4">
        <div className="col-md-5">
          <label>User Name</label>
          <input className="form-control" ref="username" type="text" defaultValue={username}/>
        </div>
        <div className="col-md-5">
          <label>Full Name</label>
          <input className="form-control" ref="fullname" type="text" defaultValue={fullname}/>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-5 mb-4">
          <label>Email</label>
          <input className="form-control" ref="email" type="text" defaultValue={email}/>
        </div>
        <div className="clearfix"></div>
        <div className="col-md-5 mb-4">
          <label>Mobile No</label>
          <input className="form-control" ref="mobile_number" type="text" defaultValue={mobile}/>
        </div>
        <div className="clearfix"></div>
        <div className="col-md-5 mb-4">
          <label>Address </label>
          <input className="form-control" ref="address" type="text" defaultValue={address}/>
        </div>
        <div className="clearfix"></div>
        <div className="col-md-5 mb-4">
          <label>Skils </label>
          <input className="form-control" ref="skils" type="text" defaultValue={skils}/>
        </div>
        <div className="clearfix"></div>
        <div className="col-md-8 mb-4">
          <label>Gender</label>
            <select className="form-control" ref="gender" defaultValue={this.state.gender}>
              <option value="Boy">Boy</option>
              <option value="Girl">Girl</option>
            </select>
        </div>
      </div>

          <div className="form-group col-md-12">
            <label>Profile Picture</label>
            <input ref="picture"
              name="selectedFile"
              type="file"
              id="file"
              accept=".jpg,.png,.jpeg,.bmp,.gif"
              className="form-control-file"
              onChange={this.onChange} />
          </div>

      <div className="row mb-10">
        <div className="col-md-12">
          <button className="btn btn-primary" onClick={()=>this.edit(this.refs)} type="submit"><i className="fa fa-fw fa-lg fa-check-circle"></i> Save</button>
        </div>
      </div>
      </form>
    })


    return (
   <div>
    
    {/* Bagian navbaradmin */}
    <Navbaradmin Homeadmin="active"/>

    <main className="app-content">
      <div className="row user">
        <div className="col-md-12">
          <div className="profile">
            <div className="info col-md-12">
            <img className="user-img" alt="user_picture" src={`http://localhost:3001/image/user_admin/${this.state.image_profile}`} tyle={{width:"150px", height:"122px"}}/>

              <h4>{this.state.fullname}</h4>
              <p>{this.state.skils}</p>
            </div>
          </div>
        </div>

        {/* Bagian view profile */}
        <div className="col-md-3">
          <div className="tile p-0">
            <ul className="nav flex-column nav-tabs user-tabs">
              <li className="nav-item"><span className="nav-link active" href="#viewprofile" data-toggle="tab">Profile</span></li>
              <li className="nav-item"><span className="nav-link" href="#editprofile" data-toggle="tab">Edit Profile</span></li>
              <li className="nav-item"><span className="nav-link" href="#editpassword" data-toggle="tab">Edit Password</span></li>
            </ul>
          </div>
        </div>
        <div className="col-md-8 ">
          <div className="tab-content">
            <div className="tab-pane active" id="viewprofile">
            <div className="tile user-settings">
                    <center>
                      <h2 className="line-head" style={{color:"green"}}>Profile</h2>
                    </center>
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <label><u><h5>User Name :</h5></u></label>
                      <h5>- {this.state.username}</h5>
                    </div>
                    <div className="col-md-5">
                      <label><u><h5>Full Name :</h5></u></label>
                      <h5>- {this.state.fullname}</h5>
                    </div>
                  </div>
                  <hr/>
                  <div className="row mb-4">
                    <div className="col-md-6 mb-4">
                      <label><u><h5>Email :</h5></u></label>
                      <h5>- {this.state.email}</h5>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-md-5 mb-4">
                      <label><u><h5>Mobile No :</h5></u></label>
                      <h5>- {this.state.mobile}</h5>
                    </div>
                    </div>
                    <hr/>
                    <div className="row mb-4">
                    <div className="col-md-6 mb-4">
                      <label><u><h5>Address :</h5></u></label>
                      <h5>- {this.state.address}</h5>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-md-5 mb-4">
                      <label><u><h5>Gender :</h5></u></label>
                      <h5>- {this.state.gender}</h5>
                    </div>
                    </div>
              </div>
            </div>
            {/* End of view profile */}


            {/* Start edit password */}
            <div className="tab-pane fade" id="editpassword">
            <div className="tile user-settings">
                    <center>
                      <h2 className="line-head" style={{color:"Blue"}}>Edit Password</h2>
                    </center>
                    <div className="row mb-4">
                      <div className="col-md-5">
                        <label>Old Password</label>
                        <input className="form-control" ref="oldpass" type="password"/>
                      </div>
                      <div className="col-md-5">
                        <label>New Password</label>
                        <input className="form-control" ref="newpass" type="password" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="clearfix"></div>
                      <div className="col-md-8 mb-4">
                        <label>Re-enter new password</label>
                        <input className="form-control" ref="re_enternew" type="password" />
                      </div>
                    </div>
                   <center><p style={{color:"red"}}>{this.state.massage}</p></center>
                    <div className="row mb-10">
                      <div className="col-md-12">
                        <button className="btn btn-primary" onClick={() => this.changepass(this.refs)} type="submit"><i className="fa fa-fw fa-lg fa-check-circle"></i> Save</button>
                      </div>
                    </div>
                  </div>
            </div>
            {/* End of Editpassword */}

          {/* Bagian dari Editprofile */}
            <div className="tab-pane fade" id="editprofile">
              <div className="tile user-settings">
              <center>
                <h4 className="line-head">Edit Profile</h4>
              </center>

              {/* Looping dari untuk edit data */}
                {data}
              {/* looping dari untuk edit data */}
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