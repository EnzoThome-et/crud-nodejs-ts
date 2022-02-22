import { User } from '../helpers/UserInterface';
import * as UserModel from '../models/User';

const createUser = async (user: User) => {
  const create = await UserModel.create(user);
  return create;
};

export { createUser };