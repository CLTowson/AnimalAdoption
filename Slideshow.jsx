import React, { useState, useEffect } from "react";
import goldenRetriever from "./assets/Golden_Retriever_Puppy.jpg";
import petCat from "./assets/Pet Cat.jpg";
import petRat from "./assets/Pet Rat.jpg";

const images = [goldenRetriever, petCat, petRat];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        className="slide-image"
      />
      <button
        className="prev"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
          )
        }
      >
        &#10094;
      </button>
      <button
        className="next"
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
      >
        &#10095;
      </button>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
