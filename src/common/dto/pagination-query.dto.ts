import { ObjectType, InputType } from '@nestjs/graphql'

@ObjectType()
@InputType()
export class PaginationQueryDto {
  limit: number
  offset: number
}
