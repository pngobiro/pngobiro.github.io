#!/usr/bin/env python3
import os
import re
import json
import glob
from bs4 import BeautifulSoup

def process_subject_directory(root_dir):
    # Walk through all directories looking for 'exams/KMTC/1.2'
    for dirpath, dirnames, filenames in os.walk(root_dir):
        if dirpath.endswith(os.path.join("exams", "KMTC", "1.2")):
            print(f"Processing directory: {dirpath}")
            process_folder(dirpath)

def process_folder(folder_path):
    # 1. Find the prompt file
    prompt_files = glob.glob(os.path.join(folder_path, "quiz_prompt_*.md"))
    if not prompt_files:
        print(f"  No quiz prompt found in {folder_path}, skipping.")
        return
    
    prompt_file = prompt_files[0]
    topic_id = extract_topic_id_from_filename(os.path.basename(prompt_file))
    subject_id = extract_subject_id_from_content(prompt_file)
    topic_name = extract_topic_name_from_content(prompt_file)

    if not subject_id:
        print(f"  Could not extract subjectId from {prompt_file}")
        return

    # 2. Find HTML files
    html_files = [f for f in os.listdir(folder_path) if f.endswith(".html") and f != "index.html"]
    
    for i, html_file in enumerate(html_files):
        full_path = os.path.join(folder_path, html_file)
        print(f"  Processing file: {html_file}")
        
        quiz_json = convert_html_to_json(full_path, subject_id, topic_id, topic_name, i + 1)
        
        if quiz_json:
            json_filename = os.path.splitext(html_file)[0] + ".json"
            json_path = os.path.join(folder_path, json_filename)
            with open(json_path, 'w') as f:
                json.dump(quiz_json, f, indent=2)
            print(f"    Generated: {json_filename}")

def extract_topic_id_from_filename(filename):
    # filename format: quiz_prompt_UUID.md
    match = re.search(r'quiz_prompt_(.+)\.md', filename)
    if match:
        return match.group(1)
    return "unknown_topic"

def extract_subject_id_from_content(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
        # Look for "subjectId": "value" or similar in the example JSON in the prompt
        # The prompt has: "subjectId": "dip_community_health_nursing_kmtc_1_2__pastpapers_collection_1769687069491"
        match = re.search(r'"subjectId":\s*"([^"]+)"', content)
        if match:
            return match.group(1)
    return None

def extract_topic_name_from_content(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
        match = re.search(r'"topicName":\s*"([^"]+)"', content)
        if match:
            return match.group(1)
    return "Unknown Topic"

def convert_html_to_json(html_path, subject_id, topic_id, topic_name, order):
    with open(html_path, 'r') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Extract Title
    title_tag = soup.find('h1')
    title = title_tag.get_text(strip=True) if title_tag else "Untitled Quiz"
    
    # Extract Subtitle/Description
    subtitle_tag = soup.find('p', class_='subtitle')
    description = subtitle_tag.get_text(strip=True) if subtitle_tag else ""

    # Questions extraction
    questions = []
    question_cards = soup.find_all('div', class_='question-card')
    
    for idx, card in enumerate(question_cards):
        q_obj = parse_question_card(card, idx + 1)
        if q_obj:
            questions.append(q_obj)

    if not questions:
        print("    No questions found.")
        return None

    # Construct final JSON
    quiz_id = f"{subject_id}_{topic_id}_{str(order).zfill(3)}"
    
    quiz_data = {
        "id": quiz_id,
        "title": f"Quiz {order}: {title}",
        "subjectId": subject_id,
        "topicId": topic_id,
        "topicName": topic_name,
        "description": description,
        "isPaid": True,
        "timeLimit": len(questions) * 2, # 2 mins per question estimate
        "passingScore": 70,
        "version": 1,
        "order": order,
        "questions": questions
    }
    
    return quiz_data

def parse_question_card(card, index):
    # Question Text
    q_text_div = card.find('div', class_='q-text')
    if not q_text_div:
        return None
    
    # Clean up question text (remove numbering if present inside text, though usually separate)
    q_text = q_text_div.get_text(strip=True)
    
    # Check for options
    options_grid = card.find('div', class_='options-grid')
    
    # Explanation / Answer
    answer_content = card.find('div', class_='answer-content')
    explanation_text = ""
    correct_answer_text = ""
    
    if answer_content:
        # Extract text from the entire div, not just paragraphs, to catch lists etc.
        full_text = answer_content.get_text(separator=' ', strip=True)
        
        # Simple extraction
        explanation_text = full_text
        
        # Try to find specific correct answer line
        # Capture everything until "Explanation:" or end of text
        correct_match = re.search(r'Correct Answer:?\s*(.+?)(?=\s*Explanation:|$)', full_text, re.IGNORECASE)
        if correct_match:
            correct_answer_text = correct_match.group(1).strip()
            # Remove "Correct Answer: ..." from explanation to clean it up slightly, optional
            # explanation_text = full_text.replace(correct_match.group(0), "").strip()

    q_id = f"q{index}"
    
    if options_grid:
        # MCQ
        type_ = "multiple-choice"
        points = 10
        options = []
        html_options = options_grid.find_all('div', class_='option')
        
        # Determine correct option ID from correct_answer_text
        # expected format: "A. Some text" or "a) Some text" -> correct ID "a"
        correct_opt_id = None
        if correct_answer_text:
            # Look for leading letter followed by dot, parenthesis, or whitespace
            match = re.match(r'^([A-D])[\.\)\s]', correct_answer_text, re.IGNORECASE)
            if match:
                correct_opt_id = match.group(1).lower()
        
        for i, opt in enumerate(html_options):
            opt_text = opt.get_text(strip=True)
            # Assume options are A, B, C, D ordered
            # Extract ID from text "A. Text" or "a) Text" -> "a"
            opt_id_match = re.match(r'^([A-D])[\.\)\s]', opt_text, re.IGNORECASE)
            
            if opt_id_match:
                opt_id = opt_id_match.group(1).lower()
                clean_text = re.sub(r'^([A-D])[\.\)\s]+', '', opt_text).strip()
            else:
                # Fallback if no letters
                opt_ids = ['a', 'b', 'c', 'd', 'e', 'f']
                opt_id = opt_ids[i] if i < len(opt_ids) else f"opt{i}"
                clean_text = opt_text

            is_correct = False
            if correct_opt_id:
                if opt_id == correct_opt_id:
                    is_correct = True
            
            options.append({
                "id": opt_id,
                "text": clean_text,
                "isCorrect": is_correct
            })
            
        return {
            "id": q_id,
            "type": type_,
            "question": q_text,
            "points": points,
            "options": options,
            "explanation": explanation_text,
            "hint": None
        }
    
    else:
        # SAQ / LAQ
        # Treat as short-answer but without accepted answers (manual review needed ideally)
        type_ = "short-answer"
        points = 20 # Higher points for open ended
        
        # We don't have accepted answers easily
        accepted_answers = [] 
        
        return {
            "id": q_id,
            "type": type_,
            "question": q_text,
            "points": points,
            "acceptedAnswers": accepted_answers,
            "caseSensitive": False,
            "partialMatch": False,
            "explanation": explanation_text,
            "hint": None
        }

if __name__ == "__main__":
    current_dir = os.getcwd()
    print(f"Starting quiz generation in: {current_dir}")
    process_subject_directory(current_dir)
    print("Done.")
