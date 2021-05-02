const initialState = {
  isLoading: false,
  error: null,
  histories: []
}

function historyReducer(state = initialState, action){
  const { type, payload } = action
  if(type === 'isLoading/setLoading'){
    return {...state, isLoading: payload}
  }else if(type === 'error/setError'){
    return {...state, error: payload}
  }else if(type === 'histories/setHistories'){
    return {...state, histories: payload}
  }
  return state
}

export default historyReducer