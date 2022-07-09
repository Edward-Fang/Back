import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://root:12345@114.55.33.114:27017/blog?authSource=admin',
      entities: [__dirname + '**/entity/*.{ts,js}'],
      autoLoadEntities: true,
      useNewUrlParser: true, // 使用新版mongo连接Url解析格式
      synchronize: true
    })
  ]
})
export class DatabaseModule {}
