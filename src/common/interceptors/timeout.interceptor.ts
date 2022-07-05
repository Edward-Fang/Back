import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  RequestTimeoutException
} from '@nestjs/common'
import { catchError, Observable, timeout, TimeoutError } from 'rxjs'

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      timeout(3000),
      catchError(e => {
        if (e instanceof TimeoutError) throw new RequestTimeoutException()
        throw e
      })
    )
  }
}
