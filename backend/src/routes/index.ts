import { Router } from 'express';
import userRoute from './userRoutes';

const appRoutes = Router();

appRoutes.use(userRoute);

export default appRoutes;