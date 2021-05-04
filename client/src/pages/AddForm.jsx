import React, { useState } from "react"
import { addProduct } from "../store/actions/product";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function AddForm () {
  const history = useHistory()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    title: '',
    type: '',
    description: '',
    harga_modal: 0,
    haraga_jual: 0,
    stock: 0
  })
  function handleChange(event) {
    const { name, value } = event.target
    setData({...data, [name]: value})
  }
  function submitForm(e) {
    e.preventDefault()
    dispatch(addProduct(data))
    history.push('/')
  }
  return (
    <div className="container">
      <h3>
        Form Create Product
      </h3>
      <form action="" onSubmit={(e) => submitForm(e)}>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" name="title" onChange={(event) => handleChange(event)}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Type</label>
          <input type="text" className="form-control" name="type" onChange={(event) => handleChange(event)}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Description</label>
          <input type="text" className="form-control" name="description" onChange={(event) => handleChange(event)}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Harga Modal</label>
          <input type="number" className="form-control" name="harga_modal" onChange={(event) => handleChange(event)}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Harga Jual</label>
          <input type="number" className="form-control" name="harga_jual" onChange={(event) => handleChange(event)}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Stock</label>
          <input type="number" className="form-control" name="stock" onChange={(event) => handleChange(event)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}