import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  
  render() {

     const ch = "Logout";
    

    return (
      <div className="navbar-fixed ">
         <nav>
    <div class="nav-wrapper #03a9f4 light-blue">
      <a href="#" class="brand-logo" style={{marginLeft : .5+'em'}}>Travel Help</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons" >menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="/" style={{marginRight : .5+'em'}}>{ch}</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
  <li><a href="/" >Logout</a></li>
  </ul>
      </div>
    );
  }
}

export default Navbar;
