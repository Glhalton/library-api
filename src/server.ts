import fastify from "fastify";
import routes from "./routes.js";

const app = fastify();

app.register(routes);

app.listen({ port: 8081 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
