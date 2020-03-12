import "dotenv/config";
import * as grpc from "grpc";

import { protoIndex } from "./proto";
import shopHandler from "./handlers/shop";
import { initDatabase } from "./helpers/database";

protoIndex();

const port: string | number = process.env.PORT || 9090;

export const startServer = async () => {
  // create a new gRPC server
  const server: grpc.Server = new grpc.Server();
  const dbClient = await initDatabase();
  const shopHandlerInstance = new shopHandler.handler({ dbClient });

  // register all the handler here...
  server.addService(shopHandler.service, shopHandlerInstance);

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

startServer().catch(console.error);
