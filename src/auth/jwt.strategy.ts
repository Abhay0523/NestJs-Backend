import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface'; // Adjust the import based on your file structure

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '$3cr3@+|<3y', // Make sure this matches the secret used to sign the token
    });
  }

  async validate(payload: JwtPayload) {
    // Implement your user validation logic here
    return { emp_code: payload.emp_code, name: payload.name }; // Or return the user entity
  }
}
