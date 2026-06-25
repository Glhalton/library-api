import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import {
  authorCreateBodySchema,
  authorListSchema,
  authorParamsSchema,
  authorSchema,
  authorUpdateBodySchema,
  notFoundSchema,
} from "./authors.schemas";
import {
  createAuthorController,
  deleteAuthorController,
  getAuthorController,
  listAuthorsController,
  updateAuthorController,
} from "./authors.controller";

export default async function authorsRoutes(app: FastifyInstance) {
  const r = app.withTypeProvider<ZodTypeProvider>();

  r.get(
    "/:id",
    {
      schema: {
        summary: "Retorna um autor",
        description: "Retorna um autor a partir do seu id",
        tags: ["Autores"],
        params: authorParamsSchema,
        response: {
          200: authorSchema,
          404: notFoundSchema,
        },
      },
    },
    getAuthorController,
  );

  r.get(
    "/",
    {
      schema: {
        summary: "Lista todos os autores",
        description: "Retorna a lista de todos os autores cadastrados",
        tags: ["Autores"],
        response: {
          200: authorListSchema,
        },
      },
    },
    listAuthorsController,
  );

  r.post(
    "/",
    {
      schema: {
        summary: "Cria um autor",
        description: "Cadastra um novo autor",
        tags: ["Autores"],
        body: authorCreateBodySchema,
        response: {
          201: authorSchema,
        },
      },
    },
    createAuthorController,
  );

  r.patch(
    "/:id",
    {
      schema: {
        summary: "Atualiza um autor",
        description: "Atualiza os dados de um autor existente",
        tags: ["Autores"],
        params: authorParamsSchema,
        body: authorUpdateBodySchema,
        response: {
          200: authorSchema,
          404: notFoundSchema,
        },
      },
    },
    updateAuthorController,
  );

  r.delete(
    "/:id",
    {
      schema: {
        summary: "Remove um autor",
        description: "Remove um autor existente",
        tags: ["Autores"],
        params: authorParamsSchema,
        response: {
          200: authorSchema,
          404: notFoundSchema,
        },
      },
    },
    deleteAuthorController,
  );
}
