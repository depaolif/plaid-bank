import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/transactions.css'
import { Glyphicon } from 'react-bootstrap'

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      sort: "none",
    }
    this.handleSort = this.handleSort.bind(this)
  }

  componentWillMount() {
    var transactions =
    this.props.transactions.filter((el) => {
      return el["account_id"] === this.props.accountId
    })
    this.setState({
      transactions: transactions
    });
  }


  handleSort(event) {
    const sort = event.target.id
    var transactions
    if (sort === this.state.sort) {
      transactions = this.state.transactions.reverse()
    } else {
      switch (sort) {
        case "amount":
        transactions = this.state.transactions.sort((a,b) => a["amount"] - b["amount"])
        break
        case "date":
        transactions = this.state.transactions.sort((a,b) => {
          return Date.parse(a["date"]) - Date.parse(b["date"])
        })
        break
        case "name":
        transactions = this.state.transactions.sort((a,b) => {
          var nameA = a["name"].toUpperCase()
          var nameB = b["name"].toUpperCase()
          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          } else {
            return 0
          }
        })
        break
        case "category":
        transactions = this.state.transactions.sort((a,b) => {
          var catA = a["category"] ? a["category"].join('').toUpperCase() : "|"
          var catB = b["category"] ? b["category"].join('').toUpperCase() : "|"
          if (catA < catB) {
            return -1;
          } else if (catA > catB) {
            return 1;
          } else {
            return 0
          }
        })
        break
        default:
      }
    }
    this.setState({
      sort: sort,
      transactions: transactions
    });
  }

  render() {
    const data = this.state.transactions.map((el, i) => {
      return <tr key={i}>
        <td>{`$${el["amount"].toFixed(2)}`}</td>
        <td>{el["date"]}</td>
        <td>{el["name"]}</td>
        <td>{el["category"] ? el["category"].join(', ') : "N/A"}</td>
      </tr>
    })
    return (
      <table className="transactions">
        <thead>
          <tr>
            <th className="col-md-2">Amount
              <Glyphicon onClick={this.handleSort} id="amount" className="glyph" glyph="triangle-bottom" />
            </th>
            <th className="col-md-2">Date
              <Glyphicon onClick={this.handleSort} id="date" className="glyph" glyph="triangle-bottom" />
            </th>
            <th className="col-md-4">Name
              <Glyphicon onClick={this.handleSort} id="name" className="glyph" glyph="triangle-bottom" />
            </th>
            <th className="col-md-4">Category
              <Glyphicon onClick={this.handleSort} id="category" className="glyph" glyph="triangle-bottom" />
            </th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions
})

export default connect(mapStateToProps)(Transactions)
