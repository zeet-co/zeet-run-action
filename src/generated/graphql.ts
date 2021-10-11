import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  Time: Date;
  URL: string;
  UUID: any;
  Upload: any;
};

export type ApiKey = {
  __typename?: 'APIKey';
  id: Scalars['UUID'];
  token: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['Time'];
};

export type AwsAccount = {
  __typename?: 'AWSAccount';
  id: Scalars['UUID'];
  name: Scalars['String'];
  state: AwsAccountState;
  connected?: Maybe<Scalars['Boolean']>;
  accountID?: Maybe<Scalars['String']>;
  roleARN?: Maybe<Scalars['String']>;
  cloudFormationURL: Scalars['String'];
};

export enum AwsAccountState {
  Waiting = 'WAITING',
  Success = 'SUCCESS',
  Error = 'ERROR'
}

export type AwsLambda = {
  __typename?: 'AWSLambda';
  id: Scalars['UUID'];
  name: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  awsAccount?: Maybe<AwsAccount>;
  arn?: Maybe<Scalars['String']>;
  apiGatewayUrl?: Maybe<Scalars['String']>;
};

export type AwsLinks = {
  __typename?: 'AWSLinks';
  cloudformation?: Maybe<Scalars['String']>;
  lambda?: Maybe<Scalars['String']>;
  apiGateway?: Maybe<Scalars['String']>;
  cloudwatchMetrics?: Maybe<Scalars['String']>;
  cloudwatchLogs?: Maybe<Scalars['String']>;
  eks?: Maybe<Scalars['String']>;
};

export type AddAwsAccountInput = {
  userID: Scalars['UUID'];
  accountID: Scalars['String'];
};

