import { useEffect, useState } from "react";
import { getStoredProduct } from "../../Utilities/localstorage";
import CartItems from "./CartItems";
import toast from "react-hot-toast";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = getStoredProduct();
    setCartProduct(fetchProduct);
  }, []);
  const total = cartProduct.reduce((acc, product) => acc + product.price, 0);
  return (
    <div className='w-full  md:px-24 lg:px-0'>
      <h2 className='text-xl font-bold border-b px-8 lg:px-0'>Cart Item</h2>
      <div>
        {cartProduct.length === 0 ? (
          <div className='text-center'>No Products in Cart</div>
        ) : (
          cartProduct.map((product, idx) => (
            <CartItems product={product} key={idx}></CartItems>
          ))
        )}
      </div>
      {cartProduct.length > 0 && (
        <p className='text-xl font-bold py-4 px-8 lg:px-0'>
          Total:{total.toFixed(2)}$
        </p>
      )}
      <div className='px-8 lg:px-0'>
        {cartProduct.length > 0 && (
          <button
            onClick={() => toast.success("Thanks For PurChase")}
            className='btn btn-block bg-[#C4D114] btn-neutral border-none '
          >
            Check Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
