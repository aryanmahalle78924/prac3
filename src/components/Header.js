import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/about">
          About
        </Link>
        <Link className="links" to="/skills">
          Skills
        </Link>
        <Link className="links" to="/projects">
          Projects
        </Link>
        <Link className="links" to="/contact">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Header;
