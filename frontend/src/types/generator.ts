export interface DockerResponse {
  success: boolean;
  framework: string;
  dockerfile: string;
}

export interface JenkinsResponse {
  success: boolean;
  framework: string;
  jenkinsfile: string;
}

export interface KubernetesResponse {
  success: boolean;
  framework: string;
  deployment: string;
  service: string;
  ingress: string;
}

export interface ComposeResponse {
  success: boolean;
  framework: string;
  compose: string;
}

export interface TerraformResponse {
  success: boolean;
  framework: string;
  provider: string;
  main: string;
  variables: string;
  outputs: string;
}