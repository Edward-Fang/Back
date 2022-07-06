import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/app.module'
import { ValidationPipe } from '@nestjs/common'
import { HttpExceptionFilter } from '@/common/filters/http-exception.filter'
import { TimeoutInterceptor } from '@/common/interceptors/timeout.interceptor'

declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app
    .useGlobalPipes(new ValidationPipe())
    // .useGlobalFilters(new HttpExceptionFilter())
    .useGlobalInterceptors(new TimeoutInterceptor())
  await app.listen(3000)
  console.log('服务已启动在http://localhost:3000')
  console.log('GraphQL Playground 已启动在http://localhost:3000/graphql')

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
