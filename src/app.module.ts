import { Module } from '@nestjs/common'
import { PostsModule } from './posts/posts.module'
import { DatabaseModule } from './database/database.module'
import { AdminModule } from './admin/admin.module'

@Module({
  imports: [DatabaseModule, PostsModule, AdminModule]
})
export class AppModule {}
