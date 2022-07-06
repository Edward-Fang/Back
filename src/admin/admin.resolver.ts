import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AdminService } from './admin.service'
import { AdminLoginDTO, AdminCreateDTO, AdminDTo } from './dto/admin.dto'

@Resolver()
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Query(() => Boolean)
  async login(@Args('loginDto') loginDto: AdminLoginDTO) {
    return this.adminService.login(loginDto)
  }

  @Mutation(() => AdminDTo)
  async createAdmin(@Args('createDto') createDto: AdminCreateDTO) {
    return this.adminService.createAdmin(createDto)
  }
}
