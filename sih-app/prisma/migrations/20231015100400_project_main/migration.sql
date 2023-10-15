-- CreateTable
CREATE TABLE "Userrandom" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "institutename" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "branch" TEXT NOT NULL,
    "startyear" TEXT NOT NULL,
    "endyear" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Userrandom_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "projectName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "rollNo" TEXT NOT NULL,
    "dateOfUploading" TIMESTAMP(3) NOT NULL,
    "datasets" TEXT NOT NULL,
    "results" TEXT NOT NULL,
    "methods" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "rejectionSummary" TEXT NOT NULL,
    "languages" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Userrandom_email_key" ON "Userrandom"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Userrandom_username_key" ON "Userrandom"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Instituterandom_email_key" ON "Instituterandom"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Instituterandom_username_key" ON "Instituterandom"("username");
