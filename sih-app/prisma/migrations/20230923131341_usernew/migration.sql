-- CreateTable
CREATE TABLE "Userrandom" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "instututename" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "branch" TEXT NOT NULL,
    "startyear" TEXT NOT NULL,
    "endyear" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Userrandom_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Userrandom_email_key" ON "Userrandom"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Userrandom_username_key" ON "Userrandom"("username");
