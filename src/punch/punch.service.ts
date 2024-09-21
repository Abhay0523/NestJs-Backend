import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Punch } from './punch.entity';
import { Employee } from '../employee/employee.entity';

@Injectable()
export class PunchService {
  constructor(
    @InjectRepository(Punch)
    private punchRepository: Repository<Punch>,
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) { }


  async punchIn(emp_code: string): Promise<Punch> {
    const employee = await this.employeeRepository.findOne({ where: { emp_code } });

    if (!employee) {
      throw new NotFoundException(`Employee with emp_code ${emp_code} not found`);
    }

    const punch = new Punch();
    punch.emp = employee;


    const utcDate = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(utcDate.getTime() + istOffset);

    punch.punch_in_time = istDate;

    return this.punchRepository.save(punch);
  }

  async punchOut(emp_code: string): Promise<Punch> {
    const employee = await this.employeeRepository.findOne({ where: { emp_code } });
    if (!employee) {
      throw new NotFoundException(`Employee with emp_code ${emp_code} not found`);
    }
    const lastPunch = await this.punchRepository.findOne({
      where: { emp: employee, punch_out_time: null },
      order: { punch_in_time: 'DESC' },
    });
    if (!lastPunch) {
      throw new NotFoundException(`No punch-in record found for employee ${emp_code}`);
    }
    const utcDate = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    lastPunch.punch_out_time = new Date(utcDate.getTime() + istOffset);

    return this.punchRepository.save(lastPunch);
  }



  async findAllPunches(): Promise<Punch[]> {
    return this.punchRepository.find({ relations: ['emp'] });
  }



}
