import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export const create = async (name: string, amount: string) => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  
  return {
    item: {
      id: result.insertId,  
      name,
      amount,
    },
  };
};

export const getAll = async () => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [result] = await connection.execute<ResultSetHeader>(query);

  return result;
};