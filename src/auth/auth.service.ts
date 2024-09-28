import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeeService } from '../employee/employee.service';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, 
    private readonly employeeService: EmployeeService,
  ) {}

  async login(emp_code: string, dob: Date): Promise<any> {
    const employee = await this.employeeService.findOnes(emp_code);

    if(!employee){
      throw new UnauthorizedException(`Employee with ${emp_code} is not Found`);
    }

    if (employee && employee.DOB === dob) {
      const payload: JwtPayload = { emp_code: employee.emp_code, name: employee.name };
      const token = this.jwtService.sign(payload);
      
      return { token, employee };
    }
  
    throw new UnauthorizedException('Invalid credentials');
  }
}
