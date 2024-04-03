import React from "react";
import { Link } from 'react-router-dom';
// const config = [
//   { link: "/", text: "Головна" },
//   { link: "/", text: "Питання" },
//   { link: "/", text: "Матерали" },
//   { link: "/", text: "Контакти" },
// ];

const MenuItem = () => {
  return (
    // <nav className="menuItem">
    //   <ul>
    //     {config.map((item) => (
    //       <li key ={item.text} className="btn">
    //         <a href={item.link}>{item.text}</a>
    //       </li>
    //     ))}

    //   </ul>
    // </nav>

    <nav className="nav">
      <ul className="nav-list">
        <li className="btn">
          <Link to="/">Home</Link>
        </li>
        <li className="btn">
          <Link to="/about">About</Link>
        </li>
        <li className="btn">
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItem;
