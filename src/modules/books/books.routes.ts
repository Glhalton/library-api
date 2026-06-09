import type { FastifyInstance } from "fastify";
import {
  createBookController,
  deleteBookController,
  getBookController,
  listBooksController,
  updateBookController,
} from "./books.controller";

export default async function booksRoutes(app: FastifyInstance) {
  app.get("/:id", getBookController);

  app.get("/", listBooksController);

  app.post("/", createBookController);

  app.patch("/:id", updateBookController);

  app.delete("/:id", deleteBookController);
}
