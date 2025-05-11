// AUTHOR: Savannah Green
// CLASS: COSC 484 
// PROFESSOR: Jal Irani

import React, { useState } from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const productName = document.getElementById("product").value;
    localStorage.setItem("productName", productName);

    const sellPrice = document.getElementById("sellPrice").value;
    localStorage.setItem("sellPrice", sellPrice);

    const condition = document.querySelector('input[name="condition"]:checked')?.value;
    localStorage.setItem("condition", condition);

    const review = document.getElementById("review").value;
    localStorage.setItem("review", review);

    const fileInput = document.getElementById("image");
    const file = fileInput.files[0];

    if (!file) {
      alert("please select an image");
      return;
    setTimeout(() => {
      navigate("/home");
    }, 1000);
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const image = e.target.result;

      const listings = JSON.parse(localStorage.getItem("productListings")) || [];

      const newProduct = {
        productName,
        sellPrice,
        condition,
        review,
        image,
      };

      listings.push(newProduct);
      localStorage.setItem("productListings", JSON.stringify(listings));
      window.location.href = "productListings.html";
    };

    reader.readAsDataURL(file);
  };
  return (
    <>
      <h1>Les Queues Animal Rescue</h1>

      <form id="listingForm" method="GET" onSubmit={handleSubmit}>
        <label htmlFor="Fname">First Name</label>
        <br />
        <input type="text" name="Fname" required />
        <br />

        <label htmlFor="Lname">Last Name</label>
        <br />
        <input type="text" name="Lname" required />
        <br />

        <label htmlFor="product">Product Name</label>
        <br />
        <input type="text" name="product" id="product" required />
        <br />

        <label htmlFor="origPrice">Original Price</label>
        <br />
        <input type="number" name="origPrice" required />
        <br />

        <label htmlFor="sellPrice">Selling Price</label>
        <br />
        <input type="number" name="sellPrice" id="sellPrice" required />
        <br />

        <p>Insert an image of your product</p>
        <input type="file" name="image" accept="image/*" id="image" />
        <br />

        <h3>Rate the Condition of Your Product</h3>
        <p>Take into account the condition of the packaging and the amount of product left!</p>

        <label htmlFor="condition-poor">Poor - less than 1/2 remaining</label>
        <input type="radio" name="condition" id="condition-poor" value="poor" required />
        <br />

        <label htmlFor="condition-okay">Okay - 1/2 remaining</label>
        <input type="radio" name="condition" id="condition-okay" value="Okay" required />
        <br />

        <label htmlFor="condition-good">Good - 3/4 remaining</label>
        <input type="radio" name="condition" id="condition-good" value="good" required />
        <br />

        <label htmlFor="condition-great">Great - gently used</label>
        <input type="radio" name="condition" id="condition-great" value="great" required />
        <br />

        <label htmlFor="condition-excellent">Excellent - new/never used</label>
        <input type="radio" name="condition" id="condition-excellent" value="excellent" required />
        <br />

        <label htmlFor="review">Product Review</label>
        <br />
        <p>Tell us about the product and why you are selling it</p>
        <input type="text" name="review" id="review" />
        <br />

        <h3>Banking Information</h3>
        <br />
        <label htmlFor="acctNum">Account Number</label>
        <br />
        <input type="number" name="acctNum" required />
        <br />

        <label htmlFor="RouteNum">Routing Number</label>
        <br />
        <input type="number" name="RouteNum" required />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Sell;
