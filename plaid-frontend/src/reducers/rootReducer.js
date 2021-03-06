export default function plaidReducer(state = {
  accounts: {},
  transactions: {},
}, action) {
  switch(action.type) {
    case 'LOAD_ACCOUNTS':
      return Object.assign({}, state, { accounts: action.payload });
    case 'LOAD_TRANSACTIONS':
      return Object.assign({}, state, { transactions: action.payload })
    case "LOG_OUT":
      return {accounts: {}, transactions: {}}
    default:
      return state;
  }
}
