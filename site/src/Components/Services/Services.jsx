import React from 'react'
import '../Services/Services.css'
import attic from '../../assets/attic.png'
import bathroom from '../../assets/bathroom.png'
import elevation from '../../assets/elevation.png'
import karton from '../../assets/karton.png'
import paint from '../../assets/paint.png'
import putty from '../../assets/putty.png'
import tilling from '../../assets/tilling.png'
import wallpaper from '../../assets/wallpaper.png'
import window from '../../assets/window.png'

const Services = () => {
  return (
    <div className="services container">
      <div className="top">
        <h1>Nasze usługi</h1>
        <p>Oferując szeroki zakres usług od remontów po kompleksowe wykończenia wnętrz. Nasz doświadczony zespół specjalistów zapewnia kompleksową obsługę, spełniając najwyższe standardy jakości.</p>
      </div>
      <div className="cutter"></div>
      <div className="grid">
        <ul>
            <li>
                <img src={paint} alt="" />
                <h2>Malowanie</h2>
            </li>
            <li>
                <img src={putty} alt="" />
                <h2>Szpachlowanie</h2>
            </li>
            <li>
                <img src={karton} alt="" />
                <h2>Karton gips</h2>
            </li>
            <li>
                <img src={elevation} alt="" />
                <h2>Elewacje</h2>
            </li>
            <li>
                <img src={wallpaper} alt="" />
                <h2>Tapety</h2>
            </li>
            <li>
                <img src={tilling} alt="" />
                <h2>Glazurnictwo</h2>
            </li>
            <li>
                <img src={bathroom} alt="" />
                <h2>Aranżacja łazienki</h2>
            </li>
            <li>
                <img src={attic} alt="" />
                <h2>Aranżacja poddasza</h2>
            </li>
            <li>
                <img src={window} alt="" />
                <h2>Montaż okien i drzwi</h2>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Services
