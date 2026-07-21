import * as fs from "fs";
import * as path from "path";
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const config = new pulumi.Config();

const appName = config.get("appName") ?? "samarpan-portfolio";
const repositoryUrl = config.get("repositoryUrl") ?? "";
const githubAccessToken = config.getSecret("githubAccessToken");
const branchName = config.get("branchName") ?? "main";
const enableAutoBuild = config.getBoolean("enableAutoBuild") ?? true;
const environmentVariables = config.getObject<Record<string, string>>("environmentVariables") ?? {};
const customDomain = config.get("customDomain") ?? "";
const tags = config.getObject<Record<string, string>>("tags") ?? {
  Project: "samarpan-portfolio",
  ManagedBy: "pulumi",
};

const connectRepository = repositoryUrl !== "";

const amplifyAssumeRolePolicy = JSON.stringify({
  Version: "2012-10-17",
  Statement: [
    {
      Effect: "Allow",
      Action: "sts:AssumeRole",
      Principal: { Service: "amplify.amazonaws.com" },
    },
  ],
});

const serviceRole = new aws.iam.Role("amplify-service", {
  name: `${appName}-amplify-service`,
  assumeRolePolicy: amplifyAssumeRolePolicy,
  tags,
});

new aws.iam.RolePolicyAttachment("amplify-service", {
  role: serviceRole.name,
  policyArn: "arn:aws:iam::aws:policy/AdministratorAccess-Amplify",
});

const computeRole = new aws.iam.Role("amplify-compute", {
  name: `${appName}-amplify-compute`,
  assumeRolePolicy: amplifyAssumeRolePolicy,
  tags,
});

new aws.iam.RolePolicyAttachment("amplify-compute", {
  role: computeRole.name,
  policyArn: "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
});

// When no Git repo is connected, use the build spec from this repository.
const buildSpec = connectRepository
  ? undefined
  : fs.readFileSync(path.join(__dirname, "..", "amplify.yml"), "utf8");

const app = new aws.amplify.App(appName, {
  name: appName,
  platform: "WEB_COMPUTE",
  repository: connectRepository ? repositoryUrl : undefined,
  accessToken: connectRepository ? githubAccessToken : undefined,
  iamServiceRoleArn: serviceRole.arn,
  computeRoleArn: computeRole.arn,
  environmentVariables,
  buildSpec,
  tags,
});

const branch = new aws.amplify.Branch("main", {
  appId: app.id,
  branchName: branchName,
  framework: "Next.js - SSR",
  stage: branchName === "main" ? "PRODUCTION" : "DEVELOPMENT",
  enableAutoBuild: connectRepository ? enableAutoBuild : false,
  tags,
});

let domainAssociation: aws.amplify.DomainAssociation | undefined;
if (customDomain !== "") {
  domainAssociation = new aws.amplify.DomainAssociation("custom", {
    appId: app.id,
    domainName: customDomain,
    subDomains: [
      {
        branchName: branch.branchName,
        prefix: "",
      },
    ],
  });
}

export const amplifyAppId = app.id;
export const amplifyAppArn = app.arn;
export const amplifyBranchName = branch.branchName;
export const amplifyDefaultDomain = pulumi.interpolate`https://${branch.branchName}.${app.defaultDomain}`;
export const customDomainDnsRecords = domainAssociation
  ? domainAssociation.certificateVerificationDnsRecord
  : undefined;
