import { PrismaClient } from '@prisma/client';

declare global {
  var cachePrisma: PrismaClient;
}

let prisma: PrismaClient;

// 本番環境では、PrismaClientを1回だけ再生させる
// それ以外の環境(Developなど)では、Prismaのインスタンスが行われていないときは、インスタンス化
// Prismaのインスタンスが行われているときは、再生成を防ぐ、という記述
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachePrisma) {
    global.cachePrisma = new PrismaClient();
  }
  prisma = global.cachePrisma;
}

export const db = prisma;
