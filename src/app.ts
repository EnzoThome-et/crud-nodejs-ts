import express from 'express';

import UserController from './controllers/Users';
import { validateClass, 
  validateLevel, validatePassword, validateUserName } from './middlewares/validateUser';

const app = express();

app.use(express.json());

app.post(
  '/users', 
  validateUserName, 
  validateClass,
  validateLevel, 
  validatePassword, 
  UserController.create,
);

export default app;
