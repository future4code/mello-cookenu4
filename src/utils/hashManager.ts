import * as bcrypt from 'bcryptjs';

class HashManager {
  async hash(text: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = bcrypt.hash(text, salt);
    return result;
  }

  async compare(text: string, cypherText: string) {
    const result = await bcrypt.compare(text, cypherText);
    return result;
  }
}

export default HashManager;
