
# How to use Interceptors in Nestjs to manipulate gRPC metadata

## Installation

```bash
yarn install
```

## Running the app

```bash
# watch mode
$ yarn run start:dev

```

## Take Note

In the context of NestJS, when working with gRPC, accessing the ServerUnaryCall object directly within an interceptor is not straightforward due to the way NestJS abstracts the gRPC layer. You can only manipulate the metadata in the interceptor. Then, you can access the ServerUnaryCall object in a gRPC controller method and send the metadata as demonstrated in `ProductController`.

## How to test

With PostMan:

1. Set the url of the request as `grpc://localhost:3333`.
2. Import the `product.proto` file as the service definition.
3. Choose `ProductService/CreateProduct`
4. Copy paste the following payload as the `message`

 ```json
 {
    "category": "dolor enim ad reprehenderit id",
    "description": "ipsum officia ea aliquip irure",
    "name": "pariatur nulla eu irure",
    "price": 1933868788
}
 ```

- Take note of the metadata tab of the response. You'll see `'Set-Cookie', 'yummy_cookie=choco'` metadata which was set in the `ProductInterceptor`

 Open issues if you have further questions.
