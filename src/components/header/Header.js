import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link " to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="login">
          Login
        </Link>
      </li>
    </ul>
  );
}

export default Header;
