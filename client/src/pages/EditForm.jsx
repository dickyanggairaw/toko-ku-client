import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, updateProduct } from "../store/actions/product";

export default function EditForm () {
  const history = useHistory()
  const [input, setInput] = useState({
    harga_jual: 0,
    harga_modal: 0,
    stock: 0
  })
  const dispatch = useDispatch()
  const { id } = useParams()
  const { product } = useSelector(state => state.productReducer)
  useEffect(()=>{
    dispatch(getProductById(id))
  },[dispatch, id])
  useEffect(() => {
    if(product){
      setInput({
        harga_jual: product.harga_jual,
        harga_modal: product.harga_modal,
        stock: 0
      })
    }
  }, [product])
  function submitForm(e){
    e.preventDefault()
    // console.log(input)
    dispatch(updateProduct(id, input))
    history.push('/')
  }
  function handleChange(e){
    const { name, value } = e.target
    setInput({...input, [name]: value}) 
  }
  return (
    <div className="container">
      <h4>{product.title} {product.description}</h4>
      <form action="" onSubmit={(e) => submitForm(e)}>
        <div className="form-group">
          <label htmlFor="">Harga Modal</label>
          <input type="number" className="form-control" name="harga_modal" onChange={(event) => handleChange(event)} defaultValue={product.harga_modal}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Harga Jual</label>
          <input type="number" className="form-control" name="harga_jual" defaultValue={product.harga_jual} onChange={(event) => handleChange(event)}/>
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