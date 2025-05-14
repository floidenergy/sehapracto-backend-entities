import { Inject, Injectable } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { KafkaEventMap } from "./kafka-client-wrapper.event";
import { Observable } from "rxjs";

@Injectable()
export class KafkaClientWrapperService {
  constructor(@Inject("KAFKA_SERVICE_WRAPPER") private readonly kafka: ClientKafka) {}

  Emit<K extends keyof KafkaEventMap>(
    topic: K,
    payload: KafkaEventMap[K]
  ):  Observable<KafkaEventMap[K]> {
    return this.kafka.emit<KafkaEventMap[K]>(topic, payload);
  }
}
