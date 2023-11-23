// import React, {useEffect, useState} from "react";
// import ProductCard from "../../components/ProductCard";
// import AddToCartOrBuy from "../../components/AddToCartOrBuy";
// import "../../assets/css/Home/Home_Section4.css";
// import Sandik2tbSolidDisk from "../../assets/images/Sandisk 2tb solid state.png";

// function Home_Section4() {

//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProductData = async () => {
//       try {
//         const response = await fetch('localhost:3001/api/products/1'); // Replace with your actual endpoint
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProduct(data);
//       } catch (e) {
//         setError(e.message);
//       }
//     };

//     fetchProductData();
//   }, []);

//   if (error) console.log("Error loading product 2");
//   if (!product) console.log("Loading...");

//   return (
//     <div id="home_section4_container">
//       <section id="home_section4">
//         <ProductCard
//           imgSrc={Sandik2tbSolidDisk}
//           imgAlt="Sandisk 2tb solid state"
//           description={product.name}
//           imgClass="Home_Section4_ProductCard_img"
//         />
//         <div id="product_buy_addtocart">
//           <h1>
//             Get your 2TB Solid State <br />
//             Drive DJ!
//           </h1>
//           {/* <p>2TB Solid State Drive DJ Combo (DJ Standard + Trifecta)</p> */}
//           <p>{product.description}</p>
//           {/* <AddToCartOrBuy price="349.99$" isBuyExists={true} /> */}
//           <AddToCartOrBuy price={`${product.price}$`} isBuyExists={true} />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home_Section4;

import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import AddToCartOrBuy from "../../components/AddToCartOrBuy";
import "../../assets/css/Home/Home_Section4.css";
import Sandik2tbSolidDisk from "../../assets/images/Sandisk 2tb solid state.png";

function Home_Section4() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/products/1`); // Replace 123 with your product ID
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchProductData();
  }, [backendUrl]);

  if (error) return console.log(`Error loading product: ${error}`);
  if (!product) return console.log("Loading...");

  return (
    <div id="home_section4_container">
      <section id="home_section4">
        <ProductCard
          imgSrc={Sandik2tbSolidDisk} // Replace with dynamic data if needed
          imgAlt="Sandisk 2tb solid state"
          description={product.name} // Use product data from API
          imgClass="Home_Section4_ProductCard_img"
        />
        <div id="product_buy_addtocart">
          <h1>Get your 2TB Solid State Drive DJ!</h1>
          <p>{product.description}</p> {/* Use product name */}
          <AddToCartOrBuy price={product.price} isBuyExists={true} />
        </div>
      </section>
    </div>
  );
}

export default Home_Section4;