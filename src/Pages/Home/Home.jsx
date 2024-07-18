import React from 'react'
import About from './About'
import Hero from './Hero'
import Reviews from './Reviews'

const Home = () => {
  return (
    <div className='Home-section'>
      <About />
      <Hero />
      <Reviews />
    </div>
  );
}

export default Home