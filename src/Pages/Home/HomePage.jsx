import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import AboutUs from "../../Components/AboutUs/AboutUs";
import LocationDetails from "../../Components/LocationDetails/LocationDetails";
import Coupons from "../Coupons";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Newsletter from "./Newsletter";

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
        <Coupons></Coupons>
        <ContactUs></ContactUs>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default HomePage;
