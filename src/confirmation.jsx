// AUTHOR: Savannah Green
// CLASS: COSC 484 
// PROFESSOR: Jal Irani
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

const Confirmation = () => {
  const navigate = useNavigate();

  const goToListings = () => {
    navigate("/ProductListings");
  };

  return (
    <div className="confirmation-page">
      <h2>Your Order Was Successful!</h2>
      <button onClick={goToListings} className="return-button">
        Return to Product Listings
      </button>
    </div>
  );
};

export default Confirmation;
