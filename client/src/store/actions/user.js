import axios from '../axios'
import { getProduct } from './product'

export function login (data){
  return (dispatch) => {
    console.log("row 5")
    axios({
      url: '/users/login',
      method: 'POST',
      data: data
    })
      .then(({data}) => {
        dispatch(getProduct())
        localStorage.setItem('access_token', data.access_token)
        alert("login Successfully")
      })
      .catch((err) => console.log(err))
  }
}