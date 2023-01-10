import { IsNotEmpty, IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class AdminDTO {
  readonly id: any
  readonly username: string
  readonly password: string
  readonly mobile: string
  readonly email: string
  readonly createAt: string
  readonly updateAt: string
}

export class AdminLoginDTO {
  readonly username: string
  readonly password: string
}

export class AdminCreateDTO {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(4, 8, { message: '密码的长度不能小于4不能大于8' })
  readonly username: string

  @IsNotEmpty({ message: '密码不能为空' })
  @Length(4, 8, { message: '密码的长度不能小于4不能大于8' })
  readonly password: string

  @IsOptional()
  readonly mobile: string

  @IsOptional()
  readonly email: string
}
