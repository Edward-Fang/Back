import { Query, Mutation, Args, Resolver } from '@nestjs/graphql'
import { PostsDTO } from './dto/post.dto'
import { PostsCreateDTO } from './dto/post-create.dto'
import { PostsUpdateDTO } from './dto/post-update.dto'
import { PaginationQueryDto } from '@/common/dto/pagination-query.dto'
import { PostsService } from './posts.service'

@Resolver('posts')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [PostsDTO])
  async findAll(@Args('pagination') pagination: PaginationQueryDto) {
    return this.postsService.findAll(pagination)
  }

  @Query(() => PostsDTO)
  async findOne(@Args('id') id: string) {
    return this.postsService.findOne(id)
  }

  @Mutation(() => PostsDTO)
  async create(@Args('posts') post: PostsCreateDTO) {
    return this.postsService.create(post)
  }

  @Mutation(() => PostsDTO)
  async update(@Args('id') id: string, @Args('posts') post: PostsUpdateDTO) {
    return this.postsService.update(id, post)
  }

  @Mutation(() => Boolean)
  async delete(@Args('id') id: string) {
    return this.postsService.delete(id)
  }
}
