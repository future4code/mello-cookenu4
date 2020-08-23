import { Router } from 'express';
import userRouter from './user.routes';
import singinRouter from './singin.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/sigin', singinRouter);

export default routes;
