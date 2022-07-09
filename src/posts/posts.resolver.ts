import { Query, Mutation, Args, Resolver } from '@nestjs/graphql'
import { PostsDTO, PostsCreateDTO, PostsUpdateDTO } from './dto/post.dto'
import { PaginationQueryDto } from '../common/dto/pagination-query.dto'
import { PostsService } from './posts.service'

@Resolver('posts')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [PostsDTO])
  async findAllPosts(@Args('pagination') pagination: PaginationQueryDto) {
    return this.postsService.findAllPosts(pagination)
  }

  @Query(() => [PostsDTO])
  async findPostsByTag(@Args('tag') tag: string) {
    return this.postsService.findPostsByTag(tag)
  }

  @Query(() => PostsDTO)
  async findOnePost(@Args('id') id: string) {
    return this.postsService.findOnePost(id)
  }

  @Mutation(() => PostsDTO)
  async createPost(@Args('posts') post: PostsCreateDTO) {
    return this.postsService.createPost(post)
  }

  @Mutation(() => PostsDTO)
  async updatePost(
    @Args('id') id: string,
    @Args('posts') post: PostsUpdateDTO
  ) {
    return this.postsService.updatePost(id, post)
  }

  @Mutation(() => Boolean)
  async deletePost(@Args('id') id: string) {
    return this.postsService.deletePost(id)
  }
}
