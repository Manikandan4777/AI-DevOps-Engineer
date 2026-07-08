def generate_recommendations(analysis):

    recommendations = []

    if not analysis["dockerfile"]:
        recommendations.append(
            "Create a Dockerfile for containerization."
        )

    if not analysis["docker_compose"]:
        recommendations.append(
            "Add docker-compose.yml for local multi-container development."
        )

    if not analysis["readme"]:
        recommendations.append(
            "Create a README.md with project documentation."
        )

    if not analysis["gitignore"]:
        recommendations.append(
            "Add a .gitignore file."
        )

    if not analysis["github_actions"]:
        recommendations.append(
            "Set up GitHub Actions for CI/CD."
        )

    if not analysis["jenkins"]:
        recommendations.append(
            "Add a Jenkinsfile for Jenkins CI/CD."
        )

    if not analysis["kubernetes"]:
        recommendations.append(
            "Create Kubernetes deployment and service manifests."
        )

    if not analysis["terraform"]:
        recommendations.append(
            "Use Terraform for Infrastructure as Code."
        )

    return recommendations