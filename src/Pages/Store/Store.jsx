import { useLoaderData } from "react-router-dom";
import StoreProduct from "./StoreProduct";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import { addProductToStore } from "../../Utilities/localstorage";

const Store = () => {
  const productData = useLoaderData();
  const [productId, setProductId] = useState(null);
  const cartProduct = productData.find((product) => product.id === productId);

  useEffect(() => {
    if (cartProduct) {
      addProductToStore(cartProduct);
    }
  }, [productId, cartProduct]);

  const getId = (id) => {
    setProductId(id);
  };

  return (
    <div className='grid grid-cols-4 gap-5 container mx-auto py-20'>
      <div>
        <h2>Categories</h2>
        <Cart></Cart>
      </div>
      <div className='col-span-3'>
        <div className='grid grid-cols-3 gap-5'>
          {productData.map((product) => (
            <StoreProduct
              key={product.id}
              product={product}
              getId={getId}
              cartProduct={cartProduct}
            ></StoreProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
