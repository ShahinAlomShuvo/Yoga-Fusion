const ServiceCard = ({ data }) => {
  const { serviceName, imageLink, price, description } = data;
  return (
    <div>
      <div className='card  bg-base-100 shadow-xl'>
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
            <button className='btn btn-block bg-[#C4D114] text-gray-600 border border-transparent hover:border-[#C4D114] hover:bg-transparent capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
