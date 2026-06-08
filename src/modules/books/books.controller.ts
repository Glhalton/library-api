import type { FastifyRequest, FastifyReply } from "fastify";
import {
  bookCreateBodySchema,
  bookParamsSchema,
  bookUpdateBodySchema,
} from "./books.schemas";
import {
  createBookService,
  deleteBookService,
  getBookService,
  listBooksService,
  updateBookService,
} from "./books.service";

export async function getBookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { id } = bookParamsSchema.parse(request.params);

    const book = await getBookService(id);

    if (!book) {
      return reply.status(404).send({ message: "Livro não encontrado" });
    }

    return reply.status(200).send(book);
  } catch (error: unknown) {
    return reply.status(500).send(error);
  }
}

export async function listBooksController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const book = await listBooksService();

  return reply.status(200).send(book);

  try {
  } catch (error: unknown) {
    return reply.status(500).send(error);
  }
}

export async function createBookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const {
      ano_de_publicacao,
      autor,
      editora,
      genero,
      numero_de_paginas,
      titulo,
    } = bookCreateBodySchema.parse(request.params);

    const book = await createBookService({
      ano_de_publicacao,
      autor,
      editora,
      genero,
      numero_de_paginas,
      titulo,
    });

    return reply.status(201).send(book);
  } catch (error: unknown) {
    return reply.status(500).send(error);
  }
}

export async function updateBookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { id } = bookParamsSchema.parse(request.params);
    const {
      ano_de_publicacao,
      autor,
      editora,
      genero,
      numero_de_paginas,
      titulo,
    } = bookUpdateBodySchema.parse(request.params);

    const book = await getBookService(id);

    if (!book) {
      return reply.status(404).send({ message: "Livro não encontrado" });
    }

    const bookUpdated = await updateBookService(id, {
      ano_de_publicacao,
      autor,
      editora,
      genero,
      numero_de_paginas,
      titulo,
    });

    return reply.status(200).send(bookUpdated);
  } catch (error: unknown) {
    return reply.status(500).send(error);
  }
}

export async function deleteBookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { id } = bookParamsSchema.parse(request.params);

    const book = await getBookService(id);

    if (!book) {
      return reply.status(404).send({ message: "Livro não encontrado" });
    }

    const bookDeleted = await deleteBookService(id);

    return reply.status(200).send(bookDeleted);
  } catch (error: unknown) {
    return reply.status(500).send(error);
  }
}
