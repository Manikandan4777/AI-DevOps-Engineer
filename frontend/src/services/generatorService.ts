import axios from "axios";

import type {
  DockerResponse,
  JenkinsResponse,
  KubernetesResponse,
  ComposeResponse,
  TerraformResponse,
} from "../types/generator";

const API_URL = "http://127.0.0.1:8000";

// =========================================
// Docker Generator
// =========================================

export async function generateDockerfile(): Promise<DockerResponse> {
  const response = await axios.get<DockerResponse>(
    `${API_URL}/generator/dockerfile`
  );

  return response.data;
}

// =========================================
// Jenkins Generator
// =========================================

export async function generateJenkinsfile(): Promise<JenkinsResponse> {
  const response = await axios.get<JenkinsResponse>(
    `${API_URL}/generator/jenkinsfile`
  );

  return response.data;
}

// =========================================
// Kubernetes Generator
// =========================================

export async function generateKubernetes(): Promise<KubernetesResponse> {
  const response = await axios.get<KubernetesResponse>(
    `${API_URL}/generator/kubernetes`
  );

  return response.data;
}

// =========================================
// Docker Compose Generator
// =========================================

export async function generateCompose(): Promise<ComposeResponse> {
  const response = await axios.get<ComposeResponse>(
    `${API_URL}/generator/compose`
  );

  return response.data;
}

// =========================================
// Terraform Generator
// =========================================

export async function generateTerraform(): Promise<TerraformResponse> {
  const response = await axios.get<TerraformResponse>(
    `${API_URL}/generator/terraform`
  );

  return response.data;
}