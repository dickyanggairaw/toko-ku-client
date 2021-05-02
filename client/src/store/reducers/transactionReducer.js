const initialState = {
  isLoading: false,
  error: null,
  transactions: []
}

function transactionReducer(state = initialState, action){
  const { type, payload } = action
  if(type === 'isLoading/setLoading'){
    return {...state, isLoading: payload}
  }else if(type === 'error/setError'){
    return {...state, error: payload}
  }else if(type === 'transactions/setTransactions'){
    return {...state, transactions: payload}
  }
  return state
}

export default transactionReducer