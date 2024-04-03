import React from 'react';
import logoBasket from '../../assets/basket.svg';


function Basket() {
  return (
    <div className = 'logo-basket'>
        <img src={logoBasket} alt="" style={{ width: '35px', height: '35px' }} />
    </div>
  )
}

export default Basket