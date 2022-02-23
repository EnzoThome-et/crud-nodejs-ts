import express from 'express';
import Login from './controllers/Login';

import UserController from './controllers/Users';
import validateLogin from './middlewares/validateLogin';
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

app.post('/login', validateLogin, Login.login);

export default app;
