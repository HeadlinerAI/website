import { Resource } from "sst";
import { drizzle } from "drizzle-orm/aws-data-api/pg";
import { RDSDataClient } from "@aws-sdk/client-rds-data";

drizzle(new RDSDataClient({}), {
    database: Resource.HeadlinerDB.database,
    secretArn: Resource.HeadlinerDB.secretArn,
    resourceArn: Resource.HeadlinerDB.clusterArn
});