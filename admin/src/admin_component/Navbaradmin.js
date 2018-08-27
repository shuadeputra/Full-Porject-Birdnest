import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Collapse } from 'reactstrap';
import Cookies from 'universal-cookie';
import axios from 'axios';

// untuk menjalankan cookies
const cookies = new Cookies();
// untuk menjalankan cookies


class Navbaradmin extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      collapse: true,
      fullname:"",
      skils:"",
      image_profile:"",
      hasil:[],
      read:"",
      email:"",
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  logut(){
    // this.props.dispatch({type:'logout',},);
    cookies.remove('login')
    cookies.remove('username')
  } 


  componentDidMount(){
    axios.post('http://localhost:3001/showprofile',{
      id: cookies.get("login")
    }).then((response)=>{
      if(response !== undefined){
        // ini untuk bagian view profile
        this.setState({fullname:response.data[0].full_name})
        this.setState({skils:response.data[0].skils})
        this.setState({image_profile:response.data[0].image_profile})
      }
    })


    axios.get('http://localhost:3001/pagemail')
    .then((ambilData) => {
      if (ambilData !== undefined) {
        var hasilblmread = 0
        for (var i = 0; i < ambilData.data.length; i++) {
          if (ambilData.data[i].view === "") {
            hasilblmread++
          }
        }
        this.setState({ read: hasilblmread })
      }})

  }

  onSeriesInputChange = e =>{
    var search = e.target.value
    axios.post('http://localhost:3001/search/productall/' + search)
    .then((ambilData) => {  
      if(ambilData.data !== undefined){
      this.setState({hasil: ambilData.data,})
        // console.log(this.state.hasil)
      }
    })
  }

  render() {

    var data = this.state.hasil.map((item, index) => {
      var id = item.id_product;
      var nama_product = item.nama_product;
      
        return <div key={index}><Link  to={{ pathname: '/productall', state: { id: id } }}><i> {nama_product}</i></Link> <br/></div>
    })


    return (
  <div>

      {/* <!-- Navbar--> */}
    <header className="app-header"><Link className="app-header__logo" to="/homeadmin">Admin </Link>
      {/* <!-- Sidebar toggle button--> */}

      <span className="d-md-none app-sidebar__toggle" data-toggle="sidebar" aria-label="Hide Sidebar" onClick={this.toggle}></span>
      {/* <!-- Navbar Right Menu--> */}

     
      <ul className="app-nav">
            {/* Mengecek apakah berada di productall atau bukan */}
            {this.props.productall ? "" : <li className="app-search">
              <input type="text"
                className="app-search__input"
                placeholder="input something to search"
                id="searchbar" data-toggle="dropdown" aria-haspopup="true"
                value={this.state.masuk}
                onInput={this.onSeriesInputChange}
              /> &nbsp;

          <button className="app-search__button"><i className="fa fa-search"></i></button>
              <div aria-label="Hide Sidebar" className="dropdown-menu">
                {/* Awal dari looping */}
                {data}
                {/* Akhir dari looping */}
              </div>
            </li>}
        

        {/* <!--Notification Menu--> */}
        <li className="dropdown"><span className="app-nav__item" data-toggle="dropdown" aria-label="Show notifications"><i className="fa fa-bell-o fa-lg">
    {/* untuk mengecek apakah ada pesan baru atau tidak (email) */}
        {this.state.read ? <span style={{color:"orange"}}> New</span> :""}
        </i></span>
     {/* untuk mengecek apakah ada pesan baru atau tidak (email) */}
        {this.state.read ?<ul className="app-notification dropdown-menu dropdown-menu-right">
            <div className="app-notification__content">
              <li><Link to={{pathname: '/pagemail', state: {"view":"view"}}} className="app-notification__item"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">you have a mail</p>
                    <p className="app-notification__meta">Click here for see</p>
                  </div></Link></li>
            </div>
          </ul> : "" }
        </li>
        {/* untuk notif */}


        {/* <!-- User Menu--> */}
        <li className="dropdown"><span className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu"><i className="fa fa-user fa-lg"></i></span>
          <ul className="dropdown-menu settings-menu dropdown-menu-right">
            <li><Link className={"dropdown-item"} to="/pageuser"><i className="fa fa-user fa-lg"></i> Profile</Link></li>

        {/* Tombol log out */}
            <li><Link onClick={()=>{this.logut();}} className={"dropdown-item"} to="/"><i className="fa fa-sign-out fa-lg"></i> Logout</Link></li>
          </ul>
        </li>
      </ul>
    </header>




{/* <!-- Sidebar menu--> */}
    <Collapse isOpen={this.state.collapse}>
    <aside className="app-sidebar">
      <div className="app-sidebar__user">
      <img alt='avatar' className="app-sidebar__user-avatar" src={`http://localhost:3001/image/user_admin/${this.state.image_profile}`} style={{width:"48px", height:"48px"}}/>
        <div>
    <p className="app-sidebar__user-name">{this.state.fullname}</p>
          <p className="app-sidebar__user-designation">{this.state.skils}</p>
        </div>
      </div>
       
      <ul className="app-menu">
        <li><Link className={"app-menu__item " + this.props.Homeadmin} to="/homeadmin"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Dashboard</span></Link></li>
        {/* </ul> */}

        
            <li><Link className={"app-menu__item " + this.props.product} to="/productall">
            <i className="app-menu__icon icon fa fa-shopping-cart"></i>
            <span className="app-menu__label"> Product</span> </Link></li>

            <li><Link className={"app-menu__item " + this.props.blog} to="/blogall">
            <i className="app-menu__icon icon fa fa-book"></i>
            <span className="app-menu__label"> Blog</span></Link></li>

            <li><Link className={"app-menu__item " + this.props.contact} to="/contact">
            <i className="app-menu__icon icon fa fa-phone"></i>
            <span className="app-menu__label"> Contact</span></Link></li>

            <li><Link className={"app-menu__item " + this.props.aboutus} to="/aboutus">
            <i className="app-menu__icon icon fa fa-desktop"></i><span className="app-menu__label">About us</span></Link></li>
        

            <li><Link className={"app-menu__item " + this.props.orders} to="/orders">
            <i className="app-menu__icon fa fa-table"></i><span className="app-menu__label"> Orders</span></Link></li>

            <li><Link className={"app-menu__item " + this.props.report} to="/report">
            <i className="app-menu__icon fa fa-file"></i><span className="app-menu__label"> Report</span></Link></li>

            <li><Link className={"app-menu__item " + this.props.front} to="/fronthome">
            <i className="app-menu__icon fa fa-television"></i><span className="app-menu__label"> Front Home</span></Link></li>

            <li><Link className={"app-menu__item " + this.props.pagemail} to="/pagemail">
            <i className="app-menu__icon fa fa-envelope"></i>
            <span className="app-menu__label"> Mailbox</span></Link></li>

        </ul>
    </aside>
    </Collapse>
    

 </div>
    );
  }
}

export default Navbaradmin;
