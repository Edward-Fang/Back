import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
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
  const options = new DocumentBuilder()
    .setTitle('博客系统')
    .setDescription('博客系统接口文档')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('swagger', app, document)
  await app.listen(5000)
  console.log('服务已启动在http://localhost:5000')
  console.log('接口文档在http://localhost:5000/swagger')

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
