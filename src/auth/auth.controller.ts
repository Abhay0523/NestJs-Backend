import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from 'src/employee/dto/employee-login.DTO';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Post('login')
    async login(@Body() loginDTO:LoginDTO){
        const{emp_code, dob}= loginDTO;
        return this.authService.login(emp_code,dob);
    }
}







