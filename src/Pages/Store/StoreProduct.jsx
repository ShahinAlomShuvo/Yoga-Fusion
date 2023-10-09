const StoreProduct = ({ product, getId }) => {
  const { productName, img, price, id } = product;

  const handleProduct = () => {
    getId(id);
  };

  return (
    <div className='relative'>
      <div className='rounded-md h-96 overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={img}
          alt='product img'
        />
        <div className='absolute inset-0 bg-black rounded-md opacity-0 hover:opacity-70 transition-opacity'>
          <div className='absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity'>
            <h2 className='text-xl font-semibold'>{productName}</h2>
            <p className='font-semibold py-2'>${price}</p>
            <button
              onClick={handleProduct}
              className='btn btn-neutral bg-[#C4D114] capitalize font-extrabold text-white border-none'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreProduct;
