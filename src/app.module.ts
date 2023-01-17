import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PostsModule } from './posts/posts.module'
import { DatabaseModule } from './database/database.module'
import { AdminModule } from './admin/admin.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    DatabaseModule,
    PostsModule,
    AdminModule,
    AuthModule,
    ConfigModule.forRoot({
      //全局模块
      isGlobal: true
    })
  ]
})
export class AppModule {}
