import React from "react";
import "../../assets/css/CloudDrives/CloudDrives_Section3.css";
import ProductCard from "../../components/ProductCard";
import AddToCartOrBuy from "../../components/AddToCartOrBuy";
import OneTbCloud from "../../assets/images/1tb_cloud.png";
import TwoTbCloud from "../../assets/images/2tb_cloud.png";

function CloudDrives_Section3() {
  return (
    <section id="CloudDrives_Section3">
      <h1>Unlimited products</h1>
      <p>
        Feel More fan and enjoy the the favourite music with your best persones!
      </p>
      <div className="CloudDrives_Section3_Grid">
        <div className="CloudDrives_Section3_ProductCard_Container">
          <ProductCard
            imgSrc={OneTbCloud}
            imgAlt="2TB DJ Combo Music Hard Drive (DJ Standard + Trifecta)"
            description="2TB DJ Combo Music Hard <br /> Drive (DJ Standard + <br /> Trifecta)"
            imgClass="CloudDrives_Section3_ProductCard_img"
            class="ProductCard_CloudDrives_Section3"
          />
          <AddToCartOrBuy class="CloudDrives_Section3_AddToCartOrBuy" />
        </div>
        <div className="CloudDrives_Section3_ProductCard_Container">
          <ProductCard
            imgSrc={TwoTbCloud}
            imgAlt="2TB DJ Combo Music Hard Drive (DJ Standard + Trifecta)"
            description="2TB DJ Combo Music Hard <br /> Drive (DJ Standard + <br /> Trifecta)"
            imgClass="CloudDrives_Section3_ProductCard_img"
            class="ProductCard_CloudDrives_Section3"
          />
          <AddToCartOrBuy class="CloudDrives_Section3_AddToCartOrBuy" />
        </div>
        <div className="CloudDrives_Section3_ProductCard_Container">
          <div id="CloudDrives_Section3_ProductCard_ShowMore">
            <button>+</button>
            <button>View more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloudDrives_Section3;
