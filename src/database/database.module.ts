import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/blog',
      entities: [__dirname + '**/entity/*.{ts,js}'],
      autoLoadEntities: true,
      useNewUrlParser: true, // 使用新版mongo连接Url解析格式
      synchronize: true,
      useUnifiedTopology: true
    })
  ]
})
export class DatabaseModule {}
