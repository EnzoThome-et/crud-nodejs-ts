import { sign, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = {
  secret: String(process.env.JWT_SECRET),
};

const createToken = (username: string): string => {
  const jwtConfig: SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };  
   
  const token = sign({ data: username }, auth.secret, jwtConfig);

  return token;
};

export default createToken;