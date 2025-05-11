import React from "react";
import Slideshow from "./Slideshow";
import style from "./Style.css";
import VolunteerForm from "./VolunteerForm";
import PetLanding from "./PetLanding";
import Sell from "./Sell";
import { Link } from "react-router-dom";
import logo from "./assets/les Queues Animal Rescue.jpg";

function Home() {
  return (
    <>
      <div className="home">
      <img src={logo} alt="Les Queues Logo" className="small-image" />
      <h1>Les Queues Animal Rescue</h1>
      <div>
        <Link to="/PetLanding"><button>Animal Descriptions</button></Link>
        <Link to="/adopt">
            <button>Animal Adoption Form</button>
        </Link>

        <Link to="/volunteer">
            <button>Volunteer Form</button>
        </Link>
        <Link to="/productListings"><button>Products</button></Link>

        <Link to "/Sell">
            <button>Sell Products</button>
    </Link>
      </div>
      <Slideshow />
      <h2>About Us</h2>
      <div className="testimonial">
        <p>Here at Les Queues Animal Rescue, we believe that all animals deserve a loving home.</p>
      </div>
      <h3>Testimonials</h3>
      <div className="testimonial">
        <p>"We love our new Siberian Husky. He's awesome. Thanks, Les Queues!"<br />
          — Marissa Tomei of Providence, Rhode Island</p>
      </div>
      <div className="testimonial">
        <p>"As a father with two kids who have always wanted a kitten, Les Queues was a godsend."<br />
          — Brantley Garrick of Boston, Massachusetts</p>
      </div>
      <div className="testimonial">
        <p>"I was looking for years for an adoption agency that rescues pet snakes! Thank you Les Queues for our baby Python!"<br />
          — Jerry Smith of Phoenix, Arizona</p>
      </div>
    </div>
    </>
  );
}

export default Home;