export type AddClusterInput = {
  userID: Scalars['UUID'];
  kubeconfig?: Maybe<Scalars['Upload']>;
  awsAccountID?: Maybe<Scalars['UUID']>;
  gcpAccountID?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

export type AddGcpAccountInput = {
  userID: Scalars['UUID'];
  projectID: Scalars['String'];
  credentials: Scalars['Upload'];
};

export type AddProjectCollaboratorInput = {
  id: Scalars['ID'];
  user: Scalars['String'];
  role: ProjectCollaboratorRole;
};

export type AddRepoCustomDomainInput = {
  id: Scalars['UUID'];
  domain: Scalars['String'];
};

export type AddTeamMemberInput = {
  id: Scalars['UUID'];
  username?: Maybe<Scalars['String']>;
  userID?: Maybe<Scalars['UUID']>;
  role: TeamMemberRole;
};

export type Autoscaling = {
  __typename?: 'Autoscaling';
  minReplicas: Scalars['Int'];
  maxReplicas: Scalars['Int'];
  cpuTargetUtilization: Scalars['Float'];
};

export type AutoscalingInput = {
  minReplicas: Scalars['Int'];
  maxReplicas: Scalars['Int'];
  cpuTargetUtilization: Scalars['Float'];
};

export type Build = {
  __typename?: 'Build';
  id: Scalars['UUID'];
  state: BuildState;
  image?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  logs?: Maybe<Logs>;
  metrics?: Maybe<Array<Metric>>;
  backend?: Maybe<Scalars['String']>;
  buildID?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  updatedAt?: Maybe<Scalars['Time']>;
};


export type BuildMetricsArgs = {
  name: Scalars['String'];
};

export type BuildLogsInput = {
  deploymentID: Scalars['ID'];
  after?: Maybe<Scalars['String']>;
};

export type BuildMethod = {
  __typename?: 'BuildMethod';
  name: Scalars['String'];
  type: BuildType;
  dockerfilePath?: Maybe<Scalars['String']>;
  workingDirectory?: Maybe<Scalars['String']>;
  buildCommand?: Maybe<Scalars['String']>;
  staticPath?: Maybe<Scalars['String']>;
  runCommand?: Maybe<Scalars['String']>;
  releaseCommand?: Maybe<Scalars['String']>;
};

export enum BuildState {
  BuildStarting = 'BUILD_STARTING',
  BuildInProgress = 'BUILD_IN_PROGRESS',
  BuildFailed = 'BUILD_FAILED',
  BuildSucceeded = 'BUILD_SUCCEEDED'
}

export enum BuildType {
  Docker = 'DOCKER',
  Buildpacks = 'BUILDPACKS',
  Python = 'PYTHON',
  PythonDjango = 'PYTHON_DJANGO',
  Node = 'NODE',
  NodeStatic = 'NODE_STATIC',
  NodeNextjs = 'NODE_NEXTJS',
  Ubuntu = 'UBUNTU',
  ElixirPhoenix = 'ELIXIR_PHOENIX',
  GolangModules = 'GOLANG_MODULES',
  Herokuish = 'HEROKUISH'
}

export type CiSource = {
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: Scalars['String'];
  url: Scalars['URL'];
  description?: Maybe<Scalars['String']>;
};

export type Certificate = {
  __typename?: 'Certificate';
  dnsNames?: Maybe<Array<Scalars['String']>>;
  issuing: Scalars['Boolean'];
  ready: Scalars['Boolean'];
  challenges?: Maybe<Array<CertificateChallenge>>;
  createdAt: Scalars['Time'];
  updatedAt: Scalars['Time'];
};

export type CertificateChallenge = {
  __typename?: 'CertificateChallenge';
  dnsName: Scalars['String'];
  type: Scalars['String'];
  solver: Scalars['String'];
  wildcard: Scalars['Boolean'];
  statusReason: Scalars['String'];
  statusState: Scalars['String'];
};

export type CheckPriceInput = {
  teamId?: Maybe<Scalars['UUID']>;
  source?: Maybe<RepoSourceType>;
  installation?: Maybe<Scalars['ID']>;
  owner?: Maybe<Scalars['String']>;
  repo?: Maybe<Scalars['String']>;
  dockerImage?: Maybe<Scalars['String']>;
  volumes?: Maybe<Scalars['JSON']>;
  ports?: Maybe<Scalars['JSON']>;
  replication?: Maybe<Array<ReplicationInput>>;
  cpu?: Maybe<Scalars['String']>;
  gpu?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['String']>;
  dedicated?: Maybe<Scalars['Boolean']>;
};

export type CheckPriceOutput = {
  __typename?: 'CheckPriceOutput';
  total: PriceComponent;
  subTotal: PriceComponent;
  cpu: PriceComponent;
  memory: PriceComponent;
  gpu: PriceComponent;
  volumes: PriceComponent;
  bandwidth: PriceComponent;
  misc: PriceComponent;
  canBeFreeTier: Scalars['Boolean'];
};

export type CheckProjectNameInput = {
  name: Scalars['String'];
};

export enum CloudProvider {
  Unknown = 'UNKNOWN',
  Aws = 'AWS',
  Gpc = 'GPC'
}

export type Cluster = {
  __typename?: 'Cluster';
  id: Scalars['UUID'];
  name: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  state: ClusterState;
  private: Scalars['Boolean'];
  connected?: Maybe<Scalars['Boolean']>;
  domain?: Maybe<Scalars['String']>;
  cloudProvider?: Maybe<CloudProvider>;
  clusterProvider?: Maybe<ClusterProvider>;
  awsAccount?: Maybe<AwsAccount>;
  gcpAccount?: Maybe<GcpAccount>;
  prometheus?: Maybe<Prometheus>;
  grafana?: Maybe<Grafana>;
  ingressIP?: Maybe<Scalars['String']>;
  ingressDNS?: Maybe<Scalars['String']>;
  staticIPs?: Maybe<Array<Scalars['String']>>;
};

export enum ClusterProvider {
  Generic = 'GENERIC',
  Eks = 'EKS',
  Gke = 'GKE'
}

export enum ClusterState {
  Creating = 'CREATING',
  Healthy = 'HEALTHY',
  Error = 'ERROR'
}

export type Container = {
  __typename?: 'Container';
  id: Scalars['UUID'];
  status: ContainerStatus;
};

export type ContainerSpec = {
  __typename?: 'ContainerSpec';
  cpu?: Maybe<Scalars['Float']>;
  memory?: Maybe<Scalars['Float']>;
  gpu?: Maybe<Scalars['Float']>;
};

export type ContainerStatus = {
  __typename?: 'ContainerStatus';
  scheduled: Scalars['Boolean'];
  running: Scalars['Boolean'];
  ready: Scalars['Boolean'];
};

export type CreateApiKeyInput = {
  userID: Scalars['UUID'];
  name: Scalars['String'];
};

export type CreateClusterInput = {
  userID: Scalars['UUID'];
  awsAccountID?: Maybe<Scalars['UUID']>;
  gcpAccountID?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  region: Scalars['String'];
};

export type CreateDatadogIntegrationInput = {
  userID: Scalars['UUID'];
  apiKey: Scalars['String'];
};

export type CreateProjectDockerInput = {
  teamID?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  deployTarget?: Maybe<ProjectDeployInput>;
  dockerImage: Scalars['String'];
  envs?: Maybe<Array<EnvVarInput>>;
  ports?: Maybe<Scalars['JSON']>;
  replication?: Maybe<Array<ReplicationInput>>;
  volumes?: Maybe<Scalars['JSON']>;
  cpu?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['String']>;
  dedicated?: Maybe<Scalars['Boolean']>;
  gpu?: Maybe<Scalars['String']>;
};

export type CreateProjectFromProjectTemplateInput = {
  id: Scalars['ID'];
  deployTarget?: Maybe<ProjectDeployInput>;
  envs?: Maybe<Array<EnvVarInput>>;
};

export type CreateProjectGitInput = {
  userID?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  deployTarget?: Maybe<ProjectDeployInput>;
  url: Scalars['String'];
  envs?: Maybe<Array<EnvVarInput>>;
  ports?: Maybe<Array<PortInput>>;
  volumes?: Maybe<Array<VolumeInput>>;
  resources?: Maybe<ProjectResourcesInput>;
  build?: Maybe<ProjectBuildInput>;
  runCommand?: Maybe<Scalars['String']>;
};

export type CreateProjectHelmInput = {
  userID: Scalars['UUID'];
  name: Scalars['String'];
  deployTarget: ProjectDeployInput;
  repository: Scalars['String'];
  chart: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  releaseName: Scalars['String'];
  values?: Maybe<Scalars['String']>;
  valuesRef?: Maybe<Scalars['String']>;
  githubConnection?: Maybe<GithubConnectionInput>;
};

export type CreateProjectInput = {
  teamID?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  deployTarget?: Maybe<ProjectDeployInput>;
  installation: Scalars['ID'];
  owner: Scalars['String'];
  repo: Scalars['String'];
  envs?: Maybe<Array<EnvVarInput>>;
  ports?: Maybe<Scalars['JSON']>;
  replication?: Maybe<Array<ReplicationInput>>;
  volumes?: Maybe<Scalars['JSON']>;
  cpu?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['String']>;
  dedicated?: Maybe<Scalars['Boolean']>;
  gpu?: Maybe<Scalars['String']>;
  buildCommand?: Maybe<Scalars['String']>;
  buildType?: Maybe<Scalars['String']>;
  runCommand?: Maybe<Scalars['String']>;
  staticPath?: Maybe<Scalars['String']>;
};

export type CreateProjectsFromTemplateInput = {
  id: Scalars['ID'];
  userID?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<CreateProjectFromProjectTemplateInput>>;
};

export type CreateTeamInput = {
  name: Scalars['String'];
  login?: Maybe<Scalars['String']>;
  billingEmail: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  tier?: Maybe<PlanTier>;
  billingPeriod?: Maybe<PlanBillingPeriod>;
};

export type CreateWeb3ChallengeInput = {
  address: Scalars['String'];
};

export type CreateWebhookIntegrationInput = {
  userID: Scalars['UUID'];
  url: Scalars['String'];
};

export type CustomDomain = {
  __typename?: 'CustomDomain';
  id: Scalars['ID'];
  domain: Scalars['String'];
  cnameTargets?: Maybe<Array<Scalars['String']>>;
  ipTargets?: Maybe<Array<Scalars['String']>>;
  isApex: Scalars['Boolean'];
  certificate?: Maybe<Certificate>;
};

export type DatadogIntegration = Integration & {
  __typename?: 'DatadogIntegration';
  id: Scalars['UUID'];
  type: IntegrationType;
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  createdAt: Scalars['Time'];
  updatedAt: Scalars['Time'];
  apiKey?: Maybe<Scalars['String']>;
};

export type DeployStatus = {
  __typename?: 'DeployStatus';
  active: Scalars['Boolean'];
  publicIPs?: Maybe<Array<Scalars['String']>>;
  state: Scalars['String'];
  replicas: Scalars['Int'];
  runningReplicas: Scalars['Int'];
  readyReplicas: Scalars['Int'];
};

export enum DeployStrategy {
  Restart = 'RESTART',
  Rolling = 'ROLLING',
  Canary = 'CANARY',
  BlueGreen = 'BLUE_GREEN',
  RedBlack = 'RED_BLACK'
}

export enum DeployTarget {
  Kubernetes = 'KUBERNETES',
  Serverless = 'SERVERLESS'
}

export type Deployment = {
  __typename?: 'Deployment';
  id: Scalars['ID'];
  version: Scalars['String'];
  status: DeploymentStatus;
  endpoint?: Maybe<Scalars['String']>;
  endpoints?: Maybe<Array<Scalars['String']>>;
  privateEndpoint?: Maybe<Scalars['String']>;
  loadBalancers?: Maybe<Array<LoadBalancer>>;
  branch?: Maybe<Scalars['String']>;
  build?: Maybe<Build>;
  release?: Maybe<Release>;
  logs?: Maybe<Array<LogEntry>>;
  repo?: Maybe<Repo>;
  deployStatus?: Maybe<DeployStatus>;
  containers?: Maybe<Array<Container>>;
  metrics?: Maybe<Array<Metric>>;
  volumes?: Maybe<Array<Volume>>;
  awsLinks?: Maybe<AwsLinks>;
  gcpLinks?: Maybe<GcpLinks>;
  helmRelease?: Maybe<HelmRelease>;
  createdAt?: Maybe<Scalars['Time']>;
  updatedAt?: Maybe<Scalars['Time']>;
};


export type DeploymentMetricsArgs = {
  name: Scalars['String'];
};

export enum DeploymentStatus {
  BuildPending = 'BUILD_PENDING',
  BuildInProgress = 'BUILD_IN_PROGRESS',
  BuildFailed = 'BUILD_FAILED',
  BuildSucceeded = 'BUILD_SUCCEEDED',
  DeployInProgress = 'DEPLOY_IN_PROGRESS',
  DeployFailed = 'DEPLOY_FAILED',
  DeploySucceeded = 'DEPLOY_SUCCEEDED',
  DeployHealhty = 'DEPLOY_HEALHTY',
  DeployCrashing = 'DEPLOY_CRASHING',
  DeployStopped = 'DEPLOY_STOPPED'
}

export type DeploymentsInput = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  branch?: Maybe<Scalars['String']>;
};

