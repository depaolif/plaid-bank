export const loadAccounts = (accounts) => ({
	type: 'LOAD_ACCOUNTS', payload: accounts
})

export const loadTransactions = (transactions) => ({
	type: 'LOAD_TRANSACTIONS', payload: transactions
})