import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) return res.status(401).json({ error: 'Token not found' });

    const secret = process.env.JWT_SECRET || 'secret';
  
    jwt.verify(authorization, secret, (err) => {
      if (err) return res.status(401).json({ error: 'Invalid token' });
    });
    
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default validateToken;