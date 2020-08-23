import * as jwt from 'jsonwebtoken';

interface AuthenticationData {
  id: string;
}

export default abstract class Authenticator {
  static generateToken(input: AuthenticationData): string {
    return jwt.sign(input, process.env.JWT_KEY as string, {
      expiresIn: process.env.ACESS_TOKEN_EXPIRES_IN,
    });
  }

  static getTokenData(token: string): AuthenticationData {
    const tokenData = jwt.verify(token, process.env.JWT_KEY as string);

    return tokenData as AuthenticationData;
  }
}
