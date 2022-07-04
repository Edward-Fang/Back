import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'blog',
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      useNewUrlParser: true, // 使用新版mongo连接Url解析格式
      synchronize: true //自动同步数据库生成entity
    })
  ]
})
export class DatabaseModule {}
