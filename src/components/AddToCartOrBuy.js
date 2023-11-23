import React, {useState} from "react";
import "../../src/assets/css/Components/AddToCartOrBuy.css";

function AddToCartOrBuy(props) {

  const [quantity, setQuantity] = useState(1);

  return (
    <div id="AddToCartOrBuy" class={props.class}>
      {props.price && <span>${props.price * quantity}</span>}
      <div class="product-count">
        <button onClick={() => {quantity > 1 ? setQuantity( quantity - 1) : setQuantity( quantity)}}>-</button>
        <p>{quantity}</p>
        <button onClick={() => {quantity < 10 ? setQuantity( quantity + 1) : setQuantity( quantity)}}>+</button>
      </div>
      <button>Add To Cart</button>
      {props.isBuyExists && <button>BUY NOW</button>}
    </div>
  );
}

export default AddToCartOrBuy;
