import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "./Store/Slices/pizzaSliceReducer.js";
import { getAllDrinks } from "./Store/Slices/drinksSliceReducer.js";


function App() {
  const dispatch = useDispatch();
  const pizza = useSelector(state => console.log(state));
  
  useEffect(()=> {
    const init = async() => {
      const res = await fetch('http://127.0.0.1:5000/pizza');
      const res1 = await fetch('http://127.0.0.1:5000/drinks');
      console.log(res);
      const data = await res.json();
      const data1 = await res1.json();
      dispatch(getAllPizzas(data))
      dispatch(getAllDrinks(data1))
    }
    init()
  }, [dispatch])

  return (
    <>
      <div>
        <Home />

      </div>
    </>
  );
}

export default App;
