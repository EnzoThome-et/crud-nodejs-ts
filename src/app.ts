import express from 'express';

import UserController from './controllers/Users';

const app = express();

app.use(express.json());

app.post('/users', UserController.create);

export default app;
