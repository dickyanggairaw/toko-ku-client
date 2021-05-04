const initialState = {
  isLoading: false,
  error: null,
  products: [],
  product: {}
}

function productReducer (state = initialState, action) {
  const { type, payload } = action
  if(type === 'isLoading/setLoading'){
    return {...state, isLoading: payload}
  }else if(type === 'error/setError'){
    return {...state, error: payload}
  }else if(type === 'products/setproducts'){
    return {...state, products: payload}
  }else if(type === 'product/setproduct'){
    return {...state, product: payload}
  }
  return state
}

export default productReducer