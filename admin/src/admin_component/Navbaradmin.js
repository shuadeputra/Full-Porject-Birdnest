import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Collapse } from 'reactstrap';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
      login: state.login,
      username: state.username
    };
}


class Navbaradmin extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  logut(){
    this.props.dispatch({type:'logout',},);
  } 

  render() {
    return (
  <div>

      {/* <!-- Navbar--> */}
    <header className="app-header"><Link className="app-header__logo" to="/homeadmin">Admin </Link>
      {/* <!-- Sidebar toggle button--> */}

      <a className="d-md-none app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar" onClick={this.toggle}></a>
      {/* <!-- Navbar Right Menu--> */}
      <ul className="app-nav">
        <li className="app-search">
          <input className="app-search__input" type="search" placeholder="Search"/>
          <button className="app-search__button"><i className="fa fa-search"></i></button>
        </li>

        {/* <!--Notification Menu--> */}
        <li className="dropdown"><a className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Show notifications"><i className="fa fa-bell-o fa-lg"></i></a>
          <ul className="app-notification dropdown-menu dropdown-menu-right">
            <li className="app-notification__title">You have 4 new notifications.</li>
            <div className="app-notification__content">
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Lisa sent you a mail</p>
                    <p className="app-notification__meta">2 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger"></i><i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Mail server not working</p>
                    <p className="app-notification__meta">5 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success"></i><i className="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Transaction complete</p>
                    <p className="app-notification__meta">2 days ago</p>
                  </div></a></li>
              <div className="app-notification__content">
                <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p className="app-notification__message">Lisa sent you a mail</p>
                      <p className="app-notification__meta">2 min ago</p>
                    </div></a></li>
                <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger"></i><i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p className="app-notification__message">Mail server not working</p>
                      <p className="app-notification__meta">5 min ago</p>
                    </div></a></li>
                <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success"></i><i className="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p className="app-notification__message">Transaction complete</p>
                      <p className="app-notification__meta">2 days ago</p>
                    </div></a></li>
              </div>
            </div>
            <li className="app-notification__footer"><a href="#">See all notifications.</a></li>
          </ul>
        </li>

        {/* <!-- User Menu--> */}
        <li className="dropdown"><a className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu"><i className="fa fa-user fa-lg"></i></a>
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
      <img className="app-sidebar__user-avatar" src={"vendor/img/avatar/avatar1.jpg"} style={{width:"48px", height:"48px"}} alt="User Image"/>
        <div>
          <p className="app-sidebar__user-name">{this.props.username}</p>
          <p className="app-sidebar__user-designation">Frontend Developer</p>
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

            <li><Link className={"app-menu__item " + this.props.pagemail} to="/pagemail">
            <i className="app-menu__icon fa fa-envelope"></i>
            <span class="app-menu__label"> Mailbox</span></Link></li>

        </ul>
    </aside>
    </Collapse>
    

 </div>
    );
  }
}

export default connect(mapStateToProps)(Navbaradmin);
