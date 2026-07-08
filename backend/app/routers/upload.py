from fastapi import APIRouter, UploadFile, File
import shutil
import os

from app.services.extractor import extract_zip
from app.services.framework_detector import detect_framework
from app.services.analyzer import analyze_project
from app.services.recommender import generate_recommendations

router = APIRouter()

UPLOAD_FOLDER = "uploads"
EXTRACT_FOLDER = "extracted_projects"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(EXTRACT_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_project(file: UploadFile = File(...)):

    if not file.filename.endswith(".zip"):
        return {
            "status": "error",
            "message": "Only ZIP files are allowed."
        }

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    project_name = file.filename.replace(".zip", "")
    extract_path = os.path.join(EXTRACT_FOLDER, project_name)

    extract_result = extract_zip(file_path, extract_path)

    framework = detect_framework(extract_path)

    analysis = analyze_project(extract_path)

    recommendations = generate_recommendations(analysis)

    total_issues = sum(1 for value in analysis.values() if value is False)
    total_checks = len(analysis)

    health_score = round(
        ((total_checks - total_issues) / total_checks) * 100
    )

    return {
        "status": "success",
        "message": "Project uploaded and analyzed successfully.",
        "project": {
            "name": project_name,
            "filename": file.filename,
            "extract_location": extract_result["extract_path"]
        },
        "framework": framework,
        "analysis": analysis,
        "recommendations": recommendations,
        "summary": {
            "health_score": f"{health_score}%",
            "total_checks": total_checks,
            "issues_found": total_issues
        }
    }