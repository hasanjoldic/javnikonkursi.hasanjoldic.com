import postgraphile from "postgraphile";
import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import ConnectionFilterPlugin from "postgraphile-plugin-connection-filter";
import PgManyToManyPlugin from "@graphile-contrib/pg-many-to-many";
// @ts-expect-error
import PostGraphileNestedMutations from "postgraphile-plugin-nested-mutations";
// import { NodePlugin } from "graphile-build";

// import extendSchemaPlugins from "./extend";
import simplifyManyToManyPlugin from "./simplifyManyToManyPlugin";

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

export default postgraphile(
  {
    host: POSTGRES_HOST,
    port: Number.parseInt(POSTGRES_PORT || "5432"),
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
  },
  "public",
  {
    // watchPg: true,
    // graphiql: true,
    // enhanceGraphiql: true,
    watchPg: process.env.NODE_ENV !== "production" ? true : false,
    graphiql: process.env.NODE_ENV !== "production" ? true : false,
    enhanceGraphiql: true,
    // // subscriptions: true,
    dynamicJson: true,
    setofFunctionsContainNulls: false,
    ignoreRBAC: false,
    showErrorStack: true,
    extendedErrors: [
      "severity",
      "code",
      "detail",
      "hint",
      "position",
      "internalPosition",
      "internalQuery",
      "where",
      "schema",
      "table",
      "column",
      "dataType",
      "constraint",
      "file",
      "line",
      "routine",
    ],
    allowExplain: true,
    legacyRelations: "omit",
    sortExport: true,
    pgDefaultRole: "default_role",
    appendPlugins: [
      PgSimplifyInflectorPlugin,
      ConnectionFilterPlugin,
      simplifyManyToManyPlugin,
      PgManyToManyPlugin,
      PostGraphileNestedMutations,
    ],
    // skipPlugins: [NodePlugin],
    graphileBuildOptions: {
      connectionFilterAllowNullInput: true,
    },
    enableCors: process.env.NODE_ENV !== "production" ? true : false,
  }
);
