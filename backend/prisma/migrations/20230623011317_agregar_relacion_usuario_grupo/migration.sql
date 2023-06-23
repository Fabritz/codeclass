/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "_GruposToUsuarios" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GruposToUsuarios_AB_unique" ON "_GruposToUsuarios"("A", "B");

-- CreateIndex
CREATE INDEX "_GruposToUsuarios_B_index" ON "_GruposToUsuarios"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- AddForeignKey
ALTER TABLE "Grupos" ADD CONSTRAINT "Grupos_idProfesor_fkey" FOREIGN KEY ("idProfesor") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GruposToUsuarios" ADD CONSTRAINT "_GruposToUsuarios_A_fkey" FOREIGN KEY ("A") REFERENCES "Grupos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GruposToUsuarios" ADD CONSTRAINT "_GruposToUsuarios_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
