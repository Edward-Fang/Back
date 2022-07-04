import { Module } from '@nestjs/common'
import { join } from 'path'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'blog',
      entities: [join(__dirname, '**/entity/*.{ts,js}')],
      useNewUrlParser: true,
      synchronize: true
    })
  ]
})
export class DatabaseModule {}
