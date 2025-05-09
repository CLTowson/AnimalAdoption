import React from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import Home from "./home";
import VolunteerForm from "./VolunteerForm";
import ThankYou from "./ThankYou";
import AnimalAdoptionForm from "./AnimalAdoptionForm";
import PetLanding from "./PetLanding";
import ProductListings from "./productListings";
import Confirmation from "./confirmation";
import Sell from "./Sell";
import Buy from "./Buy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
        <Route path="/adopt" element={<AnimalAdoptionForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/PetLanding" element={<PetLanding />} />
        <Route path="/ProductListings" element={<ProductListings />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/Buy" element={<Buy />} />
      </Routes>
    </Router>
  );
}

export default App;
