// Library
import { Routes, Route } from "react-router-dom";
import LandingPage from './routes/landing-page.component';
import EventPage from './routes/events.component.jsx'
import AboutPage from './routes/about.component'
import ArtistPage from './routes/artist-page.component'
import GalleryPage from './routes/gallery.component'
import ContactPage from './routes/contact.component'

// 3rd party library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Images and Logo
// import VortexLogo from "./assets/leverance_logo.png"
// import logo from './logo.svg';

// Css
import './App.css';

library.add(fas, fab)

function App() {
  return (
    <Routes>
      {/* Common */}
      {/* <Route path="/mainlogo" element={<VortexLogo />}/> */}

      {/* Pages */}
      <Route path="/" element={<LandingPage />}/>
      <Route path="/events" element={<EventPage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/artist" element={<ArtistPage />}/>
      <Route path="/gallery" element={<GalleryPage />}/>
      <Route path="/contact" element={<ContactPage />}/>

    </Routes>
  );
}

export default App;

