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

class Blogedit extends Component {
  constructor(props) {
    super(props)
    this.state={
    editblog:[],
    editorHtml: '',
    theme: 'snow' ,
    selectedFile: '',
    meta_tittle: "",
    meta_dsc:"",
    title:"",
    id:"",
    nextpage:"",
  }
  this.handleChange = this.handleChange.bind(this)
}

handleChange(html) {
  this.setState({ editorHtml: html });
  // console.log(this.state.editorHtml)
}

blog_edit(obj){
  this.setState({meta_tittle: obj.meta_tittle.value})
  this.setState({meta_dsc: obj.meta_dsc.value})
  this.setState({title: obj.title.value})
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


  componentDidMount(){
    var id = this.props.location.state.id
    axios.get('http://localhost:3001/blogedit/'+id)
    .then((ambilData) => {
    this.setState({
      editblog:ambilData.data,
      editorHtml:ambilData.data[0].description,
      id:ambilData.data[0].id,
      image:ambilData.data[0].image  
    });
  })
  }


  onSubmit = (e) => {
    e.preventDefault();
    const { selectedFile } = this.state;
    let formData = new FormData();

    formData.append('file',selectedFile);
    formData.append('description', this.state.editorHtml);
    formData.append('meta_tittle', this.state.meta_tittle);
    formData.append('meta_dsc', this.state.meta_dsc);
    formData.append('title', this.state.title);
    formData.append('useradmin_id', cookies.get("login"));
    formData.append('id', this.state.id);
    formData.append('image', this.state.image);
    var self = this
    axios.post('http://localhost:3001/blog/edit', 
    formData
  ).then((result) => {
      if(result.data === "berhasil"){
        self.setState({nextpage:"1"})
        self.setState({redirect:true})
      }
    }); 
  }



  render() {

  // Mengecek apakah passwod sudah dan username uda benar?
  if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
    cookies.set('pesan', "Username /Password anda salah", { path: '/' });
    this.setState({ redirect: true })
  }

  // untuk pindah page
    if (this.state.redirect && this.state.nextpage === "1") {
      return <Redirect to='/blogall'/> 
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }


     // Looping database dimulai
     const data = this.state.editblog.map((item, index) => {
      // var id = item.id;
      // var useradmin_id= item.useradmin_id;
      var meta_tittle= item.meta_tittle;
      var meta_dsc= item.meta_dsc;	
      var title= item.title;	
      // var description= item.description;	
      var image= item.image;
      return <form key={index} onSubmit={this.onSubmit} method='post'className="row" encType="multipart/form-data">
          <div className="form-group col-md-10">
            <label className="control-label">Title Product</label>
            <input className="form-control" type="text" ref="title" placeholder="Title product" key={index} defaultValue={title} />
          </div>
          <div className="form-group col-md-10">
            <label className="control-label"> Meta tag tittle </label>
            <input className="form-control" type="text" ref="meta_tittle" placeholder="Meta tag title" key={index} defaultValue={meta_tittle} />
          </div>
          <div className="form-group col-md-10">
            <label className="control-label"> Meta tag Description</label>
            <input className="form-control" type="text" ref="meta_dsc" placeholder="Meta tag description" key={index} defaultValue={meta_dsc} />
          </div>

          <div className="form-group col-md-10">
          <label htmlFor="firstname" className="form-label"> Old Image </label> :
                <img alt='blog_img' style={{width:"160px",height:"160px",marginLeft:"20px",border:"1px solid black"}}  src={`http://localhost:3001/image/blog/${image}`}/>
                <br/><br/>

            <label htmlFor="file">Picture Product</label>
            <input ref="picture"
              name="selectedFile"
              type="file"
              id="file"
              accept=".jpg,.png,.jpeg,.bmp,.gif"
              className="form-control-file"
              onChange={this.onChange} />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="message">Description</label>
            
            <ReactQuill
              theme={this.state.theme}
              onChange={this.handleChange}
              value={this.state.editorHtml}
              modules={Blogedit.modules}
              formats={Blogedit.formats}
              bounds={'.app'}
              placeholder={this.props.placeholder}
            />

          </div>

          <div className="form-group col-md-4 align-self-end">
            <button onClick={() => this.blog_edit(this.refs)} className="btn btn-primary" type="submit"><i className="fa fa-fw fa-lg fa-save"></i>Change</button>
          </div>
        </form>
    })



    return (
   <div>

     {/* Bagian navbar admin */}
    <Navbaradmin blog="active"/>


  <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="fa fa-book"></i> Edit Blog</h1><br/>
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
            <h3 className="tile-title">Edit Blog</h3>
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


Blogedit.modules = {
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
Blogedit.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]



export default Blogedit;