-- CreateTable
CREATE TABLE "ContactMessage" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(25) NOT NULL,
    "prenom" VARCHAR(25) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "telephone" VARCHAR(11) NOT NULL,
    "entreprise" VARCHAR(25) NOT NULL,
    "services" VARCHAR(25) NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);
