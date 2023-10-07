const ServiceDetailsCard = ({ detailsData, data }) => {
  const { serviceName, imageLink, price, description } = detailsData;

  return (
    <div>
      <div className='relative flex w-full py-20 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
        <div className='relative m-0 w-1/2 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700'>
          <img
            src={imageLink}
            alt='image'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='p-6'>
          <h4 className='mb-2 block font-sans text-5xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
            {serviceName}
          </h4>
          <p className='mb-6 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased'>
            {description}
          </p>
          <p className='text-xl font-medium text-[#45445A]'>
            Session Fee: ${price} /month
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
