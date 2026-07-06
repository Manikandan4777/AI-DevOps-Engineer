import zipfile
import os


def extract_zip(zip_path: str, extract_to: str):
    """
    Extract ZIP file into a destination folder.
    """

    os.makedirs(extract_to, exist_ok=True)

    with zipfile.ZipFile(zip_path, "r") as zip_ref:
        zip_ref.extractall(extract_to)

    return {
        "status": "success",
        "extract_path": extract_to
    }