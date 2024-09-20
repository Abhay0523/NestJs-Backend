import { Body, Controller, Post, Put, Param, Get, UnauthorizedException } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/employee-createDTO';
import { UpdateEmployeeDto } from './dto/employee-update.DTO';
import { LoginDTO } from './dto/employee-login.DTO';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

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

  @Post('employee-login')
  async employeeLogin(@Body() employeeLoginDto: LoginDTO) {
    const { emp_code, dob } = employeeLoginDto;
    const employee = await this.employeeService.findOnes(emp_code);
  
    if (employee && employee.DOB === dob) {
      // console.log(employee);
      return { message: 'Login successful', employee };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
  

}