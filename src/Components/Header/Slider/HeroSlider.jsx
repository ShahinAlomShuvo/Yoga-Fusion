import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderOne from "../../../assets/Images/slider1.webp";
import sliderTwo from "../../../assets/Images/slider2.jpeg";
import sliderThree from "../../../assets/Images/slider3.webp";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='relative'>
      <div className='carousel w-full '>
        <div id='slide1' className='carousel-item relative w-full'>
          <div
            className='hero h-[70vh] '
            style={{
              backgroundImage: `url(${sliderOne})`,
            }}
          >
            <div className='hero-overlay bg-opacity-60'></div>
            <div
              className='hero-content text-center text-neutral-content'
              data-aos='fade-up'
            >
              <div className='max-w-md'>
                <h1 className='mb-5 text-3xl md:text-5xl font-bold'>
                  Mediation Practice <br />{" "}
                  <span className='text-[#C4D114]'>for all</span>
                </h1>

                <Link
                  to={"/contact"}
                  className='btn bg-[#C4D114] text-gray-600 border border-transparent hover:border-[#C4D114] hover:bg-transparent hover:text-[#C4D114] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
                >
                  Make an Appointment
                </Link>
              </div>
            </div>
          </div>

          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <div
            className='hero h-[70vh] '
            style={{
              backgroundImage: `url(${sliderTwo})`,
            }}
          >
            <div className='hero-overlay bg-opacity-60'></div>
            <div
              className='hero-content text-center text-neutral-content'
              data-aos='fade-up'
            >
              <div className='max-w-md'>
                <h1 className='mb-5 text-3xl md:text-5xl font-bold'>
                  Essential Yoga <br />{" "}
                  <span className='text-[#C4D114]'>for busy People</span>
                </h1>

                <Link
                  to={"/contact"}
                  className='btn bg-[#C4D114] text-gray-600 border border-transparent hover:border-[#C4D114] hover:bg-transparent hover:text-[#C4D114] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
                >
                  Make an Appointment
                </Link>
              </div>
            </div>
          </div>

          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <div
            className='hero h-[70vh] '
            style={{
              backgroundImage: `url(${sliderThree})`,
            }}
          >
            <div className='hero-overlay bg-opacity-60'></div>
            <div
              className='hero-content text-center text-neutral-content'
              data-aos='fade-up'
            >
              <div className='max-w-md'>
                <h1 className='mb-5 text-3xl md:text-5xl font-bold'>
                  Inspiration <br />{" "}
                  <span className='text-[#C4D114]'>for joyful living</span>
                </h1>

                <Link
                  to={"/contact"}
                  className='btn bg-[#C4D114] text-gray-600 border border-transparent hover:border-[#C4D114] hover:bg-transparent hover:text-[#C4D114] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
                >
                  Make an Appointment
                </Link>
              </div>
            </div>
          </div>

          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2 absolute bottom-3'>
        <a
          href='#slide1'
          className='btn btn-outline btn-circle btn-xs   bg-transparent hover:bg-[#C4D114] text-[#C4D114] hover:text-white'
        >
          1
        </a>
        <a
          href='#slide2'
          className='btn btn-outline btn-circle btn-xs   bg-transparent hover:bg-[#C4D114] text-[#C4D114] hover:text-white'
        >
          2
        </a>

        <a
          href='#slide3'
          className='btn btn-outline btn-circle btn-xs   bg-transparent hover:bg-[#C4D114] text-[#C4D114] hover:text-white'
        >
          3
        </a>
      </div>
    </div>
  );
};

export default HeroSlider;
