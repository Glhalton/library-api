import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import {
  bookCreateBodySchema,
  bookListSchema,
  bookParamsSchema,
  bookSchema,
  bookUpdateBodySchema,
  notFoundSchema,
} from "./books.schemas";
import {
  createBookController,
  deleteBookController,
  getBookController,
  listBooksController,
  updateBookController,
} from "./books.controller";

export default async function booksRoutes(app: FastifyInstance) {
  const r = app.withTypeProvider<ZodTypeProvider>();

  r.get(
    "/:id",
    {
      schema: {
        summary: "Retorna um livro",
        description: "Retorna um livro a partir do seu id",
        tags: ["Livros"],
        params: bookParamsSchema,
        response: {
          200: bookSchema,
          404: notFoundSchema,
        },
      },
    },
    getBookController,
  );

  r.get(
    "/",
    {
      schema: {
        summary: "Lista todos os livros",
        description: "Retorna a lista de todos os livros cadastrados",
        tags: ["Livros"],
        response: {
          200: bookListSchema,
        },
      },
    },
    listBooksController,
  );

  r.post(
    "/",
    {
      schema: {
        summary: "Cria um livro",
        description: "Cadastra um novo livro",
        tags: ["Livros"],
        body: bookCreateBodySchema,
        response: {
          201: bookSchema,
        },
      },
    },
    createBookController,
  );

  r.patch(
    "/:id",
    {
      schema: {
        summary: "Atualiza um livro",
        description: "Atualiza os dados de um livro existente",
        tags: ["Livros"],
        params: bookParamsSchema,
        body: bookUpdateBodySchema,
        response: {
          200: bookSchema,
          404: notFoundSchema,
        },
      },
    },
    updateBookController,
  );

  r.delete(
    "/:id",
    {
      schema: {
        summary: "Remove um livro",
        description: "Remove um livro existente",
        tags: ["Livros"],
        params: bookParamsSchema,
        response: {
          200: bookSchema,
          404: notFoundSchema,
        },
      },
    },
    deleteBookController,
  );
}
