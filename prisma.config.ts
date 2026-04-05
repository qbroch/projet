import { resolve } from "node:path";
import { config as loadEnv } from "dotenv";
import { defineConfig } from "prisma/config";

// Même fichiers que Next : la CLI Prisma ne lit pas .env.local toute seule.
loadEnv({ path: resolve(process.cwd(), ".env") });
loadEnv({ path: resolve(process.cwd(), ".env.local"), override: true });

// Valeur factice uniquement pour `prisma generate` si aucune URL n’est définie.
// Pour migrate / la vraie app : mets DATABASE_URL dans .env ou .env.local.
const databaseUrl =
  process.env.DATABASE_URL ??
  "postgresql://user:password@127.0.0.1:5432/postgres";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: databaseUrl,
  },
});
