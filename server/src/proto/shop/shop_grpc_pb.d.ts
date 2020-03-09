// package: greeter
// file: shop.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as shop_pb from "./shop_pb";

interface IShopService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IShopService_ISayHello;
    addProduct: IShopService_IAddProduct;
    listProduct: IShopService_IListProduct;
}

interface IShopService_ISayHello extends grpc.MethodDefinition<shop_pb.HelloRequest, shop_pb.HelloResponse> {
    path: string; // "/greeter.Shop/SayHello"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<shop_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<shop_pb.HelloRequest>;
    responseSerialize: grpc.serialize<shop_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<shop_pb.HelloResponse>;
}
interface IShopService_IAddProduct extends grpc.MethodDefinition<shop_pb.AddProductRequest, shop_pb.AddProductResponse> {
    path: string; // "/greeter.Shop/AddProduct"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<shop_pb.AddProductRequest>;
    requestDeserialize: grpc.deserialize<shop_pb.AddProductRequest>;
    responseSerialize: grpc.serialize<shop_pb.AddProductResponse>;
    responseDeserialize: grpc.deserialize<shop_pb.AddProductResponse>;
}
interface IShopService_IListProduct extends grpc.MethodDefinition<shop_pb.ListProductRequest, shop_pb.ListProductResponse> {
    path: string; // "/greeter.Shop/ListProduct"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<shop_pb.ListProductRequest>;
    requestDeserialize: grpc.deserialize<shop_pb.ListProductRequest>;
    responseSerialize: grpc.serialize<shop_pb.ListProductResponse>;
    responseDeserialize: grpc.deserialize<shop_pb.ListProductResponse>;
}

export const ShopService: IShopService;

export interface IShopServer {
    sayHello: grpc.handleUnaryCall<shop_pb.HelloRequest, shop_pb.HelloResponse>;
    addProduct: grpc.handleUnaryCall<shop_pb.AddProductRequest, shop_pb.AddProductResponse>;
    listProduct: grpc.handleUnaryCall<shop_pb.ListProductRequest, shop_pb.ListProductResponse>;
}

export interface IShopClient {
    sayHello(request: shop_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: shop_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: shop_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shop_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: shop_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shop_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    addProduct(request: shop_pb.AddProductRequest, callback: (error: grpc.ServiceError | null, response: shop_pb.AddProductResponse) => void): grpc.ClientUnaryCall;
    addProduct(request: shop_pb.AddProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shop_pb.AddProductResponse) => void): grpc.ClientUnaryCall;
    addProduct(request: shop_pb.AddProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shop_pb.AddProductResponse) => void): grpc.ClientUnaryCall;
    listProduct(request: shop_pb.ListProductRequest, callback: (error: grpc.ServiceError | null, response: shop_pb.ListProductResponse) => void): grpc.ClientUnaryCall;
    listProduct(request: shop_pb.ListProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shop_pb.ListProductResponse) => void): grpc.ClientUnaryCall;
    listProduct(request: shop_pb.ListProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shop_pb.ListProductResponse) => void): grpc.ClientUnaryCall;
}

export class ShopClient extends grpc.Client implements IShopClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: shop_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: shop_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: shop_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shop_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: shop_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shop_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public addProduct(request: shop_pb.AddProductRequest, callback: (error: grpc.ServiceError | null, response: shop_pb.AddProductResponse) => void): grpc.ClientUnaryCall;
    public addProduct(request: shop_pb.AddProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shop_pb.AddProductResponse) => void): grpc.ClientUnaryCall;
    public addProduct(request: shop_pb.AddProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shop_pb.AddProductResponse) => void): grpc.ClientUnaryCall;
    public listProduct(request: shop_pb.ListProductRequest, callback: (error: grpc.ServiceError | null, response: shop_pb.ListProductResponse) => void): grpc.ClientUnaryCall;
    public listProduct(request: shop_pb.ListProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shop_pb.ListProductResponse) => void): grpc.ClientUnaryCall;
    public listProduct(request: shop_pb.ListProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shop_pb.ListProductResponse) => void): grpc.ClientUnaryCall;
}
