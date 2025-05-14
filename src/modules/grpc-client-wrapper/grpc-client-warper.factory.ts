/* eslint-disable @typescript-eslint/no-explicit-any */

import { ClientGrpc } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { GrpcClientWrapper } from './grpc-client-warper.service';

const isGrpcRequest = (req: any): boolean => {
  return req && typeof req.getMap == 'function';
};

export function createGrpcWarpperFactory<T extends object>(
  serviceName: string,
): (...args: any[]) => GrpcClientWrapper<T> {
  return (request: any, client: ClientGrpc) => {
    const service = client.getService<T>(serviceName);
    const wrapper = new GrpcClientWrapper(service);
    if (isGrpcRequest(request)) {
      wrapper.setMetadata(request.context);
    }
    request.grpcWrapper = request.grpcWrapper || {};
    request.grpcWrapper[serviceName] = wrapper;

    return wrapper;
  };
}

export const GetGrpcWrapperToken = (service: string) => `${service}_WRAPPER`;
export const InjectWrapper = (service: string): PropertyDecorator & ParameterDecorator => Inject(GetGrpcWrapperToken(service));
