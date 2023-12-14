import React, {useState, useEffect} from "react";
import "../../assets/css/HardDrives/HardDrives_Section2.css";
import SandiskTwotbSolidState from "../../assets/images/Sandisk 2tb solid state.png";
import TwoTbDjComboMusic from "../../assets/images/2tb_dj_combo_music.png";
import OneTbDJStandardMusic from "../../assets/images/1tb_DJ_standard_music.png";
import ProductCard from "../../components/ProductCard";
import AddToCartOrBuy from "../../components/AddToCartOrBuy";

function HardDrives_Section2() {

  const [hardDriveProducts, setHardDriveProducts] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchHardDriveProducts = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/products/hard_drives`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setHardDriveProducts(data);
      } catch (e) {
        console.error("Error fetching hard drive products: ", e);
      }
    };

    fetchHardDriveProducts();
  }, [backendUrl]);
  
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
          {hardDriveProducts.map(product => (
            <div key={product.id} className="HardDrives_Section2_ProductCard_Container">
              <ProductCard
                imgSrc={product.image}
                imgAlt={product.name}
                name={product.name}
                imgClass="HardDrives_Section2_ProductCard_img"
              />
              <AddToCartOrBuy
                productId={product.id}
                price={`${product.price}$`}
                class="center_AddToCartOrBuy"
                isBuyExists={true}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HardDrives_Section2;
