// package: greeter
// file: shop.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HelloRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloRequest;
    static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
    export type AsObject = {
        name: string,
    }
}

export class HelloResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloResponse;
    static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
    export type AsObject = {
        message: string,
    }
}

export class AddProductRequest extends jspb.Message { 
    getKind(): string;
    setKind(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getLink(): string;
    setLink(value: string): void;

    getImagelink(): string;
    setImagelink(value: string): void;

    getContentlanguage(): string;
    setContentlanguage(value: string): void;

    getTargetcountry(): string;
    setTargetcountry(value: string): void;

    getChannel(): string;
    setChannel(value: string): void;

    getBrand(): string;
    setBrand(value: string): void;

    getColor(): string;
    setColor(value: string): void;

    getCondition(): string;
    setCondition(value: string): void;

    getGender(): string;
    setGender(value: string): void;

    getGtin(): string;
    setGtin(value: string): void;

    getMpn(): string;
    setMpn(value: string): void;


    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): PriceResponse | undefined;
    setPrice(value?: PriceResponse): void;

    clearSizeList(): void;
    getSizeList(): Array<EnumSize>;
    setSizeList(value: Array<EnumSize>): void;
    addSize(value: EnumSize, index?: number): EnumSize;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddProductRequest): AddProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddProductRequest;
    static deserializeBinaryFromReader(message: AddProductRequest, reader: jspb.BinaryReader): AddProductRequest;
}

export namespace AddProductRequest {
    export type AsObject = {
        kind: string,
        title: string,
        description: string,
        link: string,
        imagelink: string,
        contentlanguage: string,
        targetcountry: string,
        channel: string,
        brand: string,
        color: string,
        condition: string,
        gender: string,
        gtin: string,
        mpn: string,
        price?: PriceResponse.AsObject,
        sizeList: Array<EnumSize>,
    }
}

export class PriceResponse extends jspb.Message { 
    getValue(): string;
    setValue(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PriceResponse): PriceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceResponse;
    static deserializeBinaryFromReader(message: PriceResponse, reader: jspb.BinaryReader): PriceResponse;
}

export namespace PriceResponse {
    export type AsObject = {
        value: string,
    }
}

export class ProductResponse extends jspb.Message { 
    getKind(): string;
    setKind(value: string): void;

    getOfferid(): string;
    setOfferid(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getLink(): string;
    setLink(value: string): void;

    getImagelink(): string;
    setImagelink(value: string): void;

    getContentlanguage(): string;
    setContentlanguage(value: string): void;

    getTargetcountry(): string;
    setTargetcountry(value: string): void;

    getChannel(): string;
    setChannel(value: string): void;

    getAgegroup(): string;
    setAgegroup(value: string): void;

    getAvailability(): string;
    setAvailability(value: string): void;

    getAvailabilitydate(): string;
    setAvailabilitydate(value: string): void;

    getBrand(): string;
    setBrand(value: string): void;

    getColor(): string;
    setColor(value: string): void;

    getCondition(): string;
    setCondition(value: string): void;

    getGender(): string;
    setGender(value: string): void;

    getGtin(): string;
    setGtin(value: string): void;

    getItemgroupid(): string;
    setItemgroupid(value: string): void;

    getMpn(): string;
    setMpn(value: string): void;


    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): PriceResponse | undefined;
    setPrice(value?: PriceResponse): void;

    clearSizeList(): void;
    getSizeList(): Array<EnumSize>;
    setSizeList(value: Array<EnumSize>): void;
    addSize(value: EnumSize, index?: number): EnumSize;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProductResponse): ProductResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductResponse;
    static deserializeBinaryFromReader(message: ProductResponse, reader: jspb.BinaryReader): ProductResponse;
}

export namespace ProductResponse {
    export type AsObject = {
        kind: string,
        offerid: string,
        title: string,
        description: string,
        link: string,
        imagelink: string,
        contentlanguage: string,
        targetcountry: string,
        channel: string,
        agegroup: string,
        availability: string,
        availabilitydate: string,
        brand: string,
        color: string,
        condition: string,
        gender: string,
        gtin: string,
        itemgroupid: string,
        mpn: string,
        price?: PriceResponse.AsObject,
        sizeList: Array<EnumSize>,
    }
}

export class AddProductResponse extends jspb.Message { 
    clearAddedproductsList(): void;
    getAddedproductsList(): Array<ProductResponse>;
    setAddedproductsList(value: Array<ProductResponse>): void;
    addAddedproducts(value?: ProductResponse, index?: number): ProductResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddProductResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddProductResponse): AddProductResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddProductResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddProductResponse;
    static deserializeBinaryFromReader(message: AddProductResponse, reader: jspb.BinaryReader): AddProductResponse;
}

export namespace AddProductResponse {
    export type AsObject = {
        addedproductsList: Array<ProductResponse.AsObject>,
    }
}

export class ListProductRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListProductRequest): ListProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProductRequest;
    static deserializeBinaryFromReader(message: ListProductRequest, reader: jspb.BinaryReader): ListProductRequest;
}

export namespace ListProductRequest {
    export type AsObject = {
    }
}

export class ListProductResponse extends jspb.Message { 
    clearListproductList(): void;
    getListproductList(): Array<ProductResponse>;
    setListproductList(value: Array<ProductResponse>): void;
    addListproduct(value?: ProductResponse, index?: number): ProductResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProductResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListProductResponse): ListProductResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProductResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProductResponse;
    static deserializeBinaryFromReader(message: ListProductResponse, reader: jspb.BinaryReader): ListProductResponse;
}

export namespace ListProductResponse {
    export type AsObject = {
        listproductList: Array<ProductResponse.AsObject>,
    }
}

export enum EnumSize {
    S = 0,
    M = 1,
    L = 2,
    XL = 3,
}
