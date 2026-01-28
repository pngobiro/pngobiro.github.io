# StudoCU Course Analysis Report

**Generated:** January 24, 2026

## Summary

✅ **163 documents** analyzed and categorized by course  
✅ **17 identified courses** with standardized IDs  
✅ **39 documents downloaded** (23.9% match rate)

---

## Course Distribution

| Course ID | Course Name | Documents | Downloaded |
|-----------|------------|-----------|-----------|
| CHN | Community Health Nursing | 39 | 9 |
| RIS | Diploma in Radiography and Imaging Sciences | 25 | 8 |
| HRIT | Diploma in Health Records and Information Technology | 24 | 5 |
| KRCHN | Diploma in Kenya Registered Community Health Nursing | 21 | 6 |
| CM | Diploma in Clinical Medicine | 18 | 5 |
| OT | Diploma in Orthopaedic Technology | 9 | 6 |
| FQE | Final Qualifying Exam | 7 | 2 |
| FN | Fundamentals of Nursing | 6 | 1 |
| ND | Diploma in Nutrition and Dietetics | 2 | 0 |
| EMT | Diploma in Emergency Medical Technician | 1 | 1 |
| HSM | Health System Management | 1 | 0 |
| NM | Nursing & Midwifery | 1 | 0 |
| PNC | Pediatric Nursing Care | 1 | 0 |
| DT | Diploma in Dental Technology | 1 | 0 |
| FP | Fundamentals of Psychiatry | 1 | 0 |
| MNH | Maternal and Newborn Health | 1 | 0 |
| HP | Human Psychology | 1 | 0 |

---

## Document Fields

Each document now includes:

```json
{
  "rank": 1,
  "title": "Document Title",
  "pages": null,
  "type": null,
  "course": null,
  "academic_year": null,
  "rating": null,
  "url": "https://studocu.com/...",
  "document_id": 140069803,
  "downloaded": true,
  "download_info": {
    "filename": "140069803-nursing-fqe-2023.pdf",
    "path": "./downloads/140069803-nursing-fqe-2023.pdf",
    "size": 1024,
    "modified": "2026-01-23T19:00:00"
  },
  "course_id": "KRCHN",
  "course_name": "Diploma in Kenya Registered Community Health Nursing",
  "course_slug": "kenya-registered-community-health-nursing",
  "course_category": "Nursing"
}
```

---

## Files Generated

- **studocu_documents.json** - Updated with course information and download tracking
- **course_index.json** - Organized index of all courses with their documents
- **analyze_courses.py** - Script to analyze and extract course information
- **check_downloads.py** - Script to track downloaded documents

---

## Usage Examples

### View all documents for a specific course:
```python
import json
with open('course_index.json') as f:
    courses = json.load(f)
    
krchn_docs = courses['KRCHN']['documents']
print(f"KRCHN has {len(krchn_docs)} documents")
for doc in krchn_docs:
    print(f"  - {doc['title']}")
```

### Filter documents by course category:
```python
import json
with open('studocu_documents.json') as f:
    data = json.load(f)
    
nursing_docs = [d for d in data['documents'] if d.get('course_category') == 'Nursing']
print(f"Found {len(nursing_docs)} nursing documents")
```

### Find not-downloaded documents for a course:
```python
import json
with open('studocu_documents.json') as f:
    data = json.load(f)
    
not_downloaded = [d for d in data['documents'] 
                  if d.get('course_id') == 'KRCHN' and not d.get('downloaded', False)]
print(f"Need to download {len(not_downloaded)} KRCHN documents")
```

---

## Course Categories

- **Nursing**: KRCHN, CHN, NM, FN, PNC, MNH
- **Clinical**: CM, OT, FP
- **Medical Imaging**: RIS
- **Health IT**: HRIT
- **Allied Health**: DT, ND, EMT
- **Management**: HSM
- **General**: FQE, HP

---

## Next Steps

1. Run `python3 check_downloads.py --report` to update download tracking
2. Run `python3 analyze_courses.py --index` to regenerate course index
3. Use course IDs to organize and filter documents by program
4. Download remaining documents in each course
