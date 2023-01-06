import Topbar from "../components/topbar/topbar.component";
import HeroBanner from "../components/hero-banner/hero-banner.component";
import HeroVideoComponent from "../components/hero-video/hero-video.component"
import Eventmap from "../components/event-map/event-map.components";
import Eventgallery from "../components/event-gallery/event-gallery.component"
import PartnerSection from "../components/partners/partners.component"
import Footer from "../components/footer/footer.component"

const LandingPage = () => {
  return (
    <div>
      <Topbar />
      <HeroBanner />
      <HeroVideoComponent />
      <Eventmap />
      <Eventgallery />
      <PartnerSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
