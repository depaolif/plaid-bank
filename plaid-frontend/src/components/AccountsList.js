import React, { Component } from 'react'
import { connect } from 'react-redux'
import Account from './Account'

class AccountsList extends Component {
	render() {
		const dummy = {
			"accounts": [
				{
				  "account_id": "vokyE5Rn6vHKqDLRXEn5fne7LwbKPLIXGK98d",
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
			"transactions": [{
		   "account_id": "vokyE5Rn6vHKqDLRXEn5fne7LwbKPLIXGK98d",
		   "amount": 2307.21,
		   "category": [
		     "Shops",
		     "Computers and Electronics"
		   ],
		   "category_id": "19013000",
		   "date": "2017-01-29",
		   "location": {
		    "address": "300 Post St",
		    "city": "San Francisco",
		    "state": "CA",
		    "zip": "94108",
		    "coordinates": {
		       "lat": null,
		       "lon": null,
		    }
		   },
		   "name": "Apple Store",
		   "payment_meta": Object,
		   "pending": false,
		   "pending_transaction_id": null,
		   "account_owner": null,
		   "transaction_id": "lPNjeW1nR6CDn5okmGQ6hEpMo4lLNoSrzqDje",
		   "transaction_type": "place"
		  }, {
		   "account_id": "XA96y1wW3xS7wKyEdbRzFkpZov6x1ohxMXwep",
		   "amount": 78.5,
		   "category": [
		     "Food and Drink",
		     "Restaurants"
		   ],
		   "category_id": "13005000",
		   "date": "2017-01-29",
		   "location": {
		     "address": "262 W 15th St",
		     "city": "New York",
		     "state": "NY",
		     "zip": "10011",
		     "coordinates": {
		       "lat": 40.740352,
		       "lon": -74.001761
		     }
		   },
		   "name": "Golden Crepes",
		   "payment_meta": Object,
		   "pending": false,
		   "pending_transaction_id": null,
		   "account_owner": null,
		   "transaction_id": "4WPD9vV5A1cogJwyQ5kVFB3vPEmpXPS3qvjXQ",
		   "transaction_type": "place"
		 }]
		}
		const accounts_info = this.props.accounts["accounts"].map((el,i) => {
			return <Account accountInfo={el} key={i} />
		})
		return (
			<div id="accounts">
				{accounts_info}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
})

export default connect(mapStateToProps)(AccountsList);
