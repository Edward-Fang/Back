import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { Request } from 'express'
import { Auth } from '../common/decorator/auth.decorator'
import { LocalAuthGuard } from '../auth/guards/local-auth.guard'
import { AdminService } from './admin.service'
import { AdminLoginDTO, AdminCreateDTO } from './dto/admin.dto'

@UsePipes(ValidationPipe)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('register')
  async createAdmin(@Body() createDto: AdminCreateDTO): Promise<boolean> {
    return await this.adminService.register(createDto)
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: AdminLoginDTO): Promise<any> {
    return await this.adminService.login(loginDto)
  }

  // 查询个人信息
  @Auth()
  @Get('profile')
  // 使用Passport后，会将解析后的token信息挂载到req.user上
  profile(@Req() req: Request) {
    return req.user
  }
}
