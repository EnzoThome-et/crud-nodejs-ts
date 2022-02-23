import { create, getAll as modelGetAll } from '../models/ProductModel';

export const serviceCreateProduct = async (name: string, amount: string) => {
  const createProduct = await create(name, amount);
  return createProduct;  
};

export const getAll = async () => {
  const getAllProducts = await modelGetAll();
  return getAllProducts;  
};
