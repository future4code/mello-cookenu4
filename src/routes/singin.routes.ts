import { Router } from 'express';

import LoginController from '../controller/LoginController';

const singinRouter = Router();
const loginUser = new LoginController();

singinRouter.post('/', loginUser.login);

export default singinRouter;
