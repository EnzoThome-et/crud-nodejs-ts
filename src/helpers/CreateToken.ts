import { sign, SignOptions, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const createToken = (username: string): string => {
  const jwtConfig: SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };  
  const secret: Secret = process.env.JWT_SECRET || '123';
   
  const token = sign({ data: username }, secret, jwtConfig);

  return token;
};

export default createToken;