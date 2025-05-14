/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class GrpcMetadataInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    //   const rpcContext = context.switchToRpc();
    //   const metadata = rpcContext.getContext<Metadata>();

    // // Get the wrapper instance from the request scope
    // const wrapper = context.switchToRpc().getContext<Metadata>();
    // if (wrapper) {
    //   wrapper.merge(metadata);
    // }

    return next.handle();
  }
}
