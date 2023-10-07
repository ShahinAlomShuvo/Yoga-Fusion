import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientOne from "../../assets/Images/client1.avif";
import clientTwo from "../../assets/Images/client2.avif";
import clientThree from "../../assets/Images/client3.avif";
import clientBg from "../../assets/Images/bgg.jpg";

const ClientReviews = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='text-center '>
      <div
        className='hero h-[70vh]'
        style={{
          backgroundImage: `url(${clientBg})`,
        }}
      >
        <div className='hero-overlay bg-[#554C86] bg-opacity-80'>
          <h2 className='text-3xl text-white font-bold text-center pt-16 pb-10'>
            Clients About Us
          </h2>
        </div>
        <Slider {...settings}>
          <div className='text-white'>
            <img
              className='w-28 h-28 rounded-full mx-auto'
              src={clientOne}
              alt='client'
            />
            <h4 className='text-3xl  font-semibold py-3'>Jenna Anniston</h4>
            <p className='w-[450px] mx-auto'>
              My task of running a website has never been this easy! Thank you
              for your fantastic web products and excellent service.
            </p>
          </div>
          <div className='text-white'>
            <img
              className='w-28 h-28 rounded-full mx-auto'
              src={clientTwo}
              alt='client'
            />
            <h4 className='text-3xl  font-semibold py-3'>Mary Green </h4>
            <p className='w-[450px] mx-auto'>
              I am 100% happy about working with these themes. Simple and
              elegant is just what I am looking for my Yoga site!
            </p>
          </div>
          <div className='text-white'>
            <img
              className='w-28 h-28 rounded-full mx-auto'
              src={clientThree}
              alt='client'
            />
            <h4 className='text-3xl  font-semibold py-3'>Lucy Banks</h4>
            <p className='w-[450px] mx-auto'>
              Efficient and professional support team has made my experience
              much brighter.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ClientReviews;
