import { RowDataPacket } from 'mysql2';
import createToken from '../helpers/CreateToken';
import connection from './connection';

const findUser = async (username: string, password: string) => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?';
  const [result] = await connection.execute<RowDataPacket[]>(query, [username, password]);

  if (result.length === 0) return null;

  const token = createToken(username);

  return {
    token,
  };
};

export default findUser;