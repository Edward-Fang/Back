import { Module } from '@nestjs/common'
import { PostsModule } from '@/posts/posts.module'
import { DatabaseModule } from './database/database.module'
import { GraphqlModule } from './graphql/graphql.module'
import { AdminModule } from './admin/admin.module'

@Module({
  imports: [DatabaseModule, GraphqlModule, PostsModule, AdminModule]
})
export class AppModule {}
