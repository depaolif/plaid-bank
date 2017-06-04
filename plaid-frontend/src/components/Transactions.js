import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/transactions.css'

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    }
  }

  componentWillMount() {
    var transactions =
    this.props.transactions.map((el) => {
      return el["account_id"] === this.props.accountId
    })
    this.setState({
      transactions: transactions
    });
  }

  render() {
    const { accountId } = this.props
    const dummyData =
    {
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
    }
    const data = this.state.transactions.map((el, i) => {
      return <tr>
        <td>{el["amount"]}</td>
        <td>{el["date"]}</td>
        <td>{el["name"]}</td>
        <td>{el["category"].join(' ')}</td>
      </tr>
    })
    debugger
    return (
      <table className="transactions">
        <tr>
          <th>Amount</th>
          <th>Date</th>
          <th>Name</th>
          <th>Category</th>
        </tr>
        {data}
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions
})

export default connect(mapStateToProps)(Transactions)
