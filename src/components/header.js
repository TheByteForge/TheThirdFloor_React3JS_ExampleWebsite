import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="logo"><a href="#">THE THIRD FLOOR</a></div>
        <nav>
          <ul>
            <li>
              <a href="/">about</a>
            </li>
            <li>
              <a href="/">services</a>
            </li>
            <li>
              <a href="/">courses</a>
            </li>
            <li>
              <a href="/">contact us</a>
            </li>
            <li className="btn-clear">
              <a href="/">Login</a>
            </li>
            <li className="btn">
              <a href="/">Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
