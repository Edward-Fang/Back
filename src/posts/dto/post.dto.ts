import { ObjectType, Field, ID, InputType } from '@nestjs/graphql'
@ObjectType()
export class PostsDTO {
  @Field(() => ID)
  readonly id: any
  readonly title: string
  readonly author: string
  readonly posterUrl: string
  readonly content: string
  readonly tags: string
  readonly isPublic: boolean
  readonly createAt: Date
  readonly updateAt: Date
}

@InputType()
export class PostsCreateDTO {
  readonly title: string
  readonly author: string
  readonly posterUrl: string
  readonly content: string
  readonly tags: string
  readonly isPublic: boolean
  readonly createAt: Date
  readonly updateAt: Date
}

@InputType()
export class PostsUpdateDTO {
  readonly title?: string
  readonly author?: string
  readonly posterUrl?: string
  readonly content?: string
  readonly tags?: string
  readonly isPublic?: boolean
  readonly createAt?: Date
  readonly updateAt: Date
}
