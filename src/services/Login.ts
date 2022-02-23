import findUser from '../models/LoginModel';

const login = async (username: string, password: string) => {
  const userInDB = await findUser(username, password);

  return userInDB;
};

export default login;