import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies


class Editproduct extends Component {

  state = {
    redirect: false,
    dataKu: [],
    show_category:[],
    show_measure : [],
    show_condition : [],
    next:false,
  }

  componentDidMount() {

    var id = this.props.location.state.id
    axios.post('http://localhost:3001/product/editproduct', {
      id: id
    })
      .then((respone) => {
        // console.log(respone.data)
        if(respone.data !== undefined){
        this.setState({ dataKu: respone.data })
      }

      })
  
  // untuk show all product category 
      axios.get('http://localhost:3001/product/show_category', {
      })
        .then((respone) => {
          this.setState({ show_category: respone.data })
        })

  // untuk show all product measure
        axios.get('http://localhost:3001/product/measure', {
        })
          .then((respone) => {
            this.setState({ show_measure: respone.data })
            // console.log(this.state.show_measure)
          })
    
    // untuk product condition
        axios.get('http://localhost:3001/product/condition', {
        })
          .then((respone) => {
            this.setState({ show_condition: respone.data })
            // console.log(this.state.show_condition)
          })


  }

Edit(obj,id){

  // var self = this
  axios.post('http://localhost:3001/product/editproduct/update',
    {
  nama_product: obj.nama_product.value,
  price: obj.price.value,
  quantity: obj.quantity.value,
  category: obj.category.value,
  condition: obj.condition.value,
  description: obj.description.value,
  Unit_measure: obj.Unit_measure.value,
  useradmin_id: cookies.get("login"),
  id:id
    }).then((respone)=>{
      if(respone.data === "berhasil"){
        this.setState({next:true})
      }
    })
}



  render() {
    
    // Mengecek apakah passwod sudah dan username uda benar?
    if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
      cookies.set('pesan', "Username /Password anda salah", { path: '/' });
      this.setState({ redirect: true })
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    // Jika sudah melakukan edit maka akan menuju ke
    if (this.state.next) {
      return <Redirect to='/productall' />
    }

  // Looping dari get product show category
  const data2 = this.state.show_category.map((item, index) => {
    var id = item.id
    var category_name = item.nama_category;

      return <option key={index} value={id}>{category_name}</option>           
    })


  // Awal mulainya looping show measure
    const data3 = this.state.show_measure.map((item, index) => {
      var id = item.id
      var name_measure = item.name_measure;
        return <option key={index} value={id}>{name_measure}</option>
    })

    // Awal mulainya looping show condition
    const data4 = this.state.show_condition.map((item, index) => {
      var id = item.id
      var nama_condition = item.nama_condition;

        return <option key={index} value={id}>{nama_condition}</option>
    })

    // Awal mulainya looping dari post product edit
    const data = this.state.dataKu.map((item, index) => {
      var id = item.id_product
      var nama_product = item.nama_product;
      var price = item.price;
      var quantity = item.quantity;
      var category = item.category_id;
      var condition = item.condition_id;
      var description = item.description;
      var Unit_measure = item.Unit_measure_id;

      return <div key={index} className="row">
          <div key={index} className="form-group col-md-10">
            <label className="control-label">Name Product</label>
            <input ref="nama_product" rows="1" className="form-control" type="text" placeholder="name product" defaultValue={nama_product} required/>
          </div>
          <div className="form-group col-md-2 col-6">
            <label className="control-label">Product Price</label>
            <input ref="price" rows="1" className="form-control" type="number" placeholder="price" defaultValue={price} required/>
          </div>
          <div className="form-group col-md-2 col-6">
            <label>Quantity </label>
            <input ref="quantity" className="form-control" type="number" placeholder="Quantity"  defaultValue={quantity} required/>
          </div>  
          <div className="form-group col-md-2 col-6">
            <label>Unit of measure</label>
            <select ref="Unit_measure" id="measure" className="form-control" 
            defaultValue={Unit_measure}>
              {/* Loopingnya di categori */}
              {data3}
              {/* <option value="Boy">Boy</option>
              <option value="Girl">Girl</option> */}
              {/* End looping categori */}
            </select>
          </div>            
          <div className="form-group col-md-3 col-6">
            <label>Categori </label>
            <select ref="category" id="category" className="form-control" 
            defaultValue={category}>
              {/* Loopingnya di categori */}
              {data2}
              {/* End looping categori */}
            </select>
          </div>
          <div className="form-group col-md-2 col-6">
            <label>Condition </label>
            <select ref="condition" id="gender" className="form-control" 
            defaultValue={condition}>
             {/* Loopingnya di categori */}
             {data4}
              {/* End looping categori */}
            </select>
          </div>

          <div className="form-group col-md-12">
            <label >description</label>
            <textarea ref="description" id="message" defaultValue={description} rows="3" className="form-control" required>
            </textarea>
          </div>

          <div className="form-group col-md-4 align-self-end">
            <button onClick={() => this.Edit(this.refs,id)} type="submit" className="btn btn-primary">
              <i className="fa fa-fw fa-lg fa-save"></i>Save</button>
          </div>
      </div>
    })


    return (
      <div>

        {/* Bagian navbar admin */}
        <Navbaradmin product="active" />


        <main className="app-content">
          <div className="app-title">
            <div>
              <h1><i className="fa fa-product-hunt"></i> Edit Product</h1><br />
              <Link className="btn btn-secondary btn-sm fa fa-arrow-left" to="/productall"> Back </Link>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item"><Link to="/productall">Product</Link></li>
              <li className="breadcrumb-item active"> Edit Product </li>
            </ul>
          </div>

          <div className="clearix"></div>
          <div className="col-md-12">
            <div className="tile">
              <h3 className="tile-title">Edit Product</h3>
              <div className="tile-body">
               
                  {/* Looping di mulai */}
                      {data}
               
              </div>
            </div>
          </div>
        </main>

      </div>
    );
  }
}

export default Editproduct;