import { InputType } from '@nestjs/graphql'
import { PartialType } from '@nestjs/graphql'
import { PostsCreateDTO } from './post-create.dto'

@InputType()
export class PostsUpdateDTO extends PartialType(PostsCreateDTO) {}
