import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServiceCard = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const { serviceName, imageLink, price, description, id } = data;
  return (
    <div>
      <div className='card  bg-base-100 shadow-xl' data-aos='fade-up'>
        <figure>
          <img src={imageLink} alt='Service Image' />
        </figure>
        <div className='card-body '>
          <h2 className='card-title text-[#45445A]'>{serviceName}</h2>
          <p className='text-xl font-medium text-[#45445A]'>
            Session Fee: ${price} /month
          </p>

          <p className='text-[#A8A8A9] text-base'>
            {description.length > 100 ? description.slice(0, 100) : description}
            .....
          </p>
          <div className='card-actions '>
            <Link
              to={`serviceDetails/${id}`}
              className='btn btn-block bg-[#C4D114] text-gray-600 border border-transparent hover:border-[#C4D114] hover:bg-transparent capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
