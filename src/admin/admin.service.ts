import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AdminCreateDTO, AdminLoginDTO } from './dto/admin.dto'
import { Admin } from './entity/admin.entity'
import * as dayjs from 'dayjs'

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
      return '用户名或密码错误'
    }
    return '登录成功'
  }

  async createAdmin(createDto: AdminCreateDTO) {
    const admin = await this.adminRepo.findOne({
      where: { username: createDto.username }
    })
    if (!admin) {
    }
    return this.adminRepo.save({
      ...createDto,
      createAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      updateAt: dayjs().format('YYYY-MM-DD HH:mm:ss')
    })
  }
}
