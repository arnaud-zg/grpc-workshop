import * as grpc from "grpc";

import {
  HelloRequest,
  HelloResponse,
  AddProductResponse,
  AddProductRequest,
  ProductResponse,
  PriceResponse,
  EnumSize
} from "../proto/shop/shop_pb";
import { ShopService, IShopServer } from "../proto/shop/shop_grpc_pb";

class ShopHandler implements IShopServer {
  /**
   * Greet the user nicely
   * @param call
   * @param callback
   */
  sayHello = (
    call: grpc.ServerUnaryCall<HelloRequest>,
    callback: grpc.sendUnaryData<HelloResponse>
  ): void => {
    const reply: HelloResponse = new HelloResponse();

    reply.setMessage(`Hello, ${call.request.getName()}`);

    callback(null, reply);
  };

  addProduct = (
    call: grpc.ServerUnaryCall<AddProductRequest>,
    callback: grpc.sendUnaryData<AddProductResponse>
  ): void => {
    const reply: AddProductResponse = new AddProductResponse();
    const product = new ProductResponse();
    const price = new PriceResponse();

    product.setKind("content#product");
    product.setOfferid("1111111111");
    product.setTitle("Tee Black");
    product.setDescription(
      "The Black Tee is available in unisex sizing and features a retail fit"
    );
    product.setLink("http://my.site.com/blacktee/");
    product.setImagelink(
      "https://shop.example.com/.../images/GGOEGXXX1100.jpg"
    );
    product.setContentlanguage("en");
    product.setTargetcountry("US");
    product.setChannel("online");
    product.setAgegroup("adult");
    product.setAvailability("in stock");
    product.setAvailabilitydate("2019-01-25T13:00:00-08:00");
    product.setBrand("shop");
    product.setColor("color");
    product.setCondition("condition");
    product.setGender("male");
    product.setGtin("608802531656");
    product.setItemgroupid("tee");
    product.setMpn("608802531656");

    price.setValue("21.99");
    price.setCurrency("USB");
    product.setPrice(price);
    product.setSizeList([EnumSize.L]);

    reply.setAddedproductsList([product]);
    callback(null, reply);
  };
}

export default {
  service: ShopService, // Service interface
  handler: new ShopHandler() // Service interface definitions
};
