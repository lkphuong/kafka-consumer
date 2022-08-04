import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/app.service';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['38.242.132.213:9092'],
        },
        consumer: {
          groupId: 'my-kafka',
        },
      },
    },
  );

  // const appConfig: AppConfigService = await app.get(AppConfigService);

  await app.listen();
}
bootstrap();
