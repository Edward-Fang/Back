import { Injectable } from '@nestjs/common'
import { AdminService } from '../admin/admin.service'
import { AdminLoginDTO } from '../admin/dto/admin.dto'
import * as argon2 from 'argon2'

@Injectable()
export class AuthService {
  constructor(private adminService: AdminService) {}
  // 验证用户有效性，在local策略中用到
  async validateUser({ username, password }: AdminLoginDTO): Promise<any> {
    const user = await this.adminService.findOne(username)
    const psMatch = await argon2.verify(user.password, password)
    if (!psMatch) return null
    return user
  }
}
