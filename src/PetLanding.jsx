import React from "react";

const pets = [
  {
    id: "A001",
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    description: "Friendly and energetic, loves to play fetch!",
    image: "https://placedog.net/400/300?id=1"
  },
  {
    id: "A002",
    name: "Whiskers",
    type: "Cat",
    breed: "Siamese",
    description: "Curious and affectionate, perfect for a calm household.",
    image: "https://placekitten.com/400/300"
  },
  {
    id: "A003",
    name: "Luna",
    type: "Dog",
    breed: "Husky",
    description: "Active and vocal, great for adventures!",
    image: "https://placedog.net/400/300?id=3"
  }
];

const PetLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">
        Les Queues Pet Rescue
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pets.map((pet) => (
          <div key={pet.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={pet.image} alt={pet.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">{pet.name}</h2>
              <p className="text-gray-600 mt-1">Type: {pet.type}</p>
              <p className="text-gray-600">Breed: {pet.breed}</p>
              <p className="text-gray-500 text-sm">Serial #: {pet.id}</p>
              <p className="mt-3 text-gray-700">{pet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetLandingPage;