export enum DisableReason {
  FreeTrialEnded = 'FREE_TRIAL_ENDED',
  UserAction = 'USER_ACTION',
  PaymentError = 'PAYMENT_ERROR',
  UserBanned = 'USER_BANNED'
}

export type DiscordIntegration = Integration & {
  __typename?: 'DiscordIntegration';
  id: Scalars['UUID'];
  type: IntegrationType;
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  createdAt: Scalars['Time'];
  updatedAt: Scalars['Time'];
};

export type DiscordWebhookIntegration = Integration & {
  __typename?: 'DiscordWebhookIntegration';
  id: Scalars['UUID'];
  type: IntegrationType;
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  createdAt: Scalars['Time'];
  updatedAt: Scalars['Time'];
  url?: Maybe<Scalars['String']>;
};

export type DockerImage = {
  __typename?: 'DockerImage';
  id: Scalars['ID'];
  tag: Scalars['String'];
  digest: Scalars['String'];
  repository: DockerRepository;
};

export type DockerRepository = CiSource & {
  __typename?: 'DockerRepository';
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: Scalars['String'];
  url: Scalars['URL'];
  isPrivate: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<DockerImage>>;
  image?: Maybe<DockerImage>;
  ports?: Maybe<Array<Port>>;
  volumes?: Maybe<Array<VolumeSpec>>;
};


export type DockerRepositoryImageArgs = {
  tag: Scalars['String'];
};

export type EnvVar = {
  __typename?: 'EnvVar';
  id: Scalars['ID'];
  name: Scalars['String'];
  value: Scalars['String'];
  visible: Scalars['Boolean'];
  createdAt: Scalars['Time'];
  updatedAt: Scalars['Time'];
};

export type EnvVarInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type EnvVarTemplate = {
  __typename?: 'EnvVarTemplate';
  name: Scalars['String'];
  description: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  generator?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  required: Scalars['Boolean'];
  locked: Scalars['Boolean'];
  hidden: Scalars['Boolean'];
  options?: Maybe<Array<Scalars['String']>>;
};

export enum ErrorCode {
  CardDeclined = 'CardDeclined',
  NoContainers = 'NoContainers',
  NeedAuth = 'NeedAuth',
  NeedPaymentDetails = 'NeedPaymentDetails',
  NoActiveBuildMethodError = 'NoActiveBuildMethodError',
  NoDockerfilePresent = 'NoDockerfilePresent',
  NoPortsExposed = 'NoPortsExposed',
  InternalServerError = 'InternalServerError'
}

export type GcpAccount = {
  __typename?: 'GCPAccount';
  id: Scalars['UUID'];
  name: Scalars['String'];
  state: GcpAccountState;
  connected?: Maybe<Scalars['Boolean']>;
  projectID?: Maybe<Scalars['String']>;
  clientEmail?: Maybe<Scalars['String']>;
};

export enum GcpAccountState {
  Waiting = 'WAITING',
  Success = 'SUCCESS',
  Error = 'ERROR'
}

export type GcpLinks = {
  __typename?: 'GCPLinks';
  deploymentManager?: Maybe<Scalars['String']>;
  cloudFunctions?: Maybe<Scalars['String']>;
  cloudFunctionsTrigger?: Maybe<Scalars['String']>;
  cloudMonitoring?: Maybe<Scalars['String']>;
  cloudLogging?: Maybe<Scalars['String']>;
  gke?: Maybe<Scalars['String']>;
};

export type GpuInput = {
  type?: Maybe<Scalars['String']>;
  count: Scalars['Int'];
};

export type GpuSpec = {
  __typename?: 'GPUSpec';
  type?: Maybe<Scalars['String']>;
  count: Scalars['Int'];
};

export type GitBranch = {
  __typename?: 'GitBranch';
  id: Scalars['ID'];
  name: Scalars['String'];
  commit: GitCommit;
};

export type GitCommit = {
  __typename?: 'GitCommit';
  id: Scalars['ID'];
  oid: Scalars['String'];
  abbreviatedOid: Scalars['String'];
  message: Scalars['String'];
  createdAt: Scalars['Time'];
};

export type GitHubInstallation = {
  __typename?: 'GitHubInstallation';
  id: Scalars['ID'];
  appID: Scalars['Int'];
  account: GitHubUser;
  repositorySelection: Scalars['String'];
  repositories?: Maybe<Array<GitHubRepository>>;
};

export type GitHubRepository = GitRepository & CiSource & {
  __typename?: 'GitHubRepository';
  id: Scalars['ID'];
  provider: GitProvider;
  providerID: Scalars['ID'];
  name: Scalars['String'];
  owner: Scalars['String'];
  url: Scalars['URL'];
  description?: Maybe<Scalars['String']>;
  defaultBranch?: Maybe<GitBranch>;
  branches?: Maybe<Array<GitBranch>>;
  isFork: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  updatedAt: Scalars['Time'];
  primaryLanguage?: Maybe<Scalars['String']>;
  buildMethodSuggestions?: Maybe<Array<BuildMethod>>;
  serverless?: Maybe<ServerlessConfig>;
  ports?: Maybe<Array<Port>>;
  volumes?: Maybe<Array<VolumeSpec>>;
};

export type GitHubUser = {
  __typename?: 'GitHubUser';
  id: Scalars['ID'];
  login: Scalars['String'];
  avatar: Scalars['URL'];
  type: GithubUserType;
};

export enum GitProvider {
  Github = 'GITHUB',
  Gitlab = 'GITLAB',
  Bitbucket = 'BITBUCKET'
}

export type GitRepository = {
  id: Scalars['ID'];
  provider: GitProvider;
  providerID: Scalars['ID'];
  name: Scalars['String'];
  owner: Scalars['String'];
  url: Scalars['URL'];
  description?: Maybe<Scalars['String']>;
  defaultBranch?: Maybe<GitBranch>;
  branches?: Maybe<Array<GitBranch>>;
  isFork: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  updatedAt: Scalars['Time'];
  primaryLanguage?: Maybe<Scalars['String']>;
};

export type GithubConnectionInput = {
  endpoint?: Maybe<Scalars['String']>;
  installation: Scalars['String'];
};

export enum GithubUserType {
  User = 'User',
  Organization = 'Organization'
}

