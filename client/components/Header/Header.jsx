import React from "react";
import "./Header.css";
import MenuItem from "./MenuItem/MenuItem.jsx";
import Logo from "../Logo/Logo.jsx";
import Basket from "../Basket/Basket.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Logo />
          <MenuItem />
          <Basket />
        </div>
      </div>
    </header>
  );
};

export default Header;
