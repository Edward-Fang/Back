import { ObjectType, Field, ID, InputType } from '@nestjs/graphql'
@ObjectType()
export class UserDTO {
  @Field(() => ID)
  readonly id: any
}

@InputType()
export class UserLoginDTO {}
