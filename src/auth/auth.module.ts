import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EmployeeModule } from '../employee/employee.module';
import { JwtStrategy } from './jwt.strategy'; 
import { PassportModule } from '@nestjs/passport'; 

@Module({
  imports: [
    PassportModule, 
    JwtModule.register({
      secret: '$3cr3@+|<3y', 
      signOptions: { expiresIn: '300s' }, 
    }),
    forwardRef(() => EmployeeModule), 
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
