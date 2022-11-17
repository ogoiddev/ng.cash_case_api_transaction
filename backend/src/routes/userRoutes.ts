import { Router } from 'express';
import factory from '../factories/index';

const userRoute = Router();

userRoute.post('/users', factory.userHandler.saveNewUser);

export default userRoute;