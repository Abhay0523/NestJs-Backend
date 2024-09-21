import { Body, Controller, Post, Put, Param, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/employee-createDTO';
import { UpdateEmployeeDto } from './dto/employee-update.DTO';
import { LoginDTO } from './dto/employee-login.DTO';
import { AuthService } from '../auth/auth.service';

@Controller('employees')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Put(':emp_code')
  update(@Param('emp_code') emp_code: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.updates(emp_code, updateEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':emp_code')
  findOne(@Param('emp_code') emp_code: string) {
    return this.employeeService.findOnes(emp_code);
  }

  @Post('login')
    async employeeLogin(@Body() loginDTO: LoginDTO) {
        const { emp_code, dob } = loginDTO;
        const dobDate = new Date(dob); // Convert to Date

        const token = await this.authService.login(emp_code, dobDate);
        return { access_token: token.access_token };
    }
}