export type Grafana = {
  __typename?: 'Grafana';
  url: Scalars['String'];
  user: Scalars['String'];
  password: Scalars['String'];
};

export type HttpProbe = {
  __typename?: 'HTTPProbe';
  host?: Maybe<Scalars['String']>;
  port: Scalars['String'];
  path?: Maybe<Scalars['String']>;
};

export type HelmChart = {
  __typename?: 'HelmChart';
  id: Scalars['String'];
  repository: HelmRepository;
  name?: Maybe<Scalars['String']>;
  normalized_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  logoImage?: Maybe<Scalars['String']>;
  stars?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['String']>;
  app_version?: Maybe<Scalars['String']>;
  deprecated?: Maybe<Scalars['Boolean']>;
};

export type HelmChartConnection = {
  __typename?: 'HelmChartConnection';
  totalCount: Scalars['Int'];
  nodes: Array<HelmChart>;
  pageInfo: PageInfo;
};

export type HelmRelease = {
  __typename?: 'HelmRelease';
  id: Scalars['String'];
  chart: HelmChart;
  version: Scalars['String'];
};

export type HelmRepository = {
  __typename?: 'HelmRepository';
  id: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization_name?: Maybe<Scalars['String']>;
  chart: HelmChart;
};


export type HelmRepositoryChartArgs = {
  name: Scalars['String'];
};

export type Integration = {
  id: Scalars['UUID'];
  type: IntegrationType;
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  createdAt: Scalars['Time'];
  updatedAt: Scalars['Time'];
};

export enum IntegrationType {
  Slack = 'SLACK',
  SlackWebhook = 'SLACK_WEBHOOK',
  Discord = 'DISCORD',
  DiscordWebhook = 'DISCORD_WEBHOOK',
  Datadog = 'DATADOG'
}

export type JobRun = {
  __typename?: 'JobRun';
  id: Scalars['UUID'];
  project: Repo;
  build?: Maybe<Build>;
  state: JobRunState;
  command: Scalars['String'];
  exitCode?: Maybe<Scalars['Int']>;
  logs?: Maybe<Logs>;
  createdAt?: Maybe<Scalars['Time']>;
};

export type JobRunConnection = {
  __typename?: 'JobRunConnection';
  totalCount: Scalars['Int'];
  nodes: Array<JobRun>;
  pageInfo: PageInfo;
};

export enum JobRunState {
  JobRunStarting = 'JOB_RUN_STARTING',
  JobRunRunning = 'JOB_RUN_RUNNING',
  JobRunFailed = 'JOB_RUN_FAILED',
  JobRunSucceeded = 'JOB_RUN_SUCCEEDED'
}

export type LoadBalancer = {
  __typename?: 'LoadBalancer';
  name: Scalars['String'];
  dns: Array<Scalars['String']>;
  ips: Array<Scalars['String']>;
  ports?: Maybe<Array<Scalars['Int']>>;
};

export type LogDnaIntegration = {
  __typename?: 'LogDNAIntegration';
  key: Scalars['String'];
};

export type LogDnaIntegrationInput = {
  key: Scalars['String'];
};

export type LogEntry = {
  __typename?: 'LogEntry';
  text: Scalars['String'];
  timestamp?: Maybe<Scalars['Time']>;
};

export type LogShipper = {
  __typename?: 'LogShipper';
  type: LogShipperType;
  logz?: Maybe<LogzIntegration>;
  syslog?: Maybe<SyslogIntegration>;
  logDNA?: Maybe<LogDnaIntegration>;
};

export type LogShipperInput = {
  type?: Maybe<LogShipperType>;
  logz?: Maybe<LogzIntegrationInput>;
  syslog?: Maybe<SyslogIntegrationInput>;
  logDNA?: Maybe<LogDnaIntegrationInput>;
};

export enum LogShipperType {
  Logzio = 'LOGZIO',
  Syslog = 'SYSLOG',
  Logdna = 'LOGDNA'
}

export type Logs = {
  __typename?: 'Logs';
  id: Scalars['ID'];
  cursor?: Maybe<Scalars['String']>;
  completed: Scalars['Boolean'];
  entries?: Maybe<Array<LogEntry>>;
};

