import { Router } from 'express';
import loginRoute from './loginRoutes';
import userRoute from './userRoutes';

const appRoutes = Router();

appRoutes.use(userRoute);
appRoutes.use(loginRoute);

export default appRoutes;