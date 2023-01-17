import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { AllExceptionFilter } from './common/filters/all-exception.filter'
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor'
import { TransformInterceptor } from './common/interceptors/transform.interceptor'

declare const module: any
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app
    .useGlobalPipes(new ValidationPipe())
    .useGlobalFilters(new AllExceptionFilter())
    .useGlobalInterceptors(new TimeoutInterceptor())
    .useGlobalInterceptors(new TransformInterceptor())
  // .enableCors()

  await app.listen(5000)
  console.log('服务已启动在http://localhost:5000')
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
