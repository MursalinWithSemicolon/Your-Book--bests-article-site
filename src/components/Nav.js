import React from 'react'

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" to="#"><div className="logo"><img src="/Screenshot 2025-04-05 221013.png" alt="" />YourBook</div></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" to="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" to="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" to="#">Contact Us</a>
      </li>
  
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

