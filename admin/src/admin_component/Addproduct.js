import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


// Mengirim funtion yang dapat dari redux
function mapStateToProps(state) {
  return {
      login: state.login,
      username: state.username,
      userid: state.userid,
    };
}

class Addproduct extends Component {

  state = {
    redirect: false,
    show_category : [],
    show_measure : [],
    show_condition : []
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

    var self = this
    axios.post('http://localhost:3001/product/addproduct',
      {
        nama_product: obj.nama_product.value,
        price: obj.price.value,
        quantity: obj.quantity.value,
        category: obj.category.value,
        condition: obj.condition.value,
        description: obj.description.value,
        Unit_measure: obj.Unit_measure.value,
        useradmin_id: this.props.userid

      })
  }


  render() {

  // Mengecek apakah passwod sudah dan username uda benar?
  if(this.props.login != 1){
    {this.state.redirect= true}  
    this.props.dispatch({type:'login', value:"Username /Password anda salah"});    
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


        <main class="app-content">
          <div class="app-title">
            <div>
              <h1><i class="fa fa-product-hunt"></i> Add Product</h1><br />
              <Link class="btn btn-secondary btn-sm fa fa-arrow-left" to="/productall"> Back </Link>
            </div>
            <ul class="app-breadcrumb breadcrumb side">
              <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
              <li class="breadcrumb-item">Home</li>
              <li class="breadcrumb-item"><Link to="/productall">Product</Link></li>
              <li class="breadcrumb-item active">Add Product </li>
            </ul>
          </div>

          <div class="clearix"></div>
          <div class="col-md-12">
            <div class="tile">
              <h3 class="tile-title">Add Product</h3>
              <div class="tile-body">
              <form class="row">
            <div class="form-group col-md-10">
              <label class="control-label">Name Product</label>
              <input ref="nama_product" class="form-control" type="text" placeholder="name product" required />
            </div>
            <div class="form-group col-md-2 col-6">
              <label class="control-label">Product Price</label>
              <input ref="price" class="form-control" type="number" placeholder="price" required/>
            </div>
            <div class="form-group col-md-2 col-6">
              <label for="gender">Quantity </label>
              <input ref="quantity" class="form-control" type="number" placeholder="Quantity" required/>
            </div>

            <div class="form-group col-md-2 col-6">
              <label for="gender">Unit of measure</label>
              <select ref="Unit_measure" id="gender" class="form-control">
              {/* Likasi looping unit_measure */}
                    {data2}
              {/* End of looping unit_measure */}
              </select>
            </div>              
            <div class="form-group col-md-2 col-6">
              <label for="gender">Categori </label>
              <select ref="category" id="gender" class="form-control">
              {/* Lokasi looping category*/}
               {data}
               {/* End of looping cateogry */}
              </select>
            </div>
            <div class="form-group col-md-2 col-6">
              <label for="gender">Condition </label>
              <select ref="condition" id="gender" class="form-control">
              {/* Lokasi looping condition*/}
              {data3}
               {/* End of looping condition */}
              </select>
            </div>

            <div class="form-group col-md-12">
              <label for="message">description</label>
              <textarea ref="description" id="message" rows="3" class="form-control" required></textarea>
            </div>

            <div class="form-group col-md-4 align-self-end">
              <Link onClick={() => this.Addproduct(this.refs)} type="submit" to="/productall" class="btn btn-primary" type="button">
              <i class="fa fa-fw fa-lg fa-save"></i>Save</Link>

            </div>
          </form>
  
              </div>
            </div>
          </div>
        </main>


      </div>
    );
  }
}

export default connect(mapStateToProps)(Addproduct);