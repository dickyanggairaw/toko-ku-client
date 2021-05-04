import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from  'react-redux'
import { fetchTransactions } from "../store/actions/transaction";
import TransactionData from "../components/TransactionData";
import { addHistories } from "../store/actions/history";

function Transaction () {
  const [data, setData] = useState({
    total: 0,
    total_modal: 0,
    laba: 0
  })
  const dispatch = useDispatch()
  const { transactions } = useSelector(state => state.transactionReducer)
  useEffect(() => {
    dispatch(fetchTransactions())
    let total_transaction = {
      total: 0,
      total_modal: 0
    }
    transactions?.forEach(transaction => {
      total_transaction.total += transaction.harga_jual
      total_transaction.total_modal += transaction.harga_modal
    })
    total_transaction.laba = total_transaction.total - total_transaction.total_modal
    setData(total_transaction)
  }, [dispatch, transactions])
  function addHistory() {
    dispatch(addHistories(data))
  }
  return (
    <div className="container">
      <h1>Transaction</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Harga</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map((transaction, index) => {
              return <TransactionData product={transaction} index={index} key={index} />
            })
          }
        </tbody>
      </table>
      <p>Total Uang: <span>{data.total}</span></p>
      <p>Total Modal: <span>{data.total_modal}</span></p>
      <p>Total Laba: <span>{data.laba}</span></p>
      <button className="btn btn-dark btn-sm" onClick={addHistory}>Done</button>
    </div>
  )
}

export default Transaction