import React from 'react'

export default  function ProductData (props) {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.product.title}</td>
      <td>{props.product.type}</td>
      <td>{props.product.description}</td>
      <td>{props.product.harga_jual}</td>
    </tr>
  )
}