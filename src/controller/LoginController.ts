import { Request, Response } from 'express';
import Authenticator from '../utils/Authenticator';
import LoginUser from '../models/SignIn';

class LoginController {
  async login(request: Request, response: Response) {
    const { email, password } = request.body;

    if (email === '' || password === '') {
      return response.status(400).json({
        error: 'Error, fields cannot be empty',
      });
    }

    const loginUser = await new LoginUser(email, password);
    const user = loginUser.login(email, password);

    if (!user) {
      return response.status(403).json({
        error: 'Access Denied',
      });
    } else {
      const token = Authenticator.generateToken({
        id: String(user),
      });
      response.status(200).json({
        message: token,
      });
    }
  }
}

export default LoginController;
