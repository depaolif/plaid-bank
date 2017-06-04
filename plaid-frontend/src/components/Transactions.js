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
    const dummyTransactions = [
      {
        account_id: 'yGMjEjD5X8TZV8WpqxoQFp7x14731qUgbwglV',
        account_owner: null,
        amount: 25,
        category: [
          'Payment',
          'Credit Card'
        ],
        category_id: '16001000',
        date: '2017-05-31',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: null,
          zip: null
        },
        name: 'CREDIT CARD 3333 PAYMENT *//',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: 'oMJrerW9GwcJdRLb1VWvSBRWV3lxnnH1m3L6A',
        transaction_type: 'special'
      },
      {
        account_id: 'mQgqjqabG8S5mrVbXQgytKo1eromexurnXrWV',
        account_owner: null,
        amount: 5.4,
        category: null,
        category_id: null,
        date: '2017-05-31',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: null,
          zip: null
        },
        name: 'Uber 063015 SF**POOL**',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: 'LL4WeWQorqhR3dZL9PoWfNwBR7Ljzzhq5JDZq',
        transaction_type: 'unresolved'
      },
      {
        account_id: '9qdxmx5Ka9fE6zRqwjBMFPnm6rnV6vSKwgK5P',
        account_owner: null,
        amount: 1000,
        category: [
          'Transfer',
          'Deposit'
        ],
        category_id: '21007000',
        date: '2017-05-30',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: null,
          zip: null
        },
        name: 'CD DEPOSIT .INITIAL.',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: 'g4P8x8NkGmH1lRGwbpJLcZaLQW17kkhPJX3Ad',
        transaction_type: 'special'
      },
      {
        account_id: 'vEM4o43Aw8uDagA7kz8Vs47Nmg7zmvIwB1wB8',
        account_owner: null,
        amount: 78.5,
        category: null,
        category_id: null,
        date: '2017-05-29',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: null,
          zip: null
        },
        name: 'Touchstone Climbing',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: 'Geyp4pRogNUkyraeVo3JtyElk7Q6jjIqd4EDD',
        transaction_type: 'unresolved'
      },
      {
        account_id: 'mQgqjqabG8S5mrVbXQgytKo1eromexurnXrWV',
        account_owner: null,
        amount: -500,
        category: [
          'Travel',
          'Airlines and Aviation Services'
        ],
        category_id: '22001000',
        date: '2017-05-29',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: null,
          zip: null
        },
        name: 'United Airlines',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: '1b4GgGLmq9hPKalQkBAytpbnE4NZ77HN1wW63',
        transaction_type: 'special'
      },
      {
        account_id: 'mQgqjqabG8S5mrVbXQgytKo1eromexurnXrWV',
        account_owner: null,
        amount: 12,
        category: [
          'Food and Drink',
          'Restaurants',
          'Fast Food'
        ],
        category_id: '13005032',
        date: '2017-05-28',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: '3322',
          zip: null
        },
        name: 'McDonald\'s',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: 'Zv8NnNpeZmhJ5oEnP3qDSK4n1M6GkkuPBjQZr',
        transaction_type: 'place'
      },
      {
        account_id: 'mQgqjqabG8S5mrVbXQgytKo1eromexurnXrWV',
        account_owner: null,
        amount: 4.33,
        category: [
          'Food and Drink',
          'Restaurants',
          'Coffee Shop'
        ],
        category_id: '13005043',
        date: '2017-05-28',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: null,
          zip: null
        },
        name: 'Starbucks',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: 'MpjAQARozKhjyakpDPRvhqPoj37GZZFNrona7',
        transaction_type: 'place'
      },
      {
        account_id: 'mQgqjqabG8S5mrVbXQgytKo1eromexurnXrWV',
        account_owner: null,
        amount: 89.4,
        category: null,
        category_id: null,
        date: '2017-05-27',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: null,
          zip: null
        },
        name: 'SparkFun',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: 'QEXKLK7md3uG1jgnlNp4tPqw4GgmAAIZVdybG',
        transaction_type: 'unresolved'
      },
      {
        account_id: 'yGMjEjD5X8TZV8WpqxoQFp7x14731qUgbwglV',
        account_owner: null,
        amount: -4.22,
        category: null,
        category_id: null,
        date: '2017-05-26',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: null,
          zip: null
        },
        name: 'INTRST PYMNT',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: 'p1PzQzl9yWc9nPbRDQayuKPeBG4aNNubdxRPX',
        transaction_type: 'unresolved'
      },
      {
        account_id: 'vEM4o43Aw8uDagA7kz8Vs47Nmg7zmvIwB1wB8',
        account_owner: null,
        amount: 500,
        category: [
          'Travel',
          'Airlines and Aviation Services'
        ],
        category_id: '22001000',
        date: '2017-05-16',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: null,
          zip: null
        },
        name: 'United Airlines',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: 'Aaxeze4pZBtgLzEa4qjWiaoJdrLPzzTamvGqn',
        transaction_type: 'special'
      },
      {
        account_id: 'mQgqjqabG8S5mrVbXQgytKo1eromexurnXrWV',
        account_owner: null,
        amount: 6.33,
        category: null,
        category_id: null,
        date: '2017-05-14',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: null,
          zip: null
        },
        name: 'Uber 072515 SF**POOL**',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: 'edPoBoy1GmUbx9noa1mRUKyA6BJMnnuJGw6Ar',
        transaction_type: 'unresolved'
      },
      {
        account_id: 'vEM4o43Aw8uDagA7kz8Vs47Nmg7zmvIwB1wB8',
        account_owner: null,
        amount: 500,
        category: null,
        category_id: null,
        date: '2017-05-11',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: null,
          zip: null
        },
        name: 'Tectra Inc',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: 'WmLdWdpz7Ptel1Jdvrw4CwxLenyjaauXVGLed',
        transaction_type: 'unresolved'
      },
      {
        account_id: 'vEM4o43Aw8uDagA7kz8Vs47Nmg7zmvIwB1wB8',
        account_owner: null,
        amount: 500,
        category: [
          'Food and Drink',
          'Restaurants',
          'Fast Food'
        ],
        category_id: '13005032',
        date: '2017-05-10',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: null,
          zip: null
        },
        name: 'KFC',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: 'Ejw1d1nvpkHZdqJjVzreFg3nQkLAddSrNLDWv',
        transaction_type: 'place'
      },
      {
        account_id: 'vEM4o43Aw8uDagA7kz8Vs47Nmg7zmvIwB1wB8',
        account_owner: null,
        amount: 500,
        category: null,
        category_id: null,
        date: '2017-05-10',
        location: {
          address: null,
          city: null,
          lat: null,
          lon: null,
          state: null,
          store_number: null,
          zip: null
        },
        name: 'Madison Bicycle Shop',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        transaction_id: '8lD3b3vqd9SQjWZlnmz6tK76NMEVDDugBydDE',
        transaction_type: 'unresolved'
      }
    ]

    var transactions =
    dummyTransactions.filter((el) => {
      return el["account_id"] === this.props.accountId
    })
    this.setState({
      transactions: transactions
    });
    // var transactions =
    // this.props.transactions.filter((el) => {
    //   return el["account_id"] === this.props.accountId
    // })
    // this.setState({
    //   transactions: transactions
    // });
  }


  handleSort(event) {
    const sort = event.target.id
    var transactions
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
    }
    this.setState({
      sort: sort,
      transactions: transactions
    });
  }

  render() {
    const { accountId } = this.props
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
            <th className="col-md-2">Amount <Glyphicon onClick={this.handleSort} id="amount" className="glyph" glyph="triangle-bottom" /></th>
            <th className="col-md-2">Date <Glyphicon onClick={this.handleSort} id="date" className="glyph" glyph="triangle-bottom" /></th>
            <th className="col-md-4">Name <Glyphicon onClick={this.handleSort} id="name" className="glyph" glyph="triangle-bottom" /></th>
            <th className="col-md-4">Category <Glyphicon onClick={this.handleSort} id="category" className="glyph" glyph="triangle-bottom" /></th>
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
