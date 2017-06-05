import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions/accounts.js'
import '../css/navbar.css'

class Navbar extends Component {
  handleLogout() {
    this.props.logOut()
  }

  render() {
    return (
      <nav>
		  <ul>
		    <li><p className="nav-welcome">Dashboard</p></li>
		    <li className="nav-logout" onClick={this.handleLogout.bind(this)}><p>Log Out</p></li>
		  </ul>
		</nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logOut: () => {
    dispatch(logOut())
  }
})

export default connect(null, mapDispatchToProps)(Navbar)
