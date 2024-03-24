import React from 'react'
import './Main.css'
import arrow from '../../assets/arrow.png'
function Main() {
  return (
    <div className="hero container">
        <div className="hero-text container">
          <h1>Twój dom, nasze umiejętności.</h1>
          <h2>Od remontów po wykończenia - daj swojemu domu nowe życie!</h2>
        </div> 
        <div className="nav-section">
          <p>Sprawdź więcej!</p>
          <img src={arrow} alt="" className="arrow" />
        </div>
    </div>
  )
}

export default Main