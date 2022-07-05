import { InputType } from '@nestjs/graphql'

@InputType()
export class PostsCreateDTO {
  readonly title: string
  readonly author: string
  readonly posterUrl: string
  readonly content: string
  readonly tags: string
  readonly isPublic: boolean
}
