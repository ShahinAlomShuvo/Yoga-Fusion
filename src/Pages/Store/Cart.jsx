import { useEffect, useState } from "react";
import { getStoredProduct } from "../../Utilities/localstorage";
import CartItems from "./CartItems";

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
            <CartItems product={product} key={idx}></CartItems>
          ))
        )}
      </div>
      {cartProduct.length > 0 && (
        <p className='text-xl font-bold py-4'>Total:{total.toFixed(2)}$</p>
      )}
      {cartProduct.length > 0 && (
        <button className='btn btn-block bg-[#C4D114] btn-neutral border-none '>
          Check Out
        </button>
      )}
    </div>
  );
};

export default Cart;
