import { FaChild, FaHeart, FaLungs, FaXRay } from "react-icons/fa";
import yogaLady from "../../assets/Images/yogaLady.png";
const MainReason = () => {
  return (
    <div className=' bg-[#F5F6F7]'>
      <div className='container mx-auto pb-10'>
        {/* main reason header  */}
        <h2 className='text-3xl text-[#45445A] font-bold text-center pt-20 pb-10 '>
          The Main Reasons to PracticeYoga:
        </h2>
        {/* main reason container  */}
        <div className='grid md:grid-cols-3 gap-5 items-end'>
          {/* main reason left content  */}
          <div className='space-y-14'>
            <div className='flex gap-10'>
              <div className='text-right w-10/12 space-y-5'>
                <h3 className='text-2xl text-[#45445A] font-semibold'>
                  Good for <span className='text-[#C4D114]'>Health</span>
                </h3>
                <p className='text-[#A8A8A9] text-base '>
                  Yoga Fit is where you can find balance, harmony and energy.
                  Yoga Fit is where you can find balance, harmony energy.
                </p>
              </div>
              <div className=''>
                <FaXRay className='text-7xl text-white bg-[#C4D114] rounded-full p-5'></FaXRay>
              </div>
            </div>
            <div className='flex gap-10'>
              <div className='text-right w-10/12 space-y-5'>
                <h3 className='text-2xl text-[#45445A] font-semibold'>
                  Good for <span className='text-[#C4D114]'>Body</span>
                </h3>
                <p className='text-[#A8A8A9] text-base '>
                  Yoga Fit is where you can gain balance of metabolism. Maintain
                  healthy weight, strong body and control your hunger.
                </p>
              </div>
              <div className=''>
                <FaChild className='text-7xl text-white bg-[#C4D114] rounded-full p-5'></FaChild>
              </div>
            </div>
          </div>

          {/* main reason middle img  */}
          <div>
            <img className='w-full' src={yogaLady} alt='yoga lady' />
          </div>
          {/* main reason Right content  */}
          <div className='space-y-14'>
            <div className='flex flex-row-reverse gap-10'>
              <div className=' w-10/12 space-y-5'>
                <h3 className='text-2xl text-[#45445A] font-semibold'>
                  Good for <span className='text-[#C4D114]'>Cardio</span>
                </h3>
                <p className='text-[#A8A8A9] text-base '>
                  Yoga Fit improves blood circulation and decreases blood
                  pressure of the body. A lower pulse rate helps your heart.
                </p>
              </div>
              <div className=''>
                <FaHeart className='text-7xl text-white bg-[#C4D114] rounded-full p-5'></FaHeart>
              </div>
            </div>
            <div className='flex gap-10 flex-row-reverse'>
              <div className=' w-10/12 space-y-5'>
                <h3 className='text-2xl text-[#45445A] font-semibold'>
                  Good for <span className='text-[#C4D114]'>Breathing</span>
                </h3>
                <p className='text-[#A8A8A9] text-base '>
                  Yoga Fit improves your respiratory by helping your lungs work
                  more efficiently. Breathing exercises are a therapy.
                </p>
              </div>
              <div className=''>
                <FaLungs className='text-7xl text-white bg-[#C4D114] rounded-full p-5'></FaLungs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainReason;
