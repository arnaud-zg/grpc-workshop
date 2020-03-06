/**
 * @fileoverview gRPC-Web generated client stub for greeter
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  AddProductRequest,
  AddProductResponse,
  HelloRequest,
  HelloResponse} from './shop_pb';

export class ShopClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSayHello = new grpcWeb.AbstractClientBase.MethodInfo(
    HelloResponse,
    (request: HelloRequest) => {
      return request.serializeBinary();
    },
    HelloResponse.deserializeBinary
  );

  sayHello(
    request: HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: HelloResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/greeter.Shop/SayHello',
      request,
      metadata || {},
      this.methodInfoSayHello,
      callback);
  }

  methodInfoAddProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    AddProductResponse,
    (request: AddProductRequest) => {
      return request.serializeBinary();
    },
    AddProductResponse.deserializeBinary
  );

  addProduct(
    request: AddProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddProductResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/greeter.Shop/AddProduct',
      request,
      metadata || {},
      this.methodInfoAddProduct,
      callback);
  }

}

