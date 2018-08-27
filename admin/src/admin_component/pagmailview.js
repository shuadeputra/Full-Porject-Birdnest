import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import Cookies from 'universal-cookie';
import ReactQuill from 'react-quill';

const Quill = ReactQuill.Quill
var Font = Quill.import('formats/font');
Font.whitelist = ['Ubuntu', 'Raleway', 'Roboto'];
Quill.register(Font, true);

// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

class pagmailview extends Component {
  constructor(props) {
    super(props)
    this.state={
    showpagmail:[],
    editorHtml: '',
    theme: 'snow' ,
    nextpage:"",
    massage:"",
    first_name:"",
  }
  this.handleChange = this.handleChange.bind(this)
}

handleChange(html) {
  this.setState({ editorHtml: html });
}

  componentDidMount(){
    var id = this.props.location.state.id
    axios.get('http://localhost:3001/pagemail/'+id)
    .then((ambilData) => {
      if(ambilData !== undefined){
    this.setState({showpagmail:ambilData.data,});
    this.setState({massage:ambilData.data[0].massage,});
    this.setState({first_name:ambilData.data[0].first_name,});
      }
  })
  }

  send(obj){
    axios.post('http://localhost:3001/pagemail/sendingemail',{
      to: obj.to.value,
      subject: obj.subject.value, 
      text: this.state.editorHtml,
      replay_massage_before : this.state.massage,
      first_name: this.state.first_name
    }).then((respon)=>{
        if(respon.data === "berhasil"){
          this.setState({nextpage:"1"})
          this.setState({redirect:true})
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
      var first_name = item.first_name ;
      var last_name = item.last_name ;	
      var email = item.email;	
      var massage  = item.massage ;	
      return <div key={index}>
          <p> First name : {first_name}</p>
          <p> Last name : {last_name}</p>
          <p> Email : {email}</p>
          <p> massage : {massage}</p>
          <hr/>
        <center>
          <h3>Reply Email <i className="fa fa-envelope-o"></i></h3>
        </center>
          <div className="form-group col-md-10">
          <input className="form-control" type="text" ref="to" placeholder="to" defaultValue={email}/>
          <input className="form-control" type="text" ref="subject" placeholder="Subject" />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="message">Massage</label>
            
            <ReactQuill
              theme={this.state.theme}
              onChange={this.handleChange}
              value={this.state.editorHtml}
              modules={pagmailview.modules}
              formats={pagmailview.formats}
              bounds={'.app'}
              placeholder={this.props.placeholder}
            />

          </div>

          <div className="form-group col-md-4 align-self-end">
            <button onClick={() => this.send(this.refs)} className="btn btn-primary" type="submit"><i className="fa fa-fw fa-lg fa fa-paper-plane-o"></i>Change</button>
          </div>
        {/* </form> */}
        </div>
      
    })



    return (
   <div>

     {/* Bagian navbar admin */}
    <Navbaradmin pagemail="active"/>


  <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="fa fa-envelope-o"></i> View MailBox</h1><br/>
          <Link className={"btn btn-secondary btn-sm fa fa-arrow-left"} to="/pagemail"> Back </Link>
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item"><Link to="/pagemail">MailBox</Link></li>
          <li className="breadcrumb-item active">View MailBox</li>
        </ul>
      </div>
     
      <div className="clearix"></div>
        <div className="col-md-12">
          <div className="tile">
            <h3 className="tile-title">MailBox</h3>
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


pagmailview.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': Font.whitelist }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ]
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
pagmailview.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]



export default pagmailview;