import { Controller, Post, Body } from '@nestjs/common';
import { LoginDTO } from 'src/employee/dto/employee-login.DTO';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService:AuthService){}


    @Post('login')
async login(@Body() loginDTO: LoginDTO) {
    const { emp_code, dob } = loginDTO;
    const dobDate = new Date(dob);

    const token = await this.AuthService.login(emp_code, dobDate); // This now expects Date
    return { access_token: token.access_token };
}

}
