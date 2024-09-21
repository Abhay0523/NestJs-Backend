import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { EmployeeModule } from '../employee/employee.module';

@Module({
    imports: [
        EmployeeModule,
        JwtModule.register({
            secret: 'Secret',
            signOptions: { expiresIn: '600s' },
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService], // Export AuthService if used in other modules
})
export class AuthModule {}
