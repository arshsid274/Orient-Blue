import Welcome from '../Components/Welcome';
import LatestWork from '../Components/LatestWork';
import Provide from '../Components/Provide';
import WatchUs from '../Components/WatchUs';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import Button from '../Components/Button'
import Marquee from '../Components/Marquee';
const Home = () => {
  return (
    <div>
      <Welcome />
      <LatestWork/>
      <Marquee/>
      <Provide/>
      <Button/>

      <WatchUs/>
      <ContactForm/>   
      <Footer/> 
      </div>
  );
};

export default Home;
