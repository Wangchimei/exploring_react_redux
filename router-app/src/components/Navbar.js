import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
//NavLink will get "active" class on the link when click
const Navbar = (props) => {
  console.log(props)
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo"></a>
        <ul className="right">
          {/* <li><a href="/">Home</a></li> */}
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

// using higher order component to put props into navbar
export default withRouter(Navbar);