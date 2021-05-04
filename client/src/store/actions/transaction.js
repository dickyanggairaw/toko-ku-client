import axios from '../axios'

export function fetchTransactions () {
  return (dispatch) => {
    axios({
      url: '/transactions',
      method: 'GET',
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(({data}) => dispatch({type: 'transactions/setTransactions', payload: data}))
      .catch((err) => dispatch({type: 'error/setError', payload: err}))
  }
}

export function addTransaction (id) {
  return (dispatch) => {
    axios({
      url: '/transactions',
      method: 'POST',
      headers: {
        access_token: localStorage.access_token
      },
      data: {
        id: id
      }
    })
      .then(() => {
        dispatch(fetchTransactions())
        alert("add to transaction success")
      })
      .catch((err) => console.log(err))
  }
}