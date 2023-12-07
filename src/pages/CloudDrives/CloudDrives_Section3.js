import React, {useState, useEffect} from "react";
import "../../assets/css/CloudDrives/CloudDrives_Section3.css";
import ProductCard from "../../components/ProductCard";
import AddToCartOrBuy from "../../components/AddToCartOrBuy";
import { Link } from "react-router-dom";
import OneTbCloud from "../../assets/images/1tb_cloud.png";
import TwoTbCloud from "../../assets/images/2tb_cloud.png";

function CloudDrives_Section3() {

  const [products, setProducts] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/products/hard_drives`);
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
    <section id="CloudDrives_Section3">
      <h1>Unlimited products</h1>
      <p>
        Feel More fan and enjoy the the favourite music with your best persones!
      </p>
      <div className="CloudDrives_Section3_Grid">
        {products.slice(0, 2).map((product, index) => (
          <div key={index} className="CloudDrives_Section3_ProductCard_Container">
            <ProductCard
              imgSrc={product.image}
              imgAlt={product.name}
              name={product.name}
              imgClass="HardDrives_Section3_ProductCard_img"
              class="ProductCard_CloudDrives_Section3"
            />
            <AddToCartOrBuy
              productId={product.id}
              class="CloudDrives_Section3_AddToCartOrBuy"
            />
          </div>
        ))}
        <div className="CloudDrives_Section3_ProductCard_Container">
          <div id="CloudDrives_Section3_ProductCard_ShowMore">
            <Link to="/hard-drives" className="CloudDrives_ProductCard_ShowMore_btn"><button>+</button></Link>
            <Link to="/hard-drives" className="CloudDrives_ProductCard_ShowMore_btn2"><button>View more</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloudDrives_Section3;
