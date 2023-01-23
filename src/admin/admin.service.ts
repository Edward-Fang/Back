import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { JwtService } from '@nestjs/jwt'
import { AdminCreateDTO, AdminLoginDTO } from './dto/admin.dto'
import { Admin } from './entity/admin.entity'
import * as dayjs from 'dayjs'
import * as argon2 from 'argon2'

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>,
    private jwtService: JwtService
  ) {}

  async register(createDto: AdminCreateDTO) {
    const admin = await this.adminRepo.findOne({
      where: { username: createDto.username }
    })
    if (admin) {
      throw new Error('该用户名已存在')
    }

    //加密用户密码
    const password = await argon2.hash(createDto.password)
    await this.adminRepo.save({
      username: createDto.username,
      password,
      createAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      updateAt: dayjs().format('YYYY-MM-DD HH:mm:ss')
    })
    return true
  }

  async login({ username }: AdminLoginDTO) {
    const user = await this.findOne(username)
    return this.token(user)
  }

  async findOne(username: string) {
    const user = await this.adminRepo.findOne({
      where: { username }
    })
    if (!user) throw new BadRequestException('用户不存在')
    return user
  }

  token({ username, id }: Admin) {
    return {
      token: this.jwtService.sign(
        {
          username,
          id
        },
        {
          secret: '' + process.env.TokenSecret
        }
      )
    }
  }
}
