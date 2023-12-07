import React from "react";
import "../../src/assets/css/Components/ProductCard.css";
function ProductCard(props) {
  return (
    <div id="product_card" className={props.class}>
      <div className="product_card_circle"></div>
      <img src={props.imgSrc} alt={props.imgAlt} className={props.imgClass} />
      <p dangerouslySetInnerHTML={{ __html: props.name }}></p>
    </div>
  );
}

export default ProductCard;
