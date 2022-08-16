import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('consumer')
export class ConsumerController {
  @MessagePattern('training-1')
  getHello(@Payload() message) {
    console.log(message);
    return 'Hello NestJS with Kafka';
  }
}
