import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "./Store/Slices/pizzaSliceReducer.js";


function App() {
  const dispatch = useDispatch();
  const pizza = useSelector(state => console.log(state));
  
  useEffect(()=> {
    const init = async() => {
      const res = await fetch ('http://localhost:3000/api/pizza');
      const data = await res.json();
      dispatch(getAllPizzas(data))
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
