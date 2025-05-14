/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "@grpc/grpc-js";
import { firstValueFrom } from "rxjs";
import { Injectable, Scope } from "@nestjs/common";
import { GrpcServiceMethods, GrpcServiceMethodsOptions } from "./index.type";
import { MetaDataKeys } from "../../types/metadata.enum";
import { APP_TYPE } from "../../types/userType.enum";

const defaultMethodOption: GrpcServiceMethodsOptions = {
  includeRecieved: true,
  systemPermission: false,
};

@Injectable({ scope: Scope.REQUEST })
export class GrpcClientWrapper<T extends object> {
  private metadata: Metadata = new Metadata();

  constructor(private client: T) {}

  setMetadata(metadata: Metadata): void {
    this.metadata = metadata;
  }

  setClient(_client: T): void {
    this.client = _client;
  }

  mergeMetadata(callMetadata?: Metadata): Metadata {
    const merged = new Metadata();
    merged.merge(this.metadata);
    if (callMetadata) merged.merge(callMetadata);

    return merged;
  }

  get wrapped(): GrpcServiceMethods<T> {
    const proxy = {} as GrpcServiceMethods<T>;
    for (const key in this.client) {
      const originalMethod = this.client[key];
      if (typeof originalMethod === "function") {
        proxy[key] = ((
          req: any,
          metadata?: Metadata,
          options: GrpcServiceMethodsOptions = defaultMethodOption
        ) => {
          if (metadata) {
            const finalMetadata = options.includeRecieved
              ? this.mergeMetadata(metadata)
              : metadata;

            console.log(
              "🚀 ~ GrpcClientWrapper<T ~ getwrapped ~ options.systemPermission:",
              options.systemPermission
            );
            if (options.systemPermission)
              finalMetadata.set(MetaDataKeys.requestRole, APP_TYPE.SYSTEM);
            return firstValueFrom((originalMethod as any)(req, finalMetadata));
          } else {
            const finalMetadata = this.mergeMetadata(new Metadata());
            if (options.systemPermission)
              finalMetadata.set(MetaDataKeys.requestRole, APP_TYPE.SYSTEM);
            return firstValueFrom((originalMethod as any)(req, finalMetadata));
          }
        }) as any;
      }
    }

    return proxy;
  }
}
