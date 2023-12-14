import React, { useState, useEffect } from "react";
import "../../src/assets/css/Components/AddToCartOrBuy.css";

function AddToCartOrBuy(props) {
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/products/${props.productId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (e) {
        setError(e.message);
      }
    };

    if (props.productId) {
      fetchProductData();
    }

  }, [backendUrl, props.productId]);

  if (error) {
    console.log(`Error loading product: ${error}`);
    return <p>Error loading product</p>;
  }
  if (!product) {
    console.log("Loading...");
    return <p>Loading...</p>;
  }

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      setErrorMessage('You can order a min of 1 product');
      setQuantity(1);
    } else if (value > product.quantity_in_stock) {
      setErrorMessage(`There is only ${product.quantity_in_stock} products left in stock`);
      setQuantity(product.quantity_in_stock);
    } else {
      setErrorMessage('');
      setQuantity(value);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.quantity_in_stock) {
      setQuantity(quantity + 1);
      setErrorMessage('');
    } else {
      setErrorMessage(`There is only ${product.quantity_in_stock} products left in stock`);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setErrorMessage('');
    } else {
      setErrorMessage('You can order a min of 1 product');
    }
  };

  return (
    <div id="AddToCartOrBuy" className={props.class}>
      {product.price && <span>${(product.price * quantity).toFixed(2)}</span>}
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