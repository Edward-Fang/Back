import { Module } from '@nestjs/common'

import { PostsModule } from './posts/posts.module'
import { AuthModule } from './auth/auth.module'
import { DatabaseModule } from './database/database.module'
import { GraphqlModule } from './graphql/graphql.module'

@Module({
  imports: [PostsModule, AuthModule, DatabaseModule, GraphqlModule],
  controllers: [],
  providers: []
})
export class AppModule {}
