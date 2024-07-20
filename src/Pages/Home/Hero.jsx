import React from 'react';
import {Link} from "react-router-dom";
import "./hero.css"
function Hero() {
  return (
    <section className="herosection">
      <div className="hero-textbox">
        <h2 className="hero-maintitle">Welcome to sizzle & spice</h2>
        <p className="hero-subtitle">"Fast. Fresh. Flavorful." </p>
        <div className="button-holder">
          <Link to="/About">
            <button className="button">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero