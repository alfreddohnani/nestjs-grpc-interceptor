import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

@Injectable()
export class ProductInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('GETS CALLED');
    const meta = context.switchToRpc().getContext<Metadata>();

    // access the metadata as an object by calling getMap
    console.log(meta.getMap());

    // You can modify, add and remove metadata here in the interceptor which
    // The metadata will be passed to the next handler(ProductController)
    meta.add('Set-Cookie', 'yummy_cookie=choco');

    return next.handle();
  }
}
