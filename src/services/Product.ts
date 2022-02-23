import create from '../models/ProductModel';

const serviceCreateProduct = async (name: string, amount: string) => {
  const createProduct = await create(name, amount);
  return createProduct;  
};

export default serviceCreateProduct;