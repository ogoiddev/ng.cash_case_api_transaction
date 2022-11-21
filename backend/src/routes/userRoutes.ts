import { Router } from 'express';
import factory from '../factories/index';

const userRoute = Router();

userRoute.post('/register', factory.userHandler.saveNewUser);

userRoute.get('/', factory.userHandler.getAllUsers);

userRoute.get('/query/name', factory.userHandler.getUserByUserName);

userRoute.get('/:id', factory.userHandler.getUserById);

export default userRoute;