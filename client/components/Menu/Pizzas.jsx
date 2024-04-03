import React from "react";
import "./Pizzas.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./Modal.jsx";

const Pizzas = () => {
  const [showModal, setShowModal] = useState(false);

  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedPizzaImage, setSelectedPizzaImage] = useState(""); 

  const handleShowModal = (pizza) => {
    setSelectedPizza(pizza);
    setSelectedPizzaImage(pizza.imageUrl); 
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);
  const pizzas = useSelector((state) => state.pizza);

  return (
    <div className="pizza-list">
      <ul>
        {pizzas.map((item, index) => (
          <li key={index}>
            <div className="pizza-image">
              <img src={item.imageUrl} alt="" />
            </div>

            <div className="pizza-header">{item.name}</div>
            <div className="pizza-ingredients">{item.ingredients}</div>

            <div className="pizza-details">
              <div className="pizza-price"> € {item.price[0]}.00</div>

              <button
                className="pizza-button"
                onClick={() => handleShowModal(item)}
              >
                +
              </button>

              <Modal
                show={showModal}
                handleClose={handleCloseModal}
                imageUrl={selectedPizzaImage}
              >
                <div className="modal-header">
                  <p>Pizza</p>
                  {selectedPizza && <p>{selectedPizza.name}</p>}
                </div>
              </Modal>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizzas;
