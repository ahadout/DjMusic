import React from "react";
import ProductCard from "../../components/ProductCard";
import AddToCartOrBuy from "../../components/AddToCartOrBuy";
import TwoTbCloud from "../../assets/images/1tb_cloud.png";
import OneTbCloud from "../../assets/images/2tb_cloud.png";
import "../../assets/css/HardDrives/HardDrives_Section3.css";

function HardDrives_Section3() {
  return (
    <>
      <section id="HardDrives_Section3">
        <h1>Unlimited products</h1>
        <p>
          Feel More fan and enjoy the the favourite music with your best
          persones!
        </p>
        <div className="HardDrives_Section3_Grid">
          <div className="HardDrives_Section3_ProductCard_Container">
            <ProductCard
              imgSrc={OneTbCloud}
              imgAlt="2TB DJ Combo Music Hard Drive (DJ Standard + Trifecta)"
              description="2TB DJ Combo Music Hard <br /> Drive (DJ Standard + <br /> Trifecta)"
              imgClass="HardDrives_Section3_ProductCard_img"
              class="ProductCard_HardDrives_Section3"
            />
            <AddToCartOrBuy class="HardDrives_Section3_AddToCartOrBuy" />
          </div>
          <div className="HardDrives_Section3_ProductCard_Container">
            <ProductCard
              imgSrc={TwoTbCloud}
              imgAlt="2TB DJ Combo Music Hard Drive (DJ Standard + Trifecta)"
              description="2TB DJ Combo Music Hard <br /> Drive (DJ Standard + <br /> Trifecta)"
              imgClass="HardDrives_Section3_ProductCard_img"
              class="ProductCard_HardDrives_Section3"
            />
            <AddToCartOrBuy class="HardDrives_Section3_AddToCartOrBuy" />
          </div>
          <div className="HardDrives_Section3_ProductCard_Container">
            <div id="HardDrives_Section3_ProductCard_ShowMore">
              <button>+</button>
              <button>View more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HardDrives_Section3;
