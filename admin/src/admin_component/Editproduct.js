import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


function mapStateToProps(state) {
  return {
    login: state.login,
    username: state.username,
    userid: state.userid,
    id_product: state.id_product
  };
}

class Editproduct extends Component {

  state = {
    redirect: false,
    dataKu: [],
    show_category:[],
    show_measure : [],
    show_condition : [],
    ideditproduct:[],
    idmeasureproduct:[],
    idconditionproduct:[],
  }

  componentDidMount() {
    axios.post('http://localhost:3001/product/editproduct', {
      id: this.props.id_product
    })
      .then((respone) => {
        // console.log(respone.data)
        this.setState({ dataKu: respone.data })
        this.setState({ ideditproduct: respone.data[0].category_id})
        this.setState({ idmeasureproduct: respone.data[0].Unit_measure_id})
        this.setState({ idconditionproduct: respone.data[0].condition_id})
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

  var self = this
  axios.post('http://localhost:3001/product/editproduct/update',
    {
  nama_product: obj.nama_product.value,
  price: obj.price.value,
  quantity: obj.quantity.value,
  category: obj.category.value,
  condition: obj.condition.value,
  description: obj.description.value,
  Unit_measure: obj.Unit_measure.value,
  useradmin_id: this.props.userid,
  id:id
    })
}



  render() {
    
    // id category dari table product
    var id_category = this.state.ideditproduct
    var id_measure = this.state.idmeasureproduct
    var id_condition = this.state.idconditionproduct

    // Mengecek apakah passwod sudah dan username uda benar?
    if (this.props.login != 1) {
      { this.state.redirect = true }
      this.props.dispatch({ type: 'login', value: "Username /Password anda salah" });
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/' />
    }

  // Looping dari get product show category
  const data2 = this.state.show_category.map((item, index) => {
    var id = item.id
    var category_name = item.nama_category;
    var selected;

    // test untuk selected category yang bakal kita coba
    if (id == id_category){
      selected = 'selected';
    }
    else{
      selected = '';
    }
    return (
          <option key={index} value={id} selected={selected}>{category_name}</option>            
    )})


  // Awal mulainya looping show measure
        const data3 = this.state.show_measure.map((item, index) => {
          var id = item.id
          var name_measure = item.name_measure;
          var selected;
          if (id == id_measure){
            selected = 'selected';
          }
          else{
            selected = '';
          }
          return (
                <option key={index} value={id} selected={selected}>{name_measure}</option>            
          )})

  // Awal mulainya looping show condition
        const data4 = this.state.show_condition.map((item, index) => {
          var id = item.id
          var nama_condition = item.nama_condition;
          var selected;
          if (id == id_condition){
            selected = 'selected';
          }
          else{
            selected = '';
          }
          return (
                <option key={index} value={id} selected={selected}>{nama_condition}</option>            
          )})


    // Awal mulainya looping dari post product edit
    const data = this.state.dataKu.map((item, index) => {
      var id = item.id_product
      var nama_product = item.nama_product;
      var price = item.price;
      var quantity = item.quantity;
      var category = item.nama_category;
      var condition = item.condition;
      var description = item.description;
      var Unit_measure = item.Unit_measure;
      return (
        <form class="row">
          <div class="form-group col-md-10">
            <label class="control-label">Name Product</label>
            <input key={index} ref="nama_product" rows="1" className="form-control" type="text" placeholder="name product" Value={nama_product} required/>
          </div>
          <div class="form-group col-md-2 col-6">
            <label class="control-label">Product Price</label>
            <input key={index} ref="price" rows="1" class="form-control" type="number" placeholder="price" Value={price} required/>
          </div>
          <div class="form-group col-md-2 col-6">
            <label for="quantity">Quantity </label>
            <input key={index} ref="quantity" class="form-control" type="number" placeholder="Quantity"  Value={quantity} required/>
          </div>  
          <div class="form-group col-md-2 col-6">
            <label for="measure">Unit of measure</label>
            <select ref="Unit_measure" id="measure" class="form-control">
              {/* Loopingnya di categori */}
              {data3}
              {/* End looping categori */}
            </select>
          </div>            
          <div class="form-group col-md-2 col-6">
            <label for="categori">Categori </label>
            <select ref="category" id="category" class="form-control">
              {/* Loopingnya di categori */}
              {data2}
              {/* End looping categori */}
            </select>
          </div>
          <div class="form-group col-md-2 col-6">
            <label for="condition">Condition </label>
            <select ref="condition" id="gender" class="form-control">
             {/* Loopingnya di categori */}
             {data4}
              {/* End looping categori */}
            </select>
          </div>

          <div class="form-group col-md-12">
            <label for="message">description</label>
            <textarea key={index} ref="description" id="message" rows="3" class="form-control" required>
            {description}
            </textarea>
          </div>

          <div class="form-group col-md-4 align-self-end">
            <Link onClick={() => this.Edit(this.refs,id)} type="submit" to="/homeadmin" class="btn btn-primary" type="button">
              <i class="fa fa-fw fa-lg fa-save"></i>Save</Link>

          </div>
          </form>
      )
    })


    return (
      <div>

        {/* Bagian navbar admin */}
        <Navbaradmin product="active" />


        <main class="app-content">
          <div class="app-title">
            <div>
              <h1><i class="fa fa-product-hunt"></i> Edit Product</h1><br />
              <Link class="btn btn-secondary btn-sm fa fa-arrow-left" to="/productall"> Back </Link>
            </div>
            <ul class="app-breadcrumb breadcrumb side">
              <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
              <li class="breadcrumb-item">Home</li>
              <li class="breadcrumb-item"><Link to="/productall">Product</Link></li>
              <li class="breadcrumb-item active"> Edit Product </li>
            </ul>
          </div>

          <div class="clearix"></div>
          <div class="col-md-12">
            <div class="tile">
              <h3 class="tile-title">Edit Product</h3>
              <div class="tile-body">
               
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

export default connect(mapStateToProps)(Editproduct);