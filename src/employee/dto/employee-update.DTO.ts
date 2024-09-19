import { IsString, IsEmail, IsDate, IsOptional, IsBoolean } from 'class-validator';

export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  emp_code?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  mobile?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsDate()
  DOB?: Date;

  @IsOptional()
  @IsDate()
  date_of_joining?: Date;

  @IsOptional()
  @IsDate()
  date_of_leaving?: Date;

  @IsOptional()
  @IsDate()
  created_date?: Date;

  @IsOptional()
  @IsBoolean()
  created_by?: boolean;
}
