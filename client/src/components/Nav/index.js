import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand mr-5" to="/">
          Google Books
        </Link>
        <div >
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
