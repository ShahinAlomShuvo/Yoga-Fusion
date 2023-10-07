import { FaCheck } from "react-icons/fa";
import meditationPic from "../../assets/Images/event.png";

const UpComingEvent = () => {
  return (
    <div className='grid  md:grid-cols-2 mt-20 '>
      <div className='bg-[#3A3651] pl-[80px] py-12 flex flex-col justify-center'>
        <p className='text-[#C4D114] font-semibold'>14 oct 2023, Saturday</p>
        <h2 className=' text-4xl  text-white font-medium py-4  lg:text-5xl lg:leading-snug'>
          Upcoming Yoga Workshop in the City
        </h2>
        <ul className='text-white text-sm space-y-4'>
          <li className='flex items-center gap-3'>
            <FaCheck className='text-[#C4D114]'></FaCheck> Yoga Healing
          </li>
          <li className='flex items-center gap-3'>
            <FaCheck className='text-[#C4D114]'></FaCheck> Ultimate adventure
          </li>
          <li className='flex items-center gap-3'>
            <FaCheck className='text-[#C4D114]'></FaCheck> Join the community
          </li>
        </ul>
        <button className='btn w-1/2 mt-6 bg-[#C4D114] text-gray-600 border border-transparent hover:border-[#C4D114] hover:bg-transparent hover:text-[#C4D114] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '>
          Make an Appointment
        </button>
      </div>
      <div className='hidden md:block'>
        <img
          className='w-full h-[500px]'
          src={meditationPic}
          alt='meditationPic'
        />
      </div>
    </div>
  );
};

export default UpComingEvent;