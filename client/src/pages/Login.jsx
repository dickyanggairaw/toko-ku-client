import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/user";
import { useHistory } from "react-router-dom";

export default function Login () {
  const history = useHistory()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  function submitForm (e) {
    e.preventDefault()
    dispatch(login(data)) 
    history.push('/')   
  }
  function handleChange (e) {
    const { name, value } = e.target
    setData({
      ...data, 
      [name]: value
    })
  }
  return (
    <div className="container">
      <form action="" onSubmit={(e) => submitForm(e)}>
        <div className="form-group">
          <label htmlFor="">UserName</label>
          <input type="text" className="form-control" name="username" onChange={(event) => handleChange(event)}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="password" className="form-control" name="password" onChange={(event) => handleChange(event)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}