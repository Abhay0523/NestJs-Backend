import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface'; 
import { EmployeeService } from '../employee/employee.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly employeeService: EmployeeService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '$3cr3@+|<3y',
    });
  }

  async validate(payload: JwtPayload) {
    const employee = await this.employeeService.findOnes(payload.emp_code);
    if (!employee) {
      throw new UnauthorizedException('Invalid token');
    }
    return { emp_code: payload.emp_code, name: payload.name };
  }
}
