import React, { useState, useEffect } from "react";
import "./App.css";
import { ShopClient } from "./proto/ShopServiceClientPb";
import {
  HelloRequest,
  HelloResponse,
  ListProductRequest,
  ListProductResponse,
  ProductResponse
} from "./proto/shop_pb";
// import * as grpcWeb from "grpc-web";

const sayHello = (shopClient: ShopClient) =>
  new Promise<HelloResponse.AsObject>((resolve, reject) => {
    const helloRequest = new HelloRequest();
    helloRequest.setName("Arnaud");
    return shopClient.sayHello(helloRequest, null, (err, response) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(response.toObject());
    });
  });

const getProductList = (shopClient: ShopClient) =>
  new Promise<ListProductResponse.AsObject>((resolve, reject) => {
    const listProductRequest = new ListProductRequest();
    return shopClient.listProduct(listProductRequest, null, (err, response) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(response.toObject());
    });
  });

const App = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [productList, setProductList] = useState<
    Array<ProductResponse.AsObject>
  >([]);
  const shopClient = new ShopClient("http://localhost:8080", null, null);

  useEffect(() => {
    sayHello(shopClient).then(({ message }) => {
      setWelcomeMessage(message);
    });

    getProductList(shopClient).then(({ listproductList }) => {
      setProductList(listproductList);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>gRPC workshop</p>
        {welcomeMessage && <p>{welcomeMessage}</p>}
        {!!productList.length && (
          <ul>
            {productList.map((product, index) => (
              <li key={`${index}-${product.mpn}`}>
                <span>{product.kind}</span>
                <span>{product.link}</span>
                <span>{product.mpn}</span>
                <span>{product.offerid}</span>
                <span>{product.price?.value}</span>
                <span>{product.price?.currency}</span>
                <span>{product.sizeList}</span>
                <span>{product.targetcountry}</span>
                <span>{product.title}</span>
                <span>{product.agegroup}</span>
                <span>{product.availability}</span>
                <span>{product.availabilitydate}</span>
                <span>{product.brand}</span>
                <span>{product.channel}</span>
                <span>{product.color}</span>
                <span>{product.condition}</span>
                <span>{product.contentlanguage}</span>
                <span>{product.description}</span>
                <span>{product.gender}</span>
                <span>{product.gtin}</span>
                <span>{product.imagelink}</span>
                <span>{product.itemgroupid}</span>
              </li>
            ))}
          </ul>
        )}
        <a
          className="App-link"
          href="https://github.com/arnaud-zg/grpc-workshop"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Link
        </a>
      </header>
    </div>
  );
};

export default App;
