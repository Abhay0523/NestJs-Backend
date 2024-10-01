import { Controller, Post, Get, Request, UseGuards, Param, Req } from '@nestjs/common';
import { PunchService } from './punch.service';
import { Punch } from './punch.entity';
import { JwtAuthGuard } from '../auth/JwtAuthGuard';

@Controller('punch')
export class PunchController {
  constructor(private readonly punchService: PunchService) {}

  @UseGuards(JwtAuthGuard)
  @Post('in')
  punchIn(@Request() req): Promise<Punch> {
   
    const emp_code = req.user.emp_code;
    console.log(req);
     
    return this.punchService.punchIn(emp_code);
  }

  @UseGuards(JwtAuthGuard)
  @Post('out')
  punchOut(@Request() req): Promise<Punch> {
    
    const emp_code = req.user.emp_code;
    return this.punchService.punchOut(emp_code);
  }

  @Get()
  findAll(): Promise<Punch[]> {
    return this.punchService.findAllPunches();
  }

  // @UseGuards(JwtAuthGuard)
  @Get("emp/:emp_code")
  findbyID(@Param('emp_code') emp_code: string): Promise<Punch[]> {
    return this.punchService.findOnes(emp_code);
  }

}
