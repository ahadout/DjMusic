import React from "react";
import "../../assets/css/CloudDrives/CloudDrives_Section2.css";
import OneTbCloud from "../../assets/images/1tb_cloud.png";
import twoTbCloud from "../../assets/images/2tb_cloud.png";
import ProductCard from "../../components/ProductCard";
import AddToCartOrBuy from "../../components/AddToCartOrBuy";
function CloudDrives_Section2() {
  return (
    <section id="CloudDrives_Section2">
      <div id="CloudDrives_Section2_Header">
        <h1>DJ musicHD plans</h1>
        <p>
          Discover the best offers from DJ musicHD, we have a multi plans for
          help you to enjoy with your favourite music djs
        </p>
      </div>
      <div class="CloudDrives_Section2_Grid">
        <div class="CloudDrives_Section2_ProductCard_Container">
          <ProductCard
            imgSrc={twoTbCloud}
            imgAlt="2TB DJ Standard Music Cloud Drive"
            description="2TB DJ Standard <br /> Music <br /> Cloud Drive"
            imgClass="CloudDrives_Section2_ProductCard_img"
          />
          <AddToCartOrBuy
            price="299.99$"
            class="center_AddToCartOrBuy"
            isBuyExists={true}
          />
        </div>
        <div class="CloudDrives_Section2_ProductCard_Container">
          <ProductCard
            imgSrc={OneTbCloud}
            imgAlt="Sandisk 2tb solid state"
            description="1TB DJ Standard <br /> Music <br /> Cloud Drive"
            imgClass="CloudDrives_Section2_ProductCard_img"
          />
          <AddToCartOrBuy
            price="399.99$"
            class="center_AddToCartOrBuy"
            isBuyExists={true}
          />
        </div>
        <div class="CloudDrives_Section2_ProductCard_Container">
          <ProductCard
            imgSrc={twoTbCloud}
            imgAlt="2TB DJ Standard Music Cloud Drive"
            description="2TB DJ Standard <br /> Music <br /> Cloud Drive"
            imgClass="CloudDrives_Section2_ProductCard_img"
          />
          <AddToCartOrBuy
            price="349.99$"
            class="center_AddToCartOrBuy"
            isBuyExists={true}
          />
        </div>
      </div>
    </section>
  );
}

export default CloudDrives_Section2;
