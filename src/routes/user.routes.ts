import { Router } from 'express';

import CreateUserController from '../controller/CreateUserController';
import ListUserController from '../controller/ListUserController';

const userRouter = Router();
const createUser = new CreateUserController();
const listUser = new ListUserController();

userRouter.post('/', createUser.create);
userRouter.get('/:id', listUser.getUser);

export default userRouter;
