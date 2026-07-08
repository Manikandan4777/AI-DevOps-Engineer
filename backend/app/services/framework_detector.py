import os


def detect_framework(project_path: str):

    files = []
    folders = []

    # Collect all file names and folder names
    for root, dirs, filenames in os.walk(project_path):

        folders.extend(dirs)
        files.extend(filenames)

    # --------------------------
    # React
    # --------------------------
    if "package.json" in files:

        package_path = os.path.join(project_path, "package.json")

        if os.path.exists(package_path):

            with open(package_path, "r", encoding="utf-8", errors="ignore") as f:

                data = f.read().lower()

                if "react" in data:
                    return "React"

                if "next" in data:
                    return "Next.js"

                if "vue" in data:
                    return "Vue.js"

                if "angular" in data:
                    return "Angular"

                if "express" in data:
                    return "Express.js"

                if "nestjs" in data:
                    return "NestJS"

    # --------------------------
    # Python
    # --------------------------
    if "requirements.txt" in files:

        req_path = os.path.join(project_path, "requirements.txt")

        if os.path.exists(req_path):

            with open(req_path, "r", encoding="utf-8", errors="ignore") as f:

                data = f.read().lower()

                if "fastapi" in data:
                    return "FastAPI"

                if "django" in data:
                    return "Django"

                if "flask" in data:
                    return "Flask"

    # --------------------------
    # Spring Boot
    # --------------------------
    if "pom.xml" in files:

        return "Spring Boot"

    # --------------------------
    # Maven
    # --------------------------
    if "build.gradle" in files:

        return "Gradle Project"

    # --------------------------
    # Laravel
    # --------------------------
    if "artisan" in files:

        return "Laravel"

    # --------------------------
    # ASP.NET
    # --------------------------
    for file in files:

        if file.endswith(".csproj"):

            return "ASP.NET"

    return "Unknown Framework"