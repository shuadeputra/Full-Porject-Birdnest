import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class report extends Component {

  state={
    dataku:[],
    selectedFileSlide: '',
    onChangepicks1: '',
    onChangepicks2: '',
    onChangepicks3: '',
    content_picture_picks1:"",
    content_picture_picks2:"",
    content_picture_picks3:"",
    next:false
  }

  componentDidMount(){
    axios.get("http://localhost:3001/fronthome")
    .then((response)=>{
      if(response.data !== undefined){
        this.setState({dataku:response.data})
      }
    })
  }

//////////// Start from send slide //////////////////
  onChangeslide = (e) => {
    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ selectedFileSlide: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  sendslide(obj){
    var content_picture_slide = obj.content_picture_slide.value
    this.setState({content_picture_slide:content_picture_slide})
  }

    onSubmitslide = (e) => {
      e.preventDefault();
      const { selectedFileSlide } = this.state;
      let formData = new FormData();
  
      formData.append('file',selectedFileSlide);
      formData.append('content_picture_slide', this.state.content_picture_slide);
      formData.append('useradmin_id', cookies.get("login"));
      var self = this
      axios.post('http://localhost:3001/fronthome/slideedit', 
      formData
    )
        .then((result) => {
          if(result.data === "Berhasil"){
            self.setState({next:true}) 
          }
        });
    }
    ////// End dari sendslide //////////////////



///// Untuk melakukan sendpick1

onChangepicks1 = (e) => {
  switch (e.target.name) {
    case 'selectedFile':
      this.setState({ onChangepicks1: e.target.files[0] });
      break;
    default:
      this.setState({ [e.target.name]: e.target.value });
  }
}

sendpicks1(obj){
  var content_picture_picks1 = obj.content_picture_picks1.value
  this.setState({content_picture_picks1:content_picture_picks1})
}

  onSubmitsendpicks1 = (e) => {
      e.preventDefault();
      const { onChangepicks1 } = this.state;
      let formData = new FormData();
  
      formData.append('file',onChangepicks1);
      formData.append('content_picture_picks1', this.state.content_picture_picks1);
      formData.append('useradmin_id', cookies.get("login"));
      var self = this
      axios.post('http://localhost:3001/fronthome/pick1edit', 
      formData
    )
        .then((result) => {
          if(result.data === "Berhasil"){
            self.setState({next:true}) 
          }
        });
    }
/////// End dari sendpick1 /////////


///// Untuk melakukan sendpick2
  onChangepicks2 = (e) => {
    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ onChangepicks2: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  sendpicks2(obj){
    var content_picture_picks2 = obj.content_picture_picks2.value
    this.setState({content_picture_picks2:content_picture_picks2})
  }

  onSubmitsendpicks2 = (e) => {
    e.preventDefault();
    const { onChangepicks2 } = this.state;
    let formData = new FormData();

    formData.append('file',onChangepicks2);
    formData.append('content_picture_picks2', this.state.content_picture_picks2);
    formData.append('useradmin_id', cookies.get("login"));
    var self = this
    axios.post('http://localhost:3001/fronthome/pick2edit', 
    formData
  )
      .then((result) => {
        if(result.data === "Berhasil"){
          self.setState({next:true}) 
        }
      });
  }

/////// End dari sendpick2 /////////

///// Untuk melakukan sendpick3
  onChangepicks3 = (e) => {
    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ onChangepicks3: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  sendpicks3(obj){
    var content_picture_picks3 = obj.content_picture_picks3.value
    this.setState({content_picture_picks3:content_picture_picks3})
  }

  onSubmitsendpicks3 = (e) => {
    e.preventDefault();
    const { onChangepicks3 } = this.state;
    let formData = new FormData();

    formData.append('file',onChangepicks3);
    formData.append('content_picture_picks3', this.state.content_picture_picks3);
    formData.append('useradmin_id', cookies.get("login"));
    var self = this
    axios.post('http://localhost:3001/fronthome/pick3edit', 
    formData
  )
      .then((result) => {
        if(result.data === "Berhasil"){
          self.setState({next:true}) 
        }
      });
  }

/////// End dari sendpick3 /////////


/////// Start Edit footer content /////
  footercontent(obj) {
    var content_shipping = obj.content_shipping.value
    var content_money = obj.content_money.value
    var content_phone = obj.content_phone.value

    axios.post('http://localhost:3001/fronthome/footercontentedit', {
      content_shipping:content_shipping,
      content_money:content_money,
      content_phone:content_phone,
      useradmin_id: cookies.get("login")
    })
    .then((response)=>{
      if(response.data === "Berhasil"){
        this.setState({next:true}) 
      }
    })
  }
///// End From footer content //////


  
 
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

  /// Berhasil change picture dan yang lain akan pindah ke
    if (this.state.next) {
      return <Redirect to='/homeadmin'/>
    }


    ////////// Awal dari looping
    const data = this.state.dataku.map((item,index)=>{
      var picture_slide = item.picture_slide
      var content_picture_slide = item.content_picture_slide
      var picture_picks1 = item.picture_picks1
      var content_picture_picks1 = item.content_picture_picks1
      var picture_picks2 = item.picture_picks2
      var content_picture_picks2 =  item.content_picture_picks2
      var picture_picks3 =  item.picture_picks3
      var content_picture_picks3 = item.content_picture_picks3
      var content_shipping = item.content_shipping
      var content_money = item.content_money
      var content_phone = item.content_phone

      return <div key={index} className="tile-body container">
        <center>
          <h2 className="line-head" style={{ color: "green" }}>Front home <i className="app-menu__icon fa fa-file"></i></h2>
        </center>


        {/* For picture slide one */}
        <form onSubmit={this.onSubmitslide} method='post' className="row" encType="multipart/form-data">
          <div className="form-group col-md-2">
            <label>Picture Slide</label><br />
            <img alt="product_img" src={`http://localhost:3001/image/front_home/${picture_slide}`} style={{ width: '130px', height: '130px', border: "1px black solid" }} />
          </div>
          <div className="form-group col-md-6">
            <label>Content</label> :
           <input className="form-group" ref="content_picture_slide" defaultValue={content_picture_slide} /><br />
            <label>Change Slide Picture</label>
            <input ref="picture"
              name="selectedFile"
              type="file"
              id="file"
              accept=".jpg,.png,.jpeg,.bmp,.gif"
              className="form-control-file"
              onChange={this.onChangeslide} />
          </div>
          <div className="form-group col-md-2 align-self-end">
            <button onClick={()=>this.sendslide(this.refs)} className="btn btn-primary" type="submit"><i className="fa fa-fw fa-lg fa-save"></i>Save</button>
          </div>
        </form>
        <hr />
        {/* End of picture side */}


        {/* Start from picture picks 1 */}
        <form onSubmit={this.onSubmitsendpicks1} method='post' className="row" encType="multipart/form-data">
          <div className="form-group col-md-2">
            <label>Picture Picks 1</label><br />
            <img alt="product_img" src={`http://localhost:3001/image/front_home/${picture_picks1}`} style={{ width: '130px', height: '130px', border: "1px black solid" }} />
          </div>
          <div className="form-group col-md-6">
            <label>Content</label> :
           <input className="form-group" ref="content_picture_picks1" defaultValue={content_picture_picks1} /><br />
            <label>Change Slide Picture</label>
            <input ref="picture"
              name="selectedFile"
              type="file"
              id="file"
              accept=".jpg,.png,.jpeg,.bmp,.gif"
              className="form-control-file"
              onChange={this.onChangepicks1} />
          </div>
          <div className="form-group col-md-2 align-self-end">
            <button onClick={()=>this.sendpicks1(this.refs)} className="btn btn-primary" type="submit"><i className="fa fa-fw fa-lg fa-save"></i>Save</button>
          </div>
        </form><hr />
        {/* End of picture picks 1  */}

        {/* Start for picture picks 2 */}
        <form onSubmit={this.onSubmitsendpicks2} method='post' className="row" encType="multipart/form-data">
          <div className="form-group col-md-2">
            <label>Picture Picks 2</label><br />
            <img alt="product_img" src={`http://localhost:3001/image/front_home/${picture_picks2}`} style={{ width: '130px', height: '130px', border: "1px black solid" }} />
          </div>
          <div className="form-group col-md-6">
            <label>Content</label> :
           <input className="form-group" ref="content_picture_picks2" defaultValue={content_picture_picks2} /><br />
            <label>Change Slide Picture</label>
            <input ref="picture"
              name="selectedFile"
              type="file"
              id="file"
              accept=".jpg,.png,.jpeg,.bmp,.gif"
              className="form-control-file"
              onChange={this.onChangepicks2} />
          </div>
          <div className="form-group col-md-2 align-self-end">
            <button onClick={()=>this.sendpicks2(this.refs)}  className="btn btn-primary" type="submit"><i className="fa fa-fw fa-lg fa-save"></i>Save</button>
          </div>
        </form><hr />
        {/* End of picture picks 2 */}

        {/* Start for picture picks 3 */}
        <form onSubmit={this.onSubmitsendpicks3} method='post' className="row" encType="multipart/form-data">
          <div className="form-group col-md-2">
            <label>Picture Picks 3</label><br />
            <img alt="product_img" src={`http://localhost:3001/image/front_home/${picture_picks3}`} style={{ width: '130px', height: '130px', border: "1px black solid" }} />
          </div>
          <div className="form-group col-md-6">
            <label>Content</label> :
           <input className="form-group" ref="content_picture_picks3" defaultValue={content_picture_picks3} /><br />
            <label>Change Slide Picture</label>
            <input ref="picture"
              name="selectedFile"
              type="file"
              id="file"
              accept=".jpg,.png,.jpeg,.bmp,.gif"
              className="form-control-file"
              onChange={this.onChangepicks3} />
          </div>
          <div className="form-group col-md-2 align-self-end">
            <button onClick={()=>this.sendpicks3(this.refs)} className="btn btn-primary" type="submit"><i className="fa fa-fw fa-lg fa-save"></i>Save</button>
          </div>
        </form><hr />
        {/* End of picture picks 3 */}
        <label>free shipping & return</label> :
       <br />
        <input className="form-group" ref="content_shipping" defaultValue={content_shipping} /><br />
        <label>Money Back Guarantee</label> :
       <br />
        <input className="form-group" ref="content_money" defaultValue={content_money} /><br />
        <label>Phone number</label> :
       <br />
        <input className="form-group" ref="content_phone" defaultValue={content_phone} /><br />

        <button onClick={()=>this.footercontent(this.refs)} className="btn btn-primary"><i className="fa fa-fw fa-lg fa-save"></i>Save</button>
      </div>

    })

    return (
      <div>
        

        {/* Bagian navbaradmin */}
        <Navbaradmin front="active" />

        <main className="app-content">
          <div className="app-title responsive-table">
            <div>
              <h1><i className="fa fa-television"></i> Front Home</h1>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
              <li className="breadcrumb-item">Front home</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-12">
            <div className="tile">
              
              {/* Tampilan looping */}
                {data}
              {/* akhir dari tampilan looping */}
              </div>
            </div>
          </div>
        </main>

      </div>
    );
  }
}

export default report;