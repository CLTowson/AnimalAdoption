import React from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import Home from "./home";
import VolunteerForm from "./VolunteerForm";
import ThankYou from "./ThankYou";
import AnimalAdoptionForm from "./AnimalAdoptionForm";
import PetLanding from "./PetLanding";
import productListings from "./productListings";
import confirmation from "./confirmation";
import sell from "./sell";
import buy from "./buy";

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
        <Route path="/productListings" element={<productListings />} />
        <Route path="/confirmation" element={<confirmation />} />
        <Route path="/sell" element={<sell />} />
        <Route path="/buy" element={<buy />} />
      </Routes>
    </Router>
  );
}

export default App;
