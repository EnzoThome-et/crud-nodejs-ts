import { Request, Response } from 'express';
import * as UserService from '../services/Users';
import { User } from '../interfaces/UserInterface';
import Token from '../interfaces/TokenInterface';
import ResponseInterface from '../interfaces/ResponseInterface';

const create = async (req: Request, res: Response) => {
  const userInfo: User = req.body;
  const { username, classe, level, password } = userInfo;
  try {
    const createUser: Token | ResponseInterface = await UserService.createUser(
      { username, classe, level, password },
    );
    return res.status(201).json(createUser);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export = { create };