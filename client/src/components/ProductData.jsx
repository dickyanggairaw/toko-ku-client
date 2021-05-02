import React from 'react'
import { useDispatch } from 'react-redux'

export default  function ProductData (props) {
  const dispatch = useDispatch()
  function addToCart () {
    dispatch(addTransaction(props.product._id))
  }
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.product.title}</td>
      <td>{props.product.type}</td>
      <td>{props.product.description}</td>
      <td>{props.product.harga_jual}</td>
      <td>
        <button className="btn btn-primary" onClick={() => addToCart}>Chart</button> | 
        <button className="btn btn-success">Edit</button> | 
        <button className="btn btn-dark">Add</button>
      </td>
    </tr>
  )
}