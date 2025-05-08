import React from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import Home from "./home";
import VolunteerForm from "./VolunteerForm";
import ThankYou from "./ThankYou";
import AnimalAdoptionForm from "./AnimalAdoptionForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
        <Route path="/adopt" element={<AnimalAdoptionForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;