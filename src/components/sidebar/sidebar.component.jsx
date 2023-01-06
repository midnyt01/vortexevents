import { Link } from 'react-router-dom';
import Pulse from 'react-reveal/Pulse';
import Bounce from 'react-reveal/Bounce';
import './sidebar.styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Sidebar = ({sidebarToggle}) => {
  return (
    <div>
      <div className='sidenav'>
        <ul className='slideout'>
          <span onClick={sidebarToggle} className='sidenav-close f-size-1 light-text'>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </span>
          <Pulse>
          <div className='sidenav-links decoration-none mt-3'>
            <li>
              <Link to='/' className='decoration-none primary-text'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/events' className='decoration-none primary-text'>
              Events
              </Link>
            </li>
            <li>
              <Link to='/artist' className='decoration-none primary-text'>
                Artists
              </Link>
            </li>
            <li>
              <Link to='/gallery' className='decoration-none primary-text'>
                Gallery
              </Link>
            </li>
            <li>
              <Link to='/about' className='decoration-none primary-text'>
                About us
              </Link>
            </li>
          </div>
          </Pulse>
          <Bounce top cascade>
          <ul className='social-links'>
            <li><a href='https://wa.me/+919151040021?text=I%20got%your%20number%20from%20Vortex' className='f-size-1 secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a></li>
            <li><a href='https://instagram.com/vrtxevents/' className='f-size-1 secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
            <li><a href='https://twitter.co,/vrstxevents' className='f-size-1 secondary-text mr-2'><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
            <li><Link to='/contact' className='f-size-1 secondary-text mr-2'><FontAwesomeIcon icon="fa-solid fa-at" /></Link></li>
          </ul>
          </Bounce>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;