// AUTHOR: Savannah Green
// CLASS: COSC 484 
// PROFESSOR: Jal Irani

import React from "react";
import "./Style.css";

const Buy = () => {
  const sold = (e) => {
    e.preventDefault();

    let listings = JSON.parse(localStorage.getItem("productListings")) || [];
    const productToBuy = localStorage.getItem("selectedProduct");

    listings = listings.map((product) => {
      if (product.productName === productToBuy) {
        product.status = "Sold Out";
      }
      return product;
    });

    localStorage.setItem("productListings", JSON.stringify(listings));
    window.location.href = "confirmation.html";
  };

  return (
    <div>
      <h3>Billing/Shipping Address</h3>
      <form id="BuyingForm">
        <label htmlFor="Fname">First Name</label><br />
        <input type="text" name="Fname" required /><br />

        <label htmlFor="Lname">Last Name</label><br />
        <input type="text" name="Lname" required /><br />

        <label htmlFor="email">Email</label><br />
        <input type="email" name="email" required /><br />

        <label htmlFor="address">Shipping Address</label><br />
        <input type="text" name="address" required /><br />

        <label htmlFor="city">City</label><br />
        <input type="text" name="city" required /><br />

        <label htmlFor="state">State</label><br />
        <input type="text" name="state" required /><br />

        <h3>Payment Information</h3>

        <label htmlFor="cardName">Name On Card:</label><br />
        <input type="text" name="cardName" required /><br />

        <label htmlFor="cardNum">Card Number:</label><br />
        <input type="number" name="cardNum" required /><br />

        <label htmlFor="expiration">Expiration:</label><br />
        <input type="date" name="expiration" required /><br />

        <label htmlFor="cvv">CVV:</label><br />
        <input type="number" name="cvv" required /><br />

        <button className="submit" onClick={sold}>Checkout</button>
      </form>
    </div>
  );
};

export default Purchase;
