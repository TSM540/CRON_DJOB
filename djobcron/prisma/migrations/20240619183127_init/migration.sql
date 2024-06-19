-- CreateEnum
CREATE TYPE "ExecutionStatus" AS ENUM ('Idle', 'Pending', 'Executed', 'ExecutedWithErrors');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "daysOfWeek" INTEGER[],
    "time" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "isExecuted" "ExecutionStatus" NOT NULL DEFAULT 'Idle',

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
