import { connection } from '../kenexfile';
import { v4 } from 'uuid';

class UserCreate {
  id: string;
  nome: string;
  senha: any;
  email: string;

  constructor(nome: string, email: string, senha: any) {
    this.id = v4();
    this.nome = nome;
    this.senha = senha;
    this.email = email;
  }

  async create(nome: string, email: string, senha: any): Promise<any> {
    const id: string = v4();
    const result = await connection('usuario').insert({
      id,
      nome,
      email,
      senha,
    });
    return result;
  }
}

export default UserCreate;
