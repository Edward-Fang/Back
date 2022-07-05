import { InputType } from '@nestjs/graphql'

@InputType()
export class PaginationQueryDto {
  limit: number
  offset: number
}
