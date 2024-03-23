import { ProductEntity } from '../entity/product';

export class GetProductsRequestDto {
  filter: Record<string, any>;
}

export class GetProductsResponseDto {
  products: ProductEntity[];
}
