import { DynamicModule, Module, Provider, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
// import { GrpcMetadataInterceptor } from './grpcContext.interceptor';
import {
  ClientsModule,
  ClientsModuleAsyncOptions,
  ClientsModuleOptions,
} from '@nestjs/microservices';
import {
  createGrpcWarpperFactory,
  GetGrpcWrapperToken,
} from './grpc-client-warper.factory';

@Module({})
export class GrpcClientModule {
  private static buildProviders(services: string[]): Provider[] {
    const providers: Provider[] = [];
    for (const service of services) {
      const token = GetGrpcWrapperToken(service);
      providers.push({
        provide: token,
        useFactory: createGrpcWarpperFactory(service),
        scope: Scope.REQUEST,
        inject: [REQUEST, service],
      });
    }
    return providers;
  }

  static register(options: ClientsModuleOptions): DynamicModule {
    let services: string[];
    if (Array.isArray(options))
      services = options.map((a) => a.name.toString());
    else services = options.clients.map((c) => c.name.toString());

    const isGlobal = !Array.isArray(options) && options.isGlobal;
    
    return {
      module: GrpcClientModule,
      global: isGlobal,
      imports: [ClientsModule.register(options)],
      providers: this.buildProviders(services),
      exports: [...services.map((s) => GetGrpcWrapperToken(s))],
    };
  }

  static registerAsync(options: ClientsModuleAsyncOptions): DynamicModule {
    let services: string[];
    if (Array.isArray(options))
      services = options.map((a) => a.name.toString());
    else services = options.clients.map((c) => c.name.toString());

    const isGlobal = !Array.isArray(options) && options.isGlobal;
    
    return {
      module: GrpcClientModule,
      global: isGlobal,
      imports: [ClientsModule.registerAsync(options)],
      providers: this.buildProviders(services),
      exports: [...services.map((s) => GetGrpcWrapperToken(s)), ClientsModule],
    };
  }
}
