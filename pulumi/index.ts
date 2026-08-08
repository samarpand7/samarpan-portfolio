import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const config = new pulumi.Config();

const appName = config.get("appName") ?? "samarpan-portfolio";
const repositoryUrl = config.require("repositoryUrl");
const githubAccessToken = config.requireSecret("githubAccessToken");
const environmentVariables = config.getObject<Record<string, string>>("environmentVariables") ?? {};
const customDomain = config.require("customDomain");
const tags = config.getObject<Record<string, string>>("tags") ?? {
  Project: "samarpan-portfolio",
  ManagedBy: "pulumi",
};

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

const app = new aws.amplify.App(appName, {
  name: appName,
  platform: "WEB_COMPUTE",
  repository: repositoryUrl,
  accessToken: githubAccessToken,
  iamServiceRoleArn: serviceRole.arn,
  computeRoleArn: computeRole.arn,
  environmentVariables,
  tags,
});

const prodBranch = new aws.amplify.Branch("prod", {
  appId: app.id,
  branchName: "prod",
  framework: "Next.js - SSR",
  stage: "PRODUCTION",
  enableAutoBuild: true,
  tags,
});

const devBranch = new aws.amplify.Branch("dev", {
  appId: app.id,
  branchName: "dev",
  framework: "Next.js - SSR",
  stage: "DEVELOPMENT",
  enableAutoBuild: true,
  tags,
});

const domainAssociation = new aws.amplify.DomainAssociation("custom", {
  appId: app.id,
  domainName: customDomain,
  waitForVerification: true,
  subDomains: [
    {
      // www.samsblogspace.com → prod
      branchName: prodBranch.branchName,
      prefix: "www",
    },
    {
      // dev.samsblogspace.com → dev
      branchName: devBranch.branchName,
      prefix: "dev",
    },
  ],
});

export const amplifyAppId = app.id;
export const amplifyAppArn = app.arn;
export const amplifyProdBranchName = prodBranch.branchName;
export const amplifyDevBranchName = devBranch.branchName;
export const amplifyProdDomain = pulumi.interpolate`https://www.${customDomain}`;
export const amplifyDevDomain = pulumi.interpolate`https://dev.${customDomain}`;
export const amplifyDefaultProdDomain = pulumi.interpolate`https://${prodBranch.branchName}.${app.defaultDomain}`;
export const amplifyDefaultDevDomain = pulumi.interpolate`https://${devBranch.branchName}.${app.defaultDomain}`;
export const customDomainDnsRecords = domainAssociation.certificateVerificationDnsRecord;
