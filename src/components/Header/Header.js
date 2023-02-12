import React from "react";
import Navbar from "../Navbar/Navbar";
import logo_header from "../../logo_primary-removebg.png";

const Header = ({ showAs }) => {
  return (
    <header
      className={`${showAs === "Shadow" ? "header header--shadow" : "header"}`}
    >
      <img src={logo_header} alt="" className="header__logo" />
      <Navbar />
    </header>
  );
};

export default Header;
