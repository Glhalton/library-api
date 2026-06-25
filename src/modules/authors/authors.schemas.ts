import * as z from "zod";

export const authorParamsSchema = z.object({
  id: z.coerce.number(),
});

export const authorCreateBodySchema = z.object({
  nome: z.string(),
  data_de_nascimento: z.coerce.date(),
});

export const authorUpdateBodySchema = z.object({
  nome: z.string().optional(),
  data_de_nascimento: z.coerce.date().optional(),
});

export type AuthorCreateBody = z.infer<typeof authorCreateBodySchema>;
export type AuthorUpdateBody = z.infer<typeof authorUpdateBodySchema>;
