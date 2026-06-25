import { prisma } from "../src/lib/prisma.js";

async function main() {
  await prisma.autores.createMany({
    data: [
      {
        nome: "J. K. Rowling",
        data_de_nascimento: new Date("1965-07-31"),
      },
      {
        nome: "Antoine de Saint-Exupéry",
        data_de_nascimento: new Date("1900-06-29"),
      },
      {
        nome: "Inio Asano",
        data_de_nascimento: new Date("1980-09-22"),
      },
    ],
  });

  await prisma.livros.createMany({
    data: [
      {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor_id: 1,
        ano_de_publicacao: new Date("1997-06-26"),
        editora: "Bloomsbury Publishing",
        genero: "Fantasia",
        numero_de_paginas: 223,
      },
      {
        titulo: "O Pequeno Príncipe",
        autor_id: 2,
        ano_de_publicacao: new Date("1943-04-06"),
        editora: "Reynal & Hitchcock",
        genero: "Novela filosófica",
        numero_de_paginas: 96,
      },
      {
        titulo: "Boa Noite Punpun",
        autor_id: 3,
        ano_de_publicacao: new Date("2007-03-15"),
        editora: "Shogakukan",
        genero: "Drama",
        numero_de_paginas: 224,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
