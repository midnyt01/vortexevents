// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AdastraLogo from '../../assets/adastra_logo.png'
import TSLogo from "../../assets/trendstitchers_logo.png"
import OPCLogo from "../../assets/opc_logo.png"
import CRSLogo from "../../assets/crs-logo-transparent.png"
import NitroskLogo from "../../assets/nitrosk_logo-transparent.png"
import ThomasCookLogo from "../../assets/thomascooklogo.jpg"
import MaharaniLogo from "../../assets/maharanilogo.png"
import SandDLogo from "../../assets/sandd_logo.jpeg"

import './partners.styles.css'

const PartnerSection = () => {

    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        slidesToScroll: 1
    };

  return (
    <div className='container-fluid m-auto'>
        {/* Sponsors */}
        <div className="partner-card-wrapper mt-2 mb-5">
            <h2 className='light-text'>Our Sponsors</h2>
            <div className='mt-2'>
                <Slider {...settings}>
                    <div className='cards-basic partner-card'>
                        <a href='https://wa.me/+919151040021'><img src={ThomasCookLogo} alt='TS Logo' /></a>
                    </div>
                    <div className='cards-basic partner-card'>
                        <a href='https://maps.app.goo.gl/uuprD9BksMb7apbf8'><img src={MaharaniLogo} alt='TS Logo' /></a>
                    </div>
                    <div className='cards-basic partner-card'>
                        <a href='https://wa.me/+9173889 55914'><img src={SandDLogo} alt='TS Logo' /></a>
                    </div>
                    {/* <div className='cards-basic partner-card'>
                        <a href='https://gitdebug.xyz/'><img src={NitroskLogo} alt='TS Logo' /></a>
                    </div> */}
                </Slider>
            </div>
        </div>

        {/* Partners */}
        <div className="partner-card-wrapper mt-2 mb-4">
            <h2 className='light-text'>Our Partners</h2>
            <div className='mt-2'>
                <Slider {...settings}>
                    <div className='cards-basic partner-card'>
                        <a href='https://wa.me/+919151040021?text=I%20got%your%20number%20from%20Vortex'><img src={AdastraLogo} alt='TS Logo' /></a>
                    </div>
                    <div className='cards-basic partner-card'>
                        <a href='https://trendstitchers.com/'><img src={TSLogo} alt='TS Logo' className='invert-filter' /></a>
                    </div>
                    <div className='cards-basic partner-card'>
                        <a href='https://wa.me/+917388955914?text=I%20got%your%20number%20from%20Vortex'><img src={OPCLogo} alt='TS Logo' className='invert-filter' /></a>
                    </div>
                    <div className='cards-basic partner-card'>
                        <a href='https://discord.gg/epUfV7pS'><img src={CRSLogo} alt='TS Logo' /></a>
                    </div>
                    <div className='cards-basic partner-card'>
                        <a href='https://gitdebug.xyz/'><img src={NitroskLogo} alt='TS Logo' /></a>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  );
};

export default PartnerSection;
