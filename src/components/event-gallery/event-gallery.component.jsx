
// import Zoom from 'react-reveal/Zoom';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import image1 from '../../assets/image_1.jpg';
import image2 from '../../assets/image_2.jpg';
import image3 from '../../assets/image_3.jpg';
import image4 from '../../assets/image_4.jpg';
import image5 from '../../assets/image_5.jpg';
import image6 from '../../assets/image_6.jpg';
import image7 from '../../assets/image_7.jpg';
import image8 from '../../assets/image_8.jpg';
import image9 from '../../assets/indraneel_show.jpg'
import image10 from '../../assets/nirvana_show.jpg'


import './event-gallery.styles.css';

const images = [
  {
    original: `${image7}`,
    thumbnail: `${image7}`,
  },
  {
    original: `${image9}`,
    thumbnail: `${image9}`,
  },
  {
    original: `${image3}`,
    thumbnail: `${image3}`,
  },
  {
    original: `${image10}`,
    thumbnail: `${image10}`,
  },
  {
    original: `${image1}`,
    thumbnail: `${image1}`,
  },
  {
    original: `${image2}`,
    thumbnail: `${image2}`,
  },
  {
    original: `${image4}`,
    thumbnail: `${image4}`,
  },
  {
    original: `${image5}`,
    thumbnail: `${image5}`,
  },
  {
    original: `${image8}`,
    thumbnail: `${image8}`,
  },
  {
    original: `${image6}`,
    thumbnail: `${image6}`,
  }
  
];

const Eventgallery = () => {
    return (

      <div>
        <div className='container-fluid m-auto'>
          <h2 className='light-text mt-5 mb-4'>Event Gallery</h2>
          <ImageGallery items={images} showPlayButton={false} showBullets={false} />
          <Link to='/gallery' className="btn cta-btn-text gallery-btn mt-2 mb-4">See more</Link>
        </div>
      </div>
    );
};

export default Eventgallery;
