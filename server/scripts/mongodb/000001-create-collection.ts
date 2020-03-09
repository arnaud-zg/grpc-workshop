const url = "mongodb://localhost:27000/grpc-workshop";

import { MongoClient } from "mongodb";
import yargs from "yargs";

// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log('Plunder more riffiwobbles!')
// } else {
//   console.log('Retreat from the xupptumblers!')
// }

const up = async (client: MongoClient) => {
  const collections = await client
    .db()
    .listCollections()
    .toArray();
  const alreadyCreated = !!collections.find(
    collection => collection.name === "Products"
  );

  if (!alreadyCreated) {
    await client.db().createCollection("Products");
    console.log("Products collection created");
  } else {
    console.log("Products collection already exist");
  }
};

const down = async (client: MongoClient) => {
  const collections = await client
    .db()
    .listCollections()
    .toArray();
  const alreadyCreated = !!collections.find(
    collection => collection.name === "Products"
  );

  if (alreadyCreated) {
    await client.db().dropCollection("Products");
    console.log("Products collection deleted");
  }
};

const main = async () => {
  const client = new MongoClient(url, { useUnifiedTopology: true });
  const {
    argv: { mode }
  } = yargs.options({
    mode: { choices: ["up", "down"], demandOption: true }
  });

  try {
    await client.connect();
    if (mode === "up") {
      await up(client);
    } else {
      await down(client);
    }
  } finally {
    await client.close();
  }
};

main().catch(console.error);
