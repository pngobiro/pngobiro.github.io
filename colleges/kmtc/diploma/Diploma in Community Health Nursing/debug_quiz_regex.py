import re

def test_extraction():
    full_text = "Correct Answer: b) SDG No. 3 Explanation: SDG 3 is titled..."
    
    print(f"Full text: '{full_text}'")
    
    # Current Regex in generate_quizzes.py
    # r'Correct Answer:?\s*([A-Za-z0-9\.\s]+)'
    # Note: It misses ')' and everything after it if ')' is present?
    
    pattern = r'Correct Answer:?\s*([A-Za-z0-9\.\s]+)'
    match = re.search(pattern, full_text)
    
    if match:
        captured = match.group(1).strip()
        print(f"Captured correct_answer_text: '{captured}'")
        
        # Now test the ID extraction from this captured text
        # pattern: r'^([A-D])[\.\)\s]'
        id_match = re.match(r'^([A-D])[\.\)\s]', captured, re.IGNORECASE)
        if id_match:
            print(f"Extracted ID: '{id_match.group(1).lower()}'")
        else:
            print("FAILED to extract ID from captured text")
    else:
        print("Regex failed to match 'Correct Answer:...' pattern")

    print("-" * 20)
    
    # Proposed fix: Allow ')' and other chars in the capture group or just capture everything until 'Explanation:'
    # Better pattern: capture until 'Explanation' or end of line?
    # Or just add ')' to the char class?
    
    new_pattern = r'Correct Answer:?\s*([A-Za-z0-9\.\)\s]+)'
    match_new = re.search(new_pattern, full_text)
    if match_new:
        captured_new = match_new.group(1).strip()
        print(f"New Captured text: '{captured_new}'")
        id_match_new = re.match(r'^([A-D])[\.\)\s]', captured_new, re.IGNORECASE)
        if id_match_new:
             print(f"New Extracted ID: '{id_match_new.group(1).lower()}'")

test_extraction()
