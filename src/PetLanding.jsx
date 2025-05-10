import React, { useEffect, useState } from "react";

const PetLandingPage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error("Error fetching pets:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">
        Les Queues Pet Rescue
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pets.map((pet, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={pet.image} alt={pet.productName} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">{pet.productName}</h2>
              <p className="text-gray-600 mt-1">Condition: {pet.condition}</p>
              <p className="text-gray-600">Price: ${pet.sellPrice}</p>
              <p className="mt-3 text-gray-700">{pet.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetLandingPage;
