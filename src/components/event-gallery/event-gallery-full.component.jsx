
// import Zoom from 'react-reveal/Zoom';
// import ImageGallery from 'react-image-gallery';

// import image1 from '../../assets/image_1.jpg';
// import image2 from '../../assets/image_2.jpg';
// import image3 from '../../assets/image_3.jpg';
// import image4 from '../../assets/image_4.jpg';
// import image5 from '../../assets/image_5.jpg';
// import image6 from '../../assets/image_6.jpg';
// import image7 from '../../assets/image_7.jpg';
// import image8 from '../../assets/image_8.jpg';
// import image9 from '../../assets/indraneel_show.jpg'
// import image10 from '../../assets/nirvana_show.jpg'

import './event-gallery.styles.css';

const Eventgalleryfull = () => {
    return (

      <div>
        <div className='container-fluid m-auto'>
          <h2 className='light-text mt-5 mb-4'>Event Gallery</h2>
            <div className='full-gallery-wrapper d-flex'>
              <div className='full-gallery-img gl-img-1'></div>
              <div className='full-gallery-img gl-img-2'></div>
              <div className='full-gallery-img gl-img-3'></div>
              <div className='full-gallery-img gl-img-4'></div>
              <div className='full-gallery-img gl-img-5'></div>
            </div>
        </div>
      </div>
    );
};

export default Eventgalleryfull;
