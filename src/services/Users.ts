import Token from '../interfaces/TokenInterface';
import { User } from '../interfaces/UserInterface';
import UserModel = require('../models/UserModel');

export const createUser = async (user: User): Promise<Token> => {
  const create = await UserModel.create(user);
  return create;
};

export default createUser;