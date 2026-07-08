"""
Health Score Calculator Service

Calculates:
- Health Score
- Total Checks
- Passed Checks
- Issues Found
- DevOps Maturity Level
"""


def calculate_health_score(analysis: dict):
    """
    Calculate the overall DevOps health score of a project.

    Args:
        analysis (dict): Dictionary returned by analyzer.py

    Returns:
        dict: Summary containing health score and maturity level.
    """

    # Handle empty analysis safely
    if not analysis:
        return {
            "health_score": "0%",
            "total_checks": 0,
            "passed_checks": 0,
            "issues_found": 0,
            "devops_maturity": "Unknown"
        }

    # Total checks performed
    total_checks = len(analysis)

    # Count passed checks (True values)
    passed_checks = sum(
        1 for value in analysis.values() if value is True
    )

    # Count failed checks
    issues_found = total_checks - passed_checks

    # Calculate percentage
    health_score = round(
        (passed_checks / total_checks) * 100
    )

    # Determine maturity level
    if health_score >= 90:
        maturity = "Excellent"

    elif health_score >= 75:
        maturity = "Advanced"

    elif health_score >= 50:
        maturity = "Intermediate"

    elif health_score >= 25:
        maturity = "Beginner"

    else:
        maturity = "Needs Improvement"

    # Return final summary
    return {
        "health_score": f"{health_score}%",
        "total_checks": total_checks,
        "passed_checks": passed_checks,
        "issues_found": issues_found,
        "devops_maturity": maturity
    }