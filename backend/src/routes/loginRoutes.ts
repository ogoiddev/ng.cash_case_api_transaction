import { Router } from 'express';
import factory from '../factories/index';

const loginRoute = Router();

loginRoute.post('/login', factory.loginHandler.login);

loginRoute.get('/login/validate', factory.loginHandler.loginValidate);

export default loginRoute;