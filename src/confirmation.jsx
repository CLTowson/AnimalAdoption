// AUTHOR: Savannah Green
// CLASS: COSC 484 
// PROFESSOR: Jal Irani

import React from "react";
import "./Style.css";

const Confirmation = () => {
  return (
    <div>
      <h2>Your Order Was Successful!</h2>
      <a href="productListings.html">
        Click Here to return to the Product Listings page
      </a>
    </div>
  );
};

export default Confirmation;
