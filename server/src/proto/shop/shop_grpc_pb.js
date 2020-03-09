/* eslint-disable */
// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var shop_pb = require('./shop_pb.js');

function serialize_greeter_AddProductRequest(arg) {
  if (!(arg instanceof shop_pb.AddProductRequest)) {
    throw new Error('Expected argument of type greeter.AddProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_AddProductRequest(buffer_arg) {
  return shop_pb.AddProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_AddProductResponse(arg) {
  if (!(arg instanceof shop_pb.AddProductResponse)) {
    throw new Error('Expected argument of type greeter.AddProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_AddProductResponse(buffer_arg) {
  return shop_pb.AddProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_HelloRequest(arg) {
  if (!(arg instanceof shop_pb.HelloRequest)) {
    throw new Error('Expected argument of type greeter.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_HelloRequest(buffer_arg) {
  return shop_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_HelloResponse(arg) {
  if (!(arg instanceof shop_pb.HelloResponse)) {
    throw new Error('Expected argument of type greeter.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_HelloResponse(buffer_arg) {
  return shop_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_ListProductRequest(arg) {
  if (!(arg instanceof shop_pb.ListProductRequest)) {
    throw new Error('Expected argument of type greeter.ListProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_ListProductRequest(buffer_arg) {
  return shop_pb.ListProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_ListProductResponse(arg) {
  if (!(arg instanceof shop_pb.ListProductResponse)) {
    throw new Error('Expected argument of type greeter.ListProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_ListProductResponse(buffer_arg) {
  return shop_pb.ListProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The shop service definition.
var ShopService = exports.ShopService = {
  sayHello: {
    path: '/greeter.Shop/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.HelloRequest,
    responseType: shop_pb.HelloResponse,
    requestSerialize: serialize_greeter_HelloRequest,
    requestDeserialize: deserialize_greeter_HelloRequest,
    responseSerialize: serialize_greeter_HelloResponse,
    responseDeserialize: deserialize_greeter_HelloResponse,
  },
  addProduct: {
    path: '/greeter.Shop/AddProduct',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.AddProductRequest,
    responseType: shop_pb.AddProductResponse,
    requestSerialize: serialize_greeter_AddProductRequest,
    requestDeserialize: deserialize_greeter_AddProductRequest,
    responseSerialize: serialize_greeter_AddProductResponse,
    responseDeserialize: deserialize_greeter_AddProductResponse,
  },
  listProduct: {
    path: '/greeter.Shop/ListProduct',
    requestStream: false,
    responseStream: false,
    requestType: shop_pb.ListProductRequest,
    responseType: shop_pb.ListProductResponse,
    requestSerialize: serialize_greeter_ListProductRequest,
    requestDeserialize: deserialize_greeter_ListProductRequest,
    responseSerialize: serialize_greeter_ListProductResponse,
    responseDeserialize: deserialize_greeter_ListProductResponse,
  },
};

exports.ShopClient = grpc.makeGenericClientConstructor(ShopService);
