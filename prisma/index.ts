import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const prisma = new PrismaClient({
//   datasources: { db: { url: config.database_url } },
//   log: ["query"],
// });

export default prisma;
