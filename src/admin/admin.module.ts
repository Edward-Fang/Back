import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AdminResolver } from './admin.resolver'
import { AdminService } from './admin.service'
import { Users } from './entity/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [AdminResolver, AdminService]
})
export class AdminModule {}
