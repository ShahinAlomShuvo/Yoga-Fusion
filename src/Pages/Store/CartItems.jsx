const CartItems = ({ product }) => {
  const { img, productName, price } = product;

  return (
    <div className=' lg:flex justify-between mt-4 px-8 lg:px-0'>
      <div className='flex gap-4 items-center '>
        <img
          className='w-24 h-24 lg:w-12 lg:h-12 rounded-md'
          src={img}
          alt=''
        />
        <div className='flex flex-col'>
          <h3 className='font-semibold text-[#45445A]'>{productName}</h3>
          <p className='text-gray-500'>Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
