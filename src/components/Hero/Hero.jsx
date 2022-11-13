import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        {/* Button Adversiting */}
        <div className="button-ad">
          <div></div>
          <span>Lorem ipsum, dolor sit amet consectetur adipisi</span>
        </div>
        {/* Hero Heading */}

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
        </div>
      </div>
      <div className="right-h">right</div>
    </div>
  )
}

export default Hero
