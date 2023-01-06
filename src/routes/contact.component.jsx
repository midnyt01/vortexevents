import Topbar from "../components/topbar/topbar.component";
import Contact from "../components/contact/contact.component"
import Footer from "../components/footer/footer.component"

const ContactPage = () => {
  return (
    <div style={{overflowX: 'hidden'}}>
      <Topbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
