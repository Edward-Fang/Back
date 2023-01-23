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
import { Auth } from '../common/decorator/auth.decorator'

@UsePipes(ValidationPipe)
@Controller('post')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('findAll')
  findAllPosts(@Query() paginationDto: PaginationQueryDto) {
    return this.postsService.findAllPosts(paginationDto)
  }

  @Get('findByTag')
  findPostsByTag(@Query() tag: string) {
    return this.postsService.findPostsByTag(tag)
  }

  @Get('findById/:id')
  findOnePost(@Param('id') id: string) {
    return this.postsService.findOnePost(id)
  }

  @Auth()
  @Get('adminFindAll')
  adminGetAll(@Query() paginationDto: PaginationQueryDto) {
    return this.postsService.adminFindAll(paginationDto)
  }

  @Auth()
  @Post('createPost')
  createPost(@Body() createDto: PostsCreateDTO) {
    return this.postsService.createPost(createDto)
  }

  @Auth()
  @Patch('updatePost')
  updatePost(@Query('id') id: string, @Body() updateDto: PostsUpdateDTO) {
    return this.postsService.updatePost(id, updateDto)
  }

  @Auth()
  @Delete(':id')
  deletePost(@Query('id') id: string) {
    return this.postsService.deletePost(id)
  }
}
