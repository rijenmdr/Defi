import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <nav>
      <div className="container">
        <h1>
          De <span className="primary">Fi</span>
        </h1>

        <ul className={`nav-items ${isOpen ? "nav-active" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
          <li>
            <a href="/">Earn</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>

        <div className="hamburger" onClick={handleOpen}>
          {isOpen ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
