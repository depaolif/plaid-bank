import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav>
		  <ul>
		    <li><p className="nav-welcome">Welcome, User</p></li>
		    <li className="nav-logout"><p>Log Out</p></li>
		  </ul>
		</nav>
    );
  }
}

export default Navbar
