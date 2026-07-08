from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

from app.services.extractor import extract_zip
from app.services.framework_detector import detect_framework
from app.services.analyzer import analyze_project
from app.services.recommender import generate_recommendations
from app.services.health_calculator import calculate_health_score

app = FastAPI(
    title="AI DevOps Engineer API",
    version="1.0.0"
)

# ----------------------------------------------------
# CORS Configuration
# ----------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------------------------------------------
# Folder Configuration
# ----------------------------------------------------
UPLOAD_FOLDER = "uploads"
EXTRACT_FOLDER = "extracted_projects"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(EXTRACT_FOLDER, exist_ok=True)

# ----------------------------------------------------
# Home API
# ----------------------------------------------------
@app.get("/")
def home():
    return {
        "message": "Welcome to AI DevOps Engineer 🚀"
    }


# ----------------------------------------------------
# Health API
# ----------------------------------------------------
@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "AI DevOps Engineer API"
    }


# ----------------------------------------------------
# Upload + Analyze API
# ----------------------------------------------------
@app.post("/upload")
async def upload_project(file: UploadFile = File(...)):

    # Validate ZIP file
    if not file.filename.endswith(".zip"):
        return {
            "status": "error",
            "message": "Only ZIP files are allowed."
        }

    # Save uploaded ZIP
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Project name
    project_name = file.filename.replace(".zip", "")

    # Extract folder
    extract_path = os.path.join(EXTRACT_FOLDER, project_name)

    # Extract ZIP
    extract_result = extract_zip(file_path, extract_path)

    # Detect Framework
    framework = detect_framework(extract_path)

    # Analyze Project
    analysis = analyze_project(extract_path)

    # Generate Recommendations
    recommendations = generate_recommendations(analysis)

    # Calculate Health Score
    summary = calculate_health_score(analysis)

    # Final Response
    return {
        "status": "success",
        "message": "Project uploaded, analyzed and recommendations generated successfully.",

        "project": {
            "name": project_name,
            "filename": file.filename,
            "extract_location": extract_result["extract_path"]
        },

        "framework": framework,

        "analysis": analysis,

        "recommendations": recommendations,

        "summary": summary
    }