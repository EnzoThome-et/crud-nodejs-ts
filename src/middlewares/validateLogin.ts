import { Request, Response, NextFunction } from 'express';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const userInfo = req.body;
  const { username, password } = userInfo;
  
  if (username === undefined) return res.status(400).json({ error: 'Username is required' });
  
  if (password === undefined) return res.status(400).json({ error: 'Password is required' });
  next();
};

export default validateLogin;