import os
import json


def detect_framework(project_path: str):
    result = {
        "frontend": None,
        "backend": None,
        "language": None,
        "docker": False,
        "kubernetes": False
    }

    # --------------------
    # React / Vite / Node
    # --------------------
    package_json = os.path.join(project_path, "package.json")

    if os.path.exists(package_json):
        try:
            with open(package_json, "r") as f:
                package = json.load(f)

            dependencies = {
                **package.get("dependencies", {}),
                **package.get("devDependencies", {})
            }

            if "react" in dependencies:
                result["frontend"] = "React"

            if "vite" in dependencies:
                result["frontend"] = "React + Vite"

            result["language"] = "JavaScript / TypeScript"

        except Exception:
            pass

    # --------------------
    # FastAPI
    # --------------------
    requirements = os.path.join(project_path, "requirements.txt")

    if os.path.exists(requirements):
        with open(requirements, "r") as f:
            text = f.read().lower()

            if "fastapi" in text:
                result["backend"] = "FastAPI"

    # --------------------
    # Spring Boot
    # --------------------
    if os.path.exists(os.path.join(project_path, "pom.xml")):
        result["backend"] = "Spring Boot"

    # --------------------
    # Docker
    # --------------------
    if os.path.exists(os.path.join(project_path, "Dockerfile")):
        result["docker"] = True

    # --------------------
    # Kubernetes
    # --------------------
    for root, _, files in os.walk(project_path):
        for file in files:
            if file.endswith(".yaml") or file.endswith(".yml"):
                if "kubernetes" in file.lower():
                    result["kubernetes"] = True

    return result