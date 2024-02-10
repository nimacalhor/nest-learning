import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { ComputerModule } from './computer/computer.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000);
}
bootstrap();
