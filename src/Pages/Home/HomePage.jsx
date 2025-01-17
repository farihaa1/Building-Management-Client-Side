import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import AboutUs from "../../Components/AboutUs/AboutUs";
import LocationDetails from "../../Components/LocationDetails/LocationDetails";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Harmony Heights || Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <LocationDetails></LocationDetails>
      </div>
    </div>
  );
};

export default HomePage;
