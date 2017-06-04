import React, { Component } from 'react'
import { connect } from 'react-redux'
import Account from './Account'

class AccountsList extends Component {
	render() {
		// DUMMY INFO
		const dummyState =
		{
		  accounts: {
		    accounts: [
		      {
		        account_id: 'mQgqjqabG8S5mrVbXQgytKo1eromexurnXrWV',
		        balances: {
		          available: 100,
		          current: 110,
		          limit: null
		        },
		        mask: '0000',
		        name: 'Plaid Checking',
		        official_name: 'Plaid Gold Standard 0% Interest Checking',
		        subtype: 'checking',
		        type: 'depository'
		      },
		      {
		        account_id: 'yGMjEjD5X8TZV8WpqxoQFp7x14731qUgbwglV',
		        balances: {
		          available: 200,
		          current: 210,
		          limit: null
		        },
		        mask: '1111',
		        name: 'Plaid Saving',
		        official_name: 'Plaid Silver Standard 0.1% Interest Saving',
		        subtype: 'savings',
		        type: 'depository'
		      },
		      {
		        account_id: '9qdxmx5Ka9fE6zRqwjBMFPnm6rnV6vSKwgK5P',
		        balances: {
		          available: null,
		          current: 1000,
		          limit: null
		        },
		        mask: '2222',
		        name: 'Plaid CD',
		        official_name: 'Plaid Bronze Standard 0.2% Interest CD',
		        subtype: 'cd',
		        type: 'depository'
		      },
		      {
		        account_id: 'vEM4o43Aw8uDagA7kz8Vs47Nmg7zmvIwB1wB8',
		        balances: {
		          available: null,
		          current: 410,
		          limit: 2000
		        },
		        mask: '3333',
		        name: 'Plaid Credit Card',
		        official_name: 'Plaid Diamond 12.5% APR Interest Credit Card',
		        subtype: 'credit',
		        type: 'credit'
		      }
		    ],
		    item: {
		      available_products: [
		        'balance'
		      ],
		      billed_products: [
		        'auth',
		        'transactions'
		      ],
		      error: null,
		      institution_id: 'ins_3',
		      item_id: 'yGMjEjD5X8TZV8WpqxoQFp7xBEg1ddFovXx3Q',
		      webhook: ''
		    },
		    numbers: [
		      {
		        account: '1111222233330000',
		        account_id: 'mQgqjqabG8S5mrVbXQgytKo1eromexurnXrWV',
		        routing: '011401533',
		        wire_routing: '021000021'
		      },
		      {
		        account: '1111222233331111',
		        account_id: 'yGMjEjD5X8TZV8WpqxoQFp7x14731qUgbwglV',
		        routing: '011401533',
		        wire_routing: '021000021'
		      },
		      {
		        account: '1111222233332222',
		        account_id: '9qdxmx5Ka9fE6zRqwjBMFPnm6rnV6vSKwgK5P',
		        routing: '091000019',
		        wire_routing: '021000021'
		      }
		    ],
		    request_id: 'tgy6T'
		  },
		  transactions: [
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
		}
		const accounts_info = dummyState["accounts"]["accounts"].map((el,i) => {
			return <Account accountInfo={el} key={i} />
		})
		// DUMMY INFO ^

		// const accounts_info = this.props.accounts["accounts"].map((el,i) => {
		// 	return <Account accountInfo={el} key={i} />
		// })
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
