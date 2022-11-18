import { Router } from 'express';
import factory from '../factories/index';

const userRoute = Router();

userRoute.post('/users', factory.userHandler.saveNewUser);

userRoute.get('/users', factory.userHandler.getAllUsers);

export default userRoute;