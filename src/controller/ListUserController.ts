import { Request, Response } from 'express';
import Authenticator from '../utils/Authenticator';
import ListUser from '../models/listUser';

class ListUserController {
  async getUser(request: Request, response: Response) {
    const token = request.headers.authorization as string;

    if (!token) {
      return response.status(400).json({
        error: 'Error, access denied',
      });
    }

    const auth = Authenticator.getTokenData(token);

    if (!auth) {
      return response.status(403).json({
        error: 'Error,token invalid',
      });
    }
    const listUser = new ListUser(auth.id);
    const user = await listUser.listUser(auth.id);
    console.log(user);

    response.status(200).json({ user });
  }
}

export default ListUserController;
