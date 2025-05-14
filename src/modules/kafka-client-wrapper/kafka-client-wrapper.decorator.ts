import { applyDecorators } from "@nestjs/common";
import { KafkaEventMap } from "./kafka-client-wrapper.event";
import { EventPattern, Payload } from "@nestjs/microservices";

export function TypedEvent<K extends keyof KafkaEventMap>(
  topic: K
): <TFunction extends Function, Y>(
  target: TFunction | object,
  propertyKey?: string | symbol,
  descriptor?: TypedPropertyDescriptor<Y>
) => void {
  return applyDecorators(EventPattern(topic));
}
