export interface AnalysisResponse {
  status: string;
  message: string;

  project: {
    name: string;
    filename: string;
    extract_location: string;
  };

  framework: string;

  analysis: Record<string, boolean>;

  recommendations: string[];

  summary: {
    health_score: string;
    total_checks: number;
    passed_checks: number;
    issues_found: number;
    devops_maturity: string;
  };
}