import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductInterceptor } from './product.interceptor';

@Module({
  providers: [ProductService, ProductInterceptor],
  controllers: [ProductController],
})
export class ProductModule {}
