import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <header className="nav-header">
        <div className="content">
          <div>
            <h1>
              <Link to="/">LearnHub</Link>
            </h1>
          </div>
          <div>
            <p>
              <Link to="/form">Admin</Link>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
