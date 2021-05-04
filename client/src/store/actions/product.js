import axios from '../axios'

export function getProduct () {
  return (dispatch) => {
    dispatch({ type: 'isLoading/setLoading', payload: true})
    axios({
      url: '/products',
      method: 'GET',
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(({data}) => dispatch({type: 'products/setproducts', payload: data}))
      .catch((err) => dispatch({type: 'error/setError', payload: err}))
      .finally(() => dispatch({ type: 'isLoading/setLoading', payload: false}))
  }
}

export function addProduct(input) {
  return (dispatch) => {
    axios({
      url: '/products',
      method: 'POST',
      headers: {
        access_token: localStorage.access_token
      },
      data: input
    })
      .then(() => {
        dispatch(getProduct())
        alert("success add producct")
      })
      .catch((err) => console.log(err))
  }
}

export function getProductById(id) {
  return (dispatch) => {
    axios({
      url: '/products/' + id,
      method: 'GET',
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(({data}) => {
        dispatch({type: 'product/setproduct', payload: data})
      })
      .catch((err) => console.log(err))
  }
}

export function updateProduct (id, data) {
  return (dispatch) => {
    axios({
      url: '/products/' + id,
      method: 'PUT',
      headers: {
        access_token: localStorage.access_token
      },
      data: data
    })
      .then(() => {
        dispatch(getProduct())
        alert("Successfully update Product")
      })
      .catch((err) => console.log(err))
  }
}