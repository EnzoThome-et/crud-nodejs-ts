import { Request, Response } from 'express';
import serviceCreateProduct from '../services/Product';

const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  try {
    const product = await serviceCreateProduct(name, amount);
    return res.status(201).json(product);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export default createProduct;