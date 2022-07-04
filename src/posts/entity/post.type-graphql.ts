import { ObjectType, Field, ID, InputType } from '@nestjs/graphql'

@ObjectType()
export class PostsGraphql {
  @Field(() => ID)
  readonly id: any
  readonly name: string
  readonly title: string
}

@InputType()
export class PostsInsertGraphql {
  @Field(() => ID)
  readonly name: any
  readonly title: string
}

@InputType()
export class PostsInputGraphql {
  @Field(() => ID)
  readonly id: any
  readonly name: string
  readonly title: string
}
