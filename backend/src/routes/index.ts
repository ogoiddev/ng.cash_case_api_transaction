import { Router } from 'express';
import loginRoute from './loginRoutes';
import transactionRoute from './transactionRoutes';
import userRoute from './userRoutes';

const appRoutes = Router();

appRoutes.use('/users', userRoute);
appRoutes.use('/login', loginRoute);
appRoutes.use('/transfer', transactionRoute);

export default appRoutes;