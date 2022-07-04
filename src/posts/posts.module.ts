import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostsResolver } from './posts.resolver'
import { PostsService } from './posts.service'
import { Posts } from './entity/post.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  providers: [PostsResolver, PostsService]
})
export class PostsModule {}
