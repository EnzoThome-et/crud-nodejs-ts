import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const auth = {
  secret: String(process.env.JWT_SECRET),
};

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: 'Token not found' });
  try {
    const verify = jwt.verify(authorization, auth.secret);
    console.log(verify);
    
    next();
  } catch (error) {
    console.log(error);
    
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default validateToken;