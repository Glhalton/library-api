/*
  Warnings:

  - You are about to drop the column `autor` on the `livros` table. All the data in the column will be lost.
  - Added the required column `autor_id` to the `livros` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "livros" DROP COLUMN "autor",
ADD COLUMN     "autor_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "autores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data_de_nascimento" DATE NOT NULL,
    "criado_em" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modificado_em" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "autores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "livros" ADD CONSTRAINT "livros_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "autores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
