import React, { useEffect } from 'react';
import './Main.css';
import arrow from '../../assets/arrow.png';

function Main() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolledY = window.scrollY;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.backgroundPosition = `center ${scrolledY/2}px`; // Change the divisor to adjust the speed
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero container">
      <div className="hero-text container">
        <h1>Twój <span className="span">dom</span>, nasze <span>umiejętności</span>.</h1>
        <h2>Od remontów po wykończenia - daj swojemu domu nowe życie!</h2>
      </div> 
      <div className="nav-section">
        <p>Sprawdź więcej!</p>
        <img src={arrow} alt="" className="arrow" />
      </div>
    </div>
  );
}

export default Main;
