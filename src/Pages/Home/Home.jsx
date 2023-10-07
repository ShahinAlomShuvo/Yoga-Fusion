import { useLoaderData } from "react-router-dom";
import HeroSlider from "../../Components/Header/Slider/HeroSlider";
import MainReason from "../../Components/MainReason/MainReason";
import OurService from "../../Components/OurService/OurService";
import UpComingEvent from "../../Components/UpComingEvent/UpComingEvent";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <HeroSlider></HeroSlider>
      <OurService serviceData={data}></OurService>
      <UpComingEvent></UpComingEvent>
      <MainReason></MainReason>
    </div>
  );
};

export default Home;
