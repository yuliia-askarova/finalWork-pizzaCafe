import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import fastifyEnv from "@fastify/env";
import mongoose from "mongoose";
import Pizza from "./model/Pizza.js";
import Drinks from './model/Drinks.js';

mongoose
  .connect(
    "mongodb+srv://lastsong428:fCrVC6eanYNHSzSi@cluster0.keibgqn.mongodb.net/"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("error:", err);
  });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = fastify({
  logger: true,
});

server.register(fastifyStatic, {
  root: join(__dirname, "../dist"),
});

server.get("/pizza", async (request, reply) => {
  try {
    const pizza = await Pizza.find();
    return reply.send(pizza);
  } catch (error) {
    reply.status(500).send({ error: "Database error" });
  }
});

server.get("/drinks", async (request, reply) => {
  try {
    console.log(111);
    const drinks = await Drinks.find();
    return reply.send(drinks);
  } catch (error) {
    reply.status(500).send({ error: "Database error" });
  }
});

const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "string",
      default: "3000",
    },
  },
};

const options = {
  dotenv: {
    path: `C:\\Users\\lasts\\Desktop\\Server\\.env`,
    debug: true,
  },
  confKey: "config",
  schema: schema,
};
console.log(options.schema.properties.PORT, 111);

await server.register(fastifyEnv, options);

server.listen({ port: 5000 }, (err, address) => {
  if (err) throw err;
  console.log(`server started at: ${address}`);
});
