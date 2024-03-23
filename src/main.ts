import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { INestMicroservice } from '@nestjs/common';
import { join } from 'path';
import { ProductInterceptor } from './product/product.interceptor';

async function bootstrap() {
  const app: INestMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.GRPC,
      options: {
        url: '127.0.0.1:3333',
        package: 'product',
        protoPath: join(__dirname, 'proto/product.proto'),
      },
    });

  app.useGlobalInterceptors(new ProductInterceptor());
  await app.listen();
}
bootstrap();
