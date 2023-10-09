import { useEffect, useState } from "react";
import { getStoredProduct } from "../../Utilities/localstorage";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = getStoredProduct();
    setCartProduct(fetchProduct);
  }, []);
  const total = cartProduct.reduce((acc, product) => acc + product.price, 0);
  return (
    <div>
      <h2 className='text-xl font-bold border-b'>Cart Item</h2>
      <div>
        {cartProduct.length === 0 ? (
          <div>No Products in Cart</div>
        ) : (
          cartProduct.map((product, idx) => (
            <div key={idx} className='mt-3 flex justify-between'>
              <div className='flex gap-4 items-center '>
                <img
                  className='w-12 h-12 rounded-md'
                  src={product.img}
                  alt=''
                />
                <div className='flex flex-col'>
                  <h3 className='font-semibold text-[#45445A]'>
                    {product.productName}
                  </h3>
                  <p className='text-gray-500'>Price: ${product.price}</p>
                </div>
              </div>
              <button className='btn btn-xs btn-circle text-red-600 btn-outline'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
      <p>Total:{total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
