import { prisma } from "../../lib/prisma";
import type { AuthorCreateBody, AuthorUpdateBody } from "./authors.schemas";

export const getAuthorService = async (id: number) => {
  const author = await prisma.autores.findUnique({ where: { id } });

  return author;
};

export const listAuthorsService = async () => {
  const authors = await prisma.autores.findMany({});

  return authors;
};

export const createAuthorService = async ({
  data_de_nascimento,
  nome,
}: AuthorCreateBody) => {
  const authorCreated = await prisma.autores.create({
    data: {
      data_de_nascimento,
      nome,
    },
  });

  return authorCreated;
};

export const updateAuthorService = async (
  id: number,
  { data_de_nascimento, nome }: AuthorUpdateBody,
) => {
  const authorUpdated = await prisma.autores.update({
    where: { id },
    data: {
      data_de_nascimento,
      nome,
    },
  });

  return authorUpdated;
};

export const deleteAuthorService = async (id: number) => {
  const authorDeleted = await prisma.autores.delete({
    where: { id },
  });

  return authorDeleted;
};
