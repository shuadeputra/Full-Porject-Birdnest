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
    id_product: state.id_product
  };
}

class category extends Component {

  state = {
    redirect: false,
    dataKu: [],
  }


  componentDidMount() {
    axios.get('http://localhost:3001/product/show_category', {
    })
      .then((respone) => {
        this.setState({ dataKu: respone.data })
        // console.log(this.state.dataKu)
      })
  }


  delete(id) {
    // console.log(id)
    var answer = window.confirm("Are you sure to deleted this data?")
    if (answer) {
      axios.post('http://localhost:3001/product/category/delete',
        {
          id: id,
        })
    }
  }

  editcategory(id){
    this.props.dispatch({type:'product_picture', 
    id: id,
    value:this.props.login,
    value2:this.props.username,
    userid_number:this.props.userid
    })
    
    // console.log(id);

  }
  


  render() {

    // Mengecek apakah passwod sudah dan username uda benar?
    if (this.props.login != 1) {
      { this.state.redirect = true }
      this.props.dispatch({ type: 'login', value: "Username /Password anda salah" });
    }

    // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/productall' />
    }

    // Looping dari database di awal dari sini
    const data = this.state.dataKu.map((item, index) => {
      var id = item.id;
      var number = index + 1
      var nama_category = item.nama_category;
      return (
        <tr>
          <th key={index}>{number}</th>
          <th>{nama_category}</th>
          <th>
        <Link onClick={() => { this.editcategory(id); }} className="btn btn-warning fa fa-pencil" to="/editcategory"></Link> &nbsp;
        <Link onClick={() => { this.delete(id); }} className="btn btn-danger fa fa-trash" to='/productall'></Link>

          </th>
        </tr>
      )
    })



    return (
      <div>


        {/* Bagian navbar admin */}
        <Navbaradmin product="active" />


        <main class="app-content">
          <div class="app-title">
            <div>
              <h1><i class="fa fa-shopping-basket"></i> Product Category</h1><br />
              <Link class="btn btn-secondary btn-sm fa fa-arrow-left" to="/productall"> Back </Link> &nbsp;&nbsp;
              <Link class="btn btn-success btn-sm fa fa-plus" to="/addcategory"> Add Category </Link>
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
              <h3 class="tile-title">Category</h3>
              <div class="tile-body">

                <table id="test" className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama category</th>
                      <th>Tools</th>
                    </tr>
                  </thead>
                  <tbody>

                    {/*awal mulainya looping  */}
                    {data}

                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </main>


      </div>
    );
  }
}

export default connect(mapStateToProps)(category);