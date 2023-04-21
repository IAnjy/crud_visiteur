-- CreateTable
CREATE TABLE "visiteurs" (
    "num_visiteur" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "nombre_jours" INTEGER NOT NULL,
    "tarif_journalier" INTEGER NOT NULL,

    CONSTRAINT "visiteurs_pkey" PRIMARY KEY ("num_visiteur")
);
