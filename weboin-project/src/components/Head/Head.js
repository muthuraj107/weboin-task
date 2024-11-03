import React from "react";
import Nav from "../Nav/Nav";
import "./Head.css";
import { Link } from "react-router-dom";
export default function Head() {
  return (
    <div className="head">
      <div>
        <Nav />
      </div>

      <div className="head-content">
        <h1>Learn from the best, be your best..</h1>
        <p>
          Give yourself an upgrade with our inspiring online courses and join a
          global community of learners
        </p>
        <Link to="/form" className="btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}
