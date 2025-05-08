import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/les Queues Animal Rescue.jpg";
import "./Style.css";

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="thank-you">
      <img src={logo} alt="Les Queues Logo" className="small-image" />
      <h1>Thank You!</h1>
      <p>Thank you for your application. We will be contacting you shortly.</p>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default ThankYou;
