import axios from '../axios'

export function getProduct () {
  return (dispatch) => {
    dispatch({ type: 'isLoading/setLoading', payload: true})
    axios('/products')
      .then(({data}) => dispatch({type: 'products/setproducts', payload: data}))
      .catch((err) => dispatch({type: 'error/setError', payload: err}))
      .finally(() => dispatch({ type: 'isLoading/setLoading', payload: false}))
  }
}