// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.styles.css'

const Footer = () => {
  return (
    <div className='container-fluid m-auto'>
      <footer>
          <div className='footer-right'>
            <span className='primary-text f-size-0'>© 2022 Ad-Astra VD</span>
          </div>

          <ul className='footer-left'>
            <li><a href="https://instagram.com/adastra.vd?igshid=Yzg5MTU1MDY="  rel='noopener' className='light-text mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
            <li><a href="https://wa.me/+919151040021?text=I%20got%your%20number%20from%20Vortex" rel='noopener' className='light-text mr-2'><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a></li>
            <li><a href="https://instagram.com/adastra.vd?igshid=Yzg5MTU1MDY=" rel='noopener' className='light-text mr-2'><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
          </ul>

          <div className='footer-bottom mb-2'>
              <span className='light-text f-size-0'>Design & Developed by <a className='primary-text' href='https://gitdebug.xyz' rel='noopener' >Nitrosk- Web & AI Solutions</a></span>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
