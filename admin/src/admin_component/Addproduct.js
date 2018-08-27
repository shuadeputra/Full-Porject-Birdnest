import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

var userid_admin = cookies.get("login")

class Addproduct extends Component {

  state = {
    redirect: false,
    show_category : [],
    show_measure : [],
    show_condition : [],
    nextpage:'',
    annoucement:""
  }


  componentDidMount(){
    axios.get('http://localhost:3001/product/show_category', {
    })
      .then((respone) => {
        this.setState({ show_category: respone.data })
        // console.log(this.state.show_category)
      })

    axios.get('http://localhost:3001/product/measure', {
    })
      .then((respone) => {
        this.setState({ show_measure: respone.data })
        // console.log(this.state.show_measure)
      })

    axios.get('http://localhost:3001/product/condition', {
    })
      .then((respone) => {
        this.setState({ show_condition: respone.data })
        // console.log(this.state.show_condition)
      })      
  }


  Addproduct =(obj) =>{

    if(obj.nama_product.value.length >=1 && obj.price.value.length >=1 && obj.description.value.length >=1 ){
    axios.post('http://localhost:3001/product/addproduct',
      {
        nama_product: obj.nama_product.value,
        price: obj.price.value,
        quantity: obj.quantity.value,
        category: obj.category.value,
        condition: obj.condition.value,
        description: obj.description.value,
        Unit_measure: obj.Unit_measure.value,
        useradmin_id: userid_admin
      }).then((result) => {
        if(result.data === "berhasil"){
          this.setState({nextpage:"1"})
            this.setState({redirect:true})
        }
      })
    } else{
      this.setState({annoucement:"Please make sure your fill out all field"})
    }
  }


  render() {

  // Mengecek apakah passwod sudah dan username uda benar?
  if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
    cookies.set('pesan', "Username /Password anda salah", { path: '/' });
    this.setState({ redirect: true })
  }


    if (this.state.redirect && this.state.nextpage === "1") {
      return <Redirect to='/productall'/>
    }

  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }

  // Awal mulainya looping show category
        const data = this.state.show_category.map((item, index) => {
          var id = item.id
          var category_name = item.nama_category;
          return (
                <option key={index} value={id}>{category_name}</option>            
          )})

  // Awal mulainya looping show measure
        const data2 = this.state.show_measure.map((item, index) => {
          var id = item.id
          var name_measure = item.name_measure;
          return (
                <option key={index} value={id}>{name_measure}</option>            
          )})

  // Awal mulainya looping show condition
        const data3 = this.state.show_condition.map((item, index) => {
          var id = item.id
          var nama_condition = item.nama_condition;
          return (
                <option key={index} value={id}>{nama_condition}</option>            
          )})


    return (
      <div>

        {/* Bagian navbar admin */}
        <Navbaradmin product="active" />


        <main className="app-content">
          <div className="app-title">
            <div>
              <h1><i className="fa fa-product-hunt"></i> Add Product</h1><br />
              <Link className="btn btn-secondary btn-sm fa fa-arrow-left" to="/productall"> Back </Link>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item"><Link to="/productall">Product</Link></li>
              <li className="breadcrumb-item active">Add Product </li>
            </ul>
          </div>

          <div className="clearix"></div>
          <div className="col-md-12">
            <div className="tile">
              <h3 className="tile-title">Add Product</h3>
              <div className="tile-body row">
            <div className="form-group col-md-10">
              <label className="control-label">Name Product</label>
              <input ref="nama_product" className="form-control" type="text" placeholder="name product" required  />
            </div>
            <div className="form-group col-md-2 col-6">
              <label className="control-label">Product Price</label>
              <input ref="price" className="form-control" type="number" placeholder="price" required/>
            </div>
            <div className="form-group col-md-2 col-6">
              <label>Quantity </label>
              <input ref="quantity" className="form-control" type="number" placeholder="Quantity" required/>
            </div>

            <div className="form-group col-md-2 col-6">
              <label>Unit of measure</label>
              <select ref="Unit_measure" id="gender" className="form-control">
              {/* Likasi looping unit_measure */}
                    {data2}
              {/* End of looping unit_measure */}
              </select>
            </div>              
            <div className="form-group col-md-2 col-6">
              <label>Categori </label>
              <select ref="category" id="gender" className="form-control">
              {/* Lokasi looping category*/}
               {data}
               {/* End of looping cateogry */}
              </select>
            </div>
            <div className="form-group col-md-2 col-6">
              <label>Condition </label>
              <select ref="condition" id="gender" className="form-control">
              {/* Lokasi looping condition*/}
              {data3}
               {/* End of looping condition */}
              </select>
            </div>

            <div className="form-group col-md-12">
              <label>description</label>
              <textarea ref="description" id="message" rows="3" className="form-control" required></textarea>
            </div>

          <div className="form-group col-md-4 align-self-end">
          <p style={{color:"red"}}>{this.state.annoucement}</p>
              <button onClick={() => this.Addproduct(this.refs)} type="submit" className="btn btn-primary">
              <i className="fa fa-fw fa-lg fa-save"></i>Save</button>
          </div>              
              </div>
            </div>
          </div>
        </main>


      </div>
    );
  }
}

export default Addproduct;