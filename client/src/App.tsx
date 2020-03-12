import React, { useState, useEffect } from "react";
import "./App.css";
import { ShopClient } from "./proto/ShopServiceClientPb";
import {
  HelloRequest,
  HelloResponse,
  ListProductRequest,
  ListProductResponse,
  ProductResponse,
  AddProductRequest,
  PriceResponse
} from "./proto/shop_pb";
import { AddProduct } from "./product/AddProduct";

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

  const refreshProductList = () => {
    getProductList(shopClient).then(({ listproductList }) => {
      setProductList(listproductList);
    });
  };

  useEffect(() => {
    sayHello(shopClient).then(({ message }) => {
      setWelcomeMessage(message);
    });

    refreshProductList();
  }, []);

  console.log({ productList });

  return (
    <div className="App">
      <header className="App-header">
        <p>gRPC workshop</p>
        {welcomeMessage && <p>{welcomeMessage}</p>}
        <div style={{ padding: 10, marginTop: 20, border: "solid" }}>
          {!!productList.length && (
            <ul
              style={{
                listStyleType: "none",
                margin: 0,
                padding: 0
              }}
            >
              {productList.map((product, index) => (
                <li
                  key={`${index}-${product.mpn}`}
                  style={{ marginTop: index > 0 ? 20 : 0 }}
                >
                  <div>
                    <span>#{index} - </span>
                    <span>{product.title}</span>
                  </div>
                  <div>
                    <span>
                      Price: {product.price?.value}
                      {product.price?.currency}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <AddProduct
            onSubmit={values => {
              const addProductRequest = new AddProductRequest();
              const priceResponse = new PriceResponse();
              priceResponse.setValue(`${values.price}`);
              addProductRequest.setTitle(values.title);
              addProductRequest.setPrice(priceResponse);
              shopClient.addProduct(
                addProductRequest,
                null,
                (err, response) => {
                  if (err) {
                    return;
                  }
                  const { addedproductsList } = response.toObject();
                  if (addedproductsList.length) {
                    setProductList([...productList, ...addedproductsList]);
                  }
                }
              );
            }}
          />
        </div>

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
