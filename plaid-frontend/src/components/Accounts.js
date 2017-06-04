import React, { Component } from 'react'
import { connect } from 'react-redux'

class Accounts extends Component {
	render() {
		debugger
		const dummy = {
			accounts: [
				{
			      "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
			      "balances": {
			        "available": 100,
			        "current": 110,
			        "limit": null
			      },
			]
		}
		const accounts_info = this.props.accounts
		return (
			<div id="accounts">

			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
})

export default connect(mapStateToProps)(Accounts);
