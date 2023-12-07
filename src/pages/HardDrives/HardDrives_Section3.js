import React, {useState, useEffect} from "react";
import ProductCard from "../../components/ProductCard";
import AddToCartOrBuy from "../../components/AddToCartOrBuy";
import TwoTbCloud from "../../assets/images/1tb_cloud.png";
import OneTbCloud from "../../assets/images/2tb_cloud.png";
import "../../assets/css/HardDrives/HardDrives_Section3.css";

function HardDrives_Section3() {

  const [products, setProducts] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/products/cloud_drives`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.error("Error fetching products: ", e);
      }
    };

    fetchProducts();
  }, [backendUrl]);

  return (
    <>
      <section id="HardDrives_Section3">
        <h1>Unlimited products</h1>
        <p>
          Feel More fan and enjoy the the favourite music with your best
          persones!
        </p>
        <div className="HardDrives_Section3_Grid">
          {products.slice(0, 2).map((product, index) => (
            <div key={index} className="HardDrives_Section3_ProductCard_Container">
              <ProductCard
                imgSrc={product.image} // Assuming image URLs are stored in product data
                imgAlt={product.name}
                name={product.name}
                imgClass="HardDrives_Section3_ProductCard_img"
                class="ProductCard_HardDrives_Section3"
              />
              <AddToCartOrBuy
                productId={product.id}
                class="HardDrives_Section3_AddToCartOrBuy"
              />
            </div>
          ))}
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
