import { Request, Response } from 'express';
import * as LoginServices from '../services/Login';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const loginToken = await LoginServices.default(username, password);
    if (loginToken === null) {
      return res.status(401).json({ error: 'Username or password invalid' });
    }
    return res.status(200).json(loginToken);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export = { login };