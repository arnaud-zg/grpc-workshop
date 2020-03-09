import * as grpc from "grpc";

import {
  HelloRequest,
  HelloResponse,
  AddProductResponse,
  AddProductRequest,
  ProductResponse,
  PriceResponse,
  EnumSize,
  ListProductRequest,
  ListProductResponse
} from "../proto/shop/shop_pb";
import { ShopService, IShopServer } from "../proto/shop/shop_grpc_pb";

// product.setKind("content#product");
// product.setOfferid("1111111111");
// product.setTitle("Tee Black");
// product.setDescription(
//   "The Black Tee is available in unisex sizing and features a retail fit"
// );
// product.setLink("http://my.site.com/blacktee/");
// product.setImagelink("https://shop.example.com/.../images/GGOEGXXX1100.jpg");
// product.setContentlanguage("en");
// product.setTargetcountry("US");
// product.setChannel("online");
// product.setAgegroup("adult");
// product.setAvailability("in stock");
// product.setAvailabilitydate("2019-01-25T13:00:00-08:00");
// product.setBrand("shop");
// product.setColor("color");
// product.setCondition("condition");
// product.setGender("male");
// product.setGtin("608802531656");
// product.setItemgroupid("tee");
// product.setMpn("608802531656");

// price.setValue("21.99");
// price.setCurrency("USB");
// product.setPrice(price);
// product.setSizeList([EnumSize.L]);

const adaptProduct = ({
  kind,
  title,
  description,
  link,
  imagelink,
  contentlanguage,
  targetcountry,
  channel,
  brand,
  color,
  condition,
  gender,
  gtin,
  mpn,
  price,
  sizeList
}: Omit<
  AddProductRequest.AsObject,
  "offerId" | "ageGroup" | "availability" | "availabilityDate" | "itemGroupId"
>) => {
  const productResponse = new ProductResponse();
  const priceResponse = new PriceResponse();

  productResponse.setKind(kind);
  productResponse.setOfferid("1111111111");
  productResponse.setTitle(title);
  productResponse.setDescription(description);
  productResponse.setLink(link);
  productResponse.setImagelink(imagelink);
  productResponse.setContentlanguage(contentlanguage);
  productResponse.setTargetcountry(targetcountry);
  productResponse.setChannel(channel);
  productResponse.setAgegroup("adult");
  productResponse.setAvailability("in stock");
  productResponse.setAvailabilitydate("2019-01-25T13:00:00-08:00");
  productResponse.setBrand(brand);
  productResponse.setColor(color);
  productResponse.setCondition(condition);
  productResponse.setGender(gender);
  productResponse.setGtin(gtin);
  productResponse.setItemgroupid("tee");
  productResponse.setMpn(mpn);

  if (price) {
    priceResponse.setValue(price.value);
    priceResponse.setCurrency(price.currency);
  }

  productResponse.setPrice(priceResponse);
  productResponse.setSizeList(sizeList);

  return productResponse;
};

const aProduct = () =>
  adaptProduct({
    kind: "content#product",
    title: "Tee Black",
    description:
      "The Black Tee is available in unisex sizing and features a retail fit",
    link: "http://my.site.com/blacktee/",
    imagelink: "https://shop.example.com/.../images/GGOEGXXX1100.jpg",
    contentlanguage: "en",
    targetcountry: "US",
    channel: "online",
    brand: "shop",
    color: "color",
    condition: "condition",
    gender: "male",
    gtin: "608802531656",
    mpn: "608802531656",
    price: {
      value: "21.99",
      currency: "USD"
    },
    sizeList: []
  });

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
    const product = adaptProduct({
      kind: call.request.getKind(),
      title: call.request.getTitle(),
      description: call.request.getDescription(),
      link: call.request.getLink(),
      imagelink: call.request.getImagelink(),
      contentlanguage: call.request.getContentlanguage(),
      targetcountry: call.request.getTargetcountry(),
      channel: call.request.getChannel(),
      brand: call.request.getBrand(),
      color: call.request.getColor(),
      condition: call.request.getCondition(),
      gender: call.request.getGender(),
      gtin: call.request.getGtin(),
      mpn: call.request.getMpn(),
      price: price
        ? {
            value: price[0],
            currency: price[1]
          }
        : undefined,
      sizeList: call.request.getSizeList()
    });
    reply.setAddedproductsList([product]);
    callback(null, reply);
  };

  listProduct = (
    call: grpc.ServerUnaryCall<ListProductRequest>,
    callback: grpc.sendUnaryData<ListProductResponse>
  ): void => {
    const reply = new ListProductResponse();
    reply.setListproductList([aProduct(), aProduct(), aProduct(), aProduct()]);
    callback(null, reply);
  };
}

export default {
  service: ShopService, // Service interface
  handler: new ShopHandler() // Service interface definitions
};
