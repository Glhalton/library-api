import type { FastifyInstance } from "fastify";
import booksRoutes from "./modules/books/books.routes";
import authorsRoutes from "./modules/authors/authors.routes";

export default async function (app: FastifyInstance) {
  app.register(booksRoutes, {
    prefix: "/books",
  });
  app.register(authorsRoutes, {
    prefix: "/authors",
  });
}
