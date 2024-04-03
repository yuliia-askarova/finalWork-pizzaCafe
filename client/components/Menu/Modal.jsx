import React from "react";
import "./Modal.css";
import { useState } from "react";

const Modal = ({ handleClose, show, children, imageUrl }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}

        <div className="modal-container">
          <div>
            <div className="modal-img">
              {imageUrl && <img src={imageUrl} alt="Pizza" />}
            </div>
          </div>

          <form className="form">
            <div className="option">
              <label className="modal-text" for="radio1">
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
              <label className="modal-text" for="radio2">
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
          <button>ADD TO BASKET</button>
        </div>

        <button onClick={handleClose}></button>
      </section>
    </div>
  );
};

export default Modal;
