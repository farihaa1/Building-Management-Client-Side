import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import AboutUs from "../../Components/AboutUs/AboutUs";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Harmony Heights || Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};

export default HomePage;
