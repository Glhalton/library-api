import type { FastifyInstance } from "fastify";
import booksRoutes from "./modules/books/books.routes";

export default async function (app: FastifyInstance) {
  app.register(booksRoutes, {
    prefix: "/books",
  });
}
