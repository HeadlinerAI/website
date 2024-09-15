import { defineConfig } from 'drizzle-kit';
import { Resource } from "sst";

export default defineConfig({
    driver: "aws-data-api",
    dialect: "postgresql",
    dbCredentials: {
        database: Resource.HeadlinerDB.database,
        secretArn: Resource.HeadlinerDB.secretArn,
        resourceArn: Resource.HeadlinerDB.clusterArn,
    },
    // Pick up all our schema files
    schema: ["./src/lib/*.sql.js"],
    out: "./migrations",
});