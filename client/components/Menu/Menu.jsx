import React, { useEffect } from "react";
import mainPic from "../../assets/menu-main-pic.jpg";
import "./Menu.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../Header/Header.css";
import Footer from "../Footer/Footer.jsx";

import { useDispatch } from "react-redux";
import { getAllPizzas } from "../../Store/Slices/pizzaSliceReducer";
import { getAllDrinks } from "../../Store/Slices/drinksSliceReducer";


const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=> {
    const init = async() => {
      const res = await fetch ('http://127.0.0.1:5000/pizza');
      const data = await res.json();
      dispatch(getAllPizzas(data))
    }
    init()
  }, [dispatch])

  useEffect(()=> {
    const init = async() => {
      const res = await fetch ('http://127.0.0.1:5000/drinks');
      const data = await res.json();
      dispatch(getAllDrinks(data))
    }
    init()
  }, [dispatch])

  useEffect(() => {
    navigate("./pizzas"); 
  }, [navigate]);

  return (
    <>
      <div className="menu">
        <img src={mainPic} alt="" />
      </div>

      <div className="wrapper">
        <div className="container">
          <nav className="nav">
            <ul className="nav-list subnav">
              <li className="link">
                <Link to="pizzas" className="sublink">
                  Pizzas
                </Link>
              </li>
              <li className="link">
                <Link to="drinks" className="sublink">
                  Drinks
                </Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Menu;
