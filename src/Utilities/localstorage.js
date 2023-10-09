const getStoredProduct = () => {
  const storedProduct = localStorage.getItem("cart");
  if (storedProduct) {
    const product = JSON.parse(storedProduct);
    return product;
  }
  return [];
};

const addProductToStore = (productInfo) => {
  const storedProduct = getStoredProduct();

  storedProduct.push(productInfo);
  localStorage.setItem("cart", JSON.stringify(storedProduct));
};

export { getStoredProduct, addProductToStore };
