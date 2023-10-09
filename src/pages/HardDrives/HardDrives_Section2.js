import React from "react";
import "../../assets/css/HardDrives/HardDrives_Section2.css";
import SandiskTwotbSolidState from "../../assets/images/Sandisk 2tb solid state.png";
import TwoTbDjComboMusic from "../../assets/images/2tb_dj_combo_music.png";
import OneTbDJStandardMusic from "../../assets/images/1tb_DJ_standard_music.png";
import ProductCard from "../../components/ProductCard";
import AddToCartOrBuy from "../../components/AddToCartOrBuy";
function HardDrives_Section2() {
  return (
    <>
      <section id="HardDrives_Section2">
        <div id="HardDrives_Section2_Header">
          <h1>DJ musicHD plans</h1>
          <p>
            Discover the best offers from DJ musicHD, we have a multi plans for
            help you to enjoy with your favourite music djs
          </p>
        </div>
        <div class="HardDrives_Section2_Grid">
          <div class="HardDrives_Section2_ProductCard_Container">
            <ProductCard
              imgSrc={TwoTbDjComboMusic}
              imgAlt="2TB DJ Standard Music Cloud Drive"
              description="2TB DJ Standard <br /> Music <br /> Cloud Drive"
              imgClass="HardDrives_Section2_ProductCard_img"
            />
            <AddToCartOrBuy
              price="299.99$"
              class="center_AddToCartOrBuy"
              isBuyExists={true}
            />
          </div>
          <div class="HardDrives_Section2_ProductCard_Container">
            <ProductCard
              imgSrc={SandiskTwotbSolidState}
              imgAlt="Sandisk 2tb solid state"
              description="1TB DJ Standard <br /> Music <br /> Cloud Drive"
              imgClass="HardDrives_Section2_ProductCard_img"
            />
            <AddToCartOrBuy
              price="399.99$"
              class="center_AddToCartOrBuy"
              isBuyExists={true}
            />
          </div>
          <div class="HardDrives_Section2_ProductCard_Container">
            <ProductCard
              imgSrc={OneTbDJStandardMusic}
              imgAlt="2TB DJ Standard Music Cloud Drive"
              description="2TB DJ Standard <br /> Music <br /> Cloud Drive"
              imgClass="HardDrives_Section2_ProductCard_img"
            />
            <AddToCartOrBuy
              price="349.99$"
              class="center_AddToCartOrBuy"
              isBuyExists={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HardDrives_Section2;
