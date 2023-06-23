/*
  Warnings:

  - The values [disponible] on the enum `tipoEntrega` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `fechaDeEntrega` on the `Entregas` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "tipoEntrega_new" AS ENUM ('enviado', 'calificado', 'tardanza');
ALTER TABLE "Entregas" ALTER COLUMN "estado" DROP DEFAULT;
ALTER TABLE "Entregas" ALTER COLUMN "estado" TYPE "tipoEntrega_new" USING ("estado"::text::"tipoEntrega_new");
ALTER TYPE "tipoEntrega" RENAME TO "tipoEntrega_old";
ALTER TYPE "tipoEntrega_new" RENAME TO "tipoEntrega";
DROP TYPE "tipoEntrega_old";
ALTER TABLE "Entregas" ALTER COLUMN "estado" SET DEFAULT 'enviado';
COMMIT;

-- AlterTable
ALTER TABLE "Entregas" DROP COLUMN "fechaDeEntrega",
ALTER COLUMN "estado" SET DEFAULT 'enviado';
