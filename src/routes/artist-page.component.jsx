import Topbar from "../components/topbar/topbar.component";
import ArtistCarousel from "../components/artitst-carousel/artist-carousel-component"
import Footer from "../components/footer/footer.component"
// import { Zoom } from "react-reveal";

const ArtistPage = () => {
  return (
    <div>
      <Topbar />
      <ArtistCarousel />
      <Footer />
    </div>
  );
};

export default ArtistPage;
