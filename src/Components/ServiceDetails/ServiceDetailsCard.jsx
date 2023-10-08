const ServiceDetailsCard = ({ detailsData, data }) => {
  const { serviceName, imageLink, price, description } = detailsData;

  return (
    <div>
      <div className='relative flex flex-wrap md:flex-nowrap w-full py-20 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
        <div className='relative m-0 w-96 md:w-1/2  shrink-0 overflow-hidden rounded-xl md:rounded-r-none bg-white bg-clip-border text-gray-700'>
          <img src={imageLink} alt='image' className='h-full   object-cover' />
        </div>
        <div className='p-6 md:pt-0 '>
          <h4 className='mb-2 block text-3xl lg:text-5xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
            {serviceName}
          </h4>
          <p className='mb-6 block  text-base font-normal leading-relaxed text-gray-700 antialiased'>
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
