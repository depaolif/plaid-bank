import React, { Component } from 'react'
import { connect } from 'react-redux'
import Account from './Account'

class AccountsList extends Component {
	render() {
		const accounts_info = this.props.accounts["accounts"].map((el,i) => {
			return <Account accountInfo={el} key={i} />
		})
		return (
			<div>
				{accounts_info}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
})

export default connect(mapStateToProps)(AccountsList);
