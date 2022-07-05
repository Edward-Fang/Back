import { Query, Mutation, Args, Resolver } from '@nestjs/graphql'
import { PostsDTO, PostsCreateDTO, PostsUpdateDTO } from './dto/post.dto'
import { PostsService } from './posts.service'

@Resolver('posts')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [PostsDTO])
  async findAll() {
    return this.postsService.findAll()
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
