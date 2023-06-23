/*
  Warnings:

  - The `estado` column on the `Grupos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `estado` column on the `Tareas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tipo` column on the `Usuarios` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "tipoUsuario" AS ENUM ('alumno', 'profesor');

-- CreateEnum
CREATE TYPE "tipoTarea" AS ENUM ('visible', 'oculto', 'eliminado');

-- CreateEnum
CREATE TYPE "tipoEntrega" AS ENUM ('disponible', 'enviado', 'calificado', 'tardanza');

-- CreateEnum
CREATE TYPE "tipoGrupo" AS ENUM ('visible', 'oculto');

-- AlterTable
ALTER TABLE "Grupos" DROP COLUMN "estado",
ADD COLUMN     "estado" "tipoGrupo" NOT NULL DEFAULT 'visible';

-- AlterTable
ALTER TABLE "Tareas" DROP COLUMN "estado",
ADD COLUMN     "estado" "tipoTarea" NOT NULL DEFAULT 'visible';

-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "tipo",
ADD COLUMN     "tipo" "tipoUsuario" NOT NULL DEFAULT 'alumno';

-- CreateTable
CREATE TABLE "Entregas" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "estado" "tipoEntrega" NOT NULL DEFAULT 'disponible',
    "ArchivoCodigo" TEXT NOT NULL,
    "ArchivoUML" TEXT NOT NULL,
    "calificacion" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "idTarea" INTEGER NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "fechaDeEntrega" TIMESTAMP(3),

    CONSTRAINT "Entregas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Entregas" ADD CONSTRAINT "Entregas_idTarea_fkey" FOREIGN KEY ("idTarea") REFERENCES "Tareas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entregas" ADD CONSTRAINT "Entregas_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
