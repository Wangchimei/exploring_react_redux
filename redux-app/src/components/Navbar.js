import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
//NavLink will get "active" class on the link when click
const Navbar = (props) => {
  console.log(props)
  return (
    <nav className="nav-wrapper amber darken-3">
      <div className="container">
        <a className="brand-logo"></a>
        <ul className="right">
          <li><NavLink to="/">Posts</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

// using higher order component to put props into navbar
export default withRouter(Navbar);