import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('consumer')
export class ConsumerController {
  @MessagePattern('kafka-tutorial')
  getHello(@Payload() message) {
    console.log(message);
    return 'Hello World';
  }
}
