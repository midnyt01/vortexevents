// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Slide from 'react-reveal/Slide';
import AlbumImg from '../../assets/jashnekalakar_poster.jpeg'
import AlbumImg2 from '../../assets/album_pic2.jpg'
import AlbumImg3 from '../../assets/album_pic3.jpg'
import AlbumImg4 from '../../assets/album_pic4.jpg'
import './all-events.styles.css'


const AllEvents = () => {
    return (

        <div>
            <div className='container-fluid m-auto'>
                <h2 className='primary-text'>Our Events</h2>
                <p className='secondary-text'>Don't miss our events</p>
                <div className='events-card-container'>
                    <div className='cards-basic events-card mb-4'>
                        <img src={AlbumImg} alt='album 1'/>
                        <div className='events-card-context'>
                            <p className='light-text'>Jashn-e-kalakar @ Food Flora '1st Jan</p>
                            <span className='light-text'>Comedians, Rappers, Pianist, Singers jam</span>
                        </div>
                    </div>

                    <div className='cards-basic events-card mb-4'>
                        <img src={AlbumImg2} alt='album 1'/>
                        <div className='events-card-context'>
                            <p className='light-text'>Jashn-e-kalakar @ Food Flora '1st Jan</p>
                            <span className='light-text'>Comedians, Rappers, Pianist, Singers jam</span>
                        </div>
                    </div>

                    <div className='cards-basic events-card mb-4'>
                        <img src={AlbumImg3} alt='album 1'/>
                        <div className='events-card-context'>
                            <p className='light-text'>Jashn-e-kalakar @ Food Flora '1st Jan</p>
                            <span className='light-text'>Comedians, Rappers, Pianist, Singers jam</span>
                        </div>
                    </div>

                    <div className='cards-basic events-card mb-4'>
                        <img src={AlbumImg4} alt='album 1'/>
                        <div className='events-card-context'>
                            <p className='light-text'>Jashn-e-kalakar @ Food Flora '1st Jan</p>
                            <span className='light-text'>Comedians, Rappers, Pianist, Singers jam</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllEvents;