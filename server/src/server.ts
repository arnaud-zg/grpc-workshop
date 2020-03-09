import "dotenv/config";
import * as grpc from "grpc";

import { protoIndex } from "./proto";
import shopHandler from "./handlers/shop";

protoIndex();

const port: string | number = process.env.PORT || 9090;

type StartServerType = () => void;
export const startServer: StartServerType = (): void => {
  // create a new gRPC server
  const server: grpc.Server = new grpc.Server();

  // register all the handler here...
  server.addService(shopHandler.service, shopHandler.handler);

  // define the host/port for server
  server.bindAsync(
    `0.0.0.0:${port}`,
    grpc.ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err != null) {
        return console.error(err);
      }
      console.log(`gRPC listening on ${port}`);
    }
  );

  // start the gRPC server
  server.start();
};

startServer();
