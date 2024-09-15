import { Resource } from "sst";
import { drizzle } from "drizzle-orm/aws-data-api/pg";
import { RDSDataClient } from "@aws-sdk/client-rds-data";
import { migrate } from 'drizzle-orm/mysql2/migrator';

console.log(RDSDataClient.HeadlinerDB.database);
export const db = drizzle(new RDSDataClient({}), {
    database: Resource.HeadlinerDB.database,
    secretArn: Resource.HeadlinerDB.secretArn,
    resourceArn: Resource.HeadlinerDB.clusterArn
});

await migrate(db, { migrationsFolder: './drizzle' });
