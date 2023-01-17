import { Module } from '@nestjs/common'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PassportModule } from '@nestjs/passport'
import { AdminController } from './admin.controller'
import { AdminService } from './admin.service'
import { Admin } from './entity/admin.entity'
import { AuthService } from '../auth/auth.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
    PassportModule,
    JwtModule.register({
      //设置加密使用的 secret
      secret: process.env.TokenSecret,
      //过期时间
      signOptions: { expiresIn: '6h' }
    })
  ],
  providers: [AdminService, JwtService, AuthService],
  controllers: [AdminController],
  exports: [AdminService]
})
export class AdminModule {}
