import type { FastifyRequest, FastifyReply } from "fastify";
import {
  authorCreateBodySchema,
  authorParamsSchema,
  authorUpdateBodySchema,
} from "./authors.schemas";
import {
  createAuthorService,
  deleteAuthorService,
  getAuthorService,
  listAuthorsService,
  updateAuthorService,
} from "./authors.service";

export async function getAuthorController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { id } = authorParamsSchema.parse(request.params);

    const author = await getAuthorService(id);

    if (!author) {
      return reply.status(404).send({ message: "Autor não encontrado" });
    }

    return reply.status(200).send(author);
  } catch (error: unknown) {
    return reply.status(500).send(error);
  }
}

export async function listAuthorsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const author = await listAuthorsService();

    return reply.status(200).send(author);
  } catch (error: unknown) {
    return reply.status(500).send(error);
  }
}

export async function createAuthorController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { data_de_nascimento, nome } = authorCreateBodySchema.parse(
      request.body,
    );

    const author = await createAuthorService({
      data_de_nascimento,
      nome,
    });

    return reply.status(201).send(author);
  } catch (error: unknown) {
    return reply.status(500).send(error);
  }
}

export async function updateAuthorController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { id } = authorParamsSchema.parse(request.params);
    const { data_de_nascimento, nome } = authorUpdateBodySchema.parse(
      request.body,
    );

    const author = await getAuthorService(id);

    if (!author) {
      return reply.status(404).send({ message: "Autor não encontrado" });
    }

    const authorUpdated = await updateAuthorService(id, {
      data_de_nascimento,
      nome,
    });

    return reply.status(200).send(authorUpdated);
  } catch (error: unknown) {
    return reply.status(500).send(error);
  }
}

export async function deleteAuthorController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { id } = authorParamsSchema.parse(request.params);

    const author = await getAuthorService(id);

    if (!author) {
      return reply.status(404).send({ message: "Autor não encontrado" });
    }

    const authorDeleted = await deleteAuthorService(id);

    return reply.status(200).send(authorDeleted);
  } catch (error: unknown) {
    return reply.status(500).send(error);
  }
}
