import {
  Body,
  Controller,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  Patch,
  Delete,
  Query,
  Param
} from '@nestjs/common'
import { PostsCreateDTO, PostsUpdateDTO } from './dto/post.dto'
import { PaginationQueryDto } from '../common/dto/pagination-query.dto'
import { PostsService } from './posts.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('posts')
@UsePipes(ValidationPipe)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('findAll')
  async findAllPosts(@Query() pagination: PaginationQueryDto) {
    return this.postsService.findAllPosts(pagination)
  }

  @Get('findByTag')
  async findPostsByTag(@Param('tag') tag: string) {
    return this.postsService.findPostsByTag(tag)
  }

  @Get(':id')
  async findOnePost(@Param('id') id: string) {
    return this.postsService.findOnePost(id)
  }

  @Post('createPost')
  async createPost(@Body('posts') post: PostsCreateDTO) {
    return this.postsService.createPost(post)
  }

  @Patch('updatePost')
  async updatePost(
    @Query('id') id: string,
    @Body('posts') post: PostsUpdateDTO
  ) {
    return this.postsService.updatePost(id, post)
  }

  @Delete(':id')
  async deletePost(@Query('id') id: string) {
    return this.postsService.deletePost(id)
  }
}
