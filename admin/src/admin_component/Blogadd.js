import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
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

class Blogadd extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      editorHtml: '', 
      theme: 'snow' ,
      selectedFile: '',
      meta_tittle: "",
      meta_dsc:"",
      title:"",
      nextpage:"",
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
    // console.log(this.state.editorHtml)
  }

  blog_add(obj){
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
    var self = this
    axios.post('http://localhost:3001/blog/addblog', 
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

    if (this.state.redirect && this.state.nextpage === "1") {
      return <Redirect to='/blogall' />
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    return (
      <div>

        {/* Bagian navbar admin */}
        <Navbaradmin blog="active" />


        <main className="app-content">
          <div className="app-title">
            <div>
              <h1><i className="fa fa-book"></i> Add Blog</h1><br />
              <Link className={"btn btn-secondary btn-sm fa fa-arrow-left"} to="blogall"> Back </Link>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item"><Link to="/blogall">Blog</Link></li>
              <li className="breadcrumb-item active">Add blog</li>
            </ul>
          </div>
          <form onSubmit={this.onSubmit} method='post'className="row" encType="multipart/form-data">
          <div className="clearix"></div>
          <div className="col-md-12">
            <div className="tile">
              <h3 className="tile-title">Add Blog</h3>
              <div className="tile-body">
                <div className="row">
                  <div className="form-group col-md-10">
                    <label className="control-label">Tittle Blog</label>
                    <input className="form-control" ref="title" type="text" placeholder="Title Blog" />
                  </div>
                  <div className="form-group col-md-10">
                    <label className="control-label"> Meta tag tittle </label>
                    <input className="form-control" ref="meta_tittle" type="text" placeholder="Meta tag title" />
                  </div>
                  <div className="form-group col-md-10">
                    <label className="control-label"> Meta tag Description</label>
                    <input className="form-control" ref="meta_dsc" type="text" placeholder="Meta tag description" />
                  </div>

                  <div className="form-group col-md-12">
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
                    {/* <textarea id="message"  className="form-control"></textarea> */}
                    <ReactQuill
                      theme={this.state.theme}
                      onChange={this.handleChange}
                      value={this.state.editorHtml}
                      modules={Blogadd.modules}
                      formats={Blogadd.formats}
                      bounds={'.app'}
                      placeholder={this.props.placeholder}
                    />
                  </div>

                  <div className="form-group col-md-4 align-self-end">
                    <button onClick={() => this.blog_add(this.refs)} className="btn btn-primary" type="submit"><i className="fa fa-fw fa-lg fa-save"></i>Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </form>
        </main>
      </div>
    );
  }
}


Blogadd.modules = {
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
Blogadd.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]



export default Blogadd;