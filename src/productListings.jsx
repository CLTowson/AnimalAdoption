// AUTHOR: Savannah Green
// CLASS: COSC 484 
// PROFESSOR: Jal Irani
import React, { useEffect, useState } from "react";
import "./Style.css";

const ProductListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Replace this URL with the RAW URL of your JSON file from GitHub
    const githubJsonUrl =
      "https://raw.githubusercontent.com/CLTowson/AnimalAdoption/refs/heads/main/src/backend/package-lock.json";


     fetch(githubJsonUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product listings");
        }
        return res.json();
      })
      .then((data) => {
        setListings(data);
      })
      .catch((error) => {
        console.error("Error fetching product listings:", error);
      });
  }, []);

  const buyProduct = (productName) => {
    localStorage.setItem("selectedProduct", productName);
    window.location.href = "Buy.html";
  };

  return (
    <div>
      <h1>Product Listings</h1>
      <div id="productInfo">
        {listings.length === 0 ? (
          <p>No products listed.</p>
        ) : (
          listings.map((product, index) => (
            <div className="product-container" key={index}>
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
    </div>
  );
};

export default ProductListings;
