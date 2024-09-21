import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { AuthModule } from '../auth/auth.module'; // Import AuthModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]),
    forwardRef(() => AuthModule), // Use forwardRef to avoid circular dependency
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController],
  exports: [EmployeeService], // Export EmployeeService to be used in AuthModule
})
export class EmployeeModule {}
