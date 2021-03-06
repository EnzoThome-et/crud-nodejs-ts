import { Request, Response } from 'express';
import { serviceCreateProduct, getAll as serviceGetAll } from '../services/Product';

export const createProduct = async (req: Request, res: Response) => {
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

export const getAll = async (_req: Request, res: Response) => {
  try {
    const product = await serviceGetAll();
    return res.status(200).json(product);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};