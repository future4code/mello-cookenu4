import { Request, Response } from 'express';
import HashManager from '../utils/hashManager';
import createUser from '../models/createUser';

class CreateUserController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;
    if (name === '' || email === '' || password === '') {
      return response
        .status(400)
        .json({ error: 'error, mandatory fields, cannot be empty ' });
    }

    if (String(password).length < 6) {
      return response
        .status(400)
        .json({ error: 'error, password must be longer than six characters' });
    }
    const passwordHash = new HashManager();

    const hash = await passwordHash.hash(password);
    console.log(hash);
    const user = new createUser(name, email, hash);
    await user.create(name, email, hash);

    return response
      .status(200)
      .json({ message: 'Usuario cadastrado com sucesso!' });
  }
}

export default CreateUserController;
