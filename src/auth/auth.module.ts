import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from './auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'
import { AdminModule } from '../admin/admin.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './strategies/local.strategy'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Admin } from '../admin/entity/admin.entity'

@Module({
  imports: [
    AdminModule,
    PassportModule,
    JwtModule.register({
      //设置加密使用的 secret
      secret: process.env.TokenSecret,
      //过期时间
      signOptions: { expiresIn: '6h' }
    }),
    TypeOrmModule.forFeature([Admin])
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy]
})
export class AuthModule {}
