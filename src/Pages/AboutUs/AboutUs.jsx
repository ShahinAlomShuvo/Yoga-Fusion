import { useLoaderData } from "react-router-dom";
import owner from "../../assets/Images/slider1.webp";
import OurTeacher from "./OurTeacher";
import ClientReviews from "../../Components/ClientReviews/ClientReviews";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutUs = () => {
  const teacherData = useLoaderData();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      {/* studio owner  */}
      <div className='grid md:grid-cols-2 pt-10' data-aos='zoom-in'>
        <div>
          <img className='h-full' src={owner} alt='owner' />
        </div>
        <div className='p-10 lg:p-32 bg-[#393651] space-y-6'>
          <p className='text-[#CEDB1F] text-base font-bold'>Laura Dawson</p>
          <h3 className='text-3xl lg:text-5xl font-semibold text-white'>
            Yoga Studio Owner
          </h3>
          <p className='text-white border-l-2 p-4 lg:p-6 '>
            “Discover serenity at YogaFusion, where we nurture your mind, body,
            and spirit through the practice of yoga. Join us for a
            transformative journey to wellness.”
          </p>
        </div>
      </div>
      {/* ourTeacher Header  */}
      <div className='text-center py-20'>
        <h2 className=' text-5xl font-medium text-[#45445A]'>
          Our <span className='text-[#C4D114]'>Teachers</span>
        </h2>
        <p className='text-gray-500 md:w-2/3 lg:w-1/2 mx-auto mt-5 px-5 md:px-0'>
          YogaStudio is where you can find balance, harmony and energy renewal
          amidst the hectic bustle of everyday pressures and deadlines. Relax &
          enjoy a personalized day yogaÂ experience in our comfortable center.
        </p>
      </div>

      <OurTeacher teacherData={teacherData}></OurTeacher>

      <ClientReviews></ClientReviews>
    </div>
  );
};

export default AboutUs;
