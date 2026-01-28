import os
import json
import re
from bs4 import BeautifulSoup
import uuid

# Configuration
SUBJECT_ID = "dip_health_rec_pastpapers_archive_1769461208460"
TOPIC_ID = "17a63a18-3e69-490b-8328-39e274f7f6ef"
TOPIC_NAME = "Epidemiology past papers"

def generate_id(prefix="q"):
    return f"{prefix}_{uuid.uuid4().hex[:8]}"

def clean_text(text):
    if text:
        return re.sub(r'\s+', ' ', text).strip()
    return ""

def process_file(filepath):
    filename = os.path.basename(filepath)
    file_id = filename.replace('.html', '').replace('-', '_')
    
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Meta
    title_tag = soup.find('title')
    title = clean_text(title_tag.text) if title_tag else filename
    
    # Description
    desc_tag = soup.find('meta', attrs={'name': 'description'})
    description = desc_tag['content'] if desc_tag else f"Quiz from {filename}"

    quiz = {
        "id": f"{SUBJECT_ID}_{TOPIC_ID}_{file_id}",
        "title": title,
        "subjectId": SUBJECT_ID,
        "topicId": TOPIC_ID,
        "topicName": TOPIC_NAME,
        "description": description,
        "isPaid": True,
        "timeLimit": 120,
        "passingScore": 70,
        "version": 1,
        "order": 1,
        "questions": []
    }

    questions = []
    
    # Find sections - Updated to support both class names
    sections = soup.find_all('section', class_=['question-section', 'exam-section'])
    
    for section in sections:
        section_header = section.find('div', class_='section-header')
        section_title = clean_text(section_header.text) if section_header else ""
        
        default_points = 10
        if "Multiple Choice" in section_title:
            default_points = 10
        elif "Short Answer" in section_title or "Calculations" in section_title:
            default_points = 15
        elif "Long Answer" in section_title:
            default_points = 20

        cards = section.find_all('div', class_='question-card')
        
        for card in cards:
            q_header = card.find('div', class_='question-header')
            q_num = q_header.find('span', class_='q-number').text.strip('.') if q_header else ""
            q_text_div = card.find('div', class_='q-text')
            q_text = clean_text(q_text_div.text) if q_text_div else ""
            
            answer_box = card.find('div', class_='answer-box')
            answer_content = answer_box.find('div', class_='answer-content') if answer_box else None
            
            options_grid = card.find('div', class_='options-grid')
            
            q_obj = {
                "id": generate_id(f"q{q_num}"),
                "question": q_text,
                "points": default_points,
                "explanation": "See detailed answer below.",
                "hint": None
            }

            if options_grid:
                # Multiple Choice
                q_obj["type"] = "multiple-choice"
                options = []
                html_options = options_grid.find_all('div', class_='option')
                
                # Try to find correct answer letter - UPDATED REGEX to include a-f
                correct_letter = None
                if answer_content:
                    ans_text = answer_content.text
                    # Check for "Correct Answer: a, b, c" pattern first (multi-select hidden in MCQ)
                    if "Correct Answer: a, b" in ans_text or "Correct Answer: All" in ans_text:
                         # Treat as multiple select? Or keep MCQ with multiple correct?
                         # For now, let's just stick to single char extraction unless needed.
                         pass

                    # Look for single letter first
                    match = re.search(r'Correct Answer:?\s*([a-f])', ans_text, re.IGNORECASE)
                    if match:
                        correct_letter = match.group(1).lower()
                
                for opt in html_options:
                    opt_text = clean_text(opt.text)
                    # Extract ID (a., b. or a), b)) - UPDATED REGEX to include a-f
                    opt_id_match = re.match(r'^([a-f])[\.\)]', opt_text, re.IGNORECASE)
                    opt_id = opt_id_match.group(1).lower() if opt_id_match else "x"
                    
                    is_correct = (opt_id == correct_letter)
                    
                    options.append({
                        "id": opt_id,
                        "text": opt_text,
                        "isCorrect": is_correct
                    })
                
                q_obj["options"] = options
                
                if answer_content:
                    expl_soup = BeautifulSoup(str(answer_content), 'html.parser')
                    for p in expl_soup.find_all('p'):
                        if "Correct Answer" in p.text:
                            p.decompose()
                    q_obj["explanation"] = clean_text(expl_soup.text)

            else:
                # SAQ/LAQ/Multiple Select
                list_in_answer = answer_content.find(['ol', 'ul']) if answer_content else None
                
                if list_in_answer:
                    q_obj["type"] = "multiple-select"
                    q_obj["question"] += " (Select all that apply)"
                    options = []
                    for i, li in enumerate(list_in_answer.find_all('li')):
                        options.append({
                            "id": f"opt{i+1}",
                            "text": clean_text(li.text),
                            "isCorrect": True
                        })
                    q_obj["options"] = options
                    q_obj["partialCredit"] = True
                    if answer_content:
                        q_obj["explanation"] = clean_text(answer_content.text)
                else:
                    q_obj["type"] = "short-answer"
                    q_obj["acceptedAnswers"] = ["See explanation"]
                    if answer_content:
                        q_obj["explanation"] = clean_text(answer_content.text)

            questions.append(q_obj)

    quiz["questions"] = questions
    return quiz

def main():
    files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'index.html']
    processed_count = 0
    
    for filename in files:
        if "upgrading" in filename and "epidemiology" in filename and filename != "2019j-epidemiology.html":
             if filename == "2019j-upgrading.html":
                 continue

        print(f"Processing {filename}...")
        try:
            quiz_json = process_file(filename)
            processed_count += 1
            quiz_json["order"] = processed_count
            
            out_filename = filename.replace('.html', '.json')
            with open(out_filename, 'w', encoding='utf-8') as f:
                json.dump(quiz_json, f, indent=2)
            print(f"Created {out_filename}")
            
        except Exception as e:
            print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    main()