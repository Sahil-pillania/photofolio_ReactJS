import React from "react";
import "./style.css";
import logo from "./Images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="icon">
          <img src={logo} alt="" />
          <div className="name">PhotoFolio</div>
        </div>
        <div className="details"></div>
      </div>
    </>
  );
};

export default Navbar;
