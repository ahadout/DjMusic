import React from "react";
import "../../src/assets/css/Components/AddToCartOrBuy.css";
function AddToCartOrBuy(props) {
  return (
    <div id="AddToCartOrBuy" class={props.class}>
      {props.price && <span>{props.price}</span>}
      <div class="product-count">
        <button>+</button>
        <p>1</p>
        <button>-</button>
      </div>
      <button>ADD TO CART</button>
      {props.isBuyExists && <button>BUY NOW</button>}
    </div>
  );
}

export default AddToCartOrBuy;
