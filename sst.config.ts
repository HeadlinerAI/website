/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "headstarterai",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {

    const vpc = new sst.aws.Vpc("HeadlinerVPC");
    const database = new sst.aws.Postgres("HeadlinerDB", { vpc });
    new sst.aws.Nextjs("HeadlinerAI", {
      link: [database],
      vpc
    });

  },
});
