import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbaradmin from './Navbaradmin';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies

  // // Untuk menjalankan jquery 
  const $ = require('jquery')
  // // end of jquery


class report extends Component {


  constructor(props) {
    super(props);
    this.handleDayChangefrom = this.handleDayChangefrom.bind(this);
    this.handleDayChangeto = this.handleDayChangeto.bind(this);
    this.state = {
      selectedDay: undefined,
      date_from:"",
      date_to:"",
      dataku:[],
      total_all:"",
    };
  }


  handleDayChangefrom(selectedDay) {
    if(selectedDay !== undefined){
    var date = selectedDay.getFullYear() + "/" + (selectedDay.getMonth() + 1) + "/" + selectedDay.getDate();
    this.setState({date_from:date})
    }
  }

  handleDayChangeto(selectedDay) {
    if(selectedDay !== undefined){
      var date 

      if(selectedDay.getDate()+1 === 32){
        date = selectedDay.getFullYear() + "/" + (selectedDay.getMonth() + 2) + "/" + 1
      } else{
        date = selectedDay.getFullYear() + "/" + (selectedDay.getMonth() + 1) + "/" + (selectedDay.getDate()+1)
      }

    this.setState({date_to:date})
    }
  }

  akhir(obj){
    var dateto = this.state.date_to
    var datefrom = this.state.date_from
    var type_report = obj.typereport.value

    axios.post("http://localhost:3001/report",{
      date_to:dateto,
      datefrom:datefrom,
      type_report:type_report
    }).then((response)=>{
      if(response.data !== ""){
        this.setState({dataku:response.data})

        var total = 0
        for (var i = 0; i < response.data.length; i++) {
            total += Number(response.data[i].total_price)
        }
        this.setState({total_all:total})
        $('#example').DataTable();
      }

    })
  }
  
  today(obj){
    var type_report = obj.typereport.value
    var date = new Date();
    var datefrom =  date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + (date.getDate())
    var dateto =  date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + (date.getDate()+1)

    axios.post("http://localhost:3001/report",{
      date_to:dateto,
      datefrom:datefrom,
      type_report:type_report
    }).then((response)=>{
      if(response.data !== ""){
        this.setState({dataku:response.data})

        var total = 0
        for (var i = 0; i < response.data.length; i++) {
            total += Number(response.data[i].total_price)
        }
        this.setState({total_all:total})
        $('#example').DataTable();
      }
    })
  }


  Monthly(obj){
    var type_report = obj.typereport.value
    var date = new Date();
    var datefrom =  date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + 1
    var dateto =  date.getFullYear() + "/" + (date.getMonth() + 2) + "/" + 1

    axios.post("http://localhost:3001/report",{
      date_to:dateto,
      datefrom:datefrom,
      type_report:type_report
    }).then((response)=>{
      if(response.data !== ""){
        this.setState({dataku:response.data})

        var total = 0
        for (var i = 0; i < response.data.length; i++) {
            total += Number(response.data[i].total_price)
        }
        this.setState({total_all:total})
        $('#example').DataTable();
      }
    })
  }

  Yearly(obj){
    var type_report = obj.typereport.value
    var date = new Date();
    var datefrom =  date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + 1
    var dateto =  (date.getFullYear()+1) + "/" + (date.getMonth() + 1) + "/" + 1

    axios.post("http://localhost:3001/report",{
      date_to:dateto,
      datefrom:datefrom,
      type_report:type_report
    }).then((response)=>{
      if(response.data !== ""){
        this.setState({dataku:response.data})

        var total = 0
        for (var i = 0; i < response.data.length; i++) {
            total += Number(response.data[i].total_price)
        }
        this.setState({total_all:total})
        $('#example').DataTable();
      }
    })
  }

 
  render() {
    const { selectedDay} = this.state;

   // Mengecek apakah passwod sudah dan username uda benar?
   if (cookies.get("login") === undefined || cookies.get("login") === "gagal" || cookies.get("login") < 1) {
    cookies.set('pesan', "Username /Password anda salah", { path: '/' });
    this.setState({ redirect: true })
  }

  // Mengirm redirect jika pass dan user bukan dapat value 1
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }


    ///// Awal dari looping untuk report
    const data = this.state.dataku.map((item,index)=>{
      var user_customerid = item.user_customerid
      var delivery = item.delivery
      var payment  = item.payment 
      var total_price = item.total_price
      var invoice_number = item.invoice_number

      return <tr key={index}>
        <td>{user_customerid}</td>
        <td>{delivery}</td>
        <td>{payment}</td>
        <td>{total_price}</td>
        <td><Link to={{pathname: '/Order_detail', state: {invoice_number:invoice_number}}} className="btn btn-primary btn-sm">View</Link></td>
      </tr>
    })


    return (
      <div>
        

        {/* Bagian navbaradmin */}
        <Navbaradmin report="active" />

        <main className="app-content">
          <div className="app-title responsive-table">
            <div>
              <h1><i className="fa fa-file"></i> Report</h1>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
              <li className="breadcrumb-item">Report</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-12">
            <div className="tile">
                <div className="tile-body container">
                 <center>
                      <h2 className="line-head" style={{color:"green"}}>Report <i className="app-menu__icon fa fa-file"></i></h2>
                    </center>
                <div className="row mb-4 container">
                      <div className="col-md-4 ">
                        <label><h5>From:</h5></label>&nbsp;&nbsp;&nbsp;
                        <DayPickerInput
                    value={selectedDay}
                    onDayChange={this.handleDayChangefrom}
                    dayPickerProps={{
                      selectedDays: selectedDay,
                    }}/>
                      </div>
                      <div className="col-md-3">
                        <label><h5>To:</h5></label> &nbsp;&nbsp;&nbsp;
                      <DayPickerInput
                        value={selectedDay}
                        onDayChange={this.handleDayChangeto}
                        dayPickerProps={{
                          selectedDays: selectedDay,
                        }} />
                    </div>
                    <div className="col-md-2">
                    <select ref="typereport">
                          <option value="selling">Selling Report</option>
                          <option value="revenue">Revenue Report</option>
                        </select>
                        </div>
                    <button className="col-md-1 btn btn-success" onClick={()=>this.akhir(this.refs)}> Seacrh</button> &nbsp;&nbsp;&nbsp;
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-4 ">
                      <button className="col-md-12 btn btn-success" onClick={()=>this.today(this.refs)}> Today Report</button> </div>
                    <div className="col-md-4 ">
                      <button className="col-md-12 btn btn-success" onClick={()=>this.Monthly(this.refs)}> Monthly Report</button></div>
                    <div className="col-md-4 ">
                      <button className="col-md-12 btn btn-success" onClick={()=>this.Yearly(this.refs)}> Yearly Report</button> </div>
                  </div>
                </div>
                <table className="table table-hover table-responsive-md" id="example">
                    <thead>
                      <tr>
                        <th>User_customerid </th>
                        <th>Delivery</th>
                        <th>Payment </th>
                        <th>Total_price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data}
                    </tbody>
                  </table>
                  <h3 style={{color:"red"}}>Total all : {this.state.total_all}</h3>
              </div>
            </div>
          </div>
        </main>

      </div>
    );
  }
}

export default report;