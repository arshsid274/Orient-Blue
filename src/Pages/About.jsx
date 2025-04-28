import Welcome from '../Components/Welcome';
import PrincipalArcitect from '../Components/PrincipalArcitect';
import Philosphy from '../Components/Philosphy'
import ChooseUs from '../Components/ChooseUs';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import Marquee from '../Components/Marquee';

function About() {
    return (
      <>
      <PrincipalArcitect/>
      <Welcome/>
      <Philosphy/>
      <Marquee/>
      <ChooseUs/>
      
      
      <ContactForm/>
      <Footer/>
      
      </>
     
      

    );
  }
  export default About;