import { Router } from 'express';
import factory from '../factories/index';

const userRoute = Router();

userRoute.post('/users', factory.userHandler.saveNewUser);

userRoute.get('/users', factory.userHandler.getAllUsers);

userRoute.get('/query/users/name', factory.userHandler.getUserByUserName);

userRoute.get('/users/:id', factory.userHandler.getUserById);

export default userRoute;