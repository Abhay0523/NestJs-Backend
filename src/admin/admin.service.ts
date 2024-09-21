import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { CreateAdminDto } from './dto/admin-create.DTO';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  // async createAdmin(createAdminDto: CreateAdminDto): Promise<Admin> {
  //   const admin = this.adminRepository.create(createAdminDto);
  //   return this.adminRepository.save(admin);
  // }

  

 
}
