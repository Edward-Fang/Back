import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Posts } from './entity/post.entity'
import { PostsService } from './posts.service'
import { PostsController } from './posts.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}
