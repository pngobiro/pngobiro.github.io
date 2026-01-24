import os
import json
import re
from bs4 import BeautifulSoup

# Configuration from Prompt
SUBJECT_ID = "nck_chn_b_new_recent_nck_pastpapers__1769163718831"
TOPIC_ID = "78786996-79fc-4066-a3a0-810561db5a5a"
TOPIC_NAME = "NCK Prediction 2025"
BASE_DIR = "NCK"

def parse_html_to_quiz(file_path, subject_name, order_index):
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    questions = []
    question_cards = soup.find_all('div', class_='question-card')
    
    for idx, card in enumerate(question_cards):
        q_id = f"q{idx + 1}"
        
        # Extract Question Text
        q_text_div = card.find('div', class_='q-text')
        q_text = q_text_div.get_text(strip=True) if q_text_div else "Question text not found"
        
        # Extract Options
        options = []
        options_divs = card.find_all('div', class_='option')
        
        # Extract Correct Answer and Rationale
        answer_content = card.find('div', class_='answer-content')
        correct_letter = ""
        explanation = "Rationale not provided."
        
        if answer_content:
            # Look for "Correct Answer: X"
            # It might be in a <p> tag
            correct_p = answer_content.find('p')
            if correct_p:
                # Use regex to find single letter answer
                match = re.search(r"Correct Answer:?\s*([A-D])", correct_p.get_text(), re.IGNORECASE)
                if match:
                    correct_letter = match.group(1).upper()
            
            # Look for Rationale (usually the second paragraph)
            rationale_ps = answer_content.find_all('p')
            for p in rationale_ps:
                text = p.get_text(strip=True)
                if "Rationale" in text:
                    explanation = text.replace("Rationale:", "").strip()
                    # Remove the bold tag content if it was included in text
                    explanation = re.sub(r"^Rationale\s*", "", explanation, flags=re.IGNORECASE)
                    break
        
        # Map Options to Strict Object Format
        for opt_div in options_divs:
            opt_text_full = opt_div.get_text(strip=True)
            # Expecting "A. Option Text"
            match = re.match(r"^([A-D])\.?\s*(.*)", opt_text_full)
            if match:
                opt_char = match.group(1).lower() # id should be 'a', 'b', 'c', 'd'
                opt_content = match.group(2)
                is_correct = (match.group(1).upper() == correct_letter)
                
                options.append({
                    "id": opt_char,
                    "text": opt_content,
                    "isCorrect": is_correct
                })
        
        # Strict Question Object
        question_obj = {
            "id": q_id,
            "type": "multiple-choice", # HYPHENATED
            "question": q_text,
            "points": 10,
            "options": options,
            "explanation": explanation,
            "hint": None 
        }
        questions.append(question_obj)

    # Strict Quiz Object Construction
    # ID Format: [SubjectID]_[TopicID]_[OrderPadded]
    quiz_id = f"{SUBJECT_ID}_{TOPIC_ID}_{order_index:03d}"
    
    quiz = {
        "id": quiz_id,
        "title": f"Quiz {order_index}: {subject_name}",
        "subjectId": SUBJECT_ID,
        "topicId": TOPIC_ID,
        "topicName": TOPIC_NAME,
        "description": f"NCK 2025 Predictions for {subject_name} (Set 5). Contains {len(questions)} questions.",
        "isPaid": True,
        "timeLimit": len(questions), # 1 min per question
        "passingScore": 70,
        "version": 1,
        "order": order_index,
        "questions": questions
    }
    
    return quiz

def main():
    # Find all HTML files
    files = []
    for root, dirs, filenames in os.walk(BASE_DIR):
        for filename in filenames:
            if filename == "2025-set5.html":
                files.append(os.path.join(root, filename))
    
    # Sort files to ensure consistent ordering based on subject name
    files.sort()
    
    output_dir = "quizzes"
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    for idx, file_path in enumerate(files):
        # Extract Subject Name from path: NCK/[Subject]/PREDICTIONS/...
        parts = file_path.split(os.sep)
        # NCK is part 0, Subject is part 1
        subject_name_raw = parts[1]
        subject_name = subject_name_raw.replace("_", " ")
        
        print(f"Processing {subject_name} ({idx+1}/{len(files)})...")
        
        try:
            quiz_data = parse_html_to_quiz(file_path, subject_name, idx + 1)
            
            # Save JSON
            safe_name = subject_name_raw.lower()
            output_filename = f"{output_dir}/quiz_{idx+1}_{safe_name}.json"
            
            with open(output_filename, 'w', encoding='utf-8') as f:
                json.dump(quiz_data, f, indent=2)
                
            print(f"  -> Generated: {output_filename}")
            
        except Exception as e:
            print(f"  -> Error: {str(e)}")

if __name__ == "__main__":
    main()