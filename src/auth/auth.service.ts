import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeeService } from '../employee/employee.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => EmployeeService))
        private readonly employeeService: EmployeeService,
        private readonly jwtService: JwtService,
    ) {}

    async login(emp_code: string, dob: Date) {
        const employee = await this.validateEmp(emp_code, dob);
        if (!employee) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { emp_code: employee.emp_code };
        const access_token = this.jwtService.sign(payload);
        return { access_token };
    }

    private async validateEmp(emp_code: string, dob: Date) {
        const employee = await this.employeeService.findOnes(emp_code);
        if (employee && new Date(employee.DOB).getTime() === dob.getTime()) {
            return employee;
        }
        return null; 
    }
}
