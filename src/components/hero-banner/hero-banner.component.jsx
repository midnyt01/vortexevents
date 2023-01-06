import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

import './hero-banner.css'

const HeroBanner = () => {
  return (
    <div className='container-fluid m-auto'>
        <div className="hero-banner-container mt-2">
          <Zoom top cascade>
            <h1 className='pink-gradient'>Vortex <br/>Music Festival</h1>
            <p className='secondary-text'>Whats up Prayagraj!!! you asked and here we are with the biggest music festival of Uttar Pradesh! get ready to shake that booty and raise your hands...</p>
            <p className='secondary-text'>Started from our own city, our plan is to go international and make a name for the Sangam City. Live music, EDM, Rap battles, and much more, thereby creating history to become a successful indigenous Music IP to cross international shores.</p>
            <Link to='/about' className="btn cta-btn-text mt-2">Read more</Link>
          </Zoom>
          <div className='blob-2'></div>
        </div>
    </div>
  );
};

export default HeroBanner;
