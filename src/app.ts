import express from 'express';
import Login from './controllers/Login';
import createProduct from './controllers/Products';

import UserController from './controllers/Users';
import { validateAmount, validateName } from './middlewares/validateAmount';
import validateLogin from './middlewares/validateLogin';
import validateToken from './middlewares/validateToken';
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

app.post('/products', validateToken, validateName, validateAmount, createProduct);

export default app;
