import { Injectable } from '@nestjs/common';
import {InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/employee-createDTO';
import { UpdateEmployeeDto } from './dto/employee-update.DTO'; 


@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  
  ) {}

  async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(employee); 
  }

  async findAll() {
    // return this.employeeRepository.find();

    const result= await this.employeeRepository.createQueryBuilder('employee').getMany();  //CreateQueryBuilder 
    console.log("All Employees Are", result);
    return result;
  }

  async updates(emp_code: string, employeeUpdateDto: UpdateEmployeeDto) {
    await this.employeeRepository.update({ emp_code }, employeeUpdateDto);
    return ("Employee Updated Successfully:Backend Code")
  }

  async findOnes(emp_code: string): Promise<Employee> {
    return this.employeeRepository.findOne({ where: { emp_code } });
  }
  async RawQuery(): Promise<any[]> {
    const result = await this.employeeRepository.createQueryBuilder('employee')
    .select(['employee.email'])
    .getMany();
    console.log(result);
    return result;
  }
  
  
 
}
