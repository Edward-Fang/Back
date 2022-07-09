import { ObjectType, Field, ID, InputType, PartialType } from '@nestjs/graphql'
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

@ObjectType({ isAbstract: true })
@InputType()
export class AdminLoginDTO {
  readonly username: string
  readonly password: string
}

@InputType()
export class AdminCreateDTO extends PartialType(AdminLoginDTO) {
  readonly mobile: number
  readonly email: string
}
