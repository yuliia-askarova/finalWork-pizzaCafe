import React from "react";
import logo from "../../assets/pizza-logo.png";

function Logo() {
  return (
    <div className="header-logo">
      <img
        src={logo}
        alt=""
        className="logo-pizza"
        style={{ width: "140px", height: "60px" }}
      />
    </div>
  );
}

export default Logo;
