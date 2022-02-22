import jwt = require('jsonwebtoken');
import dotEnv = require('dotenv');
import connection from './connection';
import Token from '../helpers/TokenInterface';
import ProccesEnv from '../helpers/ProcessEnv';

dotEnv.config();

const create = async (username:string, classe:string, level:number, password:string) 
:Promise<Token> => {
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES 
  (?, ?, ?, ?)`;
  await connection.execute(query, [username, classe, level, password]);

  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };  

  const { JWT_SECRET } = process.env;

  const token = jwt.sign({ data: username }, JWT_SECRET, jwtConfig);

  return { token };
};

export default create;