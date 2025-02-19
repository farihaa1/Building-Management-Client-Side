import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import AboutUs from "../../Components/AboutUs/AboutUs";
import LocationDetails from "../../Components/LocationDetails/LocationDetails";
import Coupons from "../Coupons";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Newsletter from "./Newsletter";
import Luxary from "../../Components/Luxary";
import Faq from "./Faq";

const HomePage = () => {
  return (
    <div className="font-pSans">
      <Helmet>
        <title>Harmony Heights || Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <LocationDetails></LocationDetails>
        <Luxary></Luxary>
        <Coupons></Coupons>
        <ContactUs></ContactUs>
       
        <Newsletter></Newsletter>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default HomePage;
