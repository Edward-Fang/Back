import { Field, ID, ObjectType, InputType, PartialType } from '@nestjs/graphql'

@ObjectType()
export class PostsDTO {
  @Field(() => ID)
  readonly id: any
  readonly title: string
  readonly author: string
  readonly posterUrl: string
  readonly introduction: string
  readonly content: string
  readonly tag: string
  readonly createAt: Date
  readonly updateAt: Date
  readonly updateAuth?: string
}

@ObjectType({ isAbstract: true })
@InputType()
export class PostsCreateDTO {
  readonly title: string
  readonly author: string
  readonly posterUrl: string
  readonly introduction: string
  readonly content: string
  readonly tag: string
}

@InputType()
export class PostsUpdateDTO extends PartialType(PostsCreateDTO) {
  readonly updateAuth: string
}
