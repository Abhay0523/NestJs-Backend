import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee/employee.entity';
import { Punch } from './punch/punch.entity'; 
import { Admin } from './admin/admin.entity'; 
import { EmployeeModule } from './employee/employee.module';
import { PunchModule } from './punch/punch.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Abhay@12345@',
      database: 'nest_crud_db',
      entities: [Employee, Punch, Admin], 
      synchronize: true,
    }),
    EmployeeModule,
    PunchModule, 
    AdminModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
