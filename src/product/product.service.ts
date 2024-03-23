import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entity/product';
import {
  CreateProductRequestDto,
  CreateProductResponseDto,
} from './dto/create-product.dto';

@Injectable()
export class ProductService {
  products: ProductEntity[] = [];

  createProduct(dto: CreateProductRequestDto): CreateProductResponseDto {
    const newProduct = {
      ...dto,
      id: 'fake-id',
    };
    this.products.push(newProduct);

    return { id: newProduct.id };
  }
}

// const newProduct: ProductEntity = {
//     id: 'fake-id',
//     name: 'Hair Brush',
//     category: 'Accesories',
//     description: 'Good for your hair',
//     price: 400,
//   };
