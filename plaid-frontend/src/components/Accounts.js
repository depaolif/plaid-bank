import React, { Component } from 'react'
import { connect } from 'react-redux'

class Accounts extends Component {
	render() {
		const dummy = {
			accounts: [
				{
				  "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
				  "balances": {
				    "available": 100,
				    "current": 110,
				    "limit": null
					},
					"mask": "0000",
		      "name": "Plaid Checking",
		      "official_name": "Plaid Gold Standard 0% Interest Checking",
					"subtype": "checking",
		      "type": "depository"
		    },
			],
			"numbers": [
		    {
		      "account": "1111222233330000",
		      "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
		      "routing": "011401533",
		      "wire_routing": "021000021"
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
