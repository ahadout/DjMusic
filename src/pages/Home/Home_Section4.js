import React from "react";
import ProductCard from "../../components/ProductCard";
import AddToCartOrBuy from "../../components/AddToCartOrBuy";
import "../../assets/css/Home/Home_Section4.css";
import Sandik2tbSolidDisk from "../../assets/images/Sandisk 2tb solid state.png";
function Home_Section4() {
  return (
    <div id="home_section4_container">
      <section id="home_section4">
        <ProductCard
          imgSrc={Sandik2tbSolidDisk}
          imgAlt="Sandisk 2tb solid state"
          description="1TB DJ Standard <br /> Music <br /> Hard Drive"
          imgClass="Home_Section4_ProductCard_img"
        />
        <div id="product_buy_addtocart">
          <h1>
            Get your 2TB Solid State <br />
            Drive DJ!
          </h1>
          <p>2TB Solid State Drive DJ Combo (DJ Standard + Trifecta)</p>
          <AddToCartOrBuy price="349.99$" isBuyExists={true} />
        </div>
      </section>
    </div>
  );
}

export default Home_Section4;
