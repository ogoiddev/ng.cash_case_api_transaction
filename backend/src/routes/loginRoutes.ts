import { Router } from 'express';
import factory from '../factories/index';

const loginRoute = Router();

loginRoute.post('/', factory.loginHandler.login);

loginRoute.get('/validate', factory.loginHandler.loginValidate);

export default loginRoute;