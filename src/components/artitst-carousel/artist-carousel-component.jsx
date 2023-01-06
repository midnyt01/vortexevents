// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flash from 'react-reveal/Flash';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// artist images
import ArtistImage1 from '../../assets/artist_img (1).png'
import ArtistImage2 from '../../assets/artist_img (2).png'
import ArtistImage3 from '../../assets/artist_img (3).png'
import ArtistImage4 from '../../assets/artist_img (4).png'
import ArtistImage5 from '../../assets/artist_img (5).png'
import ArtistImage6 from '../../assets/artist_img (6).png'
import ArtistImage7 from '../../assets/artist_img (7).png'
import ArtistImage8 from '../../assets/artist_img (8).png'
import ArtistImage9 from '../../assets/artist_img (9).png'
import ArtistImage10 from '../../assets/iqra.png'

// artist audio
// import AudioNirvana from '../../assets/audio/naruto.mp3'

import './artist-carousel.css'

const ArtistCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        slidesToScroll: 1
    };

    return (
        <div className='container-fluid m-auto'>
            
            <div className="neon-headline mt-2">
                <p id="neon-shadow">
                    <span id="glow">Artist Li</span><span id="blink">ne-up</span>
                </p>
            </div>


            <Slider {...settings}>
                {/* Slider 1 */}
                <div className="artist-carousel-container m-auto">
                    <div className='artist-img-wrapper mt-4'>
                        <div className='artist-img-bg carousel-blood-red'>
                            <Fade>
                                <img src={ArtistImage1} alt="Vortex Logo" className='artist-img'/>
                            </Fade>
                        </div>
                    </div>
                    <div className='carousel-control-container'>
                        <div className='timeline-play-container'>
                            <hr className='timeline-border'></hr>
                            <span className='timeline-circle'></span>
                        </div>
                        <div className='music-icon-container'>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-shuffle" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-backward-step" /></span>
                            <span className='play-bg f-size-1'><FontAwesomeIcon icon="fa-solid fa-play" /></span>
                            {/* <span className='light-text'><FontAwesomeIcon icon="fa-solid fa-pause" /></span> */}
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-forward-step" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-repeat" /></span>
                        </div>
                    </div>
                    <div className='carousel-content'>
                        <Flash>
                            <h3 className='light-text glitch-font f-size-2'>Nirvana</h3>
                        </Flash>
                        <div className='carousel-social-container'>
                            <a href='https://instagram.com/thelaphunterr?igshid=Yzg5MTU1MDY=' className='light-text f-size-1 mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            <a href='https://youtube.com' className='light-text f-size-1'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                        </div>
                    </div>
                    <p className='light-text f-size-0'>Up70 Ka Scene Jiska Vo  NiRVaNA 🤟🏻😎
                    Nikhil Dwivedi a.k.a Nirvana is a versatile rapper hailing from Prayagraj, who knows how to set stage on fire, very well</p>
                    <div className="d-flex jc-center">
                        <a class="cta-neon-button mt-2 mb-4" href="https://wa.me/+919151040021?text=I%20want%to%20book%20Nirvana%20for%20a%20show">Book Me</a>
                    </div>
                </div>

                {/* slider 2 */}
                <div className="artist-carousel-container m-auto">
                    <div className='artist-img-wrapper mt-4'>
                        <div className='artist-img-bg carousel-that-grey'>
                            <Fade>
                                <img src={ArtistImage8} alt="Vortex Logo" className='artist-img'/>
                            </Fade>
                        </div>
                    </div>
                    <div className='carousel-control-container'>
                        <div className='timeline-play-container'>
                            <hr className='timeline-border'></hr>
                            <span className='timeline-circle'></span>
                        </div>
                        <div className='music-icon-container'>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-shuffle" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-backward-step" /></span>
                            <span className='play-bg f-size-1'><FontAwesomeIcon icon="fa-solid fa-play" /></span>
                            {/* <span className='light-text'><FontAwesomeIcon icon="fa-solid fa-pause" /></span> */}
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-forward-step" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-repeat" /></span>
                        </div>
                    </div>
                    <div className='carousel-content'>
                        <Flash>
                            <h3 className='light-text glitch-font f-size-2'>Prakhar "Leo"</h3>
                        </Flash>
                        <div className='carousel-social-container'>
                            <a href='https://instagram.com/prakharleo8'className='light-text f-size-1 mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            <a href='https://instagram.com/prakharleo8' className='light-text f-size-1 mr-2'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                            <a href='https://instagram.com/prakharleo8' className='light-text f-size-1'><FontAwesomeIcon icon="fa-brands fa-spotify" /></a>
                        </div>
                    </div>
                    <p className='light-text f-size-0'>Prakhar Gupta a.k.a Leo is one of the finest #Anime #Rapper of India, who has been featured in the Rolling Stones, and also have been recognised by India Book of Records.</p>
                    <div className="d-flex jc-center">
                        <a class="cta-neon-button mt-2 mb-4" href="https://wa.me/+919151040021?text=I%20want%to%20book%20Prakhar%20for%20a%20show">Book Me</a>
                    </div>
                </div>

                {/* slider 3 */}
                <div className="artist-carousel-container m-auto">
                    <div className='artist-img-wrapper mt-4'>
                        <div className='artist-img-bg carousel-other-white'>
                            <Fade>
                                <img src={ArtistImage4} alt="Vortex Logo" className='artist-img'/>
                            </Fade>
                        </div>
                    </div>
                    <div className='carousel-control-container'>
                        <div className='timeline-play-container'>
                            <hr className='timeline-border'></hr>
                            <span className='timeline-circle'></span>
                        </div>
                        <div className='music-icon-container'>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-shuffle" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-backward-step" /></span>
                            <span className='play-bg f-size-1'><FontAwesomeIcon icon="fa-solid fa-play" /></span>
                            {/* <span className='light-text'><FontAwesomeIcon icon="fa-solid fa-pause" /></span> */}
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-forward-step" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-repeat" /></span>
                        </div>
                    </div>
                    <div className='carousel-content'>
                        <Flash>
                            <h3 className='light-text glitch-font f-size-2'>SwaMi</h3>
                        </Flash>
                        <div className='carousel-social-container'>
                            <a href='https://instagram.com/themusicalswami' className='light-text f-size-1 mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            <a href='https://instagram.com/themusicalswami' className='light-text f-size-1 mr-2'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                            <a href='https://open.spotify.com/track/0l7PCfeQE9W5MMuJY2olfT?si=F2HguhNqQY2gIB2DkjRGCA&utm_source=copy-link' className='light-text f-size-1'><FontAwesomeIcon icon="fa-brands fa-spotify" /></a>
                        </div>
                    </div>
                    <p className='light-text f-size-0'>Swapnil Mishra a.k.a. SwaMi, is a sensational pianist from the streets of Lucknow who can give you goosebumps on the every single note he hits</p>
                    <div className="d-flex jc-center">
                        <a class="cta-neon-button mt-2 mb-4" href="https://wa.me/+919151040021?text=I%20want%to%20book%20SwaMi%20for%20a%20show">Book Me</a>
                    </div>
                </div>

                {/* slider 4 */}
                <div className="artist-carousel-container m-auto">
                    <div className='artist-img-wrapper mt-4'>
                        <div className='artist-img-bg carousel-indraneel-blue'>
                            <Fade>
                                <img src={ArtistImage5} alt="Vortex Logo" className='artist-img custom-width'/>
                            </Fade>
                        </div>
                    </div>
                    <div className='carousel-control-container'>
                        <div className='timeline-play-container'>
                            <hr className='timeline-border'></hr>
                            <span className='timeline-circle'></span>
                        </div>
                        <div className='music-icon-container'>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-shuffle" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-backward-step" /></span>
                            <span className='play-bg f-size-1'><FontAwesomeIcon icon="fa-solid fa-play" /></span>
                            {/* <span className='light-text'><FontAwesomeIcon icon="fa-solid fa-pause" /></span> */}
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-forward-step" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-repeat" /></span>
                        </div>
                    </div>
                    <div className='carousel-content'>
                        <Flash>
                            <h3 className='light-text glitch-font f-size-2'>Indraneel</h3>
                        </Flash>
                        <div className='carousel-social-container'>
                            <a href='https://instagram.com/horn_neel' className='light-text f-size-1  mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            <a href='https://wa.me/+918299763915?text=I%20got%your%20number%20from%20Vortex' className='light-text f-size-1'><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a>
                        </div>
                    </div>
                    <p className='light-text f-size-0'>A musician from the heart and soul, always ready to give music chills with genres like Indie rock, grunge, alternative etc. Worked with bands like Ruddraa, Contaminated, Rock N Raaga etc. Solo projects and other multi-genre thingy on the grab. Music is the best antidote for any havoc.</p>
                    <div className="d-flex jc-center">
                        <a class="cta-neon-button mt-2 mb-4" href="https://wa.me/+919151040021?text=I%20want%to%20book%20Indraneel%20for%20a%20show">Book Me</a>
                    </div>
                </div>

                {/* slider 5 */}
                <div className="artist-carousel-container m-auto">
                    <div className='artist-img-wrapper mt-4'>
                        <div className='artist-img-bg carousel-dull-blue'>
                            <Fade>
                                <img src={ArtistImage2} alt="Vortex Logo" className='artist-img'/>
                            </Fade>
                        </div>
                    </div>
                    <div className='carousel-control-container'>
                        <div className='timeline-play-container'>
                            <hr className='timeline-border'></hr>
                            <span className='timeline-circle'></span>
                        </div>
                        <div className='music-icon-container'>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-shuffle" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-backward-step" /></span>
                            <span className='play-bg f-size-1'><FontAwesomeIcon icon="fa-solid fa-play" /></span>
                            {/* <span className='light-text'><FontAwesomeIcon icon="fa-solid fa-pause" /></span> */}
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-forward-step" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-repeat" /></span>
                        </div>
                    </div>
                    <div className='carousel-content'>
                        <Flash>
                            <h3 className='light-text glitch-font f-size-2'>Ayush</h3>
                        </Flash>
                        <div className='carousel-social-container'>
                            <a href='https://instagram.com' className='light-text f-size-1 mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            <a href='https://youtube.com' className='light-text f-size-1'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                        </div>
                    </div>
                    <p className='light-text f-size-0'>Ayush, a versatile singer from the alleys of Prayagraj is the one who can make you groove ❤</p>
                    <div className="d-flex jc-center">
                        <a class="cta-neon-button mt-2 mb-4" href="https://wa.me/+919151040021?text=I%20want%to%20book%20Ayush%20for%20a%20show">Book Me</a>
                    </div>
                </div>

                {/* slider 6 */}
                <div className="artist-carousel-container m-auto">
                    <div className='artist-img-wrapper mt-4'>
                        <div className='artist-img-bg carousel-that-blue'>
                            <Fade>
                                <img src={ArtistImage10} alt="Vortex Logo" className='artist-img'/>
                            </Fade>
                        </div>
                    </div>
                    <div className='carousel-control-container'>
                        <div className='timeline-play-container'>
                            <hr className='timeline-border'></hr>
                            <span className='timeline-circle'></span>
                        </div>
                        <div className='music-icon-container'>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-shuffle" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-backward-step" /></span>
                            <span className='play-bg f-size-1'><FontAwesomeIcon icon="fa-solid fa-play" /></span>
                            {/* <span className='light-text'><FontAwesomeIcon icon="fa-solid fa-pause" /></span> */}
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-forward-step" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-repeat" /></span>
                        </div>
                    </div>
                    <div className='carousel-content'>
                        <Flash>
                            <h3 className='light-text glitch-font f-size-2'>Iqra</h3>
                        </Flash>
                        <div className='carousel-social-container'>
                            <a href='https://open.spotify.com/show/3mm0m34MjRKCJWoK0R2vnV?si=3g611bSbS9WuxKvtHUjG7Q&utm_source=copy-link' className='light-text f-size-1 mr-2'><FontAwesomeIcon icon="fa-brands fa-spotify" /></a>
                            <a href='https://instagram.com/iqra_dz' className='light-text f-size-1 mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            <a href='https://youtube.com/@iqradz3501' className='light-text f-size-1'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                        </div>
                    </div>
                    <p className='light-text f-size-0'>Iqra is from Prayagraj. She is passionately in love with singing and writing both. Her dream is to be an independent music artist and wanna spread the magic in this world through her voice and songs. She is highly inspired by one of the amazing independent music artist Darshan Raval.</p>
                    <div className="d-flex jc-center">
                        <a class="cta-neon-button mt-2 mb-4" href="https://wa.me/+919151040021?text=I%20want%to%20book%20Iqra%20for%20a%20show">Book Me</a>
                    </div>
                </div>

                {/* slider 7 */}
                <div className="artist-carousel-container m-auto">
                    <div className='artist-img-wrapper mt-4'>
                        <div className='artist-img-bg carousel-just-black'>
                            <Fade>
                                <img src={ArtistImage3} alt="Vortex Logo" className='artist-img'/>
                            </Fade>
                        </div>
                    </div>
                    <div className='carousel-control-container'>
                        <div className='timeline-play-container'>
                            <hr className='timeline-border'></hr>
                            <span className='timeline-circle'></span>
                        </div>
                        <div className='music-icon-container'>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-shuffle" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-backward-step" /></span>
                            <span className='play-bg f-size-1'><FontAwesomeIcon icon="fa-solid fa-play" /></span>
                            {/* <span className='light-text'><FontAwesomeIcon icon="fa-solid fa-pause" /></span> */}
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-forward-step" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-repeat" /></span>
                        </div>
                    </div>
                    <div className='carousel-content'>
                        <Flash>
                            <h3 className='light-text glitch-font f-size-2'>Anunai</h3>
                        </Flash>
                        <div className='carousel-social-container'>
                            <a href='https://instagram.com' className='light-text f-size-1 mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            <a href='https://youtube.com' className='light-text f-size-1'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                        </div>
                    </div>
                    <p className='light-text f-size-0'>Anunai, a singer hailing from Prayagraj is the one who can heal a broken heart, touch the soul just by his beautiful voice</p>
                    <div className="d-flex jc-center">
                        <a class="cta-neon-button mt-2 mb-4" href="https://wa.me/+919151040021?text=I%20want%to%20book%20Anunai%20for%20a%20show">Book Me</a>
                    </div>
                </div>

                {/* slider 8 */}
                <div className="artist-carousel-container m-auto">
                    <div className='artist-img-wrapper mt-4'>
                        <div className='artist-img-bg carousel-that-grey'>
                            <Fade>
                                <img src={ArtistImage6} alt="Vortex Logo" className='artist-img'/>
                            </Fade>
                        </div>
                    </div>
                    <div className='carousel-control-container'>
                        <div className='timeline-play-container'>
                            <hr className='timeline-border'></hr>
                            <span className='timeline-circle'></span>
                        </div>
                        <div className='music-icon-container'>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-shuffle" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-backward-step" /></span>
                            <span className='play-bg f-size-1'><FontAwesomeIcon icon="fa-solid fa-play" /></span>
                            {/* <span className='light-text'><FontAwesomeIcon icon="fa-solid fa-pause" /></span> */}
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-forward-step" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-repeat" /></span>
                        </div>
                    </div>
                    <div className='carousel-content'>
                        <Flash>
                            <h3 className='light-text glitch-font f-size-2'>Nalayak 'Comic'</h3>
                        </Flash>
                        <div className='carousel-social-container'>
                            <a href='https://instagram.com/the.nalayak_?igshid=Yzg5MTU1MDY=' className='light-text f-size-1  mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            <a href='https://youtube.com' className='light-text f-size-1'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                        </div>
                    </div>
                    <p className='light-text f-size-0'>Standup comedian, also two times Tedx performer from prayagraj who has been entertaining you through his instagram reels on daily basis.</p>
                    <div className="d-flex jc-center">
                        <a class="cta-neon-button mt-2 mb-4" href="https://wa.me/+919151040021?text=I%20want%to%20book%20Nalayak%20for%20a%20show">Book Me</a>
                    </div>
                </div>

                {/* slider 9 */}
                <div className="artist-carousel-container m-auto">
                    <div className='artist-img-wrapper mt-4'>
                        <div className='artist-img-bg carousel-just-black'>
                            <Fade>
                                <img src={ArtistImage7} alt="Vortex Logo" className='artist-img'/>
                            </Fade>
                        </div>
                    </div>
                    <div className='carousel-control-container'>
                        <div className='timeline-play-container'>
                            <hr className='timeline-border'></hr>
                            <span className='timeline-circle'></span>
                        </div>
                        <div className='music-icon-container'>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-shuffle" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-backward-step" /></span>
                            <span className='play-bg f-size-1'><FontAwesomeIcon icon="fa-solid fa-play" /></span>
                            {/* <span className='light-text'><FontAwesomeIcon icon="fa-solid fa-pause" /></span> */}
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-forward-step" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-repeat" /></span>
                        </div>
                    </div>
                    <div className='carousel-content'>
                        <Flash>
                            <h3 className='light-text glitch-font f-size-2'>Kohinoor</h3>
                        </Flash>
                        <div className='carousel-social-container'>
                            <a href='https://instagram.com/abhinav_singh__official?igshid=Yzg5MTU1MDY=' className='light-text f-size-1  mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            <a href='https://youtube.com' className='light-text f-size-1'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                        </div>
                    </div>
                    <p className='light-text f-size-0'>"Nahi meri gali me do char rapper, Mai hi meri gali ka akela rapper!" Abhinav Singh a.k.a. Kohinoor, is a rapper hailing from Prayagraj who does have the charm of Kohinoor.</p>
                    <div className="d-flex jc-center">
                        <a class="cta-neon-button mt-2 mb-4" href="https://wa.me/+919151040021?text=I%20want%to%20book%20kohinoor%20for%20a%20show">Book Me</a>
                    </div>
                </div>

                {/* slider 10 */}
                <div className="artist-carousel-container m-auto">
                    <div className='artist-img-wrapper mt-4'>
                        <div className='artist-img-bg carousel-other-white'>
                            <Fade>
                                <img src={ArtistImage9} alt="Vortex Logo" className='artist-img'/>
                            </Fade>
                        </div>
                    </div>
                    <div className='carousel-control-container'>
                        <div className='timeline-play-container'>
                            <hr className='timeline-border'></hr>
                            <span className='timeline-circle'></span>
                        </div>
                        <div className='music-icon-container'>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-shuffle" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-backward-step" /></span>
                            <span className='play-bg f-size-1'><FontAwesomeIcon icon="fa-solid fa-play" /></span>
                            {/* <span className='light-text'><FontAwesomeIcon icon="fa-solid fa-pause" /></span> */}
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-forward-step" /></span>
                            <span className='light-text f-size-1'><FontAwesomeIcon icon="fa-solid fa-repeat" /></span>
                        </div>
                    </div>
                    <div className='carousel-content'>
                        <Flash>
                            <h3 className='light-text glitch-font f-size-2'>Valerio</h3>
                        </Flash>
                        <div className='carousel-social-container'>
                            <a href='https://instagram.com/_.valerio_?igshid=Yzg5MTU1MDY=' className='light-text f-size-1  mr-2'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            <a href='https://youtube.com' className='light-text f-size-1  mr-2'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                        </div>
                    </div>
                    <p className='light-text f-size-0'>"Yaha Karte Dhanda Dil Ka
                    Yahi Karmfal Bhi Milta
                    Yaha Bikte Faisle Bikta Waqt
                    Lagta Bazaar Dil Ka"
                    Pranjal Chaudhary a.k.a. Valerio, a rapper so electric, that no one can stay on their place when he holds the mic</p>
                    <div className="d-flex jc-center">
                        <a class="cta-neon-button mt-2 mb-4" href="https://wa.me/+919151040021?text=I%20want%to%20book%20Valerio%20for%20a%20show">Book Me</a>
                    </div>
                </div>
            </Slider>
        </div>
    );
  };
  
  export default ArtistCarousel;