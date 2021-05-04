import React from 'react'

export default  function HistoryData (props) {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.history.tanggal}</td>
      <td>{props.history.transactions.length}</td>
      <td>{props.history.total}</td>
      <td>{props.history.total_modal}</td>
      <td>{props.history.laba}</td>
    </tr>
  )
}