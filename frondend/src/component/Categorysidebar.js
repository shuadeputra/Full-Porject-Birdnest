import React, { Component } from 'react';
import '../App.css';

class Categorysidebar extends Component {
  render() {
    return (
    <div>
   
          {/* <!-- Sidebar--> */}
          <div className="sidebar col-xl-12 col-lg-12 sidebar">
            <div className="block">
              <h6 className="text-uppercase">Product Categories</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="d-flex justify-content-between align-items-center">
                  <span>Dried Bird's Nest</span><small>10</small></a>
                  <ul className="list-unstyled">
                    <li> <a href="#">Dried Blood Red</a></li>
                    <li> <a href="#">Dried Golden Orange</a></li>
                    <li> <a href="#">Dried White</a></li>
                    <li> <a href="#">Dried Yantiao</a></li>
                  </ul>
                </li>
                <li className="active"><a href="#" className="d-flex justify-content-between align-items-center">
                  <span>Bottled Bird's Nest </span> <small> 20</small> </a>
                  <ul className="list-unstyled">
                    <li> <a href="#">Flower Series</a></li>
                    <li> <a href="#">Rock Sugar</a></li>
                    <li> <a href="#">Ginseng</a></li>
                  </ul>
                </li>
                <li><a href="#" className="d-flex justify-content-between align-items-center">
                  <span>Brid's Gifts</span><small>8</small></a>
                  <ul className="list-unstyled">
                    <li> <a href="#">Chainese Gift</a></li>
                    <li> <a href="#">Chrismas Gift</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="block">
              <h6 className="text-uppercase">Filter By Price</h6>
              <div id="slider-snap"></div>
              <div className="value d-flex justify-content-between">
                <div className="min">From <span id="slider-snap-value-lower" className="example-val"></span>$100</div>
                <div className="max">To <span id="slider-snap-value-upper" className="example-val"></span>$1000</div>
              </div><a href="#" className="filter-submit">filter</a>
            </div>
          </div>
  {/* <!-- /Sidebar end--> */}

    </div>
    );
  }
}

export default Categorysidebar;