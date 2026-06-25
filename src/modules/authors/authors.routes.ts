import type { FastifyInstance } from "fastify";
import {
  createAuthorController,
  deleteAuthorController,
  getAuthorController,
  listAuthorsController,
  updateAuthorController,
} from "./authors.controller";

export default async function authorsRoutes(app: FastifyInstance) {
  app.get("/:id", getAuthorController);

  app.get("/", listAuthorsController);

  app.post("/", createAuthorController);

  app.patch("/:id", updateAuthorController);

  app.delete("/:id", deleteAuthorController);
}
