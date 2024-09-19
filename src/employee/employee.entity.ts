import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  emp_code: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  mobile: string;

  @Column()
  name: string;

  @Column({ type:'date' })
  DOB: Date;

  @Column({ type: 'date' })
  date_of_joining: Date;

  @Column({ type: 'date', nullable: true })
  date_of_leaving: Date;

  @Column({ type: 'date' })
  created_date: Date;

  @Column({ type: 'boolean' })
  created_by: boolean;
}
