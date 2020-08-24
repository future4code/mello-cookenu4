import { connection } from '../kenexfile';

class ListUser {
  constructor(public id: string) {
    this.id = id;
  }

  async listUser(id: string): Promise<any> {
    const result = await connection('usuario')
      .select('id', 'nome', 'email')
      .where({ id })
      .first();
    return result;
  }
}

export default ListUser;
