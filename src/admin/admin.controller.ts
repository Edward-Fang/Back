import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { AdminService } from './admin.service'
import { AdminLoginDTO, AdminCreateDTO, AdminDTO } from './dto/admin.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('admin')
@UsePipes(ValidationPipe)
@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  async login(@Body() loginDto: AdminLoginDTO): Promise<string> {
    return await this.adminService.login(loginDto)
  }

  @Post('createAdmin')
  async createAdmin(
    @Body('createDto') createDto: AdminCreateDTO
  ): Promise<AdminDTO> {
    return await this.adminService.createAdmin(createDto)
  }
}
