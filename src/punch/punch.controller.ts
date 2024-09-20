import { Controller, Post, Param, Get } from '@nestjs/common';
import { PunchService } from './punch.service';
import { Punch } from './punch.entity';

@Controller('punch')
export class PunchController {
  constructor(private readonly punchService: PunchService) { }

  @Post('in/:emp_code')
  punchIn(@Param('emp_code') emp_code: string): Promise<Punch> {
    return this.punchService.punchIn(emp_code);
  }

  @Post('out/:emp_code')
  punchOut(@Param('emp_code') emp_code: string): Promise<Punch> {
    return this.punchService.punchOut(emp_code);
  }

  @Get()
  findAll(): Promise<Punch[]> {
    return this.punchService.findAllPunches();
  }

  




}
