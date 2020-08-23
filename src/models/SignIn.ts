import { connection } from '../kenexfile';

class UserCreate {
  senha: any;
  email: string;

  constructor(email: string, senha: any) {
    this.senha = senha;
    this.email = email;
  }

  async login(email: string, senha: any): Promise<any> {
    const result = await connection('usuario')
      .where({ email: email, senha: senha })
      .first();
    return result;
  }
}

export default UserCreate;
