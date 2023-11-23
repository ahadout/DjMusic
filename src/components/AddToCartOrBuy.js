import React, { useState } from "react";
import "../../src/assets/css/Components/AddToCartOrBuy.css";

function AddToCartOrBuy(props) {
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      setErrorMessage('You can order a min of 1 product');
      setQuantity(1);
    } else if (value > 10) {
      setErrorMessage('You can only order a max of 10 products');
      setQuantity(10);
    } else {
      setErrorMessage('');
      setQuantity(value);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      setErrorMessage('');
    } else {
      setErrorMessage('*You can only order a max of 10 products');
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setErrorMessage('');
    } else {
      setErrorMessage('*You can order a min of 1 product');
    }
  };

  return (
    <div id="AddToCartOrBuy" className={props.class}>
      {props.price && <span>${props.price * quantity}</span>}
      <div className="product-count">
        <button onClick={decreaseQuantity}>-</button>
        <input type="number" value={quantity} onChange={handleInputChange} />
        <button onClick={increaseQuantity}>+</button>
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button>Add To Cart</button>
      {props.isBuyExists && <button>BUY NOW</button>}
    </div>
  );
}

export default AddToCartOrBuy;