export type LogzIntegration = {
  __typename?: 'LogzIntegration';
  token: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type LogzIntegrationInput = {
  token: Scalars['String'];
  url: Scalars['String'];
};

export type Metric = {
  __typename?: 'Metric';
  timestamp: Scalars['Time'];
  value?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAWSAccount: AwsAccount;
  addCluster: Cluster;
  addGCPAccount: GcpAccount;
  addProjectCollaborator: Repo;
  addRepoCustomDomain: Repo;
  addTeamMember: Team;
  buildRepo: Repo;
  copyEnvVars?: Maybe<Repo>;
  createAPIKey: ApiKey;
  createCluster: Cluster;
  createDatadogIntegration: DatadogIntegration;
  createDiscordWebhookIntegration: DiscordWebhookIntegration;
  createProject: Repo;
  createProjectDocker: Repo;
  createProjectGit: Repo;
  createProjectHelm: Repo;
  createProjectsFromTemplate: Array<Repo>;
  createSlackWebhookIntegration: SlackWebhookIntegration;
  createTeam: Team;
  createWeb3Challenge: Web3Challenge;
  deleteAPIKey: Scalars['Boolean'];
  deleteCluster: Scalars['Boolean'];
  deleteProjectBranch: Scalars['Boolean'];
  deleteRepo: Scalars['Boolean'];
  deleteTeam: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deployRepo: Repo;
  disableRepo: Repo;
  enableRepo: Repo;
  freezeRepo: Template;
  migrateGithubConnection: Repo;
  reissueCustomDomainCertificate: Repo;
  removeAWSAccount: Scalars['Boolean'];
  removeGCPAccount: Scalars['Boolean'];
  removeLogShipper: Scalars['Boolean'];
  removeProbe: Repo;
  removeProjectCollaborator: Repo;
  removeRepoCustomDomain: Repo;
  removeTeamMember: Team;
  removeUserIntegration: Scalars['Boolean'];
  repeatDeployment: Deployment;
  rollbackProjectToDeployment: Repo;
  runJob: JobRun;
  setPaymentMethod: User;
  setRepoEnvs: Repo;
  signInWithWeb3: UserAuth;
  transferProject: Repo;
  updateDiscordWebhookIntegration: DiscordWebhookIntegration;
  updateProject: Repo;
  updateSlackWebhookIntegration: SlackWebhookIntegration;
  updateTeam: Team;
  updateUser: User;
  uploadDockerCompose: Template;
  verifyAWSAccount: AwsAccount;
};


export type MutationAddAwsAccountArgs = {
  input: AddAwsAccountInput;
};


export type MutationAddClusterArgs = {
  input: AddClusterInput;
};


export type MutationAddGcpAccountArgs = {
  input: AddGcpAccountInput;
};


export type MutationAddProjectCollaboratorArgs = {
  input: AddProjectCollaboratorInput;
};


export type MutationAddRepoCustomDomainArgs = {
  input: AddRepoCustomDomainInput;
};


export type MutationAddTeamMemberArgs = {
  input: AddTeamMemberInput;
};


export type MutationBuildRepoArgs = {
  id: Scalars['ID'];
  branch?: Maybe<Scalars['String']>;
};


export type MutationCopyEnvVarsArgs = {
  from: Scalars['ID'];
  to: Scalars['ID'];
};


export type MutationCreateApiKeyArgs = {
  input?: Maybe<CreateApiKeyInput>;
};


export type MutationCreateClusterArgs = {
  input: CreateClusterInput;
};


export type MutationCreateDatadogIntegrationArgs = {
  input: CreateDatadogIntegrationInput;
};


export type MutationCreateDiscordWebhookIntegrationArgs = {
  input: CreateWebhookIntegrationInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateProjectDockerArgs = {
  input: CreateProjectDockerInput;
};


export type MutationCreateProjectGitArgs = {
  input: CreateProjectGitInput;
};


export type MutationCreateProjectHelmArgs = {
  input: CreateProjectHelmInput;
};


export type MutationCreateProjectsFromTemplateArgs = {
  input: CreateProjectsFromTemplateInput;
};


export type MutationCreateSlackWebhookIntegrationArgs = {
  input: CreateWebhookIntegrationInput;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationCreateWeb3ChallengeArgs = {
  input: CreateWeb3ChallengeInput;
};


export type MutationDeleteApiKeyArgs = {
  id: Scalars['UUID'];
};


export type MutationDeleteClusterArgs = {
  id: Scalars['UUID'];
};


export type MutationDeleteProjectBranchArgs = {
  id: Scalars['UUID'];
  branch: Scalars['String'];
};


export type MutationDeleteRepoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTeamArgs = {
  id: Scalars['UUID'];
};


export type MutationDeployRepoArgs = {
  id: Scalars['ID'];
};


export type MutationDisableRepoArgs = {
  id: Scalars['ID'];
};


export type MutationEnableRepoArgs = {
  id: Scalars['ID'];
};


export type MutationFreezeRepoArgs = {
  id: Scalars['UUID'];
};


export type MutationMigrateGithubConnectionArgs = {
  id: Scalars['UUID'];
  installationID: Scalars['String'];
};


export type MutationReissueCustomDomainCertificateArgs = {
  input: ReissueCustomDomainCertificateInput;
};


export type MutationRemoveAwsAccountArgs = {
  id: Scalars['UUID'];
};


export type MutationRemoveGcpAccountArgs = {
  id: Scalars['UUID'];
};


export type MutationRemoveLogShipperArgs = {
  id: Scalars['UUID'];
};


export type MutationRemoveProbeArgs = {
  input: RemoveProbeInput;
};


export type MutationRemoveProjectCollaboratorArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveRepoCustomDomainArgs = {
  input: RemoveRepoCustomDomainInput;
};


export type MutationRemoveTeamMemberArgs = {
  input: RemoveTeamMemberInput;
};


export type MutationRemoveUserIntegrationArgs = {
  input: RemoveUserIntegrationInput;
};


export type MutationRepeatDeploymentArgs = {
  id: Scalars['ID'];
};


export type MutationRollbackProjectToDeploymentArgs = {
  projectID: Scalars['UUID'];
  deploymentID: Scalars['UUID'];
};


export type MutationRunJobArgs = {
  input: RunJobInput;
};


export type MutationSetPaymentMethodArgs = {
  paymentMethod: Scalars['String'];
};


export type MutationSetRepoEnvsArgs = {
  input: SetRepoEnvsInput;
};


export type MutationSignInWithWeb3Args = {
  input: SignInWithWeb3Input;
};


export type MutationTransferProjectArgs = {
  input: TransferProjectInput;
};


export type MutationUpdateDiscordWebhookIntegrationArgs = {
  input: UpdateWebhookIntegrationInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateSlackWebhookIntegrationArgs = {
  input: UpdateWebhookIntegrationInput;
};


export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUploadDockerComposeArgs = {
  contents: Scalars['String'];
};


export type MutationVerifyAwsAccountArgs = {
  id: Scalars['UUID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type Plan = {
  __typename?: 'Plan';
  tier: PlanTier;
  billingPeriod?: Maybe<PlanBillingPeriod>;
  stripeSubscription?: Maybe<StripeSubscription>;
};

export enum PlanBillingPeriod {
  Monthly = 'MONTHLY',
  Annually = 'ANNUALLY'
}

export enum PlanTier {
  Legacy = 'LEGACY',
  Basic = 'BASIC',
  Pro = 'PRO'
}

export type Port = {
  __typename?: 'Port';
  port: Scalars['String'];
  protocol: Scalars['String'];
  public: Scalars['Boolean'];
  https: Scalars['Boolean'];
  loadBalancer: Scalars['Boolean'];
};

export type PortInput = {
  port: Scalars['String'];
  protocol: PortProtocol;
  public: Scalars['Boolean'];
  https: Scalars['Boolean'];
};

export enum PortProtocol {
  Tcp = 'tcp',
  Udp = 'udp'
}

export type PriceComponent = {
  __typename?: 'PriceComponent';
  cost: Scalars['Int'];
  explanation: Scalars['String'];
};

export type Prices = {
  __typename?: 'Prices';
  ramGB: Scalars['Float'];
  cpuCore: Scalars['Float'];
  dedicatedGPU: Scalars['Float'];
  dedicatedRamGB: Scalars['Float'];
  dedicatedCpuCore: Scalars['Float'];
  storageGB: Scalars['Float'];
};

export type Probe = {
  __typename?: 'Probe';
  command?: Maybe<Scalars['String']>;
  http?: Maybe<HttpProbe>;
  tcp?: Maybe<TcpProbe>;
  initialDelaySeconds: Scalars['Int'];
  periodSeconds: Scalars['Int'];
  successThreshold: Scalars['Int'];
  failureThreshold: Scalars['Int'];
  timeoutSeconds: Scalars['Int'];
};

export type ProbeInput = {
  command?: Maybe<Scalars['String']>;
  httpEndpoint?: Maybe<Scalars['String']>;
  tcpEndpoint?: Maybe<Scalars['String']>;
  initialDelaySeconds?: Maybe<Scalars['Int']>;
  periodSeconds?: Maybe<Scalars['Int']>;
  successThreshold?: Maybe<Scalars['Int']>;
  failureThreshold?: Maybe<Scalars['Int']>;
  timeoutSeconds?: Maybe<Scalars['Int']>;
};

export type ProjectBuildInput = {
  buildType?: Maybe<BuildType>;
  dockerfilePath?: Maybe<Scalars['String']>;
  workingDirectory?: Maybe<Scalars['String']>;
  buildCommand?: Maybe<Scalars['String']>;
  staticPath?: Maybe<Scalars['String']>;
};

export type ProjectCollaborator = {
  __typename?: 'ProjectCollaborator';
  id: Scalars['ID'];
  user: User;
  role: ProjectCollaboratorRole;
};

export type ProjectCollaboratorInvitation = {
  __typename?: 'ProjectCollaboratorInvitation';
  id: Scalars['ID'];
  email: Scalars['String'];
  link: Scalars['String'];
  role: ProjectCollaboratorRole;
  project: Repo;
};

export enum ProjectCollaboratorRole {
  Owner = 'OWNER',
  Editor = 'EDITOR',
  Viewer = 'VIEWER'
}

export type ProjectDeployInput = {
  deployTarget: DeployTarget;
  awsAccountID?: Maybe<Scalars['UUID']>;
  gcpAccountID?: Maybe<Scalars['UUID']>;
  clusterID?: Maybe<Scalars['UUID']>;
};

export type ProjectOwner = {
  id: Scalars['ID'];
  login: Scalars['String'];
  name: Scalars['String'];
  avatar: Scalars['URL'];
};

export type ProjectResourcesInput = {
  replication?: Maybe<Array<Maybe<ReplicationInput>>>;
  cpu?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['String']>;
  dedicated?: Maybe<Scalars['Boolean']>;
  gpu?: Maybe<Scalars['String']>;
};

export type ProjectTemplate = {
  __typename?: 'ProjectTemplate';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  source: RepoSource;
  cpu: Scalars['Float'];
  memory: Scalars['Float'];
  envs?: Maybe<Array<EnvVarTemplate>>;
  ports?: Maybe<Array<Port>>;
  replication?: Maybe<Array<Replication>>;
  volumes?: Maybe<Array<VolumeSpec>>;
  gpu?: Maybe<Scalars['Int']>;
  dedicated?: Maybe<Scalars['Boolean']>;
};

export type Prometheus = {
  __typename?: 'Prometheus';
  url: Scalars['String'];
  user: Scalars['String'];
  password: Scalars['String'];
};

export type PrometheusScrape = {
  __typename?: 'PrometheusScrape';
  path: Scalars['String'];
  port: Scalars['Int'];
};

export type PrometheusScrapeInput = {
  path: Scalars['String'];
  port: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  checkPrice: CheckPriceOutput;
  currentUser: User;
  dockerRepository?: Maybe<DockerRepository>;
  helmRepository: HelmRepository;
  prices: Prices;
  repo: Repo;
  searchHelmCharts: HelmChartConnection;
  template: Template;
  user: User;
};


export type QueryCheckPriceArgs = {
  input: CheckPriceInput;
};


export type QueryDockerRepositoryArgs = {
  image: Scalars['String'];
};


export type QueryHelmRepositoryArgs = {
  url: Scalars['String'];
};


export type QueryRepoArgs = {
  id: Scalars['UUID'];
};


export type QuerySearchHelmChartsArgs = {
  input: SearchHelmChartsInput;
};


export type QueryTemplateArgs = {
  id?: Maybe<Scalars['UUID']>;
  slug?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type ReissueCustomDomainCertificateInput = {
  id: Scalars['UUID'];
};

export type Release = {
  __typename?: 'Release';
  id: Scalars['UUID'];
  logs?: Maybe<Logs>;
};

export type RemoveProbeInput = {
  id: Scalars['ID'];
  readinessProbe?: Maybe<Scalars['Boolean']>;
  livenessProbe?: Maybe<Scalars['Boolean']>;
  startupProbe?: Maybe<Scalars['Boolean']>;
};

export type RemoveRepoCustomDomainInput = {
  id: Scalars['UUID'];
  domainID: Scalars['UUID'];
};

export type RemoveTeamMemberInput = {
  id: Scalars['UUID'];
  userID: Scalars['UUID'];
};

export type RemoveUserIntegrationInput = {
  userID: Scalars['UUID'];
  id: Scalars['UUID'];
};

export type Replication = {
  __typename?: 'Replication';
  region: Scalars['String'];
  replicas?: Maybe<Scalars['Int']>;
};

export type ReplicationInput = {
  region: Scalars['String'];
  replicas: Scalars['Int'];
};

export type Repo = {
  __typename?: 'Repo';
  id: Scalars['ID'];
  name: Scalars['String'];
  source: RepoSource;
  enabled: Scalars['Boolean'];
  namespace?: Maybe<Scalars['String']>;
  envs?: Maybe<Array<EnvVar>>;
  customDomains?: Maybe<Array<CustomDomain>>;
  replication?: Maybe<Array<Replication>>;
  ports?: Maybe<Array<Port>>;
  volumes?: Maybe<Array<VolumeSpec>>;
  manualDeploy?: Maybe<Scalars['Boolean']>;
  deployBranch?: Maybe<Scalars['Boolean']>;
  deployPullRequest?: Maybe<Scalars['Boolean']>;
  buildMethod?: Maybe<BuildMethod>;
  buildSpec?: Maybe<ContainerSpec>;
  deployStrategy?: Maybe<DeployStrategy>;
  deployTarget?: Maybe<DeployTarget>;
  readinessProbe?: Maybe<Probe>;
  livenessProbe?: Maybe<Probe>;
  startupProbe?: Maybe<Probe>;
  autoscaling?: Maybe<Autoscaling>;
  hostNetwork?: Maybe<Scalars['Boolean']>;
  staticIP?: Maybe<Scalars['Boolean']>;
  deployments?: Maybe<Array<Deployment>>;
  deployment?: Maybe<Deployment>;
  branches?: Maybe<Array<RepoBranch>>;
  deployedBranches?: Maybe<Array<RepoBranch>>;
  productionBranch?: Maybe<Scalars['String']>;
  productionDeployment?: Maybe<Deployment>;
  githubRepository?: Maybe<GitHubRepository>;
  helmChart?: Maybe<HelmChart>;
  helmValues?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  collaborators?: Maybe<Array<ProjectCollaborator>>;
  collaboratorInvitations?: Maybe<Array<ProjectCollaboratorInvitation>>;
  free?: Maybe<Scalars['Boolean']>;
  cpu?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['String']>;
  gpu?: Maybe<GpuSpec>;
  tpu?: Maybe<TpuSpec>;
  ephemeralStorage?: Maybe<Scalars['Float']>;
  dedicated?: Maybe<Scalars['Boolean']>;
  prometheusScrape?: Maybe<PrometheusScrape>;
  logShipper?: Maybe<LogShipper>;
  cluster?: Maybe<Cluster>;
  awsAccount?: Maybe<AwsAccount>;
  gcpAccount?: Maybe<GcpAccount>;
  disableReason?: Maybe<DisableReason>;
  deployService?: Maybe<Scalars['Boolean']>;
  cronJobSchedule?: Maybe<Scalars['String']>;
  jobRun: JobRun;
  jobRuns?: Maybe<JobRunConnection>;
  owner?: Maybe<User>;
  createdAt?: Maybe<Scalars['Time']>;
  updatedAt?: Maybe<Scalars['Time']>;
};


export type RepoDeploymentsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  input?: Maybe<DeploymentsInput>;
};


export type RepoDeploymentArgs = {
  id: Scalars['ID'];
};


export type RepoJobRunArgs = {
  id: Scalars['UUID'];
};

export type RepoBranch = {
  __typename?: 'RepoBranch';
  id: Scalars['ID'];
  name: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Time']>;
  deployments?: Maybe<Array<Deployment>>;
};

export type RepoSource = {
  __typename?: 'RepoSource';
  id: Scalars['ID'];
  type: RepoSourceType;
  name: Scalars['String'];
};

export enum RepoSourceType {
  Github = 'GITHUB',
  GithubPublic = 'GITHUB_PUBLIC',
  Gitlab = 'GITLAB',
  Git = 'GIT',
  Docker = 'DOCKER',
  DockerHub = 'DOCKER_HUB',
  Helm = 'HELM'
}

export type ReposInput = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['ID']>;
  showDisabled?: Maybe<Scalars['Boolean']>;
};

export type RunJobInput = {
  id: Scalars['UUID'];
  runCommand?: Maybe<Scalars['String']>;
  build?: Maybe<Scalars['Boolean']>;
};

export type SearchHelmChartsInput = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

export type ServerlessConfig = {
  __typename?: 'ServerlessConfig';
  service?: Maybe<Scalars['String']>;
  provider?: Maybe<ServerlessProvider>;
  functions?: Maybe<Array<ServerlessFunction>>;
  awsStackName?: Maybe<Scalars['String']>;
};

export type ServerlessFunction = {
  __typename?: 'ServerlessFunction';
  name: Scalars['String'];
  handler?: Maybe<Scalars['String']>;
};

export type ServerlessProvider = {
  __typename?: 'ServerlessProvider';
  name?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  stackName?: Maybe<Scalars['String']>;
};

export type SetRepoEnvsInput = {
  id: Scalars['ID'];
  envs: Array<EnvVarInput>;
};

export type SignInWithWeb3Input = {
  challengeId: Scalars['UUID'];
  signature: Scalars['String'];
};

export type SlackIntegration = Integration & {
  __typename?: 'SlackIntegration';
  id: Scalars['UUID'];
  type: IntegrationType;
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  createdAt: Scalars['Time'];
  updatedAt: Scalars['Time'];
};

export type SlackWebhookIntegration = Integration & {
  __typename?: 'SlackWebhookIntegration';
  id: Scalars['UUID'];
  type: IntegrationType;
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  createdAt: Scalars['Time'];
  updatedAt: Scalars['Time'];
  url?: Maybe<Scalars['String']>;
};

export type StripePrice = {
  __typename?: 'StripePrice';
  id: Scalars['ID'];
  product: StripeProduct;
  unitAmount: Scalars['Int'];
};

export type StripeProduct = {
  __typename?: 'StripeProduct';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type StripeSubscription = {
  __typename?: 'StripeSubscription';
  id: Scalars['ID'];
  status: StripeSubscriptionStatus;
  items: Array<StripeSubscriptionItem>;
  createdAt: Scalars['Time'];
};

export type StripeSubscriptionItem = {
  __typename?: 'StripeSubscriptionItem';
  id: Scalars['ID'];
  price: StripePrice;
  quantity: Scalars['Int'];
};

export enum StripeSubscriptionStatus {
  Active = 'active',
  PastDue = 'past_due',
  Unpaid = 'unpaid',
  Canceled = 'canceled',
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  Trialing = 'trialing'
}

export type StripeUser = {
  __typename?: 'StripeUser';
  id: Scalars['ID'];
  balance: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  repoUpdated: Repo;
  deploymentUpdated: Deployment;
  deploymentBuildLogsAdded: LogEntry;
};


export type SubscriptionRepoUpdatedArgs = {
  id: Scalars['UUID'];
};


export type SubscriptionDeploymentUpdatedArgs = {
  id: Scalars['ID'];
};


export type SubscriptionDeploymentBuildLogsAddedArgs = {
  input: BuildLogsInput;
};

export type SuggestProjectNameInput = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SuggestTemplateNameInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type SyslogIntegration = {
  __typename?: 'SyslogIntegration';
  host: Scalars['String'];
  port: Scalars['String'];
  mode: Scalars['String'];
};

export type SyslogIntegrationInput = {
  host: Scalars['String'];
  port: Scalars['String'];
  mode: Scalars['String'];
};

export type TcpProbe = {
  __typename?: 'TCPProbe';
  host?: Maybe<Scalars['String']>;
  port: Scalars['String'];
};

export type TpuInput = {
  type: Scalars['String'];
  cores: Scalars['Int'];
  tfVersion: Scalars['String'];
};

export type TpuSpec = {
  __typename?: 'TPUSpec';
  tfVersion: Scalars['String'];
  type: Scalars['String'];
  cores: Scalars['Int'];
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['UUID'];
  login: Scalars['String'];
  name: Scalars['String'];
  avatar: Scalars['URL'];
  user: User;
  members: Array<UserTeamEdge>;
  memberInvitations: Array<TeamMemberInvitation>;
  repos?: Maybe<Array<Repo>>;
  plan: Plan;
};


export type TeamReposArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  input?: Maybe<ReposInput>;
};

export type TeamMemberInvitation = {
  __typename?: 'TeamMemberInvitation';
  id: Scalars['UUID'];
  email: Scalars['String'];
  link: Scalars['String'];
  role: Scalars['String'];
  team: TeamMemberRole;
};

export enum TeamMemberRole {
  Owner = 'OWNER',
  Admin = 'ADMIN',
  Member = 'MEMBER'
}

export type Template = {
  __typename?: 'Template';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  homepageURL?: Maybe<Scalars['URL']>;
  repositoryURL?: Maybe<Scalars['URL']>;
  stats?: Maybe<TemplateStats>;
  projects: Array<ProjectTemplate>;
};

export type TemplateStats = {
  __typename?: 'TemplateStats';
  deploys: Scalars['Int'];
  forks: Scalars['Int'];
  stars: Scalars['Int'];
};

export type TransferProjectInput = {
  id: Scalars['ID'];
  to: Scalars['ID'];
};

export type UpdateProjectInput = {
  id: Scalars['ID'];
  volumes?: Maybe<Scalars['JSON']>;
  ports?: Maybe<Scalars['JSON']>;
  replication?: Maybe<Array<ReplicationInput>>;
  dockerImage?: Maybe<Scalars['String']>;
  buildType?: Maybe<Scalars['String']>;
  dockerfilePath?: Maybe<Scalars['String']>;
  workingDirectory?: Maybe<Scalars['String']>;
  buildCommand?: Maybe<Scalars['String']>;
  runCommand?: Maybe<Scalars['String']>;
  staticPath?: Maybe<Scalars['String']>;
  releaseCommand?: Maybe<Scalars['String']>;
  cpu?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['String']>;
  ephemeralStorage?: Maybe<Scalars['Float']>;
  gpu?: Maybe<GpuInput>;
  tpu?: Maybe<TpuInput>;
  dedicated?: Maybe<Scalars['Boolean']>;
  buildCPU?: Maybe<Scalars['Float']>;
  buildMemory?: Maybe<Scalars['Float']>;
  readinessProbe?: Maybe<ProbeInput>;
  livenessProbe?: Maybe<ProbeInput>;
  startupProbe?: Maybe<ProbeInput>;
  autoscaling?: Maybe<AutoscalingInput>;
  autoscalingDelete?: Maybe<Scalars['Boolean']>;
  preStopSleep?: Maybe<Scalars['Int']>;
  terminationGracePeriodSeconds?: Maybe<Scalars['Int']>;
  prometheusScrape?: Maybe<PrometheusScrapeInput>;
  hostNetwork?: Maybe<Scalars['Boolean']>;
  staticIP?: Maybe<Scalars['Boolean']>;
  iamPolicies?: Maybe<Array<Scalars['String']>>;
  manualDeploy?: Maybe<Scalars['Boolean']>;
  deployBranch?: Maybe<Scalars['Boolean']>;
  deployStrategy?: Maybe<DeployStrategy>;
  helmVersion?: Maybe<Scalars['String']>;
  helmValues?: Maybe<Scalars['String']>;
  logShipper?: Maybe<LogShipperInput>;
  deployService?: Maybe<Scalars['Boolean']>;
  cronJobSchedule?: Maybe<Scalars['String']>;
  productionBranch?: Maybe<Scalars['String']>;
};

export type UpdateTeamInput = {
  id: Scalars['UUID'];
  plan?: Maybe<UpdateTeamPlanInput>;
  paymentMethod?: Maybe<Scalars['String']>;
};

export type UpdateTeamPlanInput = {
  tier: PlanTier;
  billingPeriod: PlanBillingPeriod;
};

export type UpdateUserInput = {
  id: Scalars['UUID'];
  avatar?: Maybe<Scalars['URL']>;
  login?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type UpdateWebhookIntegrationInput = {
  userID: Scalars['UUID'];
  id: Scalars['UUID'];
  url: Scalars['String'];
};

export type User = ProjectOwner & {
  __typename?: 'User';
  id: Scalars['ID'];
  login: Scalars['String'];
  name: Scalars['String'];
  avatar: Scalars['URL'];
  isTeam?: Maybe<Scalars['Boolean']>;
  canDeploy?: Maybe<Scalars['Boolean']>;
  hasZeetCloud?: Maybe<Scalars['Boolean']>;
  hasOnboarded?: Maybe<Scalars['Boolean']>;
  advanced?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  billingEmail?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  hasPaymentMethod?: Maybe<Scalars['Boolean']>;
  needsPaymentMethod?: Maybe<Scalars['Boolean']>;
  billingURL?: Maybe<Scalars['String']>;
  stripe?: Maybe<StripeUser>;
  freeQuota?: Maybe<Scalars['Int']>;
  freeTrialEndsAt?: Maybe<Scalars['Time']>;
  paymentError?: Maybe<Scalars['String']>;
  paymentAuthorizationError?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<UserTeamEdge>>;
  team?: Maybe<Team>;
  repos?: Maybe<Array<Repo>>;
  repo?: Maybe<Repo>;
  deployment?: Maybe<Deployment>;
  githubInstallations?: Maybe<Array<GitHubInstallation>>;
  githubRepositories?: Maybe<Array<GitHubRepository>>;
  githubRepository?: Maybe<GitHubRepository>;
  dockerRepository?: Maybe<DockerRepository>;
  suggestProjectName: Scalars['String'];
  checkProjectName: Scalars['Boolean'];
  suggestTemplateName: Scalars['String'];
  awsAccounts?: Maybe<Array<AwsAccount>>;
  gcpAccounts?: Maybe<Array<GcpAccount>>;
  clusters?: Maybe<Array<Cluster>>;
  defaultCluster?: Maybe<Cluster>;
  apiKeys?: Maybe<Array<ApiKey>>;
  integrations?: Maybe<Array<Integration>>;
};


export type UserTeamArgs = {
  id: Scalars['ID'];
};


export type UserReposArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  input?: Maybe<ReposInput>;
};


export type UserRepoArgs = {
  id: Scalars['ID'];
};


export type UserDeploymentArgs = {
  id: Scalars['ID'];
};


export type UserGithubRepositoriesArgs = {
  installationID: Scalars['ID'];
};


export type UserGithubRepositoryArgs = {
  installationID: Scalars['ID'];
  owner: Scalars['String'];
  repo: Scalars['String'];
};


export type UserDockerRepositoryArgs = {
  image: Scalars['String'];
};


export type UserSuggestProjectNameArgs = {
  input: SuggestProjectNameInput;
};


export type UserCheckProjectNameArgs = {
  input: CheckProjectNameInput;
};


export type UserSuggestTemplateNameArgs = {
  input: SuggestTemplateNameInput;
};

export enum UserAction {
  ReadPrivate = 'READ_PRIVATE',
  EditBilling = 'EDIT_BILLING'
}

export type UserAuth = {
  __typename?: 'UserAuth';
  authToken: Scalars['String'];
};

export type UserTeamEdge = {
  __typename?: 'UserTeamEdge';
  id: Scalars['UUID'];
  user: User;
  team: Team;
  role: TeamMemberRole;
};

export type Volume = {
  __typename?: 'Volume';
  id: Scalars['ID'];
  spec: VolumeSpec;
};

export type VolumeInput = {
  mountPath: Scalars['String'];
  size: Scalars['Int'];
};

export type VolumeSpec = {
  __typename?: 'VolumeSpec';
  size: Scalars['Int'];
  mountPath: Scalars['String'];
};

export type Web3Challenge = {
  __typename?: 'Web3Challenge';
  id: Scalars['UUID'];
  address: Scalars['String'];
  nonce: Scalars['String'];
};

export type JobResultFragment = { __typename?: 'JobRun', id: any, state: JobRunState };

export type RunJobMutationVariables = Exact<{
  input: RunJobInput;
}>;


export type RunJobMutation = { __typename?: 'Mutation', runJob: { __typename?: 'JobRun', id: any, state: JobRunState } };

export type GetJobQueryVariables = Exact<{
  repo: Scalars['ID'];
  job: Scalars['UUID'];
}>;


export type GetJobQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, repo?: Maybe<{ __typename?: 'Repo', id: string, jobRun: { __typename?: 'JobRun', id: any, state: JobRunState } }> } };

export const JobResultFragmentDoc = gql`
    fragment JobResult on JobRun {
  id
  state
}
    `;
export const RunJobDocument = gql`
    mutation RunJob($input: RunJobInput!) {
  runJob(input: $input) {
    id
    ...JobResult
  }
}
    ${JobResultFragmentDoc}`;
export const GetJobDocument = gql`
    query GetJob($repo: ID!, $job: UUID!) {
  currentUser {
    id
    repo(id: $repo) {
      id
      jobRun(id: $job) {
        id
        ...JobResult
      }
    }
  }
}
    ${JobResultFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    RunJob(variables: RunJobMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RunJobMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RunJobMutation>(RunJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RunJob');
    },
    GetJob(variables: GetJobQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetJobQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetJobQuery>(GetJobDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetJob');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "CISource": [
      "DockerRepository",
      "GitHubRepository"
    ],
    "GitRepository": [
      "GitHubRepository"
    ],
    "Integration": [
      "DatadogIntegration",
      "DiscordIntegration",
      "DiscordWebhookIntegration",
      "SlackIntegration",
      "SlackWebhookIntegration"
    ],
    "ProjectOwner": [
      "User"
    ]
  }
};
      export default result;
    