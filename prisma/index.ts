import { PrismaClient } from "@prisma/client";
import config from "../src/config";
const prisma = new PrismaClient({
  datasources: { db: { url: config.database_url } },
  //log: ["query"],
});

export default prisma;
