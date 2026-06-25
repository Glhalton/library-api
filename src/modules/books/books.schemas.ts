import * as z from "zod";

export const bookParamsSchema = z.object({
  id: z.coerce.number(),
});

export const bookCreateBodySchema = z.object({
  titulo: z.string(),
  autor_id: z.number(),
  ano_de_publicacao: z.coerce.date(),
  editora: z.string(),
  genero: z.string(),
  numero_de_paginas: z.number(),
});

export const bookUpdateBodySchema = z.object({
  titulo: z.string().optional(),
  autor_id: z.number().optional(),
  ano_de_publicacao: z.coerce.date().optional(),
  editora: z.string().optional(),
  genero: z.string().optional(),
  numero_de_paginas: z.number().optional(),
});

export const bookSchema = z.object({
  id: z.number(),
  titulo: z.string(),
  autor_id: z.number(),
  ano_de_publicacao: z.coerce.date(),
  editora: z.string(),
  genero: z.string(),
  numero_de_paginas: z.number(),
  criado_em: z.coerce.date(),
  modificado_em: z.coerce.date(),
});

export const bookListSchema = z.array(bookSchema);

export const notFoundSchema = z.object({
  message: z.string(),
});

export type BookCreateBody = z.infer<typeof bookCreateBodySchema>;
export type BookUpdateBody = z.infer<typeof bookUpdateBodySchema>;
