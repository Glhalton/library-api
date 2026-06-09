import { prisma } from "../src/lib/prisma.js";

async function main() {
  await prisma.livros.createMany({
    data: [
      {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J. K. Rowling",
        ano_de_publicacao: new Date("1997-06-26"),
        editora: "Bloomsbury Publishing",
        genero: "Fantasia",
        numero_de_paginas: 223,
      },
      {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        ano_de_publicacao: new Date("1943-04-06"),
        editora: "Reynal & Hitchcock",
        genero: "Novela filosófica",
        numero_de_paginas: 96,
      },
      {
        titulo: "Boa Noite Punpun",
        autor: "Inio Asano",
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
