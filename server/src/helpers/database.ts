import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27000/grpc-workshop";

export const initDatabase = async () => {
  const client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  console.log("Connected to database");
  return client;
};
