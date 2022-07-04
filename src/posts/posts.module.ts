import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Posts } from './entity/post.entity'
import { PostsService } from './posts.service'
import { PostsResolver } from './posts.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  providers: [PostsResolver, PostsService]
})
export class PostsModule {}
