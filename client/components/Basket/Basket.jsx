import React from 'react';
import logoBasket from '../../assets/basket.svg';
import { useSelector } from 'react-redux';


function Basket() {
  const products = useSelector(state => state.basket);
  const quantity = Object.values(products).reduce((acc, cur)=> acc += cur.quantity, 0);
  console.log(quantity);
  return (
    <div className = 'logo-basket'>
        <img src={logoBasket} alt="" style={{ width: '35px', height: '35px' }} />
    </div>
  )
}

export default Basket