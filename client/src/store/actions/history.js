import axios from '../axios'

export function addHistories (data) {
  return (dispatch) => {
    axios({
      url: '/histories',
      method: 'POST',
      headers: {
        access_token: localStorage.access_token
      },
      data: data
    })
      .then(() => alert("success add history"))
      .catch((err) => console.log(err))
  }
}
export function fetchHistories (data) {
  return (dispatch) => {
    axios({
      url: '/histories/month',
      method: 'POST',
      headers: {
        access_token: localStorage.access_token
      },
      data: data
    })
      .then(({data}) => {
        // console.log(data)
        dispatch({type: 'histories/setHistories', payload: data})
      })
      .catch((err) => console.log(err))
  }
}