import {
  DynamicModule,
  Module,
  InjectionToken,
  OptionalFactoryDependency,
} from "@nestjs/common";
import { ClientsModule, KafkaOptions, Transport } from "@nestjs/microservices";
import { KafkaClientWrapperService } from "./kafka-client-wrapper.service";

export interface KafkaClientWrapperAsyncOptions {
  isGlobal: boolean | undefined;
  inject: (InjectionToken | OptionalFactoryDependency)[] | undefined;
  useFactory: (...args: any[] | undefined) => NonNullable<KafkaOptions["options"]>;
}

@Module({})
export class KafkaClientWrapper {
  static registerAsync(options: KafkaClientWrapperAsyncOptions): DynamicModule {
    return {
      module: KafkaClientWrapper,
      global: options.isGlobal,
      imports: [
        ClientsModule.registerAsync({
          clients: [
            {
              name: "KAFKA_SERVICE_WRAPPER",
              inject: options.inject,
              useFactory: async (...args: any[]) => ({
                transport: Transport.KAFKA,
                options: options.useFactory(...args),
              }),
            },
          ],
        }),
      ],
      providers: [KafkaClientWrapperService],
      exports: [KafkaClientWrapperService, ClientsModule],
    };
  }
}
