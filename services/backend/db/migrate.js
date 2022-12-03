"use strict";

const path = require("path");
const { migrate } = require("postgres-migrations");
const dotenv = require("dotenv");

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

async function migrateUp() {
  const dbConfig = {
    host: POSTGRES_HOST,
    port: Number.parseInt(POSTGRES_PORT),
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,

    // Default: false for backwards-compatibility
    // This might change!
    ensureDatabaseExists: true,

    // Default: "postgres"
    // Used when checking/creating "database-name"
    defaultDatabase: "postgres",
  };

  await migrate(dbConfig, path.resolve(__dirname, "./migrations"));
}

function main() {
  migrateUp();
}

main();
