import { Query, Mutation, Args, Resolver } from '@nestjs/graphql'
import { PostsDTO, PostsCreateDTO, PostsUpdateDTO } from './dto/post.dto'
import { PostsService } from './posts.service'
import { awaitWrap } from '@/utils'

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
  async create(@Args('posts') posts: PostsCreateDTO) {
    return this.postsService.create({ ...posts })
  }

  @Mutation(() => PostsDTO)
  async update(@Args('posts') posts: PostsUpdateDTO) {
    const [err] = await awaitWrap(this.postsService.update(posts))
    if (err) {
      return posts
    }
    return this.postsService.findOne(posts.id)
  }

  @Mutation(() => Boolean)
  async delete(@Args('id') id: string) {
    const [err] = await awaitWrap(this.postsService.delete(id))
    if (err) {
      return false
    }
    return true
  }
}
