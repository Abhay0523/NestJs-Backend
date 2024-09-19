import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Punch } from './punch.entity';
import { Employee } from '../employee/employee.entity';
import { PunchService } from './punch.service';
import { PunchController } from './punch.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Punch, Employee])],
  providers: [PunchService],
  controllers: [PunchController],
})
export class PunchModule {}
