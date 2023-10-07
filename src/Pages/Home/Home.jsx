import HeroSlider from "../../Components/Header/Slider/HeroSlider";
import MainReason from "../../Components/MainReason/MainReason";
import OurService from "../../Components/OurService/OurService";
import UpComingEvent from "../../Components/UpComingEvent/UpComingEvent";

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <OurService></OurService>
      <UpComingEvent></UpComingEvent>
      <MainReason></MainReason>
    </div>
  );
};

export default Home;
