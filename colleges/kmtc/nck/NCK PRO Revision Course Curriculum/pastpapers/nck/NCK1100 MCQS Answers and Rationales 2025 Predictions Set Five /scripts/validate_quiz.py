import json
import sys
import os

def validate_quiz(file_path):
    print(f"Validating {file_path}...")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        print(f"❌ Error loading JSON: {str(e)}")
        return False

    errors = []

    # 1. Validate Root Fields
    required_root_fields = [
        "id", "title", "subjectId", "topicId", "topicName", 
        "description", "isPaid", "timeLimit", "passingScore", 
        "version", "order", "questions"
    ]
    
    for field in required_root_fields:
        if field not in data:
            errors.append(f"Missing root field: {field}")

    # Check specific root values if needed (e.g. passingScore)
    if "passingScore" in data and not isinstance(data["passingScore"], (int, float)):
         errors.append("passingScore must be a number")

    # 2. Validate Questions
    if "questions" in data:
        if not isinstance(data["questions"], list):
            errors.append("'questions' must be a list")
        else:
            for idx, q in enumerate(data["questions"]):
                q_id = q.get("id", f"index_{idx}")
                
                # Required Question Fields
                req_q_fields = ["id", "type", "question", "points", "explanation"]
                for field in req_q_fields:
                    if field not in q:
                        errors.append(f"Question {q_id}: Missing field '{field}'")

                # Validate Types (Hyphens not underscores)
                valid_types = [
                    "multiple-choice", "true-false", "fill-blank", 
                    "multiple-select", "short-answer", "matching", "ordering"
                ]
                q_type = q.get("type")
                if q_type and q_type not in valid_types:
                    errors.append(f"Question {q_id}: Invalid type '{q_type}'. Use hyphens (e.g., multiple-choice).")

                # Validate Options (Object format)
                if "options" in q:
                    if not isinstance(q["options"], list):
                        errors.append(f"Question {q_id}: 'options' must be a list")
                    else:
                        for opt_idx, opt in enumerate(q["options"]):
                            if not isinstance(opt, dict):
                                errors.append(f"Question {q_id}, Option {opt_idx}: Must be an object {{id, text, isCorrect}}")
                            else:
                                if "id" not in opt or "text" not in opt or "isCorrect" not in opt:
                                    errors.append(f"Question {q_id}, Option {opt_idx}: Missing required option fields (id, text, isCorrect)")

                # Validate Points
                if "points" in q and q["points"] not in [10, 15, 20]:
                    # Warning only, as strictly it says 10, 15, 20 but maybe others allowed? 
                    # Prompt says: "REQUIRED - 10, 15, or 20"
                    errors.append(f"Question {q_id}: Invalid points {q.get('points')}. Must be 10, 15, or 20.")

    if errors:
        print("❌ Validation Failed:")
        for err in errors:
            print(f"  - {err}")
        return False
    else:
        print("✅ Validation Passed!")
        return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 validate_quiz.py <path_to_json>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    if os.path.exists(file_path):
        success = validate_quiz(file_path)
        if not success:
            sys.exit(1)
    else:
        print(f"File not found: {file_path}")
        sys.exit(1)
