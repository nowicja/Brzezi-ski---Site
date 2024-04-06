import React from 'react'
import './Section.css'
import paint from '../../assets/paint.png'
import putty from '../../assets/putty.png'
import karton from '../../assets/karton.png'
import elevation from '../../assets/elevation.png'
import wallpaper from '../../assets/wallpaper.png'
import tilling from '../../assets/tilling.png'
import bathroom from '../../assets/bathroom.png'
import attic from '../../assets/attic.png'
import windows from '../../assets/window.png'

function Section() {
  return (
    <div className="section">
        <div className="text">
            <h1>Nasze <span className="highlight">usługi</span></h1>
            <div className="breaker"></div>
        </div>
        <div className="services">
            <div className="service-card">
                <img src={paint} alt="Service Icon"></img>
                <h3>Malowanie</h3>
                <p>Profesjonalne usługi malarskie dla Twojego domu.</p>
            </div>
            <div className="service-card">
                <img src={putty} alt="Service Icon"></img>
                <h3>Szpachlowanie</h3>
                <p>Gładkie i precyzyjne szpachlowanie ścian.</p>
            </div>
            <div className="service-card">
                <img src={karton} alt="Service Icon"></img>
                <h3>Karton gips</h3>
                <p>Montaż i wykończenie ścian z kartonu gipsowego.</p>
            </div>
            <div className="service-card">
                <img src={elevation} alt="Service Icon"></img>
                <h3>Elewacje</h3>
                <p>Nowoczesne i trwałe rozwiązania elewacyjne.</p>
            </div>
            <div className="service-card">
                <img src={wallpaper} alt="Service Icon"></img>
                <h3>Tapety</h3>
                <p>Profesjonalne naklejanie tapet we wzory i kolory.</p>
            </div>
            <div className="service-card">
                <img src={tilling} alt="Service Icon"></img>
                <h3>Glazurnictwo</h3>
                <p>Układanie płytek ceramicznych z dbałością o szczegóły.</p>
            </div>
            <div className="service-card">
                <img src={bathroom} alt="Service Icon"></img>
                <h3>Aranżacja łazienki</h3>
                <p>Tworzenie funkcjonalnych i estetycznych łazienek.</p>
            </div>
            <div className="service-card">
                <img src={attic} alt="Service Icon"></img>
                <h3>Aranżacja poddasza</h3>
                <p>Przekształcanie poddaszy w przytulne i praktyczne przestrzenie.</p>
            </div>
            <div className="service-card">
                <img src={windows} alt="Service Icon"></img>
                <h3>Montaż okien i drzwi</h3>
                <p>Bezpieczny i solidny montaż okien i drzwi.</p>
            </div>
        </div>
    </div>
  )
}

export default Section
