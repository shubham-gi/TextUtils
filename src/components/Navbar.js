import React from "react";
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  function handleClickBlue(){
    
  }
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <div
            className="blue btn"
            style={{
              backgroundColor: "blue",
              width: "15px",
              borderRadius: "100%",
              border: "solid 1px",
              height: "18px",
              marginRight:"12px"
            }}
          ></div>
          <div
            className="blue btn"
            style={{
              backgroundColor: "green",
              width: "15px",
              borderRadius: "100%",
              border: "solid 1px",
              height: "18px",
              marginRight:"12px"
            }}
          ></div>
          <div
            className="blue btn"
            style={{
              backgroundColor: "yellow",
              width: "15px",
              height: "18px",
              borderRadius: "100%",
              border: "solid 1px",
              marginRight:"12px"
            }} onClick={handleClickBlue}
          ></div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
