import { ObjectType, Field, ID, InputType } from '@nestjs/graphql'
@ObjectType()
export class PostsDTO {
  @Field(() => ID)
  readonly id: any
  readonly name: string
  readonly price?: number
  readonly count?: number
  readonly remark?: string
}

@InputType()
export class PostsCreateDTO {
  readonly name: string
  readonly price?: number
  readonly count?: number
  readonly remark?: string
}

@InputType()
export class PostsUpdateDTO {
  @Field(() => ID)
  readonly id: any
  readonly name: string
  readonly price?: number
  readonly count?: number
  readonly remark?: string
}
