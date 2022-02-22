import { Request, Response } from 'express';
import * as UserService from '../services/Users';
import { User } from '../helpers/UserInterface';

const create = async (req: Request, res: Response) => {
  const userInfo: User = req.body;
  try {
    const createUser = await UserService.createUser(userInfo);
    return res.status(201).json(createUser);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export = { create };