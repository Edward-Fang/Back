import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AdminCreateDTO, AdminLoginDTO } from './dto/admin.dto'
import { Admin } from './entity/admin.entity'

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>
  ) {}

  async login(loginDto: AdminLoginDTO) {
    const admin = await this.adminRepo.findOne({
      where: { username: loginDto.username }
    })
    if (!admin) {
      throw new NotFoundException()
    }
    if (loginDto.password !== admin.password) {
      return false
    }
    return true
  }

  async createAdmin(createDto: AdminCreateDTO) {
    return this.adminRepo.save({
      ...createDto,
      createAt: new Date(),
      updateAt: new Date()
    })
  }
}
