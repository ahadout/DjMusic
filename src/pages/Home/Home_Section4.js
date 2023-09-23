import React from "react";
import "../../assets/css/Home/Home_Section4.css";
import Sandik2tbSolidDisk from "../../assets/images/Sandisk 2tb solid state.png";
function Home_Section4() {
  return (
    <div class="home_section4_container">
      <section id="home_section4">
        <div id="product_card">
          <div class="product_card_circle"></div>
          <img src={Sandik2tbSolidDisk} alt="Sandisk 2tb solid state" />
          <p>
            1TB DJ Standard <br />
            Music <br />
            Hard Drive
          </p>
        </div>
        <div id="product_buy_addtocart">
          <h1>
            Get your 2TB Solid State <br />
            Drive DJ!
          </h1>
          <p>2TB Solid State Drive DJ Combo (DJ Standard + Trifecta)</p>
          <span>349.99$</span>
          <div class="product-count">
            <button>+</button>
            <p>1</p>
            <button>-</button>
          </div>
          <button>ADD TO CART</button>
          <button>BUY</button>
        </div>
      </section>
    </div>
  );
}

export default Home_Section4;
