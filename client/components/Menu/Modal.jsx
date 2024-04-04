import React from "react";
import "./Modal.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../../Store/Slices/basketSliceReducer";

const Modal = ({ handleClose, show, id }) => {
  // const showHideClassName = show ? "modal display-block" : "modal display-none";
  const products = useSelector(state => [...state.pizza, ...state.drinks]);
const product = products.find(item => item._id === id);
const dispatch = useDispatch()
const handleAdd = () => {
  dispatch(addToBasket(product));
  handleClose()
  
}
  

  return (
   <> {(show) &&  
      
      <div className={"modal display-block"}>
      <section className="modal-main">
        {/* {children} */}

        <div className="modal-header">
                  <p>Pizza</p>
                  <p>{product.name}</p>
                </div>

        <div className="modal-container">
          <div>
            <div className="modal-img">
              <img src={product.imageUrl} alt="Pizza" />
            </div>
          </div>

          <form className="form">
            <div className="option">
              <label className="modal-text" htmlFor="radio1">
                Small size
              </label>
              <input
                type="radio"
                id="radio1"
                name="radios"
                value="option1"
              ></input>
              <p className="modal-text">35 cm</p>
              <p className="modal-text">10 euros</p>
            </div>

            <div className="option">
              <label className="modal-text" htmlFor="radio2">
                Large size
              </label>
              <input
                type="radio"
                id="radio2"
                name="radios"
                value="option2"
              ></input>
              <p className="modal-text">45 cm</p>
              <p className="modal-text">14 euros</p>
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <p>TOTAL: </p>
          <button onClick = {handleAdd} >ADD TO BASKET</button>
        </div>

        <button onClick={handleClose}></button>
      </section>
    </div>
    
  }</>
  
  );
};

export default Modal;
