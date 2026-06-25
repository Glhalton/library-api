import fastify from "fastify";
import routes from "./routes.js";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(swagger, {
  openapi: {
    info: {
      title: "Library API",
      description: "Documentação da API de biblioteca",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8888",
      },
    ],
  },
  transform: jsonSchemaTransform,
});

app.register(swaggerUi, {
  routePrefix: "/docs",
});
app.register(routes);

app.listen({ port: 8888 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
