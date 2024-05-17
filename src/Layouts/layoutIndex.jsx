import Footer from "../components/Footer";
import BarraAnuncio from "../components/barraAnuncio";
import NavBar from "../components/navBar";
import SubscribeCard from "../components/subscribeSection";

const LayoutIndex = ({ children }) => {
  return(
  <div className="min-h-screen w-full flex flex-col">
    <BarraAnuncio/>
    <NavBar />
    {children}
    <Footer/>
  </div>)
};

export default LayoutIndex;
