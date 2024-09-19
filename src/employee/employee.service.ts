import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/employee-createDTO';
import { UpdateEmployeeDto } from './dto/employee-update.DTO'; 

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(employee); 
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async updates(emp_code: string, employeeUpdateDto: UpdateEmployeeDto): Promise<Employee> {
    await this.employeeRepository.update({ emp_code }, employeeUpdateDto);
    return this.employeeRepository.findOne({ where: { emp_code } });
  }

  async findOnes(emp_code: string): Promise<Employee> {
    return this.employeeRepository.findOne({ where: { emp_code } });
  }
}
