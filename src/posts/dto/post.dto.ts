import { PartialType } from '@nestjs/swagger'

export class PostsDTO {
  readonly id: any
  readonly title: string
  readonly author: string
  readonly posterUrl: string
  readonly introduction: string
  readonly content: string
  readonly tag: string
  readonly createAt: string
  readonly updateAt: string
  readonly updateAuth: string
}

export class PostsCreateDTO {
  readonly title: string
  readonly author: string
  readonly posterUrl: string
  readonly introduction: string
  readonly content: string
  readonly tag: string
}

export class PostsUpdateDTO extends PartialType(PostsCreateDTO) {
  readonly updateAuth: string
}
