import os


def analyze_project(project_path: str):

    analysis = {
        "dockerfile": False,
        "docker_compose": False,
        "readme": False,
        "gitignore": False,
        "github_actions": False,
        "jenkins": False,
        "kubernetes": False,
        "terraform": False
    }

    for root, dirs, files in os.walk(project_path):

        # ---------- Docker ----------
        if "Dockerfile" in files:
            analysis["dockerfile"] = True

        if (
            "docker-compose.yml" in files
            or "docker-compose.yaml" in files
        ):
            analysis["docker_compose"] = True

        # ---------- README ----------
        if "README.md" in files or "readme.md" in files:
            analysis["readme"] = True

        # ---------- Git ----------
        if ".gitignore" in files:
            analysis["gitignore"] = True

        # ---------- Jenkins ----------
        if "Jenkinsfile" in files:
            analysis["jenkins"] = True

        # ---------- GitHub Actions ----------
        if ".github" in dirs:
            workflow_path = os.path.join(root, ".github", "workflows")

            if os.path.exists(workflow_path):
                analysis["github_actions"] = True

        # ---------- Kubernetes ----------
        if (
            "deployment.yaml" in files
            or "deployment.yml" in files
            or "service.yaml" in files
            or "service.yml" in files
        ):
            analysis["kubernetes"] = True

        # ---------- Terraform ----------
        for file in files:
            if file.endswith(".tf"):
                analysis["terraform"] = True

    return analysis