import { IsString, IsEmail, IsDate, IsOptional, IsBoolean } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  emp_code: string;

  @IsEmail()
  email: string;

  @IsString()
  mobile: string;

  @IsString()
  name: string;

  @IsDate()
  DOB: Date;

  @IsDate()
  date_of_joining: Date;

  @IsOptional()
  @IsDate()
  date_of_leaving?: Date;

  @IsDate()
  created_date: Date;

  @IsBoolean()
  created_by: boolean;
}
