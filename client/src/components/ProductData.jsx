import React from 'react'
import { useDispatch } from 'react-redux'
import { addTransaction } from "../store/actions/transaction";
import { useHistory } from "react-router-dom";

export default  function ProductData (props) {
  const history = useHistory()
  const dispatch = useDispatch()
  function addToCart (event) {
    dispatch(addTransaction(props.product._id))
    history.push('/transactions')
  }
  function editProduct (event) {

    history.push('/editForm/' + props.product._id)
  }
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.product.title}</td>
      <td>{props.product.type}</td>
      <td>{props.product.description}</td>
      <td>{props.product.harga_jual}</td>
      <td>{props.product.stock}</td>
      <td>
        <button className="btn btn-primary btn-sm" onClick={(event) => addToCart(event)}>Chart</button>| | 
         <button className="btn btn-success btn-sm" onClick={(event) => editProduct(event)}>Edit</button>
      </td>
    </tr>
  )
}