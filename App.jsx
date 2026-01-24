
import Categories from './Categories';
import Footer from './Footer';
import Header from './Header';
import HotDeal from './HotDeal';
import Slider from './Slider';
import "../src/Css/app.css"

const App = () => {



  return (



    <div>
         <Header/>
         <Slider/>
         <Categories/>
         <h2 class="animated-h2" >कृपया सभी प्रकार के आटे के आर्डर 07 बजे के पहले करें ||</h2>
         <HotDeal/>
         <Footer/>
      
   
    </div>
  );
};

export default App;