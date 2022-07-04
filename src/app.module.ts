import { Module } from '@nestjs/common'
import { PostsModule } from '@/posts/posts.module'
import { DatabaseModule } from './database/database.module'
import { GraphqlModule } from './graphql/graphql.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [DatabaseModule, GraphqlModule, PostsModule, AuthModule]
})
export class AppModule {}
