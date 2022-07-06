import { ObjectType, Field, ID, InputType } from '@nestjs/graphql'
@ObjectType()
export class AdminDTo {
  @Field(() => ID)
  readonly id: any
  readonly username: string
  readonly password: string
  readonly mobile: number
  readonly email: string
  readonly createAt: Date
  readonly updateAt: Date
}

@InputType()
export class AdminLoginDTO {
  readonly username: string
  readonly password: string
}

@InputType()
export class AdminCreateDTO {
  readonly username: string
  readonly password: string
  readonly mobile: number
  readonly email: string
}
