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

@ApiTags('post')
@UsePipes(ValidationPipe)
@Controller('post')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('findAll')
  async findAllPosts(@Query() pagination: PaginationQueryDto) {
    return this.postsService.findAllPosts(pagination)
  }

  @Get('findByTag')
  async findPostsByTag(@Query('tag') tag: string) {
    return this.postsService.findPostsByTag(tag)
  }

  @Get('findById/:id')
  async findOnePost(@Param('id') id: string) {
    return this.postsService.findOnePost(id)
  }

  @Post('createPost')
  async createPost(@Body() createDto: PostsCreateDTO) {
    return this.postsService.createPost(createDto)
  }

  @Patch('updatePost')
  async updatePost(@Query('id') id: string, @Body() updateDto: PostsUpdateDTO) {
    return this.postsService.updatePost(id, updateDto)
  }

  @Delete(':id')
  async deletePost(@Query('id') id: string) {
    return this.postsService.deletePost(id)
  }
}
