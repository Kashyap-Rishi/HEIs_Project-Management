-- CreateTable
CREATE TABLE "Instituterandom" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "institutename" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Instituterandom_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instituterandom_email_key" ON "Instituterandom"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Instituterandom_username_key" ON "Instituterandom"("username");
