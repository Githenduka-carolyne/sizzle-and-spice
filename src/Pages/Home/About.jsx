import React from 'react'
import Vegtreat from "../../assets/vegtreat.png"
import vegwraps from "../../assets/vegwraps.png"
import wraps from "../../assets/wraps.png"
import icecream from "../../assets/icecream.png"
import "./about.css"
const About = () => {
  return (
    <section className='about-section'>
      <div className="about-cards-container">
        <div className="about-card">
          <div className="about-image-holder">
            <img src={Vegtreat} alt="vegeterian treats image"></img>
          </div>
          <div className="card-details">
            <p className="title">Vegeterian Treats</p>
            <p className="about-details">
              {" "}
              Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
              dolor
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="about-image-holder">
            <div className="about-image-holder">
              <img src={icecream} alt="vegeterian treats image"></img>
            </div>
          </div>
          <div className="card-details">
            <p className="title">Non-vegeterian Treats</p>
            <p className="about-details">
              {" "}
              Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
              dolor
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="about-image-holder">
            <div className="about-image-holder">
              <img src={vegwraps} alt="vegeterian treats image"></img>
            </div>
          </div>
          <div className="card-details">
            <p className="title">Vegeterian grilled wrap</p>
            <p className="about-details">
              {" "}
              Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
              dolor
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="about-image-holder">
            <div className="about-image-holder">
              <img src={wraps} alt="vegeterian treats image"></img>
            </div>
          </div>
          <div className="card-details">
            <p className="title">Grilled wrap</p>
            <p className="about-details">
              Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
              dolor{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About