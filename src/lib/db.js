import { Resource } from "sst";
import { drizzle } from "drizzle-orm/aws-data-api/pg";
import { RDSDataClient } from "@aws-sdk/client-rds-data";
import { migrate } from 'drizzle-orm/mysql2/migrator';

console.log(Resource.HeadlinerDB.database);
export const db = drizzle(new RDSDataClient({region: "us-east-1"}), {
    database: Resource.HeadlinerDB.database,
    secretArn: Resource.HeadlinerDB.secretArn,
    resourceArn: Resource.HeadlinerDB.clusterArn
});

await migrate(db, { migrationsFolder: '../../../drizzle' });
