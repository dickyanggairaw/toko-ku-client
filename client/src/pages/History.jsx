import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchHistories } from "../store/actions/history";
import HistoryData from "../components/HistoryData";

function History () {
  const dispatch = useDispatch()
  const {histories} = useSelector(state => state.historyReducer)
  const [laba, setLaba] = useState(0)
  const [input, setInput] = useState({
    start: '',
    end: ''
  })
  useEffect(() => {
    let tempLaba = 0
    histories?.forEach(history => {
      tempLaba += history.laba
    })
    setLaba(tempLaba)
  }, [histories])
  function handleChange(e) {
    const { name, value } = e.target
    setInput({...input, [name]: value})
    console.log(input)
  }
  function submitHandle(e) {
    e.preventDefault()
    dispatch(fetchHistories(input))
  }
  return (
    <div className="container">
      <h3>History</h3>
      <form action="" onSubmit={(e) => submitHandle(e)}>
        <div>
          <label htmlFor="">Start</label>
          <input type="date" name="start" onChange={(e) => handleChange(e)}/>
        </div>
        <div>
          <label htmlFor="">End</label>
          <input type="date" name="end" onChange={(e) => handleChange(e)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Transaction</th>
            <th scope="col">Total Jual</th>
            <th scope="col">Total Modal</th>
            <th scope="col">Total Laba</th>
          </tr>
        </thead>
        <tbody>
          {
            histories?.map((history, index) => {
              return <HistoryData history={history} index={index} key={index} />
            })
          }
        </tbody>
      </table>
      <p>Laba: <span>{laba}</span></p>
    </div>
  )
}

export default History