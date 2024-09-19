import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from '../employee/employee.entity';

@Entity()
export class Punch {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.emp_code, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'emp_id', referencedColumnName: 'emp_code' }) 
  emp: Employee;

  @Column({ type: 'timestamp' })
  punch_in_time: Date;

  @Column({ type: 'timestamp', nullable: true })
  punch_out_time: Date;
}
