import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
// import Token from '../interfaces/TokenInterface';

dotenv.config();

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  
  if (authorization === undefined) return res.status(401).json({ error: 'Token not found' });
  if (authorization === null) return res.status(401).json({ error: 'Token not found' });

  const secret = process.env.JWT_SECRET || 'secret';

  jwt.verify(authorization, secret, (err) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });
  });
  
  next();
};

export default validateToken;