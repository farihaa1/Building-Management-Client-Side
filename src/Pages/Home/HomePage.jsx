import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import AboutUs from "../../Components/AboutUs/AboutUs";
import LocationDetails from "../../Components/LocationDetails/LocationDetails";
import Coupons from "../Coupons";

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
      </div>
    </div>
  );
};

export default HomePage;
