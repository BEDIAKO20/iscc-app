import React from 'react'
import logo from "../../assets/ISSC LOGO kk.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3"> 
      <a className="navbar-brand ms-5" href="#">
      <img src={logo} alt="" width="100"  class="d-inline-block align-text-top"/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto gap-3">
          <li className="nav-item active ">
            <Link className="nav-link text-white" to="/">
              NewandBolgs
            </Link>
          </li>
          <li className="nav-item ">
            < Link className="nav-link text-white" to="/allnew">
              AllNew
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/newsdetails">
            New details
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/newtemplate">
              NewTemplate
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/whoweare">
              WhoWeAre
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/conutacts">
              Countacts
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/new&bolgs">
              New&Bolgs
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/getInvoloed">
              GetInvoloed
            </Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar