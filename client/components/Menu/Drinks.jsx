import React from "react";
import "./Pizzas.css";
import Pic1 from "../../assets/coffee.png";
import Pic2 from "../../assets/coffee1.png";
import {useSelector} from 'react-redux';

const Drinks = () => {
  const drinks = useSelector(state => state.drinks);
  console.log(drinks);
  return (
    <div className="pizza-list">
      <ul>
        {drinks.map((item, index) => (
          <li key={index}>
            <div className="pizza-image">
              <img src={item.img} alt="" />
            </div>

            <div className="pizza-header">{item.name}</div>
            <div className="pizza-ingredients">{item.description}</div>

            <div className="pizza-details">
              <div className="pizza-price">€ {item?.price[0]}.00</div>
              <button className="pizza-button">+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drinks;
