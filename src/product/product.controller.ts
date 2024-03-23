import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateProductRequestDto,
  CreateProductResponseDto,
} from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @GrpcMethod('ProductService', 'CreateProduct')
  findOne(
    data: CreateProductRequestDto,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): CreateProductResponseDto {
    console.log(metadata);

    // You can only access the ServerUnaryCall object here hence you need to call sendMetadata to send
    // the metadata which was added in the interceptor
    call.sendMetadata(metadata);

    return this.productService.createProduct(data);
  }
}
