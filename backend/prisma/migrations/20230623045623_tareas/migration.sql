-- CreateTable
CREATE TABLE "Tareas" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "estado" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "idGrupo" INTEGER NOT NULL,
    "fechaDeEntrega" TIMESTAMP(3),

    CONSTRAINT "Tareas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tareas" ADD CONSTRAINT "Tareas_idGrupo_fkey" FOREIGN KEY ("idGrupo") REFERENCES "Grupos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
