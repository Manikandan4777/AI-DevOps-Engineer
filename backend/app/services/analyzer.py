import os

def analyze_project(project_path: str):

    report = {
        "Dockerfile": False,
        "docker-compose": False,
        "Jenkinsfile": False,
        "README": False,
        ".gitignore": False,
        "requirements.txt": False,
        "package.json": False,
        "pom.xml": False,
        "GitHub Actions": False,
        "Kubernetes": False
    }

    for root, dirs, files in os.walk(project_path):

        for file in files:

            if file == "Dockerfile":
                report["Dockerfile"] = True

            elif file == "docker-compose.yml":
                report["docker-compose"] = True

            elif file == "Jenkinsfile":
                report["Jenkinsfile"] = True

            elif file == "README.md":
                report["README"] = True

            elif file == ".gitignore":
                report[".gitignore"] = True

            elif file == "requirements.txt":
                report["requirements.txt"] = True

            elif file == "package.json":
                report["package.json"] = True

            elif file == "pom.xml":
                report["pom.xml"] = True

            elif ".github" in root and "workflows" in root:
                report["GitHub Actions"] = True

            elif file.endswith(".yaml") or file.endswith(".yml"):

                if "kubernetes" in file.lower():

                    report["Kubernetes"] = True

    return report