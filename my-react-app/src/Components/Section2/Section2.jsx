import React, { useEffect } from 'react';
import './Section2.css';
import logo from '../../assets/logo.png'
function Section2() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolledY = window.scrollY;
      const slider = document.querySelector('.slider');
      if (slider) {
        slider.style.backgroundPosition = `center ${scrolledY/3}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="slider">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Section2;
