import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';

type GrpcFunction<Req = unknown, Res = unknown> = (
  req: Req,
  metadata?: Metadata,
  options?: GrpcServiceMethodsOptions,
) => Promise<Res>;

export type GrpcServiceMethods<T> = {
  [K in keyof T]: T[K] extends (req: infer Req) => Observable<infer Res>
    ? GrpcFunction<Req, Res>
    : never;
};

export interface GrpcServiceMethodsOptions {
  includeRecieved?: boolean;
  systemPermission?: boolean;
}
