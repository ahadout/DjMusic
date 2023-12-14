import React, {useState, useEffect} from "react";
import "../../assets/css/CloudDrives/CloudDrives_Section2.css";
import OneTbCloud from "../../assets/images/1tb_cloud.png";
import twoTbCloud from "../../assets/images/2tb_cloud.png";
import ProductCard from "../../components/ProductCard";
import AddToCartOrBuy from "../../components/AddToCartOrBuy";

function CloudDrives_Section2() {

  const [cloudDriveProducts, setCloudDriveProducts] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchCloudDriveProducts = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/products/cloud_drives`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCloudDriveProducts(data);
      } catch (e) {
        console.error("Error fetching cloud drive products: ", e);
      }
    };

    fetchCloudDriveProducts();
  }, [backendUrl]);

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
        {cloudDriveProducts.map(product => (
            <div key={product.id} className="CloudDrives_Section2_ProductCard_Container">
              <ProductCard
                imgSrc={product.image}
                imgAlt={product.name}
                name={product.name}
                imgClass="CloudDrives_Section2_ProductCard_img"
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
  );
}

export default CloudDrives_Section2;
