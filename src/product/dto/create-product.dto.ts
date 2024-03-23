export class CreateProductRequestDto {
  name: string;
  description: string;
  price: number;
  category: string;
}

export class CreateProductResponseDto {
  id: string;
}
