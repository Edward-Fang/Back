import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PostsService } from './posts.service'
import {
  PostsGraphql,
  PostsInsertGraphql,
  PostsInputGraphql
} from './entity/post.type-graphql'

// 包装Promise返回,使得async/await可以更方便写成同步语法的形式
function awaitWrap<T, U = any>(
  promise: Promise<T>
): Promise<[U | null, T | null]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, null]>(err => [err, null])
}

@Resolver('posts')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [PostsGraphql])
  async findAll() {
    return this.postsService.findAll()
  }

  @Query(() => PostsGraphql)
  async findOne(@Args('id') id: string) {
    return this.postsService.findOne(id)
  }

  @Mutation(() => PostsGraphql)
  async create(@Args('post') post: PostsInsertGraphql) {
    return this.postsService.create(post)
  }

  @Mutation(() => PostsGraphql)
  async update(@Args('id') id: string, @Args('post') post: PostsInputGraphql) {
    const [err] = await awaitWrap(this.postsService.update(id, post))
    if (err) return err
    return this.postsService.findOne(id)
  }

  @Mutation(() => Boolean)
  async delete(@Args('id') id: string) {
    const [err] = await awaitWrap(this.postsService.delete(id))
    if (err) return err
    return true
  }
}
