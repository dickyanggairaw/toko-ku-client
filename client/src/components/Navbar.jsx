import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Navbar () {
  const history = useHistory()
  function logout(e) {
    e.preventDefault()
    localStorage.removeItem("access_token")
    history.push('/login')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/transactions">Transaction</Link>
          </li>
          <li>
            <Link className="nav-link" to="/histories">History</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {
              localStorage.access_token ? <a className="nav-link" onClick={(e) => logout(e)}>logout</a>: 
              <Link className="nav-link" to="/login">Login</Link>
            }
          </li>
        </ul>
      </div>
    </nav>
  )
}