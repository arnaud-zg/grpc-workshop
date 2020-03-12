import * as grpc from "grpc";

import {
  HelloRequest,
  HelloResponse,
  AddProductResponse,
  AddProductRequest,
  ProductResponse,
  PriceResponse,
  ListProductRequest,
  ListProductResponse
} from "../proto/shop/shop_pb";
import { ShopService, IShopServer } from "../proto/shop/shop_grpc_pb";
import { MongoClient } from "mongodb";

type Product = Pick<
  ProductResponse.AsObject,
  "title" | "price" | "availability" | "availabilitydate"
>;

const adaptProduct = ({
  availability,
  availabilitydate,
  title,
  price
}: Product) => {
  const productResponse = new ProductResponse();
  const priceResponse = new PriceResponse();

  productResponse.setTitle(title);
  productResponse.setAvailability(availability);
  productResponse.setAvailabilitydate(availabilitydate);

  if (price) {
    if (price.value) {
      priceResponse.setValue(price.value);
    }
    if (price.currency) {
      priceResponse.setCurrency(price.currency);
    }
  }

  productResponse.setPrice(priceResponse);

  return productResponse;
};

class ShopHandler implements IShopServer {
  private dbClient: MongoClient;

  constructor({ dbClient }: { dbClient: MongoClient }) {
    this.dbClient = dbClient;
  }

  /**
   * Greet the user nicely
   * @param call
   * @param callback
   */
  sayHello = (
    call: grpc.ServerUnaryCall<HelloRequest>,
    callback: grpc.sendUnaryData<HelloResponse>
  ): void => {
    const reply = new HelloResponse();
    reply.setMessage(`Hello, ${call.request.getName()}`);
    callback(null, reply);
  };

  addProduct = (
    call: grpc.ServerUnaryCall<AddProductRequest>,
    callback: grpc.sendUnaryData<AddProductResponse>
  ): void => {
    const price = call.request.getPrice()?.toArray();
    const reply = new AddProductResponse();
    this.dbClient
      .db("grpc-workshop")
      .collection<Product>("Products")
      .insert({
        availability: "in stock",
        availabilitydate: new Date().toISOString(),
        title: call.request.getTitle(),
        price: {
          value: price ? price[0] : "",
          currency: price ? price[1] : ""
        }
      })
      .then(({ ops }) => {
        const addedItem = ops[0];
        const addedProduct = adaptProduct(addedItem);
        reply.setAddedproductsList([addedProduct]);
        callback(null, reply);
      });
  };

  listProduct = (
    _call: grpc.ServerUnaryCall<ListProductRequest>,
    callback: grpc.sendUnaryData<ListProductResponse>
  ): void => {
    this.dbClient
      .db("grpc-workshop")
      .collection("Products")
      .find({})
      .toArray()
      .then(productList => {
        const reply = new ListProductResponse();
        const productResponseList = productList.map(product =>
          adaptProduct(product)
        );
        reply.setListproductList(productResponseList);
        callback(null, reply);
      });
  };
}

export default {
  service: ShopService, // Service interface
  handler: ShopHandler // Service interface definitions
};
