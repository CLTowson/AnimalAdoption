// AUTHOR: Savannah Green
// CLASS: COSC 484 
// PROFESSOR: Jal Irani
import React, { useEffect, useState } from "react";
import "./Style.css";
import "./Purchase";

const ProductListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const storedListings = JSON.parse(localStorage.getItem("productListings")) || [];
    setListings(storedListings);
  }, []);

  const buyProduct = (productName) => {
    localStorage.setItem("selectedProduct", productName);
    window.location.href = "Buy.jsx";
  };

  return (
    <div>
      <h1>Product Listings</h1>
      {listings.length === 0 ? (
        <p>No products listed.</p>
      ) : (
        listings.map((product, index) => (
          <div key={index} className="product-container">
            <div className="left-column">
              <img src={product.image} alt="Product" width="150" />
              <p className="price">Price: ${product.sellPrice}</p>
            </div>
            <div className="right-column">
              <h2>{product.productName}</h2>
              <p>Condition: {product.condition}</p>
              <p>Review: {product.review}</p>
              {product.status === "Sold Out" ? (
                <p className="sold-out">Sold Out</p>
              ) : (
                <button className="buy_btn" onClick={() => buyProduct(product.productName)}>
                  Buy Now
                </button>
              )}
            </div>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductListings;
