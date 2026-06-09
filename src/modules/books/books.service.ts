import { prisma } from "../../lib/prisma";
import type { BookCreateBody, BookUpdateBody } from "./books.schemas";

export const getBookService = async (id: number) => {
  const book = await prisma.livros.findUnique({ where: { id } });

  return book;
};

export const listBooksService = async () => {
  const books = await prisma.livros.findMany({});

  return books;
};

export const createBookService = async ({
  ano_de_publicacao,
  autor,
  editora,
  genero,
  numero_de_paginas,
  titulo,
}: BookCreateBody) => {
  const bookCreated = await prisma.livros.create({
    data: {
      ano_de_publicacao,
      autor,
      editora,
      genero,
      numero_de_paginas,
      titulo,
    },
  });

  return bookCreated;
};

export const updateBookService = async (
  id: number,
  {
    ano_de_publicacao,
    autor,
    editora,
    genero,
    numero_de_paginas,
    titulo,
  }: BookUpdateBody,
) => {
  const bookUpdated = await prisma.livros.update({
    where: { id },
    data: {
      titulo,
      ano_de_publicacao,
      autor,
      editora,
      genero,
      numero_de_paginas,
    },
  });

  return bookUpdated;
};

export const deleteBookService = async (id: number) => {
  const bookDeleted = await prisma.livros.delete({
    where: { id },
  });

  return bookDeleted;
};
