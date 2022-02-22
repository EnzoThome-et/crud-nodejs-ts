import connection from './connection';
import { User } from '../interfaces/UserInterface';
import createToken from '../helpers/CreateToken';
import Token from '../interfaces/TokenInterface';

const create = async (user: User) 
:Promise<Token> => {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES 
  (?, ?, ?, ?)`;
  await connection.execute(query, [username, classe, level, password]);

  const token = createToken(username);

  return { token };
};

export = { create };