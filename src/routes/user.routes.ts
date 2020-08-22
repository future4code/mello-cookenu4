import { Router } from 'express';

import UserController from '../controller/UserController';

const userRouter = Router();
const createUser = new UserController();

userRouter.post('/', createUser.create);

export default userRouter;
